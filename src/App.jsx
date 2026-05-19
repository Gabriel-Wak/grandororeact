import Apartments from './components/Apartments'
import ClubCarousel from './components/ClubCarousel'
import Contact from './components/Contact'
import Differentials from './components/Differentials'
import Floorplan from './components/Floorplan'
import Header from './components/Header'
import Hero from './components/Hero'
import Intro from './components/Intro'
import LaunchStats from './components/LaunchStats'
import Leisure from './components/Leisure'
import Location from './components/Location'
import VideoBand from './components/VideoBand'

export default function App() {
  return (
    <main>
      <Hero />
      <LaunchStats />
      <Header />
      <Intro />
      <VideoBand />
      <Location />
      <Differentials />
      <Apartments />
      <Floorplan />
      <Leisure />
      <ClubCarousel />
      <Contact />
    </main>
  )
}
