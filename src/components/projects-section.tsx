"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Премиум упаковка для Rolex",
    description: "Эксклюзивные коробки для часов с магнитным замком и бархатной отделкой",
    image: "/luxury-watch-box-rolex.jpg",
    tags: ["Премиум", "Фольгирование", "Soft-touch"],
    client: "Rolex",
  },
  {
    title: "Логистическая упаковка Amazon",
    description: "Прочные гофрокоробки для безопасной доставки товаров",
    image: "/amazon-shipping-boxes.jpg",
    tags: ["Гофрокартон", "Логистика", "Экологично"],
    client: "Amazon",
  },
  {
    title: "Брендированная упаковка BMW",
    description: "Кастомные коробки для автозапчастей с корпоративным дизайном",
    image: "/bmw-branded-packaging.jpg",
    tags: ["Брендинг", "Полноцвет", "Ламинация"],
    client: "BMW",
  },
  {
    title: "Подарочная упаковка Apple",
    description: "Минималистичные коробки для электроники премиум-класса",
    image: "/apple-product-box.jpg",
    tags: ["Минимализм", "Премиум", "Точная печать"],
    client: "Apple",
  },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">Успешные проекты</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance leading-relaxed">
            Примеры наших работ для ведущих мировых брендов
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden transition-all hover:shadow-xl hover:border-primary/50">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary text-primary-foreground">{project.client}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                  <p className="mb-4 text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
