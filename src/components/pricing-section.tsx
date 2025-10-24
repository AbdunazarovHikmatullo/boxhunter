"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

const pricingPlans = [
  {
    name: "Стартовый",
    price: "500",
    description: "Для малого бизнеса и стартапов",
    features: [
      "Минимальный заказ: 1000 шт",
      "Стандартные размеры",
      "Одноцветная печать",
      "Базовая упаковка",
      "Доставка 30-45 дней",
      "Email поддержка",
    ],
    popular: false,
  },
  {
    name: "Бизнес",
    price: "2000",
    description: "Для растущих компаний",
    features: [
      "Минимальный заказ: 5000 шт",
      "Кастомные размеры",
      "Полноцветная печать",
      "Ламинация и УФ-лак",
      "Доставка 20-30 дней",
      "Приоритетная поддержка",
      "Бесплатные образцы",
    ],
    popular: true,
  },
  {
    name: "Корпоративный",
    price: "Индивидуально",
    description: "Для крупных брендов",
    features: [
      "Любой объем заказа",
      "Полная кастомизация",
      "Премиум отделка",
      "Фольгирование и конгрев",
      "Экспресс доставка 10-15 дней",
      "Персональный менеджер",
      "Бесплатный дизайн",
      "Складское хранение",
    ],
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">Прозрачные цены</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance leading-relaxed">
            Выберите тариф, который подходит вашему бизнесу. Все цены указаны за партию с учетом производства и
            доставки.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full transition-all hover:shadow-xl ${
                  plan.popular ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                      Популярный
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="leading-relaxed">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    {plan.price !== "Индивидуально" && <span className="text-muted-foreground">/партия</span>}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                    Выбрать план
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
