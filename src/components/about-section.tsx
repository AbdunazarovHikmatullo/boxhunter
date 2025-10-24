"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Globe, Package, Truck } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: Package,
    title: "Полный цикл производства",
    description: "От дизайна до готовой продукции - контролируем каждый этап",
  },
  {
    icon: Globe,
    title: "Глобальная доставка",
    description: "Доставляем в любую точку мира с гарантией качества",
  },
  {
    icon: CheckCircle2,
    title: "Контроль качества",
    description: "Многоступенчатая проверка на всех этапах производства",
  },
  {
    icon: Truck,
    title: "Быстрая логистика",
    description: "Оптимизированные маршруты и сроки доставки",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">О компании BoxHunter</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance leading-relaxed">
            Мы специализируемся на производстве высококачественной упаковки для B2B сегмента. Наши производственные
            мощности в Китае позволяют создавать коробки любой сложности для ведущих мировых брендов.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
