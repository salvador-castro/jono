import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        cuerpo: ''
    });

    const [status, setStatus] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Clear error when user types
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }

        // Clear status message when user types again
        if (status) setStatus(null);

        if (name === 'telefono') {
            const re = /^[0-9\b]+$/;
            if (value === '' || re.test(value)) {
                setFormData({ ...formData, [name]: value });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }

        // Real-time check for specific rules if needed, 
        // but user asked for "ya salir" (could mean immediately or on blur). 
        // Let's do it on blur for better UX or on specific condition.
        if (name === 'email' && value.length > 0 && !value.includes('@')) {
            // We can set it here if we want immediate feedback while typing
            // but usually blur is better. However, to strictly follow "ya salir" (already show),
            // I'll leave it for blur to avoid annoying resizing, or use a separate logic.
            // Let's rely on handleBlur for the specific error message as standard practice.
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            if (value && !value.includes('@')) {
                setErrors({ ...errors, email: 'El email debe contener un @' });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Enviando...' });

        try {
            const response = await fetch("https://formsubmit.co/ajax/salvacastro06@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus({ type: 'success', message: '¡Gracias! Tu mensaje ha sido enviado correctamente.' });
                setFormData({ nombre: '', apellido: '', email: '', telefono: '', cuerpo: '' });
                // Clear success message after 5 seconds
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus({ type: 'error', message: 'Hubo un error al enviar el mensaje. Intenta nuevamente.' });
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus({ type: 'error', message: 'Error de conexión. Verifica tu internet.' });
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <h2 className="section-title">Contáctanos</h2>

                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '40px',
                    alignItems: 'stretch',
                    flexWrap: 'wrap'
                }}>
                    {/* Map Card */}
                    <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <h3 style={{ fontSize: '1.5rem', color: '#005c99', textAlign: 'center' }}>¿Dónde estamos?</h3>
                        <div className="card" style={{ flex: 1, minHeight: '400px' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d666.8118412481284!2d-58.520866253390395!3d-34.474547231088636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb039d1bb40df%3A0x8e83aa412d04d25d!2sClub%20Atl%C3%A9tico%20Acassuso!5e0!3m2!1ses-419!2sar!4v1769307083413!5m2!1ses-419!2sar"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '300px', display: 'block' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <h3 style={{ fontSize: '1.5rem', color: '#005c99', textAlign: 'center' }}>¿Tenés dudas? Escribinos</h3>
                        <div className="card card-content">
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Nombre</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            placeholder="Ej: Juan"
                                            required
                                            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                        />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Apellido</label>
                                        <input
                                            type="text"
                                            name="apellido"
                                            value={formData.apellido}
                                            onChange={handleChange}
                                            placeholder="Ej: Pérez"
                                            required
                                            style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Ej: juan@email.com"
                                        required
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        title="Por favor ingrese un email válido"
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '6px',
                                            border: errors.email ? '1px solid red' : '1px solid #ddd'
                                        }}
                                    />
                                    {errors.email && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '5px', display: 'block' }}>{errors.email}</span>}
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Teléfono</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        placeholder="Ej: 1112345678"
                                        required
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        title="Solo se permiten números"
                                        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd' }}
                                    />
                                </div>

                                <div>
                                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500' }}>Mensaje</label>
                                    <textarea
                                        name="cuerpo"
                                        value={formData.cuerpo}
                                        onChange={handleChange}
                                        placeholder="Escribe tu consulta aquí..."
                                        required
                                        rows="4"
                                        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ddd', fontFamily: 'inherit' }}
                                    ></textarea>
                                </div>

                                {status && (
                                    <div style={{
                                        padding: '10px',
                                        borderRadius: '6px',
                                        textAlign: 'center',
                                        backgroundColor: status.type === 'success' ? '#e8f5e9' : (status.type === 'loading' ? '#e3f2fd' : '#ffebee'),
                                        color: status.type === 'success' ? '#2e7d32' : (status.type === 'loading' ? '#1565c0' : '#c62828'),
                                        border: `1px solid ${status.type === 'success' ? '#a5d6a7' : (status.type === 'loading' ? '#90caf9' : '#ef9a9a')}`,
                                        marginBottom: '10px',
                                        fontSize: '0.9rem',
                                        fontWeight: '500'
                                    }}>
                                        {status.message}
                                    </div>
                                )}

                                <button type="submit" className="btn" style={{ width: '100%', marginTop: '5px' }} disabled={status?.type === 'loading'}>
                                    {status?.type === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
