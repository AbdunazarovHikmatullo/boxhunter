"use client"

import { motion } from "framer-motion"

const partners = [
  { name: "Google", logo: "/google-logo.png" },
  { name: "Amazon", logo: "/amazon-logo.png" },
  { name: "Alibaba", logo: "/generic-ecommerce-logo.png" },
  { name: "Rolex", logo: "/rolex-logo.jpg" },
  { name: "BMW", logo: "/bmw-logo.png" },
  { name: "Apple", logo: "/apple-logo.png" },
  { name: "Samsung", logo: "/samsung-logo.png" },
  { name: "Nike", logo: "/nike-swoosh.png" },
]

export default function PartnersSection() {
  return (
    <section id="partners" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">Нам доверяют лучшие</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance leading-relaxed">
            Мы гордимся партнерством с ведущими мировыми брендами, которые выбирают нас за качество и надежность
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  className="h-16 w-full object-contain opacity-60 transition-opacity group-hover:opacity-100"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-lg font-semibold text-muted-foreground">
            И более <span className="text-primary">500+ компаний</span> по всему миру
          </p>
        </motion.div>
      </div>
    </section>
  )
}
