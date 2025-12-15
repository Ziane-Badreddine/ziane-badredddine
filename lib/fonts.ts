import {
  Inter,
  Roboto,
  Lora,
  Faustina,
  JetBrains_Mono,
  Playfair_Display,
  Merriweather,
} from "next/font/google";
export const roboto = Roboto({ subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"] });
export const lora = Lora({ subsets: ["latin"] });
export const faustina = Faustina({ subsets: ["latin"] });
export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});
