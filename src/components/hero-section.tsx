"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="/modern-packaging-factory-production-line.jpg" alt="Производство коробок" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance lg:text-7xl">
              Производство коробок <span className="text-primary">премиум-класса</span> под ключ
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-xl text-muted-foreground text-pretty leading-relaxed"
          >
            Доверие мировых брендов: Google, Amazon, Alibaba, Rolex, BMW. Полный цикл производства в Китае с доставкой
            по всему миру.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Button size="lg" className="group text-base">
              <MessageCircle className="mr-2 h-5 w-5" />
              Связаться с нами
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Узнать больше
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-8 text-sm text-muted-foreground"
          >
            <div>
              <div className="text-3xl font-bold text-foreground">15+</div>
              <div>лет на рынке</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div>довольных клиентов</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">1M+</div>
              <div>коробок произведено</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
