"use client";

import { motion } from "motion/react";
import React from "react";
import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicy");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="container mx-auto px-4 py-12 md:px-6 md:py-20 lg:max-w-4xl"
    >
      <h1 className="mb-6 text-3xl font-bold">{t("title")}</h1>
      <p className="text-muted-foreground mb-8 text-sm">{t("lastUpdated")}</p>

      {["intro","analytics","contactForm","dataSharing","rights","contact"].map((sectionKey) => (
        <section key={sectionKey} className="mb-8 space-y-4">
          <h2 className="text-xl font-semibold">{t(`sections.${sectionKey}.title`)}</h2>
          {sectionKey === "contactForm" ? (
            <>
              <p className="text-muted-foreground">{t(`sections.${sectionKey}.content1`)}</p>
              <p className="text-muted-foreground">{t(`sections.${sectionKey}.content2`)}</p>
            </>
          ) : sectionKey === "contact" ? (
            <p className="text-muted-foreground">
              {t(`sections.${sectionKey}.content`)}{" "}
              <a href={`mailto:${t(`sections.${sectionKey}.email`)}`} className="text-primary hover:underline">
                {t(`sections.${sectionKey}.email`)}
              </a>
            </p>
          ) : (
            <p className="text-muted-foreground">{t(`sections.${sectionKey}.content`)}</p>
          )}
        </section>
      ))}

      <p className="text-muted-foreground mt-12 text-sm">{t("agreement")}</p>
    </motion.div>
  );
}
