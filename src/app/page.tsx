import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Music from '@/components/Music'
import Gigs from '@/components/Gigs'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import ContactSimple from "@/components/ContactSimple";
import Footer from '@/components/Footer'
import Press from '@/components/Press'
import WideImage from '@/components/WideImage'

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Music />
        <Gallery />
        <Press />
        <Contact />
        {/** <ContactSimple email="sugarloafwalker@gmail.com" /> */}
        <WideImage />
      </main>
      <Footer />
    </>
  );
}
