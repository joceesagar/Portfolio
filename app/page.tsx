//components
import Services from '@/components/Services';
import Hero from '../components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
    </main>
    
  );
}
