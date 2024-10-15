document.addEventListener("DOMContentLoaded", function () {
  const images = [
      "img/MasajeRelax.jpeg",
      "img/MasajeDeportivo.jpeg",
      "img/MasajeTerapeutico (2).jpeg",
      "img/MasajeAromatizante.jpeg",
      "img/MasajePiedra.jpeg",
      "img/MasajeFacial.jpeg"
  ];
  let currentIndex = 0;

  const carrouselImage = document.getElementById('carrouselImage');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
      carrouselImage.style.opacity = 0; 
      setTimeout(() => {
          carrouselImage.src = images[currentIndex];
          carrouselImage.style.opacity = 1; 
      }, 500); 
  });

  nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
      carrouselImage.style.opacity = 0; 
      setTimeout(() => {
          carrouselImage.src = images[currentIndex];
          carrouselImage.style.opacity = 1; 
      }, 500); 
  });
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section h3').forEach(header => { 
      header.addEventListener('click', () => {
          const section = header.parentElement;
          section.classList.toggle('active');
      });
  });
});

const form = document.getElementById('contact-form');
const submitButton = document.getElementById('submit-button');
const notification = document.getElementById('notification');

form.addEventListener('input', validateForm);
form.addEventListener('submit', handleSubmit);

function validateForm() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const mensaje = document.getElementById('mensaje').value;
  const tipoMasaje = document.getElementById('tipo-masaje').value;

  let valid = true;

  // Validar nombre
  if (nombre.length < 7) {
      const errorElement = document.getElementById('name-error');
      errorElement.textContent = 'El nombre y apellido deben tener al menos 7 letras.';
      errorElement.classList.add('visible');
      valid = false;
  } else {
      document.getElementById('name-error').textContent = '';
      document.getElementById('name-error').classList.remove('visible');
  }

  // Validar correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      const errorElement = document.getElementById('email-error');
      errorElement.textContent = 'Por favor, introduce un correo electrónico válido.';
      errorElement.classList.add('visible');
      valid = false;
  } else {
      document.getElementById('email-error').textContent = '';
      document.getElementById('email-error').classList.remove('visible');
  }

  // Validar teléfono
  if (telefono.length !== 10) {
      const errorElement = document.getElementById('phone-error');
      errorElement.textContent = 'El teléfono debe tener exactamente 10 caracteres.';
      errorElement.classList.add('visible');
      valid = false;
  } else {
      document.getElementById('phone-error').textContent = '';
      document.getElementById('phone-error').classList.remove('visible');
  }

  // Validar mensaje
  if (mensaje.length <= 5) {
      const errorElement = document.getElementById('message-error');
      errorElement.textContent = 'El mensaje debe tener más de 5 letras.';
      errorElement.classList.add('visible');
      valid = false;
  } else {
      document.getElementById('message-error').textContent = '';
      document.getElementById('message-error').classList.remove('visible');
  }

  // Validar tipo de masaje
  if (tipoMasaje === "") {
      const errorElement = document.getElementById('massage-type-error');
      errorElement.textContent = 'Por favor, selecciona un tipo de masaje.';
      errorElement.classList.add('visible');
      valid = false;
  } else {
      document.getElementById('massage-type-error').textContent = '';
      document.getElementById('massage-type-error').classList.remove('visible');
  }

  // Mostrar u ocultar el botón de enviar
  submitButton.style.display = valid ? 'block' : 'none';
}


function handleSubmit(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const mensaje = document.getElementById('mensaje').value;
  const tipoMasaje = document.getElementById('tipo-masaje').value;

  // Mostrar notificación
  notification.innerHTML = `Mensaje enviado exitosamente con los siguientes datos:<br>
      <strong>Nombre:</strong> ${nombre}<br>
      <strong>Correo:</strong> ${email}<br>
      <strong>Teléfono:</strong> ${telefono}<br>
      <strong>Mensaje:</strong> ${mensaje}<br>
      <strong>Tipo de masaje:</strong> ${tipoMasaje}`;
  
  notification.classList.add('visible'); // Añadir clase visible
  notification.style.display = 'block'; // Asegurarse de que se muestre

  // Reiniciar el formulario
  form.reset();
  submitButton.style.display = 'none';
}
