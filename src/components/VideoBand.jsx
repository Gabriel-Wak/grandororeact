import { images } from '../data/content'

export default function VideoBand() {
  return (
    <section
      className="grid min-h-[320px] place-items-center bg-navy bg-cover bg-center px-5 py-16 text-center text-goldLight md:min-h-[440px]"
      style={{ backgroundImage: `linear-gradient(rgba(3, 18, 32, .78), rgba(3, 18, 32, .78)), url(${images.videoImage})` }}
    >
      <div>
        <h2 className="text-2xl font-light uppercase leading-relaxed tracking-[0.28em] md:text-4xl md:tracking-[0.38em]">
          Conheça o Grand’Oro<br />mais de perto
        </h2>
        <button type="button" className="mt-10 inline-grid place-items-center gap-2 text-white/80">
          <span className="grid h-14 w-14 place-items-center rounded-full border border-goldLight text-goldLight">▶</span>
          <span className="text-xs">Assista o vídeo</span>
        </button>
      </div>
    </section>
  )
}
