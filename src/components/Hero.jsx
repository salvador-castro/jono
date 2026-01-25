import { useState, useEffect } from 'react';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        // Check initially
        checkMobile();

        // Add listener
        window.addEventListener('resize', checkMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="home" className="hero-section">
            {/* Video Background */}
            <video
                key={isMobile ? 'mobile' : 'desktop'}
                autoPlay
                loop
                muted
                playsInline
                className="hero-video"
            >
                <source src={isMobile ? "/videos/hero-vertical.mp4" : "/videos/hero-vertical.mp4"} type="video/mp4" />
                {/* Fallback for browsers that do not support the video tag */}
            </video>
            <div className="hero-overlay"></div>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <h1 className="hero-title">Explora el Mundo Submarino</h1>
                <p className="hero-subtitle">
                    Cursos de buceo profesional y experiencias inolvidables con los mejores instructores.
                </p>
                <button className="btn" onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}>
                    Ver Cursos
                </button>
            </div>
        </section>
    );
};

export default Hero;
