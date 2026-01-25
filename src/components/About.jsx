const About = () => {
    const instructors = [
        {
            name: "Fernando Jara",
            role: "Master Instructor",
            certs: [
                "PADI Master Scuba Diver Trainer",
                "EFR Instructor Trainer",
                "Rescue Diver Instructor",
                "Deep Dive Specialist",
                "Night Diver Instructor",
                "Navigation Specialty",
                "Search & Recovery"
            ],
            image: "/instructores/instructor1.jpg"
        },
        {
            name: "Claudio Bravo",
            role: "Lead Technical Instructor",
            certs: [
                "TDI Advanced Trimix Diver",
                "TDI Extended Range Instructor",
                "Full Cave Diver",
                "CCR Rebreather Diver",
                "Advanced Wreck Diver",
                "Gas Blender Instructor",
                "Sidemount Technical Diver"
            ],
            image: "/instructores/instructor2.jpg"
        }
    ];

    return (
        <section id="about" className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <h2 className="section-title">Nuestros Instructores</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', paddingTop: '40px' }}>
                    {instructors.map((inst, index) => (
                        <div key={index} className="card" style={{
                            position: 'relative',
                            marginTop: '40px',
                            overflow: 'visible',
                            border: '1px solid #e0e0e0',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            paddingBottom: '30px'
                        }}>
                            <div
                                style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    overflow: 'hidden',
                                    margin: '-60px auto 20px',
                                    border: '5px solid white',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                    position: 'relative',
                                    zIndex: 2,
                                    backgroundColor: '#eee'
                                }}
                            >
                                <img src={inst.image} alt={inst.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>

                            <div className="card-content" style={{ textAlign: 'center', paddingTop: '10px' }}>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '5px' }}>{inst.name}</h3>
                                <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '25px', fontSize: '1.1rem' }}>{inst.role}</p>

                                <div style={{ textAlign: 'left', padding: '0 20px' }}>
                                    <h4 style={{
                                        fontSize: '1rem',
                                        textTransform: 'uppercase',
                                        color: '#888',
                                        letterSpacing: '1px',
                                        marginBottom: '15px',
                                        borderBottom: '1px solid #eee',
                                        paddingBottom: '10px',
                                        fontWeight: '600'
                                    }}>
                                        Certificaciones & Especialidades
                                    </h4>
                                    <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
                                        {inst.certs.map((cert, i) => (
                                            <li key={i} style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '10px',
                                                fontSize: '0.95rem',
                                                color: '#444'
                                            }}>
                                                <span style={{ color: 'var(--secondary)', fontWeight: 'bold' }}>✓</span>
                                                {cert}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
