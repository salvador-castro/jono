const Courses = () => {
    const courses = [
        {
            title: "Bautismo",
            desc: "Tu primera experiencia bajo el agua. Ideal para principiantes que quieren probar el buceo.",
            price: "$0",
            image: "/cursos/course-bautismo.png"
        },
        {
            title: "Open Water Diver",
            desc: "El curso más popular del mundo. Obtén tu certificación para bucear de forma autónoma.",
            price: "$250.000",
            image: "/cursos/course-openwater.png"
        },
        {
            title: "Advanced Open Water",
            desc: "Lleva tus habilidades al siguiente nivel con inmersiones de aventura y especialidades.",
            price: "$450.000",
            image: "/cursos/course-advanced.png"
        },
        {
            title: "SDI Nitrox Diver",
            desc: "Más tiempo bajo el agua, más seguridad. Hoy es casi 'obligatorio' en muchos centros.",
            price: "Consultar",
            image: "/cursos/course-nitrox.png"
        },
        {
            title: "SDI Dry Suit Diver",
            desc: "Clave para aguas frías (Patagonia, lagos, Europa, etc.). Amplía muchísimo los destinos posibles.",
            price: "Consultar",
            image: "/cursos/course-dry-suit.png"
        },
        {
            title: "SDI Rescue Diver",
            desc: "El curso que más mejora tu cabeza como buceador. Gestión de emergencias, prevención y autosuficiencia.",
            price: "Consultar",
            image: "/cursos/course-rescue.png"
        },
        {
            title: "TDI Nitrox Diver",
            desc: "Puerta de entrada al mundo técnico. Base para todos los cursos siguientes.",
            price: "Consultar",
            image: "/cursos/course-tdi-nitrox.png"
        },
        {
            title: "TDI Advanced Nitrox Diver",
            desc: "Uso de oxígeno alto para descompresión. Fundamental para seguridad en inmersiones largas.",
            price: "Consultar",
            image: "/cursos/course-tdi-adv-nitrox.png"
        },
        {
            title: "TDI Decompression Procedures Diver",
            desc: "Aprendés a planificar y ejecutar descompresión real. Acá empieza el buceo técnico 'de verdad'.",
            price: "Consultar",
            image: "/cursos/course-tdi-deco.png"
        },
        {
            title: "TDI Extended Range Diver",
            desc: "Más profundidad + más tiempo + más complejidad. Uso avanzado de gases y procedimientos.",
            price: "Consultar",
            image: "/cursos/course-tdi-extended-range.png"
        },
        {
            title: "TDI Trimix Diver",
            desc: "El estándar para buceo profundo técnico. Reduce narcosis y riesgos a grandes profundidades.",
            price: "Consultar",
            image: "/cursos/course-tdi-trimix.png"
        }
    ];

    const handleReservation = (courseTitle) => {
        const message = `Hola quiero mas info sobre el curso ${courseTitle}`;
        const url = `https://wa.me/5491132804729?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section id="courses" className="section" style={{ backgroundColor: 'transparent' }}>
            <div className="container">
                <h2 className="section-title">Cursos Disponibles</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
                    {courses.map((course, index) => (
                        <div key={index} className="card" style={{ flex: '0 1 350px', display: 'flex', flexDirection: 'column' }}>
                            <img src={course.image} alt={course.title} className="card-image" />
                            <div className="card-content">
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{course.title}</h3>
                                <p style={{ marginBottom: '20px', color: '#555' }}>{course.desc}</p>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary)' }}>{course.price}</span>
                                    <button
                                        className="btn"
                                        style={{ padding: '8px 16px', fontSize: '0.9rem' }}
                                        onClick={() => handleReservation(course.title)}
                                    >
                                        Reservar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Courses;
