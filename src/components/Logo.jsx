import { images } from '../data/content'

export default function Logo({ light = false }) {
  return (
    <a href="#top" className="inline-flex items-center" aria-label="Grand'Oro Vila Barth">
      <img
        src={light ? images.logoImage : images.logoDarkImage}
        alt="Grand'Oro Vila Barth"
        className="h-9 w-auto object-contain md:h-10"
      />
    </a>
  )
}
