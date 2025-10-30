const User = require('./model');

class UserService {
  static async create(userData) {
    const user = new User(userData);
    return await user.save();
  }

  static async getById(userId) {
    const user = await User.get(userId);
    if (!user) throw new Error(`User ${userId} not found`);
    return user;
  }

  static async getAll(options = {}) {
    const { limit = 10 } = options;
    return await User.scan().limit(limit).exec();
  }

  static async getByEmail(email) {
    return await User.query('email').eq(email).using('EmailIndex').exec();
  }

  static async update(userId, updates) {
    const user = await User.get(userId);
    if (!user) throw new Error(`User ${userId} not found`);
    return await User.update({ userId }, updates);
  }

  static async delete(userId) {
    await User.delete(userId);
  }
}

module.exports = UserService;
