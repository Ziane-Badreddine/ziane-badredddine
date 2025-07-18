"use client";
import { motion } from "motion/react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { contactFormSchema } from "@/lib/validation-schemas";
import {
  FiUser,
  FiMail,
  FiEdit2,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const formSchema = contactFormSchema;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const templateParams = {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_PUBLIC_KEY!
      );

      toast.success("Your message has been sent successfully!");
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      toast.error("Failed to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="col-span-1 md:col-span-2 h-full "
    >
      <Card className="mx-auto h-full ">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-2">
            <FiSend className="text-primary text-[1.5rem]" />
            Contact Us
          </CardTitle>
          <CardDescription>
            Please fill out the form below and we will get back to you shortly.
          </CardDescription>
          <CardAction
            className={cn(
              "p-2 rounded-full bg-primary border relative",
              form.formState.isValid ||
                form.formState.submitCount === 0 ||
                !form.formState.errors
                ? "bg-green-600"
                : "bg-destructive"
            )}
          >
            <div
              className={cn(
                "absolute inset-0 rounded-full  animate-ping opacity-75",
                form.formState.isValid ||
                  form.formState.submitCount === 0 ||
                  !form.formState.errors
                  ? "bg-green-600/50"
                  : "bg-destructive/50"
              )}
              style={{
                animationDuration: "3s",
                animationDelay: `${1 * 0.5}s`,
              }}
            ></div>
          </CardAction>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-2 relative">
                      <FormLabel
                        htmlFor="name"
                        className="flex items-center gap-2"
                      >
                        <FiUser className="text-muted-foreground" />
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          type="text"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2 relative">
                      <FormLabel
                        htmlFor="email"
                        className="flex items-center gap-2"
                      >
                        <FiMail className="text-muted-foreground" />
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="johndoe@mail.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="grid md:col-span-2 gap-2 relative">
                      <FormLabel
                        htmlFor="subject"
                        className="flex items-center gap-2"
                      >
                        <FiEdit2 className="text-muted-foreground" />
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="subject"
                          placeholder="Project inquiry, collaboration, etc."
                          type="text"
                          autoComplete="off"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid md:col-span-2 gap-2 relative">
                      <FormLabel
                        htmlFor="message"
                        className="flex items-center gap-2"
                      >
                        <FiMessageCircle className="text-muted-foreground" />
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          autoComplete="off"
                          className="break-all h-[140px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full md:col-span-2 flex space-x-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      {" "}
                      <div className="w-2 h-2 bg-background rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                      <div className="w-2 h-2 bg-background rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                      <div className="w-2 h-2 bg-background rounded-full animate-bounce"></div>
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
