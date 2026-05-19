import { stats } from '../data/content'

export default function LaunchStats() {
  return (
    <>
      <section className="flex h-12 items-center justify-center bg-sand px-4 text-center font-display text-xs uppercase tracking-[0.55em] text-navy md:h-16 md:text-base md:tracking-[1em]">
        Lançamento
      </section>

      <section className="flex flex-wrap items-center justify-center gap-4 bg-[#020d1b] px-4 py-8 text-gold md:min-h-36 md:gap-8">
        <div className="hidden h-px w-28 bg-gold/60 md:block" />

        {stats.map((item, index) => (
          <div key={item.label} className="flex items-center gap-5">
            {index > 0 && <div className="h-12 w-px bg-gold/60" />}
            <div className={item.featured ? 'flex items-end gap-2 font-display' : 'text-center font-display'}>
              <strong className={item.featured ? 'text-5xl font-normal leading-none md:text-7xl' : 'block text-3xl font-normal leading-none md:text-4xl'}>
                {item.value}
              </strong>
              <span className={item.featured ? 'mb-1 text-lg uppercase tracking-[0.2em] md:text-2xl' : 'mt-2 block text-[10px] uppercase tracking-[0.35em] md:text-xs'}>
                {item.label}
              </span>
            </div>
          </div>
        ))}

        <div className="hidden h-px w-28 bg-gold/60 md:block" />
      </section>
    </>
  )
}
