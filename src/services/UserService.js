const User = require('../models/User');

/**
 * UserService - Handles all CRUD operations for User model
 */
class UserService {
  /**
   * CREATE - Create a new user
   * @param {Object} userData - User data object
   * @returns {Promise<Object>} Created user
   */
  static async createUser(userData) {
    try {
      const user = new User(userData);
      const savedUser = await user.save();
      console.log('✅ User created:', savedUser.userId);
      return savedUser;
    } catch (error) {
      console.error('❌ Error creating user:', error.message);
      throw error;
    }
  }

  /**
   * READ - Get a user by ID
   * @param {String} userId - User ID
   * @returns {Promise<Object>} User object
   */
  static async getUserById(userId) {
    try {
      const user = await User.get(userId);
      if (!user) {
        throw new Error(`User with ID ${userId} not found`);
      }
      console.log('✅ User retrieved:', userId);
      return user;
    } catch (error) {
      console.error('❌ Error getting user:', error.message);
      throw error;
    }
  }

  /**
   * READ - Get all users (scan operation)
   * @param {Object} options - Query options (limit, startKey, etc.)
   * @returns {Promise<Array>} Array of users
   */
  static async getAllUsers(options = {}) {
    try {
      const { limit = 10 } = options;
      const users = await User.scan().limit(limit).exec();
      console.log(`✅ Retrieved ${users.length} users`);
      return users;
    } catch (error) {
      console.error('❌ Error getting all users:', error.message);
      throw error;
    }
  }

  /**
   * READ - Query users by email (using GSI)
   * @param {String} email - User email
   * @returns {Promise<Array>} Array of users matching email
   */
  static async getUserByEmail(email) {
    try {
      const users = await User.query('email').eq(email).using('EmailIndex').exec();
      console.log(`✅ Found ${users.length} user(s) with email: ${email}`);
      return users;
    } catch (error) {
      console.error('❌ Error querying user by email:', error.message);
      throw error;
    }
  }

  /**
   * UPDATE - Update a user
   * @param {String} userId - User ID
   * @param {Object} updates - Object with fields to update
   * @returns {Promise<Object>} Updated user
   */
  static async updateUser(userId, updates) {
    try {
      // Get the existing user first
      const user = await User.get(userId);
      if (!user) {
        throw new Error(`User with ID ${userId} not found`);
      }

      // Update the user
      const updatedUser = await User.update({ userId }, updates);
      console.log('✅ User updated:', userId);
      return updatedUser;
    } catch (error) {
      console.error('❌ Error updating user:', error.message);
      throw error;
    }
  }

  /**
   * DELETE - Delete a user
   * @param {String} userId - User ID
   * @returns {Promise<void>}
   */
  static async deleteUser(userId) {
    try {
      await User.delete(userId);
      console.log('✅ User deleted:', userId);
    } catch (error) {
      console.error('❌ Error deleting user:', error.message);
      throw error;
    }
  }

  /**
   * Batch create multiple users
   * @param {Array} usersData - Array of user objects
   * @returns {Promise<Array>} Array of created users
   */
  static async batchCreateUsers(usersData) {
    try {
      const users = usersData.map((data) => new User(data));
      const savedUsers = await User.batchPut(users);
      console.log(`✅ Batch created ${savedUsers.length} users`);
      return savedUsers;
    } catch (error) {
      console.error('❌ Error batch creating users:', error.message);
      throw error;
    }
  }
}

module.exports = UserService;
