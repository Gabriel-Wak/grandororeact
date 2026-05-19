import { images } from '../data/content'

export default function Apartments() {
  return (
    <section id="apartamentos" className="grid bg-navy text-white lg:h-[430px] lg:grid-cols-[32%_68%]">
      <div className="px-6 py-14 md:px-10 lg:px-14 lg:py-14">
        <img src={images.logoImage} alt="Grand'Oro" className="mb-9 h-8 w-auto object-contain" />
        <h2 className="border-b border-gold/40 pb-5 text-2xl font-light uppercase tracking-[0.35em] text-goldLight">
          Os apartamentos
        </h2>
        <p className="mt-8 max-w-xs text-sm leading-relaxed text-white/75">
          O Grand’Oro apresenta uma tipologia única de 127 m², cuidadosamente planejada para oferecer amplitude e integração.
        </p>
        <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/75">
          A fusão entre funcionalidade e acabamento sofisticado cria um ambiente que acolhe, impressiona e inspira.
        </p>
      </div>

      <img
        src={images.apartmentImage}
        alt="Apartamento decorado com sala integrada"
        className="h-[280px] w-full object-cover md:h-[360px] lg:h-[430px]"
      />
    </section>
  )
}
