import Link from "next/link"
import { Package } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <Package className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">BoxHunter</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Производство премиум упаковки для мировых брендов с 2009 года
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Компания</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link href="#partners" className="text-muted-foreground hover:text-primary transition-colors">
                  Партнеры
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Проекты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Стандартные коробки
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Кастомный дизайн
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Нестандартные размеры
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Премиум упаковка
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Контакты</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Гуанчжоу, Китай</li>
              <li>+86 20 1234 5678</li>
              <li>info@boxhunter.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 BoxHunter. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
