import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const [formStatus, setFormStatus] = useState('Send');

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Submitting');
        const { name, email, message } = e.target.elements;
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value
        };
        console.log(conFom);

        emailjs.sendForm('service_id', 'template_hmh6ww4', form.current, 'dquUmdLbtmlzfheBF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setFormStatus('Sent!');
    };


    return (

        <div className="container mt-5" id="contact">
            <h2 className="mb-3" style={{fontFamily: "Montserrat", fontWeight: "bold" }}>Contact me!</h2>
            <form ref={form} onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name" style={{fontFamily: "Montserrat" }}>
                        Name
                    </label>
                    <input className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="email" style={{fontFamily: "Montserrat" }}>
                        Email
                    </label>
                    <br />
                    <input type="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message" style={{fontFamily: "Montserrat"}}>
                        Message
                    </label>
                    <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>
                <button className="btn" style={{backgroundColor: "#c75000", color: "#fff"}} type="submit">
                    {formStatus}
                </button>
            </form>
        </div>
    )
};

export default Contact;