import React, { useEffect, useState, createElement } from 'react'
import logo from './logo.svg';
import BirthdayCard from './components/BirthdayCard';
import BirthdayMessage from './components/BirthdayMessage';
import './App.css';

function App() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [loaded, setLoaded] = useState(false)
  // Friend's name - customize this
  const friendName = 'Laure'
  useEffect(() => {
    // Add global animations
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes slide-up {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes slide-up-delayed {
        0% { opacity: 0; transform: translateY(40px); }
        30% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes fade-in-delayed {
        0% { opacity: 0; }
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
      @keyframes spin-slow {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes spin-slow-reverse {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(-360deg); }
      }
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.5; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.05); }
      }
      @keyframes ping-slow {
        0% { transform: scale(0.8); opacity: 1; }
        75%, 100% { transform: scale(1.2); opacity: 0; }
      }
      @keyframes beat {
        0%, 100% { transform: scale(1); }
        25% { transform: scale(1.2); }
        40% { transform: scale(0.9); }
        60% { transform: scale(1.2); }
      }
      @keyframes loved {
        0% { transform: scale(1); }
        10% { transform: scale(1.1); }
        20% { transform: scale(0.9); }
        30% { transform: scale(1.2); }
        50% { transform: scale(1); }
        100% { transform: scale(1); }
      }
      @keyframes float-balloon {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        33% { transform: translateY(-15px) rotate(2deg); }
        66% { transform: translateY(-7px) rotate(-2deg); }
      }
      @keyframes ribbon-wave {
        0%, 100% { transform: rotate(-2deg); }
        50% { transform: rotate(2deg); }
      }
      @keyframes glow {
        0%, 100% { box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); }
        50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.7); }
      }
      @keyframes shimmer {
        0% { background-position: -100% 0; }
        100% { background-position: 200% 0; }
      }
      .animate-slide-up {
        animation: slide-up 1s ease-out forwards;
      }
      .animate-slide-up-delayed {
        animation: slide-up-delayed 1.5s ease-out forwards;
      }
      .animate-fade-in {
        animation: fade-in 1s ease-out forwards;
      }
      .animate-fade-in-delayed {
        animation: fade-in-delayed 1.5s ease-out forwards;
      }
      .animate-spin-slow {
        animation: spin-slow 8s linear infinite;
      }
      .animate-spin-slow-reverse {
        animation: spin-slow-reverse 8s linear infinite;
      }
      .animate-pulse-slow {
        animation: pulse-slow 3s ease-in-out infinite;
      }
      .animate-ping-slow {
        animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
      }
      .animate-beat {
        animation: beat 1s ease-in-out infinite;
      }
      .animate-loved {
        animation: loved 1s ease-in-out;
      }
      .animate-float-balloon {
        animation: float-balloon 6s ease-in-out infinite;
      }
      .animate-ribbon-wave {
        animation: ribbon-wave 3s ease-in-out infinite;
      }
      .animate-glow {
        animation: glow 2s ease-in-out infinite;
      }
      .animate-shimmer {
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
        background-size: 200% 100%;
        animation: shimmer 2s infinite;
      }
    `
    document.head.appendChild(style)
    setLoaded(true)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-red-900 via-red-800 to-red-900 py-12 px-4 relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-red-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-red-500/20 rounded-full blur-3xl"></div>
      {/* Ballons décoratifs */}
      <div
        className="absolute top-[10%] right-[5%] w-20 h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 animate-float-balloon"
        style={{
          animationDelay: '0.5s',
        }}
      ></div>
      <div
        className="absolute top-[20%] left-[15%] w-24 h-28 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 animate-float-balloon"
        style={{
          animationDelay: '1s',
        }}
      ></div>
      <div
        className="absolute bottom-[15%] right-[10%] w-28 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 animate-float-balloon"
        style={{
          animationDelay: '1.5s',
        }}
      ></div>
      <div
        className="absolute bottom-[25%] left-[25%] w-20 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 animate-float-balloon"
        style={{
          animationDelay: '2s',
        }}
      ></div>
      <div
        className="absolute bottom-[20%] left-[7%] w-24 h-28 rounded-full bg-gradient-to-br from-pink-500 to-red-400 animate-float-balloon"
        style={{
          animationDelay: '1.3s',
        }}
      ></div>
      {/* Cadeaux décoratifs */}
      <div className="absolute bottom-[10%] left-[15%] w-28 h-24 bg-gradient-to-br from-red-700 to-red-900 rounded-lg shadow-xl overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-2 bg-red-500 transform -translate-y-1/2"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-red-500 transform -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-[40%] right-[-20px] w-10 h-20 bg-red-500 animate-ribbon-wave origin-left"></div>
      </div>
      <div className="absolute top-[15%] left-[10%] w-20 h-16 bg-gradient-to-br from-red-800 to-red-950 rounded-lg shadow-xl overflow-hidden transform rotate-12">
        <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-red-500 transform -translate-y-1/2"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-1.5 bg-red-500 transform -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      <div className="absolute top-[16%] right-[17%] z-10 w-20 h-16 bg-gradient-to-br from-red-800 to-red-950 rounded-lg shadow-xl overflow-hidden transform rotate-12">
        <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-red-500 transform -translate-y-1/2"></div>
        <div className="absolute top-0 bottom-0 left-1/2 w-1.5 bg-red-500 transform -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      {/* Rubans décoratifs */}
      <div
        className={`max-w-4xl mx-auto transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <BirthdayCard
          name={friendName}
          onOpenCard={() => setShowConfetti(true)}
        />
        <BirthdayMessage name={friendName} />
        {/* <MemoryGallery /> */}
        <div className="text-center text-red-300 mt-8 text-sm animate-fade-in-delayed">
          Créé avec ♥ pour {friendName}
        </div>
      </div>
    </div>
  );
}

export default App;
