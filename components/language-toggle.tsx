"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ComponentProps, useState } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Languages } from "lucide-react";
import { TooltipWrapper } from "./tooltip-wrapper";

const locales = [
  { locale: "en", name: "English" },
  { locale: "fr", name: "Français" },
];

export type LanguageToggleProps = ComponentProps<"button">;

export function LanguageToggle(props: LanguageToggleProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);

  const handleChange = (newLocale: string) => {

    const segments = pathname.split("/");
    segments[1] = newLocale;
    setOpen(false);
    router.replace(segments.join("/"));
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <TooltipWrapper label={t("chooseLanguage")}  asChild>
        <PopoverTrigger
          {...props}
          className={cn(
            buttonVariants({
              variant: "ghost",
              className:
                "gap-1.5 p-1.5 rounded-full cursor-pointer relative overflow-hidden transition-transform hover:scale-105",
            }),
            props.className,
          )}
        >
          <Languages />
        </PopoverTrigger>
      </TooltipWrapper>

      <PopoverContent className="flex flex-col p-0 w-44">
        <p className="mb-1 p-2 text-xs font-medium text-muted-foreground">
          {t("chooseLanguage")}
        </p>

        {locales.map((item) => (
          <button
            key={item.locale}
            type="button"
            className={cn(
              "p-2 text-start text-sm",
              item.locale === locale
                ? "bg-primary/10 font-medium text-primary"
                : "hover:bg-accent hover:text-accent-foreground",
            )}
            onClick={() => handleChange(item.locale)}
          >
            {item.name}
          </button>
        ))}
      </PopoverContent>
    </Popover>
  );
}
