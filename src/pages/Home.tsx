import Hero from '../components/Hero'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Programs from '../components/Programs'
import Trainers from '../components/Trainers'
import Reviews from '../components/Reviews'
import Gallery from '../components/Gallery'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta(
    "Kumsal Yüzme Akademisi | Ankara'da Profesyonel Yüzme Dersleri",
    "2008'den beri Ankara'da çocuk, yetişkin ve özel yüzme dersleri. Kızılay, Batıkent ve Söğütözü şubelerimizde uzman eğitmenlerle güvenli yüzme eğitimi.",
  )

  return (
    <>
      <Hero />
      <Carousel />
      <About />
      <Programs />
      <Trainers />
      <Reviews />
      <Gallery />
      <FAQ />
      <Contact />
    </>
  )
}
