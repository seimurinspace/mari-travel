document.addEventListener('DOMContentLoaded', function() {
  // Инициализация карты
  const map = L.map('map').setView([56.642139, 47.880842], 15);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  
  // Маркер
  const officeIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
  });
  
  L.marker([56.642139, 47.880842], {icon: officeIcon}).addTo(map)
    .bindPopup('Наш офис<br>г. Йошкар-Ола, Кремлёвская улица, д. 44')
    .openPopup();
  
  // Интерактив для телефона
  const phoneLink = document.querySelector('.phone-link');
  phoneLink.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Имитация звонка на номер: ' + this.textContent.trim());
  });
  
  // Интерактив для адреса
  const addressText = document.querySelector('.address-text');
  addressText.addEventListener('click', function() {
    map.flyTo([56.642139, 47.880842], 18, {
      duration: 1.5
    });
  });
});