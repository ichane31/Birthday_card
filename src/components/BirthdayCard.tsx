import React, { useState, useEffect } from 'react'
import { GiftIcon, SparklesIcon, HeartIcon, CakeIcon } from 'lucide-react'

interface BirthdayCardProps {
  name: string
  onOpenCard: () => void
}

export default function BirthdayCard({ name, onOpenCard }: BirthdayCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleOpen = () => {
    setIsAnimating(true)
    setTimeout(() => {
      setIsOpen(true)
      onOpenCard()
    }, 800)
  }

  // Création d'étincelles aléatoires
  const [sparkles, setSparkles] = useState<Array<{ id: number, top: string, left: string, size: string, delay: string }>>([]);
  const [confettis, setConfettis] = useState<Array<{ id: number, left: string, animationDelay: string, color: string }>>([]);

  useEffect(() => {
    // Générer des positions aléatoires pour les étincelles
    const newSparkles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 16 + 30}px`,
      delay: `${Math.random() * 2}s`
    }));
    setSparkles(newSparkles);

    // Générer des confettis
    if (isOpen) {
      const colors = ['#FF6B6B', '#FFD166', '#06D6A0', '#118AB2', '#073B4C', '#7209B7', '#F72585', '#4CC9F0'];
      const newConfettis = Array.from({ length: 50 }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        color: colors[Math.floor(Math.random() * colors.length)]
      }));
      setConfettis(newConfettis);
    }
  }, [isOpen]);

  return (
    <div className="mb-10 perspective-1000 relative">
      {!isOpen ? (
        <div
        className={`relative bg-gradient-to-br from-red-700 to-red-900 rounded-lg shadow-xl p-8 text-center cursor-pointer transition-all duration-700 border border-red-500/30 overflow-hidden
          ${isAnimating ? 'transform rotate-y-180 opacity-0' : 'hover:shadow-red-500/30 hover:shadow-2xl hover:scale-105'}`}
        onClick={handleOpen}
      >
        {/* Effet de lueur derrière le cadeau */}
        <div className="absolute inset-0 bg-yellow-200 opacity-0 group-hover:opacity-5 transition-opacity duration-1000"></div>

        <div className="relative z-10">
          <div className="relative">
            {/* Cadeau avec animation de flottement */}
            <div className="animate-float">
              <GiftIcon className="h-24 w-24 mx-auto mb-4 text-red-300 drop-shadow-lg" />
            </div>

            {/* Étincelles animées */}
            {sparkles.map((sparkle) => (
              <div
                key={sparkle.id}
                className="absolute text-yellow-400 animate-pulse opacity-0 group-hover:opacity-100"
                style={{
                  top: sparkle.top,
                  left: sparkle.left,
                  width: sparkle.size,
                  height: sparkle.size,
                  animationDelay: sparkle.delay,
                  animationDuration: `${Math.random() * 3 + 2}s`,
                }}
              >
                <SparklesIcon className="w-full h-full" />
              </div>
            ))}
          </div>

          {/* Texte avec animation de rebond */}
          <div className="animate-bounce-slow">
            <h2 className="text-3xl font-bold text-white mb-2 transform hover:scale-110 transition-transform duration-300">
              Cliquez pour ouvrir
            </h2>
            <p className="text-red-200 mb-4 italic text-lg">votre carte d'anniversaire</p>
          </div>

          {/* Points de chargement animés */}
          <div className="mt-6 flex justify-center space-x-3">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-yellow-300 animate-pulse"
                style={{
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '1.5s',
                  boxShadow: '0 0 10px rgba(255, 255, 0, 0.7)'
                }}
              />
            ))}
          </div>

          {/* Cœurs flottants */}
          <div className="absolute -bottom-2 -right-2 opacity-30">
            <HeartIcon className="h-16 w-16 text-pink-400 animate-pulse-slow" />
          </div>
          <div className="absolute -top-4 -left-4 opacity-30 transform rotate-12">
            <HeartIcon className="h-12 w-12 text-pink-400 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>
      ) : (
        <div className="relative bg-gradient-to-br from-red-800 to-red-900 rounded-lg shadow-2xl p-8 text-center animate-card-open border border-red-500/30">
          {/* Confettis */}
          {confettis.map((confetti) => (
            <div
              key={`confetti-${confetti.id}`}
              className="confetti"
              style={{
                left: confetti.left,
                backgroundColor: confetti.color,
                animationDelay: confetti.animationDelay,
                transform: `rotate(${Math.random() * 360}deg)`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
              }}
            />
          ))}
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-red-600/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-red-600/20 rounded-full blur-xl"></div>
          <div className="absolute -top-3 -right-3 w-24 h-24">
            <div className="absolute z-10 top-0 right-0 w-16 h-16 bg-red-600 rotate-45 transform origin-top-right"></div>
            <div className="absolute z-10 top-0 right-0 w-8 h-24 bg-red-500 rotate-[30deg] transform origin-top-right animate-ribbon-wave"></div>
            <div
              className="absolute z-10 top-0 right-0 w-8 h-20 bg-red-600 rotate-[60deg] transform origin-top-right animate-ribbon-wave"
              style={{
                animationDelay: '0.5s',
              }}
            ></div>
          </div>
          <div className="absolute -bottom-2 -right-2 opacity-30">
            <HeartIcon className="h-16 w-16 text-pink-400 animate-pulse-slow" />
          </div>
          <div className="absolute -top-4 -left-4 opacity-30 transform rotate-12">
            <HeartIcon className="h-12 w-12 text-pink-400 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <CakeIcon className="h-20 w-20 text-red-300 filter drop-shadow-lg animate-cake-bounce" />
                <div className="absolute -top-2 -right-2 w-6 h-6">
                  <span className="animate-ping-slow absolute h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="absolute h-full w-full rounded-full bg-yellow-500"></span>
                </div>
              </div>
            </div>
            <div className="mb-8 relative">
              <h3 className="text-xl font-light text-red-200 mb-1 uppercase tracking-widest animate-float-up animate-delay-100">
                Joyeux
              </h3>
              <h1 className="font-serif text-6xl font-bold text-white mb-1 relative inline-block animate-float-up animate-delay-200">
                Anniversaire
                <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-red-400 animate-scale-x"></div>
              </h1>
              <h3 className="text-xl font-light text-red-200 uppercase tracking-widest animate-float-up animate-delay-300">
                à toi
              </h3>
            </div>
            <p className="text-2xl text-red-100 mb-8 animate-float-up animate-delay-400">
              Chère {name}, que cette journée soit
              <span className="font-bold animate-text-glow"> extraordinaire</span> !
            </p>
            <div className="flex justify-center space-x-4 mb-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-12 w-12 rounded-full shadow-lg relative overflow-hidden"
                  style={{
                    backgroundColor: ['#FF6B6B', '#FF4757', '#FF1744'][i],
                    boxShadow: `0 4px 12px ${['#FF6B6B', '#FF4757', '#FF1744'][i]}80`,
                  }}
                >
                  <div className="absolute inset-0 animate-shimmer"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
    </div>
  )
}