"use client";

import React from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contactSection")
  return (
    <section id="contact" className=" w-full  py-20 md:py-32 ">
      <div className=" px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-4">
            <Badge
              className="rounded-full px-4 py-1.5 text-sm font-medium shadow-sm"
              variant="secondary"
            >
              <span className="text-primary mr-1">✦</span> {t("badge")}
            </Badge>
          </div>
          <h2 className="from-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl">
            {t("title")}
          </h2>
          <p className="text-muted-foreground max-w-[800px] md:text-lg">
           {t("subtitle")}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}
