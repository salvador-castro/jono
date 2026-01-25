const Courses = () => {
    const courses = [
        {
            title: "Bautismo",
            desc: "Descubrí el mundo subacuático de forma segura y divertida. Tu primera respiración bajo el agua sin necesidad de experiencia previa.",
            price: "$0",
            image: "/cursos/course-bautismo.png"
        },
        {
            title: "Open Water Diver (OWD)",
            desc: "Tu pasaporte al buceo. Aprendé los fundamentos teóricos y prácticos para bucear de forma autónoma en cualquier lugar del mundo.",
            price: "$250.000",
            image: "/cursos/course-openwater.png"
        },
        {
            title: "Advanced Open Water",
            desc: "Perfeccioná tu flotabilidad y navegación. Explorá nuevas aventuras como buceo profundo, nocturno y en barcos hundidos.",
            price: "$450.000",
            image: "/cursos/course-advanced.png"
        },
        {
            title: "Traje Seco",
            desc: "Olvídate del frío y buceá todo el año. Aprendé las técnicas para usar traje seco y extendé tus límites a aguas frías como la Patagonia.",
            price: "Consultar",
            image: "/cursos/course-dry-suit.png"
        },
        {
            title: "Rescate (Rescue)",
            desc: "Convertite en el mejor compañero. Desarrollá habilidades críticas para prevenir y gestionar emergencias, aumentando tu confianza bajo el agua.",
            price: "Consultar",
            image: "/cursos/course-rescue.png"
        },
        {
            title: "Buzo Nitrox",
            desc: "Extendé tu tiempo de fondo y reducí la fatiga. Aprendé a planificar buceos con aire enriquecido para inmersiones más largas y seguras.",
            price: "Consultar",
            image: "/cursos/course-tdi-nitrox.png"
        },
        {
            title: "Nitrox Avanzado",
            desc: "El primer paso al buceo técnico. Aprendé a usar mezclas de oxígeno hasta el 100% para acelerar tu descompresión de forma segura.",
            price: "Consultar",
            image: "/cursos/course-tdi-adv-nitrox.png"
        },
        {
            title: "Procedimientos de Descompresión",
            desc: "Rompé el límite de no-descompresión. Planificá y ejecutá inmersiones profundas con paradas de descompresión obligatorias.",
            price: "Consultar",
            image: "/cursos/course-tdi-deco.png"
        },
        {
            title: "Rango Extendido",
            desc: "Superá los 40 metros. Entrenate en el uso de mezclas de gases y equipos redundantes para explorar más allá del buceo recreativo.",
            price: "Consultar",
            image: "/cursos/course-tdi-extended-range.png"
        },
        {
            title: "Buzo Trimix",
            desc: "La cima del buceo exploratorio. Aprendé a usar Helio para reducir la narcosis y alcanzar grandes profundidades con claridad mental.",
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
