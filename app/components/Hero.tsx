"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Hero() {
  const texts = ["Full Stack Developer", "React Developer", "Angular Developer", "Next js Developer"]
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(1000)

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping()
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [typingSpeed, currentText, isDeleting, loopNum])

  const handleTyping = () => {
    const i = loopNum % texts.length
    const fullText = texts[i]

    setCurrentText(
      isDeleting ? fullText.substring(0, currentText.length - 1) : fullText.substring(0, currentText.length + 1),
    )

    setTypingSpeed(isDeleting ? 30 : 100)

    if (!isDeleting && currentText === fullText) {
      setTimeout(() => setIsDeleting(true), 300)
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary text-quaternary pt-20">
      <div className="container mx-auto px-6 py-24 md:flex md:items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Adeel Sabir</h1>
          <h2 className="text-2xl md:text-3xl mb-6 h-8">{currentText}</h2>
          <p className="text-lg mb-8">Crafting modern, responsive, and user-friendly web experiences.</p>
          <a
            href="#projects"
            className="bg-tertiary text-primary px-6 py-3 rounded-full font-semibold hover:bg-secondary transition-colors"
          >
            View My Work
          </a>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <Image
            src="/Assets/copy.jpeg"
            alt="Nathan Sterling"
            width={400}
            height={400}
            className="rounded-full mx-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

