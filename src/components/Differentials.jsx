import { features } from '../data/content'

export default function Differentials() {
  return (
    <section id="diferenciais" className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-page gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-light uppercase leading-relaxed tracking-[0.35em] md:text-4xl">
            Diferenciais<br />exclusivos
          </h2>
          <a href="#contato" className="outline-button mt-8">Falar com especialista</a>
        </div>

        <ul className="space-y-4 self-center text-sm leading-relaxed">
          {features.map((feature) => (
            <li key={feature} className="flex gap-3">
              <span className="mt-1 text-gold">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
