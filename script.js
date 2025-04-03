// --- Chatbot ---
const chatbotButton = document.getElementById('chatbotButton');
const chatbotContainer = document.getElementById('chatbot-container');
const closeChatbot = document.getElementById('closeChatbot');
const chatbotBody = document.getElementById('chatbot-body');
const chatbotInput = document.getElementById('chatbotInput');
const sendMessage = document.getElementById('sendMessage');

// Abrir el chatbot al hacer clic en el botón
chatbotButton.addEventListener('click', () => {
  chatbotContainer.style.display = 'flex';
  // Mensaje de bienvenida al abrir el chatbot
  if (!chatbotBody.innerHTML.trim()) {
    agregarMensaje('DropBot', '¡Hola! Soy DropBot. ¿En qué puedo ayudarte hoy?');
  }
});

// Cerrar el chatbot
closeChatbot.addEventListener('click', () => {
  chatbotContainer.style.display = 'none';
});

// Enviar mensaje al hacer clic en el botón
sendMessage.addEventListener('click', () => {
  enviarMensaje();
});

// Enviar mensaje al presionar la tecla "Enter"
chatbotInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    enviarMensaje();
  }
});

function enviarMensaje() {
  const message = chatbotInput.value.trim();
  if (message) {
    agregarMensaje('Tú', message);
    chatbotInput.value = '';
    // Respuesta del asistente simulada con respuestas dinámicas
    setTimeout(() => {
      const respuesta = obtenerRespuesta(message);
      agregarMensaje('DropBot', respuesta);
    }, 800);
  }
}

function obtenerRespuesta(message) {
  const msg = message.toLowerCase();
  if (msg.includes('hola')) {
    return '¡Hola! ¿Cómo puedo ayudarte hoy?';
  } else if (msg.includes('ayuda')) {
    return 'Claro, dime en qué necesitas ayuda o qué dudas tienes.';
  } else if (msg.includes('precio')) {
    return 'Para consultar precios, te recomiendo visitar nuestra sección de productos o contactarnos directamente.';
  } else if (msg.includes('contacto')) {
    return 'Puedes contactarnos a través de nuestro correo info@dropi.co o llamarnos al (número de contacto).';
  } else if (msg.includes('proveedores')) {
    return 'Nuestros proveedores verificados cumplen con altos estándares de calidad. ¿Te gustaría más información sobre alguno en particular?';
  } else if (msg.includes('dropshippers')) {
    return 'Ofrecemos soluciones para dropshippers para que inicien su negocio online de manera sencilla.';
  } else if (msg.includes('soluciones')) {
    return 'Contamos con soluciones para proveedores, dropshippers y marcas propias. ¿Cuál te interesa conocer más?';
  } else if (msg.includes('gracias')) {
    return '¡De nada! Si tienes más preguntas, aquí estaré para ayudarte.';
  } else {
    return '¡Gracias por tu mensaje! Estoy aquí para ayudarte en lo que necesites.';
  }
}

function agregarMensaje(remitente, mensaje) {
  const p = document.createElement('p');
  p.classList.add('chatbot-message');
  // Asignar clase según el remitente para estilos diferenciados
  p.classList.add(remitente === 'Tú' ? 'tu' : 'dropbot');
  p.textContent = `${remitente}: ${mensaje}`;
  chatbotBody.appendChild(p);
  chatbotBody.scrollTop = chatbotBody.scrollHeight;
}
