//components
import Hero from '../components/Hero';
import About from '@/components/About';

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <div className="h-[4000px]"></div>
    </main>
    
  );
}
