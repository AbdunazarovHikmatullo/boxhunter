"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Box, Palette, Ruler, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Box,
    title: "Стандартные коробки",
    description: "Широкий ассортимент готовых решений для быстрого старта",
    features: ["Гофрокартон", "Микрогофрокартон", "Картон", "Крафт-бумага"],
    price: "от $0.50",
  },
  {
    icon: Palette,
    title: "Кастомный дизайн",
    description: "Индивидуальный дизайн с вашим брендингом и логотипом",
    features: ["Полноцветная печать", "Тиснение", "Ламинация", "УФ-лак"],
    price: "от $1.20",
  },
  {
    icon: Ruler,
    title: "Нестандартные размеры",
    description: "Производство коробок любых размеров и форм",
    features: ["Любые размеры", "Сложные формы", "3D прототипы", "Образцы"],
    price: "от $2.00",
  },
  {
    icon: Sparkles,
    title: "Премиум упаковка",
    description: "Эксклюзивная упаковка для люксовых брендов",
    features: ["Фольгирование", "Конгрев", "Soft-touch", "Магнитные замки"],
    price: "от $5.00",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">Наши услуги</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance leading-relaxed">
            Предлагаем полный спектр услуг по производству упаковки - от стандартных решений до эксклюзивных
            премиум-коробок
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                  <div className="text-xs text-muted-foreground">за единицу</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
