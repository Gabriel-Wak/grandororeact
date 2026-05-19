import { images, leisureExternal, leisureInternal } from '../data/content'

export default function Leisure() {
  return (
    <section
      id="lazer"
      className="flex min-h-[570px] items-center justify-center bg-cover bg-center px-5 py-16 md:px-8 lg:justify-end lg:px-[max(24px,calc((100vw-1180px)/2))]"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(2,14,26,.08), rgba(2,14,26,.25)), url(${images.leisureImage})` }}
    >
      <div className="w-full max-w-md bg-[#05374e]/95 p-8 text-white md:p-12">
        <h2 className="font-display text-4xl uppercase tracking-[0.25em] text-goldLight">O lazer</h2>
        <h3 className="mt-2 text-sm uppercase tracking-[0.28em] text-goldLight">Um clube elevado</h3>
        <p className="mt-8 text-sm leading-relaxed text-white/80">
          O Grand’Oro conta com áreas dedicadas ao lazer e ao bem-estar, em espaços criados para proporcionar experiências únicas.
        </p>

        <div className="mt-8 grid gap-6 text-sm md:grid-cols-2">
          <List title="Áreas internas" items={leisureInternal} />
          <List title="Áreas externas" items={leisureExternal} />
        </div>
      </div>
    </section>
  )
}

function List({ title, items }) {
  return (
    <div>
      <strong className="mb-3 block text-xs uppercase tracking-wide">{title}</strong>
      <ul className="list-disc space-y-1 pl-4 text-white/85">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
