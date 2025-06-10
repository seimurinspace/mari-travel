// Мок API для работы с пользователями
class UserAPI {
  static async register(userData) {
    // Здесь будет fetch к бэкенду
    console.log('Регистрация:', userData);
    
    // Имитация ответа сервера
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            id: Date.now(),
            ...userData
          }
        });
      }, 1000);
    });
  }

  static async login(credentials) {
    // Здесь будет fetch к бэкенду
    console.log('Вход:', credentials);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          token: 'mock-jwt-token',
          user: {
            id: 1,
            email: credentials.email,
            username: 'testuser'
          }
        });
      }, 1000);
    });
  }

  static async getUsers() {
    // Имитация получения списка пользователей
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, email: 'user1@example.com', username: 'user1' },
          { id: 2, email: 'user2@example.com', username: 'user2' }
        ]);
      }, 800);
    });
  }
}