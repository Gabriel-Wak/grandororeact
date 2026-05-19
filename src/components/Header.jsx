import { useState } from 'react'
import Logo from './Logo'
import { menuItems } from '../data/content'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-40 border-b border-sand/60 bg-white">
      <div className="mx-auto flex min-h-14 max-w-page items-center justify-between px-5 lg:px-8">
        <Logo />

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-2xl text-navy lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Abrir menu"
        >
          {isOpen ? '×' : '☰'}
        </button>

        <div
          className={`absolute left-0 right-0 top-14 flex-col border-b border-sand/60 bg-white px-5 py-4 shadow-xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-10 lg:border-0 lg:p-0 lg:shadow-none ${isOpen ? 'flex' : 'hidden'}`}
        >
          {menuItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="border-b border-neutral-100 py-3 text-[11px] uppercase tracking-wide text-ink transition hover:text-gold lg:border-0 lg:py-0"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
