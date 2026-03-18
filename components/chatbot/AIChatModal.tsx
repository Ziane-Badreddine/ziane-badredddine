"use client";

import {
  Bot,
  Loader2,
  MessageCircle,
  Send,
  AlertCircleIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import TextareaAutosize from "react-textarea-autosize";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";
import { useChat, fetchServerSentEvents } from "@tanstack/ai-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { markdownComponents } from "./ChatMessage";
import { useHotkey, useHotkeySequence } from "@tanstack/react-hotkeys";
import { ArrowDown } from "lucide-react";

const SUGGESTIONS = [
  "What are your projects?",
  "What's your tech stack?",
  "Tell me about your experience",
  "How can I contact you?",
  "What services do you offer?",
  "What are you working on?",
  "Your education background?",
  "Open source contributions?",
];

async function fetchWithErrorBody(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> {
  const res = await fetch(input, init);
  if (!res.ok) {
    let message = `${res.status} ${res.statusText}`;
    try {
      const body = await res.clone().json();
      if (body?.error) message = body.error;
    } catch {
      // body wasn't JSON — keep the status text
    }
    throw new Error(message);
  }
  return res;
}

const TRANSITION = { duration: 0.2, ease: "easeOut" as const };
const VARIANTS = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  exit:    { opacity: 0, y: 6 },
};

export function AIChatModal() {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [chatError, setChatError] = useState<string | null>(null);
  const t = useTranslations("chat");

  const { messages, sendMessage, isLoading, clear, append } = useChat({
    connection: fetchServerSentEvents("/api/chat", {
      fetchClient: fetchWithErrorBody,
    }),
    onError: (e) => {
      setIsPending(false);
      setChatError(e.message);
    },
    onResponse: () => {
      setChatError(null);
      setIsPending(true);
    },
    onChunk: () => setIsPending(false),
  });

  useHotkey("Mod+K", () => setOpen((prev) => !prev));

  useHotkeySequence(["ArrowDown", "ArrowDown"], () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isPending, chatError]);

  useEffect(() => {
    const el = carouselRef.current;
    if (!el || !carouselApi) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) carouselApi.scrollNext();
      else carouselApi.scrollPrev();
    };
    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, [carouselApi]);

  const handleScroll = () => {
    const el = messagesContainerRef.current;
    if (!el) return;
    setShowScrollBtn(el.scrollHeight - el.scrollTop - el.clientHeight > 100);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowScrollBtn(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    setChatError(null);
    sendMessage(input);
    setInput("");
  };

  const handleSuggestion = (suggestion: string) => {
    if (isLoading) return;
    setChatError(null);
    sendMessage(suggestion);
  };

  const lastMessage = messages[messages.length - 1];
  const showOptimisticBot = isPending && lastMessage?.role === "user";

  // Single key that drives the unified AnimatePresence slot:
  // - "error"   → show error alert
  // - "pending" → show bounce dots
  // - msg id    → show streaming cursor for that assistant message
  // - null      → nothing (idle)
  const activeSlotKey: string | null = chatError
    ? "error"
    : showOptimisticBot
      ? "pending"
      : null;

  const isEmpty = messages.length === 0 && !isPending && !chatError;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ delay: 1, duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            className={cn(
              "rounded-full size-12 cursor-pointer transition-shadow",
              open ? "hidden" : "shadow-lg hover:shadow-xl",
            )}
          >
            <Bot className="size-6" />
          </Button>
        </motion.div>
      </DialogTrigger>

      <DialogContent className="md:max-w-3xl md:min-w-3xl lg:max-w-4xl lg:min-w-4xl h-[95vh] flex flex-col p-0 gap-0">
        <DialogHeader className="p-4 py-4 gap-1">
          <DialogTitle className="flex items-center gap-2 text-base font-semibold">
            {t("title")}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground text-start">
            {t("description")}
          </DialogDescription>
        </DialogHeader>

        {/* Messages */}
        <div
          ref={messagesContainerRef}
          onScroll={handleScroll}
          className={cn(
            "flex-1 overflow-y-auto p-4 py-5 space-y-4 border-t h-full relative",
            isEmpty && "flex items-center justify-center",
          )}
        >
          {isEmpty && (
            <Empty className="my-auto">
              <EmptyHeader>
                <EmptyMedia variant="icon" className="size-18 rounded-full">
                  <MessageCircle className="size-8" />
                </EmptyMedia>
                <EmptyTitle className="text-muted-foreground">
                  {t("empty")}
                </EmptyTitle>
              </EmptyHeader>
            </Empty>
          )}

          {/* Real messages */}
          {messages.map((message, idx) => {
            const isLastMessage = idx === messages.length - 1;
            const isLastAssistant = isLastMessage && message.role === "assistant";

            return (
              (message.parts.length > 0 || isLastAssistant) && (
                <div key={message.id} className="flex flex-col">
                  <span
                    className={cn(
                      "font-semibold",
                      message.role === "assistant"
                        ? "text-primary"
                        : "text-muted-foreground",
                    )}
                  >
                    {message.role === "assistant" ? t("bot") : t("you")}
                  </span>

                  <div className={cn(message.parts.length > 0 && "py-2")}>
                    {message.parts.map((part, i) => {
                      if (part.type === "thinking") {
                        return (
                          <p key={i} className="text-muted-foreground italic mb-2">
                            💭 {part.content}
                          </p>
                        );
                      }
                      if (part.type === "text") {
                        return (
                          <ReactMarkdown
                            key={i}
                            remarkPlugins={[remarkGfm]}
                            components={markdownComponents}
                          >
                            {part.content}
                          </ReactMarkdown>
                        );
                      }
                      return null;
                    })}

                    {isLastAssistant && isLoading && !isPending && (
                      <span className="inline-block w-0.5 h-4 bg-primary ml-0.5 animate-pulse" />
                    )}
                  </div>
                </div>
              )
            );
          })}

          {/* Unified animated slot: pending | error | nothing */}
          <AnimatePresence mode="wait">
            {activeSlotKey === "pending" && (
              <motion.div
                key="pending"
                variants={VARIANTS}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={TRANSITION}
                className="flex flex-col"
              >
                <div className="py-2 flex space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-3 h-3 bg-primary rounded-full animate-bounce" />
                </div>
              </motion.div>
            )}

            {activeSlotKey === "error" && (
              <motion.div
                key="error"
                variants={VARIANTS}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={TRANSITION}
              >
                <Alert variant="destructive">
                  <AlertCircleIcon />
                  <AlertDescription>{chatError}</AlertDescription>
                </Alert>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>

        {/* Scroll-to-bottom button */}
        <AnimatePresence>
          {showScrollBtn && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-46 right-1/2 z-10"
            >
              <Button
                size="icon-lg"
                variant="secondary"
                onClick={scrollToBottom}
                className="rounded-full shadow-md size-8"
              >
                <ArrowDown className="size-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="border-t">
          <div ref={carouselRef} className="px-4 pt-3 pb-2">
            <Carousel
              setApi={setCarouselApi}
              opts={{ dragFree: true, align: "start" }}
              className="w-full"
            >
              <CarouselContent className="-ml-2">
                {SUGGESTIONS.map((suggestion) => (
                  <CarouselItem key={suggestion} className="pl-2 basis-auto">
                    <Badge
                      variant="outline"
                      onClick={() => handleSuggestion(suggestion)}
                      className={cn(
                        "cursor-pointer whitespace-nowrap text-xs font-normal transition-colors",
                        "hover:bg-primary hover:text-primary-foreground hover:border-primary",
                        isLoading && "pointer-events-none opacity-50",
                      )}
                    >
                      {suggestion}
                    </Badge>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="p-4 pt-2">
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <TextareaAutosize
                  data-slot="input-group-control"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoFocus
                  enterKeyHint="enter"
                  minRows={1}
                  maxRows={6}
                  disabled={isLoading}
                  onKeyDown={(e) => {
                    if (e.key === " ") e.stopPropagation();
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                  placeholder={t("placeholder")}
                  className="flex field-sizing-content w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base outline-none md:text-sm disabled:opacity-50 z-50"
                />
                <InputGroupAddon align="block-end">
                  <InputGroupButton
                    type="submit"
                    size="icon-sm"
                    variant="default"
                    disabled={!input.trim() || isLoading}
                    className="ml-auto rounded-full"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <Send className="size-4" />
                    )}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}