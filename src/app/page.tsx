import { Advantages } from '@/sections/Advantages';
import { Consultation } from '@/sections/Consultation';
import { Footer } from '@/sections/Footer';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
// import { Promotion } from '@/sections/Promotion';
import { Services } from '@/sections/Services';
import { Works } from '@/sections/Works';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-[52px] md:mt-[68px]">
        <Hero />
        <Services />
        <Works />
        {/* <Promotion /> */}
        <Advantages />
        <Consultation />
      </main>
      <Footer />
    </div>
  );
}
