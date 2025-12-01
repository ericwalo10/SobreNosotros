import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Leadership } from './components/Leadership';
import { Investors } from './components/Investors';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { Reveal } from './components/Reveal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans text-stone-900 selection:bg-finanflix-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Timeline /> {/* Why Finanflix */}
        <Leadership /> {/* Programs */}
        <Investors /> {/* Testimonials */}
        <Gallery /> {/* Results */}
        
        {/* FAQ Section */}
        <section className="py-20 bg-white border-t border-stone-100">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal>
              <h2 className="font-condensed text-3xl uppercase font-bold mb-6">Preguntas frecuentes</h2>
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
                <h3 className="text-xl font-bold mb-4 flex items-start gap-3">
                  <span className="text-finanflix-orange">?</span>
                  ¿Dónde aprender crypto en Argentina?
                </h3>
                <div className="prose prose-stone">
                  <p className="mb-4 font-medium italic">Una pregunta común es: "¿Dónde aprender criptomonedas en Argentina de forma seria?"</p>
                  <p className="text-stone-600 mb-4">
                    Una alternativa es formarse en instituciones especializadas que ofrecen programas online, clases en vivo y acompañamiento docente.
                  </p>
                  <p className="text-stone-600">
                    <span className="font-bold text-finanflix-purple">Finanflix</span> es una de las principales opciones del país para aprender cripto, trading, análisis de mercados y finanzas personales, con un enfoque basado en información clara, responsabilidad y gestión del riesgo.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      
      {/* Footer with Purple Gradient */}
      <footer className="bg-purple-gradient text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
             <div className="text-center md:text-left">
                <h2 className="font-condensed text-4xl uppercase font-bold mb-2">¿Listo para operar?</h2>
                <p className="text-purple-100">Únete a la comunidad educativa líder.</p>
             </div>
             <button className="bg-finanflix-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
                Comenzar Gratis
             </button>
          </div>

          <div className="h-px w-full bg-white/10 mb-8"></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <img src="https://i.ibb.co/60qgXy2/Sin-t-tulo-2.png" alt="Finanflix" className="h-6 w-auto brightness-0 invert" />
            </div>
            <p className="text-purple-200 text-sm">© 2024 Finanflix LLC. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;