import React from "react";
import Image from "next/image";


import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { services } from "@/data/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};


export function ServicesGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid gap-6 sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3"
    >
      {services.map((service, i) => (
        <motion.div
          key={i}
          variants={item}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className={cn(
            "bg-card text-card-foreground flex flex-col  rounded-xl border shadow-sm overflow-hidden group",
            service.image?.startsWith("/images/") &&
              "md:row-span-2 md:col-span-2"
          ,[3,5].includes(service.id) && "md:col-span-2 lg:col-span-1")}
        >
          {service.image?.startsWith("/images/") && (
            <div className="w-full h-[298px] lg:h-[358px]  relative bg-background">
              <Image
                src={service.image}
                priority
                alt=""
                quality={100}
                fill
                sizes="(min-width: 1040px) 556px, (min-width: 540px) 463px, 89.55vw"
                className=" object-contain "
              />
            </div>
          )}

          <div className="p-6 flex flex-col ">
            {!service.image?.startsWith("/images/") && (
              <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                {service.icon}
              </div>
            )}

            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-muted-foreground">{service.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
