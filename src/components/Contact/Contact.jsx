import  { useRef } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
  
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_37ueoit', 'template_yx035tk', form.current, 'F5_8rjBDwNGJd00MU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
  
    return (
    <div className="contactContainer">
      <div className="contactBanner">
        <img className="overlayImage" src="https://d1ih8jugeo2m5m.cloudfront.net/2022/02/tecnicas-de-atencion-al-cliente-1200x685.jpg" alt="" />
        <div className="overlayText">
          <h2>TE ACOMPAÑAMOS</h2>
          <p>SURFACE cuenta con un grupo de asesores expertos en ventas, que te guiarán en todo momento para poder resolver las dudas que tengas.</p>
        </div>
      </div>
      <div className="contactInfo">
        <div className="contactBox">
          <h3>¿Tienes alguna duda?</h3>
          <p>Nuestros asesores están listos para atenderte con cualquier consultar sobre tu pedido o información en general de la tienda Online.</p>
        </div>
        <div className="contactBox">
          <h3>¿Necesitás ayuda?</h3>
          <p>Preguntá a nuestro servicio de atención al cliente y te responderemos a la brevedad a través de nuestro email.</p>
        </div>
      </div>
      <h2>Contactate con nosotros</h2>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Escribe tu nombre"/>
        <input type="email" name="user_email" placeholder="Escribe tu email"/>
        <textarea name="message" placeholder="Escribe tu mensaje"/>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Contact;
