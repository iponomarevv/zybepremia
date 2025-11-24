import React from 'react';
import { MoveRight, Info, Lightbulb, MessageCircle } from 'lucide-react';
import { Background } from './components/Background';
import { Badge } from './components/Badge';
import { NominationCard } from './components/NominationCard';
import { StepCard } from './components/StepCard';
import { Reveal } from './components/Reveal';
import { NOMINATIONS, STEPS } from './constants';

const App: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans">
      <Background />

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 lg:py-20 space-y-24">
        
        {/* Hero Section */}
        <section className="flex flex-col items-start max-w-3xl pt-8">
          <Reveal>
            <Badge />
          </Reveal>
          
          <Reveal delay={100}>
            <div className="text-xs sm:text-sm font-bold tracking-[0.2em] text-slate-500 uppercase mb-4 ml-1">
              Зыбепремия — 2025
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[0.95] tracking-tight text-white mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-teal-400 to-neon-cyan animate-text">
                Заезыбь
              </span>
              <br />
              <span className="text-slate-100">2025</span>
            </h1>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10 border-l-2 border-slate-800 pl-6">
              Неформальная премия для своих. Лучшие проезды, самые жирные волны и честный локальный стёб
              по итогам <strong className="text-slate-200">всего 2025 года</strong> на Балтике.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#participate" 
                onClick={(e) => scrollToSection(e, 'participate')}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100 text-slate-950 font-bold text-sm shadow-lg shadow-white/5 hover:bg-white hover:scale-105 transition-all duration-200"
              >
                Как выдвинуть проезд
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#nominations" 
                onClick={(e) => scrollToSection(e, 'nominations')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-900/50 border border-slate-800 text-slate-300 font-medium text-sm hover:bg-slate-800 hover:text-white hover:border-slate-600 transition-all duration-200"
              >
                Посмотреть номинации
              </a>
            </div>
          </Reveal>
        </section>

        {/* About Section */}
        <Reveal>
          <section id="about" className="p-8 md:p-10 rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800 shadow-2xl backdrop-blur-md relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-neon-cyan/5 rounded-full blur-[80px] group-hover:bg-neon-cyan/10 transition-colors duration-700"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 text-neon-cyan">
                <div className="p-2 bg-neon-cyan/10 rounded-lg">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-slate-100">Что такое «Заезыбь 2025»?</h2>
              </div>
              
              <div className="space-y-4 text-slate-400 leading-7 max-w-3xl">
                <p>
                  <strong className="text-slate-200">«Заезыбь 2025»</strong> — внутренняя премия чата <strong>«Ветровая Зыбь»</strong>. Мы фиксируем всё: от идеальных труб до нелепых падений.
                </p>
                <p>
                  В отличие от пафосных контестов, здесь нет судейских будок и протоколов. Есть
                  <strong className="text-slate-200"> реальные проезды, честные вайпауты, балтийская зыбь</strong> и голосование тех, кто действительно
                  стоит рядом с тобой в лайнапе.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* Nominations Grid */}
        <section id="nominations">
          <Reveal>
            <div className="mb-10 md:flex md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-3">
                  Основные номинации
                </h2>
                <p className="text-slate-500">Шесть опор, вокруг которых крутится вся Заезыбь.</p>
              </div>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {NOMINATIONS.map((item, index) => (
              <Reveal key={item.id} delay={index * 100} className="h-full">
                <NominationCard data={item} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Participate Section */}
        <section id="participate">
           <Reveal>
             <div className="mb-10">
              <h2 className="text-3xl font-bold text-white flex items-center gap-3 mb-3">
                Как выдвинуться
              </h2>
              <p className="text-slate-500 max-w-2xl">
                Никакой бюрократии. Есть видео? Ты в игре.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {STEPS.map((step, index) => (
               <Reveal key={step.id} delay={index * 150} className="h-full">
                 <StepCard step={step} />
               </Reveal>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <Reveal>
          <footer className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-8 md:p-12 text-center md:text-left">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/50 to-transparent z-0"></div>
            <div className="absolute right-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Готов войти в историю?
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  Любая ровная стеночка, любой мерзкий вайпаут, любой странный момент — всё может стать частью <span className="font-semibold text-green-400">Заезыби 2025</span>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a 
                  href="#participate" 
                  onClick={(e) => scrollToSection(e, 'participate')}
                  className="inline-flex justify-center items-center px-6 py-3 rounded-xl bg-green-500 text-slate-950 font-bold text-sm hover:bg-green-400 transition-all hover:-translate-y-0.5"
                >
                  Как выдвинуть
                </a>
                <a 
                  href="https://t.me/zbIBb_baltic" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 font-medium text-sm hover:bg-slate-700 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Перейти в чат
                </a>
              </div>
            </div>
          </footer>
        </Reveal>
        
        <Reveal delay={200}>
          <div className="text-center text-xs text-slate-700 pb-8 uppercase tracking-widest">
            © 2025 Zybepremia. Made for the Baltic Waves.
          </div>
        </Reveal>

      </main>
    </div>
  );
};

export default App;