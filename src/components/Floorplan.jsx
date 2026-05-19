import { images, planItems } from '../data/content'

export default function Floorplan() {
  return (
    <section id="planta" className="bg-white px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-page">
        <div className="grid items-center gap-8 text-center lg:grid-cols-[300px_1fr] lg:text-left">
          <div className="uppercase text-gold">
            <span className="block text-sm tracking-[0.7em] md:text-lg">Planta</span>
            <h2 className="mt-3 font-display text-7xl font-normal leading-none md:text-[105px]">
              127 <small className="font-sans text-2xl md:text-3xl">m²</small>
            </h2>
          </div>

          <img
            src={images.floorplanImage}
            alt="Planta do apartamento"
            className="mx-auto max-h-[330px] w-full object-contain"
          />
        </div>

        <div className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
          {planItems.map((item) => (
            <article key={item} className="flex min-h-10 items-center gap-3 border border-navy/60 bg-white px-4 py-2 text-sm text-ink">
              <img src={images.logoDarkImage} alt="" className="h-4 w-4 shrink-0 object-contain" />
              <span>{item}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
