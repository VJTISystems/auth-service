let users = [];
let nextId = 1;

class User {
  static async findByEmail(email) {
    return users.find(u => u.email === email) || null;
  }

  static async create({ email, password }) {
    const user = { id: nextId++, email, password };
    users.push(user);
    return user;
  }
}

module.exports = User;
