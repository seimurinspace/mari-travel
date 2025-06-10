document.addEventListener('DOMContentLoaded', function() {
  // Общие элементы
  const registerForm = document.getElementById('registerForm');
  const loginForm = document.getElementById('loginForm');
  
  // Регистрация
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const userData = {
        email: document.getElementById('reg-email').value,
        username: document.getElementById('reg-username').value,
        password: document.getElementById('reg-password').value
      };
      
      try {
        const response = await UserAPI.register(userData);
        if (response.success) {
          alert('Регистрация успешна!');
          window.location.href = 'login.html';
        }
      } catch (error) {
        console.error('Ошибка регистрации:', error);
        alert('Ошибка регистрации');
      }
    });
  }
  
  // Вход
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const credentials = {
        email: document.getElementById('login-email').value,
        password: document.getElementById('login-password').value
      };
      
      try {
        const response = await UserAPI.login(credentials);
        if (response.success) {
          localStorage.setItem('authToken', response.token);
          alert('Вход выполнен!');
          
          // Получаем список пользователей (пример)
          const users = await UserAPI.getUsers();
          console.log('Список пользователей:', users);
          
          window.location.href = 'index.html';
        }
      } catch (error) {
        console.error('Ошибка входа:', error);
        alert('Неверные данные');
      }
    });
  }
});