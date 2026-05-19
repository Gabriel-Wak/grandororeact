import { images } from '../data/content'

export default function Intro() {
  return (
    <section id="empreendimento" className="bg-white px-5 py-16 md:px-8 md:py-24 lg:py-32">
      <div className="mx-auto max-w-page">
        <div className="mb-14 text-center uppercase md:mb-20">
          <p className="text-xs tracking-[0.45em] text-neutral-700 md:text-sm md:tracking-[0.85em]">
            Do ponto mais alto da Vila Barth,
          </p>
          <h1 className="mt-5 text-2xl font-light tracking-[0.25em] md:text-4xl md:tracking-[0.45em]">
            Um novo ícone começa
            <strong className="mt-3 block text-4xl font-light tracking-[0.25em] md:text-6xl md:tracking-[0.32em]">
              nascer
            </strong>
          </h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[350px_250px_1fr] lg:items-start">
          <img
            src={images.towerImage}
            alt="Fachada do empreendimento Grand'Oro"
            className="h-auto w-full object-cover lg:h-[535px]"
          />

          <div>
            <img
              src={images.entranceImage}
              alt="Entrada do Grand'Oro"
              className="aspect-square w-full object-cover"
            />
            <h2 className="mt-6 border-b border-gold/40 pb-5 font-display text-3xl uppercase leading-none text-gold md:text-4xl">
              O valor<br />de viver<br />o que é raro
            </h2>
          </div>

          <div className="text-sm leading-relaxed text-ink lg:pl-10">
            <p className="mb-5">Grand’Oro é mais do que um breve lançamento.</p>
            <p className="mb-5">
              É um gesto. Um marco. Um símbolo de como a arquitetura pode elevar a vida das pessoas quando nasce de propósito e precisão.
            </p>
            <p className="mb-8">
              Em um dos endereços mais tradicionais da cidade, Grand’Oro surge como um farol.
            </p>
            <h3 className="mb-7 border-b border-gold/40 pb-5 text-lg font-light uppercase leading-relaxed tracking-[0.35em]">
              Elegante, imponente<br />& atemporal.
            </h3>
            <a href="#contato" className="outline-button">Falar com especialista</a>
          </div>
        </div>
      </div>
    </section>
  )
}
