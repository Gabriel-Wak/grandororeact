import { images } from '../data/content'

export default function Hero() {
  return (
    <header
      id="top"
      className="relative h-[360px] bg-navy bg-cover bg-center md:h-[520px] xl:h-[700px]"
      style={{ backgroundImage: `url(${images.heroImage})` }}
    >
      <a
        href="https://wa.me/5515988308477?text=Olá! Tenho interesse no Grand'Oro Vila Barth."
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-xl bg-gold text-xl text-navy shadow-lg"
        aria-label="Falar pelo WhatsApp"
      >
        ☎
      </a>
    </header>
  )
}
