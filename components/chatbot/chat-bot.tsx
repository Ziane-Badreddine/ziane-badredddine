"use client"

import { useState } from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle } from "lucide-react"

type Message = {
  role: "user" | "bot"
  text: string
}

export default function Chatbot() {

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 rounded-full w-14 h-14"
      >
        <MessageCircle />
      </Button>

    </>
  )
}
