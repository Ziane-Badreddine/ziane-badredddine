import React from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    description: "+212 707 291 630",
    href: "tel:+212707291630",
    color: "text-green-500",
  },
  {
    icon: Mail,
    title: "Email",
    description: "zianebadredddine2004@gmail.com",
    href: "mailto:zianebadredddine2004@gmail.com",
    color: "text-blue-500",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Settat, Morocco",
    href: "#contact",
    color: "text-orange-500",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0 },
};

export default function ContactInfo() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="lg:order-2 order-1 lg:col-span-1 flex justify-between flex-col overflow-hidden    space-y-6"
    >
      {contactInfo.map((contact) => {
        const IconComponent = contact.icon;

        return (
          <motion.div
            key={contact.title}
            variants={item}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className=" cursor-pointer"
          >
            <Card className="p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
              <div className="flex items-center space-x-4">
                <div
                  className={`p-3 rounded-full bg-primary/10 ${contact.color}`}
                >
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{contact.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    {contact.description}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        );
      })}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1*0.3 }}
      >
        <Card className="p-6 gap-2 bg-primary/5 border-primary/20">
          <h3 className="font-semibold text-lg">Response Time</h3>
          <p className="text-muted-foreground text-sm">
            I typically reply within 24 hours. For urgent projects, feel free to
            call me directly.
          </p>
        </Card>
      </motion.div>
    </motion.div>
  );
}
