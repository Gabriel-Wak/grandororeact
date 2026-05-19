import { useState } from 'react'
import { clubSlides } from '../data/content'

export default function ClubCarousel() {
  const [index, setIndex] = useState(0)

  const visibleSlides = [
    clubSlides[index],
    clubSlides[(index + 1) % clubSlides.length]
  ]

  function next() {
    setIndex((current) => (current + 1) % clubSlides.length)
  }

  function previous() {
    setIndex((current) => (current === 0 ? clubSlides.length - 1 : current - 1))
  }

  return (
    <section className="bg-sand py-14 md:py-16">
      <div className="mb-10 px-5 text-center uppercase text-ink">
        <h2 className="text-2xl font-light tracking-[0.35em] md:text-4xl md:tracking-[0.5em]">Lazer de clube</h2>
        <p className="mt-5 text-xs tracking-[0.35em] md:text-base md:tracking-[0.7em]">Com cara de condomínio premium</p>
      </div>

      <div className="relative">
        <button
          type="button"
          onClick={previous}
          className="absolute left-0 top-1/2 z-10 grid h-14 w-9 -translate-y-1/2 place-items-center bg-navy/70 text-3xl text-white"
          aria-label="Imagem anterior"
        >
          ‹
        </button>

        <div className="grid gap-4 md:grid-cols-[2fr_1fr] md:gap-6">
          {visibleSlides.map((slide, slideIndex) => (
            <figure key={`${slide.title}-${slideIndex}`} className="relative h-[250px] overflow-hidden md:h-[390px]">
              <img src={slide.image} alt={slide.title} className="h-full w-full object-cover" />
              <figcaption className="absolute bottom-5 left-6 text-sm font-bold uppercase text-white drop-shadow-lg">
                {slide.title}
              </figcaption>
            </figure>
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="absolute right-0 top-1/2 z-10 grid h-14 w-9 -translate-y-1/2 place-items-center bg-navy/70 text-3xl text-white"
          aria-label="Próxima imagem"
        >
          ›
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-3">
        {clubSlides.map((slide, slideIndex) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setIndex(slideIndex)}
            className={`h-2.5 w-2.5 rounded-full border border-ink ${index === slideIndex ? 'bg-ink' : 'bg-transparent'}`}
            aria-label={`Ver ${slide.title}`}
          />
        ))}
      </div>
    </section>
  )
}
