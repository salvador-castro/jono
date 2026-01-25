const Footer = () => {
    return (
        <footer style={{ position: 'relative', overflow: 'hidden', padding: '60px 0', textAlign: 'center', color: '#fff' }}>
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
            >
                <source src="/videos/footerJono.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 92, 153, 0.85)', // Blue overlay similar to previous background
                zIndex: 1
            }}></div>

            {/* Content */}
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <h3 style={{ fontSize: '1.8rem', marginBottom: '15px', fontWeight: 'bold' }}>Jono Buceo</h3>
                <p style={{ marginBottom: '30px', color: '#e0f7fa', fontSize: '1.1rem' }}>Explorando las profundidades juntos.</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                    <a
                        href="https://www.instagram.com/jonobuceo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#fff',
                            textDecoration: 'none',
                            fontSize: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            opacity: '0.9',
                            transition: 'opacity 0.3s ease'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        Seguinos en Instagram
                    </a>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>&copy; {new Date().getFullYear()} Jono Buceo. Todos los derechos reservados.</p>
                <p style={{ fontSize: '0.8rem', marginTop: '10px', color: 'rgba(255,255,255,0.4)' }}>
                    Desarrollado por <a href="https://salvadorcastro.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Salva Castro</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
