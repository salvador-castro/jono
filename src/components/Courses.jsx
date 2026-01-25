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
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {courses.map((course, index) => (
                        <div key={index} className="card">
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
