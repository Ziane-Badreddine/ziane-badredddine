"use client";

import chatbotData from "@/messages/chatbot-data.json";
import {
  Bot,
  Copy,
  Icon,
  Loader2,
  MessageCircle,
  Send,
  ThumbsDown,
  ThumbsUp,
  User,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Separator } from "../ui/separator";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
} from "@/components/ui/input-group";
import TextareaAutosize from "react-textarea-autosize";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations, useLocale } from "next-intl";
import enChatbot from "@/messages/chatbot/en.json";
import frChatbot from "@/messages/chatbot/fr.json";
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  isStreaming?: boolean;
}

interface Props {
  isOpen?: boolean;
  onClose?: () => void;
}

export function AIChatModal({ isOpen = false, onClose }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const t = useTranslations("chat");
  const locale = useLocale();

  const chatbotData = locale === "fr" ? frChatbot : enChatbot;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setInput("");
    }
  }, [isOpen]);

  const simulateStreaming = async (fullContent: string, thinkingId: string) => {
    const newId = `assistant-${Date.now().toString()}`;
    let displayed = "";

    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === thinkingId
          ? { id: newId, role: "assistant", content: "", isStreaming: true }
          : msg,
      ),
    );

    const words = fullContent.split(" ");

    for (let i = 0; i < words.length; i++) {
      displayed += (i > 0 ? " " : "") + words[i];

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === newId ? { ...msg, content: displayed } : msg,
        ),
      );

      await new Promise((res) => setTimeout(res, 30));
    }

    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === newId ? { ...msg, isStreaming: false } : msg,
      ),
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now().toString()}`,
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const thinkingId = `thinking-${Date.now()}`;

    setMessages((prev) => [
      ...prev,
      { id: thinkingId, role: "assistant", content: "" },
    ]);

    const lowerInput = userMessage.content.toLowerCase();

    const match =
      chatbotData.find((item) =>
        item.keywords.some((k) => lowerInput.includes(k)),
      )?.response || t("unknown");

    await simulateStreaming(match, thinkingId);

    setIsLoading(false);
  };

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
            onClick={() => setOpen(!open)}
          >
            <Bot className="size-6" />
          </Button>
        </motion.div>
      </DialogTrigger>
      <DialogContent className="md:max-w-4xl md:min-w-4xl h-[85vh] flex flex-col p-0 gap-0">
        <DialogHeader className=" p-4 py-5 ">
          <DialogTitle className="flex items-center  gap-2">
            {t("title")}
          </DialogTitle>
        </DialogHeader>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 py-5 space-y-4 border-t h-full gap-4">
          {messages.length === 0 && (
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

          {messages.map((message) => (
            <div key={message.id} className={cn("flex flex-col  ")}>
              {message.role === "assistant" ? (
                <span className="text-primary font-semibold">{t("bot")}</span>
              ) : (
                <span className="text-muted-foreground font-semibold">
                  {t("you")}
                </span>
              )}

              <div className={cn(" py-2  ")}>
                {message.content}
                {message.isStreaming && (
                  <span className="ml-1 animate-pulse">|</span>
                )}
              </div>
            </div>
          ))}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t p-4 ">
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <TextareaAutosize
                data-slot="input-group-control"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
                autoFocus
                enterKeyHint="enter"
                minRows={1}
                maxRows={6}
                disabled={isLoading}
                onKeyDown={(e) => {
                  if (e.key === " ") {
                    e.stopPropagation();
                  }
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
                placeholder={t("placeholder")}
                className="flex field-sizing-content min-h-12 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base outline-none md:text-sm disabled:opacity-50 z-50"
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
      </DialogContent>
    </Dialog>
  );
}
