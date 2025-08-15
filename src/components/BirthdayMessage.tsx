import React, { useState, useEffect, useRef } from 'react'
import { StarIcon, HeartIcon, SparklesIcon, Music, Gauge, Flower2 } from 'lucide-react'

function BirthdayMessage({ name }: { name: string }) {
    const [isLoved, setIsLoved] = useState(false)
    const [snowflakes, setSnowflakes] = useState<Array<{id: number, left: string, size: number, delay: string, duration: string}>>([])
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const songUrl = '../data/song.mp3'


    // Initialiser l'audio une seule fois
    if (!audioRef.current) {
        audioRef.current = new Audio(songUrl);
    }

    useEffect(() => {
        // Créer des flocons de neige
        const flakes = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            size: Math.random() * 12 + 6,
            delay: `${Math.random() * 5}s`,
            duration: `${Math.random() * 10 + 10}s`
        }))
        setSnowflakes(flakes)
    }, [])

    const toggleMusic = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        
        setIsPlaying(!isPlaying);
    };

    console.log(isPlaying)

    return (
        <div className="bg-gradient-to-br from-red-800 to-red-900 rounded-lg shadow-xl p-8 mb-10 transform transition-all duration-500 hover:shadow-red-400/30 animate-slide-up border border-red-500/30 relative overflow-hidden group">
            {/* Flocons de neige */}
            {snowflakes.map((flake) => (
                <div
                    key={`snow-${flake.id}`}
                    className="absolute top-0 text-white opacity-80 animate-float-down"
                    style={{
                        left: flake.left,
                        fontSize: `${flake.size}px`,
                        animationDelay: flake.delay,
                        animationDuration: flake.duration,
                        top: '-20px',
                    }}
                >
                    ❄️
                </div>
            ))}
            
            {/* Bouton de musique */}
            <button 
                onClick={() => toggleMusic()}
                className={`absolute top-4 right-4 p-2 rounded-full ${isPlaying ? 'bg-red-700' : 'bg-red-600/50 hover:bg-red-700'} transition-colors duration-300 z-20`}
                title={isPlaying ? 'Arrêter la musique' : 'Jouer de la musique'}
            >
                <Music className={`h-5 w-5 ${isPlaying ? 'text-yellow-300' : 'text-white'}`} />
            </button>
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-700/20 rounded-full blur-xl"></div>
            <div className="flex items-center justify-center mb-8 relative group">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-32 h-0.5 bg-gradient-to-r from-red-300 to-red-500 rounded-full group-hover:w-40 transition-all duration-500"></div>
                </div>
                <div className="relative group">
                    <StarIcon className="h-8 w-8 text-yellow-400 mr-3 animate-float-slow group-hover:animate-spin-slow transition-all duration-500" />
                    <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                </div>
                <h2 className="text-3xl font-serif font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 px-4 py-1 relative">
                    <span className="relative z-10">Message spécial</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-500"></span>
                </h2>
                <div className="relative group">
                    <StarIcon className="h-8 w-8 text-yellow-400 ml-3 animate-float-slow-reverse group-hover:animate-spin-slow-reverse transition-all duration-500" />
                    <div className="absolute inset-0 rounded-full bg-yellow-400 opacity-0 group-hover:opacity-20 group-hover:scale-150 transition-all duration-500"></div>
                </div>
            </div>
            <div className="p-8 bg-gradient-to-br from-red-900/90 to-red-950/90 rounded-lg border border-red-700/50 shadow-inner relative overflow-hidden transform transition-all duration-500 hover:scale-[1.01] hover:border-red-600/70">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMTAgMTBhMSAxIDAgMTEwLTIgMSAxIDAgMDEwIDJ6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-20"></div>
                
                {/* Éléments décoratifs animés */}
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-full opacity-50 animate-pulse-slow">
                    <div className="absolute inset-0 rounded-full border-2 border-yellow-400/20 animate-ping-slow"></div>
                </div>
                <div
                    className="absolute -left-4 -bottom-4 w-16 h-16 bg-gradient-to-tl from-pink-500/10 to-transparent rounded-full opacity-50 animate-pulse-slow"
                    style={{
                        animationDelay: '1.5s',
                    }}
                >
                    <div className="absolute inset-0 rounded-full border-2 border-pink-400/20 animate-ping-slow" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                {/* Icônes décoratives flottantes */}
                <div className="absolute top-1/4 -left-2 text-pink-400/30 animate-float-slow">
                    <Flower2 size={24} />
                </div>
                <div className="absolute bottom-1/4 -right-2 text-yellow-400/30 animate-float-slow-reverse" style={{ animationDelay: '1s' }}>
                    <Gauge size={24} />
                </div>
                <p className="text-xl text-red-100 italic relative z-10 font-serif">
                    Chère <span className="font-semibold text-white">{name}</span>,
                </p>
                <p className="my-6 text-lg text-red-200 relative z-10 leading-relaxed space-y-4">
                    <span className="block animate-fade-in-delay-200">Merci d'être une amie si incroyable. Tu illumines chaque journée avec</span>
                    <span className="block animate-fade-in-delay-300">ton sourire et ta gentillesse. Je suis si reconnaissante de t'avoir</span>
                    <span className="block animate-fade-in-delay-400">dans ma vie et je souhaite que cette nouvelle année t'apporte tout le</span>
                    <span className="block animate-fade-in-delay-500 font-medium text-yellow-100">Bonheur que tu mérites.</span>
                </p>
                <div className="mt-8 transform transition-all duration-500 hover:scale-105">
                    <p className="text-xl text-red-100 italic text-right relative z-10 font-serif animate-fade-in-delay-600">
                        Avec toute mon affection,
                    </p>
                    <p className="text-xl font-medium text-white text-right relative z-10 animate-fade-in-delay-700">
                        Ta meilleure amie
                    </p>
                    <div className="mt-2 flex justify-end">
                        <div className="w-24 h-0.5 bg-gradient-to-l from-red-400 to-transparent rounded-full transform transition-all duration-500 group-hover:w-32"></div>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex justify-center relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-red-500/20 to-transparent rounded-full"></div>
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <button
                        className={`relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full font-medium transition-all duration-500 border border-red-500/30 overflow-hidden
                        ${isLoved ? 'animate-loved shadow-lg shadow-red-500/30 scale-105' : 'hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-1'}`}
                        onClick={() => setIsLoved(true)}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent from-60% to-red-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex items-center relative z-10">
                            {isLoved ? (
                                <>
                                    <SparklesIcon className="h-6 w-6 mr-3 animate-ping-slow text-yellow-300" />
                                    <span className="text-lg">Tu es géniale !</span>
                                    <HeartIcon className="h-6 w-6 ml-3 animate-beat text-red-200" />
                                    <SparklesIcon
                                        className="h-6 w-6 ml-3 animate-ping-slow text-yellow-300"
                                        style={{
                                            animationDelay: '0.5s',
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    <span className="text-lg">Je t'adore !</span>
                                    <HeartIcon className="h-6 w-6 ml-3 group-hover:scale-125 transition-transform duration-300 text-white" />
                                </>
                            )}
                        </div>
                    </button>
                </div>
            </div>
            {isLoved && (
                <div className="mt-4 text-center text-red-300 animate-fade-in">
                    ♥ ♥ ♥ Amitié pour toujours! ♥ ♥ ♥
                </div>
            )}
        </div>
    );
}

export default BirthdayMessage;

