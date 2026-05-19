import { images } from '../data/content'

export default function Location() {
  return (
    <section id="localizacao" className="grid bg-navy text-white lg:grid-cols-[1.35fr_0.75fr] lg:bg-[linear-gradient(90deg,#bdb3a5_0_46%,#031120_46%_100%)]">
      <div className="p-5 md:p-8 lg:py-28 lg:pl-[max(24px,calc((100vw-1180px)/2))] lg:pr-0">
        <img
          src={images.locationImage}
          alt="Vista aérea da localização"
          className="aspect-video w-full object-cover lg:h-[520px]"
        />
      </div>

      <div className="flex items-center px-5 pb-14 pt-6 md:px-8 lg:px-12 lg:py-24">
        <div className="max-w-md">
          <img src={images.logoImage} alt="Grand'Oro" className="mb-5 h-9 w-auto object-contain" />
          <h2 className="font-display text-3xl uppercase tracking-[0.25em] text-goldLight md:text-4xl">Vila Barth:</h2>
          <h3 className="mt-2 text-sm uppercase leading-relaxed tracking-[0.28em] text-goldLight">Tradição, tranquilidade e prestígio</h3>
          <p className="mt-8 text-sm leading-relaxed text-white/75">
            Grand’Oro está estrategicamente posicionado em uma das regiões mais desejadas da cidade, cercado por conveniência, mobilidade e serviços de alto padrão.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            Próximo às principais vias, aos polos gastronômicos, escolas, comércio e serviços essenciais, o empreendimento oferece a praticidade do cotidiano sem abrir mão da tranquilidade de um bairro tradicional.
          </p>
        </div>
      </div>
    </section>
  )
}
