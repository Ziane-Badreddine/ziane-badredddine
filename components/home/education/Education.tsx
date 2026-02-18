"use client";
import { Badge } from "@/components/ui/badge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { education } from "@/data/data";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Education() {
  const t = useTranslations("Education");

  return (
    <section
      id="education"
      className="from-muted/30 relative isolate w-full overflow-hidden bg-linear-180 from-50% to-transparent py-20 md:py-32 border-primary/60! bg-primary/15 group-hover:bg-primary/20 z dark:border-primary/40!  inset-0 h-full border-y border-dashed px-1.5"
    >
      <div className="absolute inset-0 -z-10 "></div>
      <div className="relative w-full  mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className=" mb-12 flex flex-col w-full items-center justify-center space-y-4 text-center "
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
            {t("description")}
          </p>
          <TracingBeam className="w-full max-w-[90%]! ">
            {education.map((item, index) => (
              <motion.div
                key={`content-${index}`}
                className="mb-20"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left side - Text */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight pb-1">
                      {t(item.titleKey)}
                    </h1>
                    <h3 className="text-2xl leading-none font-mono md:text-3xl font-semibold tracking-tight mb-4 text-muted-foreground pb-1">
                      {item.year}
                    </h3>
                    <div className="text-lg font-normal leading-relaxed">
                      {t(item.descriptionKey)
                        .split(". ")
                        .map((sentence, index) => (
                          <p key={index}>{sentence.trim()}.</p>
                        ))}
                    </div>
                  </motion.div>

                  {/* Right side - SVG / Image */}
                  <motion.div
                    className="flex justify-center relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.titleKey}
                      width={400}
                      height={300}
                      className="h-auto w-full max-w-md drop-shadow-lg relative z-10"
                      priority={index === 0}
                    />
                    <motion.div
                      className="absolute inset-0 pointer-events-none z-0"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        duration: 1.5,
                      }}
                      style={{
                        background:
                          "radial-gradient(ellipse at 30% 70%, oklch(0.44 0 0), transparent 60%)",
                        filter: "blur(80px)",
                        mixBlendMode: "screen",
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </TracingBeam>
        </motion.div>
      </div>
    </section>
  );
}
