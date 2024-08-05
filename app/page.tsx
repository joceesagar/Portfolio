//components
import Services from '@/components/Services';
import Hero from '../components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Reveiws from '@/components/Reveiws';
import Cta from '@/components/Cta';

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Reveiws/>
      <Cta/>
    </main>
    
  );
}
