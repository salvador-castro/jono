const About = () => {
    const instructors = [
        {
            name: "Fernando Jara",
            role: "Master Instructor",
            certs: ["PADI Master", "Rescue Diver", "Deep Dive", "EFR Instructor", "Night Diver"],
            image: "/instructores/instructor1.jpg"
        },
        {
            name: "Claudio Bravo",
            role: "Lead Instructor",
            certs: ["Nitrox", "Technical Tech", "Cave Diver", "Wreck Diver", "Sidemount"],
            image: "/instructores/instructor2.jpg"
        }
    ];

    return (
        <section id="about" className="section" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <h2 className="section-title">Instructores</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', paddingTop: '40px' }}>
                    {instructors.map((inst, index) => (
                        <div key={index} className="card" style={{
                            position: 'relative',
                            marginTop: '40px',
                            overflow: 'visible',
                            border: '1px solid #e0e0e0', // Added border
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
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
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{inst.name}</h3>
                                <p style={{ color: 'var(--primary)', fontWeight: 'bold', marginBottom: '15px' }}>{inst.role}</p>
                                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '8px' }}>
                                    {inst.certs.map((cert, i) => (
                                        <span key={i} style={{
                                            background: 'var(--secondary)',
                                            color: '#fff',
                                            padding: '6px 12px',
                                            borderRadius: '20px',
                                            fontSize: '0.85rem',
                                            fontWeight: '500',
                                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                        }}>
                                            {cert}
                                        </span>
                                    ))}
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
