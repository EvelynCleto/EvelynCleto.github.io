function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
 }
 
 // Função para formatar o número de telefone
 function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 2) return phoneNumber;
  if (phoneNumberLength < 3) {
      return `(${phoneNumber.slice(0, 2)})`;
  }
  if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  }
  if (phoneNumberLength < 11) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6, 11)}`;
  }
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6, 11)}`;
 }
 
 // Função para inicializar a máscara do telefone
 function inicializarMascaraTelefone() {
  var phoneInput = document.querySelector('#contact-form input[type="tel"]');
   
  // Formata o número de telefone em tempo real
  phoneInput.addEventListener('input', function() {
     const formattedInputValue = formatPhoneNumber(this.value);
     this.value = formattedInputValue;
  });
 }
 
 // Chama a função inicializarMascaraTelefone quando o documento estiver carregado
 document.addEventListener('DOMContentLoaded', inicializarMascaraTelefone);
 document.addEventListener('DOMContentLoaded', function() {
  // Preço fixo por pessoa
  const pricePerPerson = 100;

  // Seleciona o campo de entrada de quantidade de convidados
  const guestsInput = document.getElementById('guests');

  // Seleciona o campo de entrada de preço por pessoa
  const priceInput = document.getElementById('price');

  // Função para calcular e atualizar o preço
  function updatePrice() {
      const guests = parseInt(guestsInput.value, 10);
      if (!isNaN(guests)) {
          const totalPrice = guests * pricePerPerson;
          priceInput.value = totalPrice.toFixed(2); // Formata o preço com duas casas decimais
      } else {
          priceInput.value = ''; // Limpa o campo se o valor não for um número
      }
  }

  // Adiciona o ouvinte de evento ao campo de entrada de quantidade de convidados
  guestsInput.addEventListener('change', updatePrice);

  // Atualiza o preço inicialmente (caso já haja um valor no campo de convidados)
  updatePrice();
});
