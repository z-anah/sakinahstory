import { SSUsersService } from '../services/ss_users_service';

export const SSUsersController = {
  async getUsers() {
    try {
      return await SSUsersService.getAllUsers();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  },

  async importUsers(users) {
    try {
      await SSUsersService.importUsers(users);
      return { success: true, message: 'Successfully imported users!' };
    } catch (error) {
      console.error('Error importing users:', error);
      throw error;
    }
  },

  async getUsersByGroup() {
    try {
      return await SSUsersService.getUsersByGroup();
    } catch (error) {
      console.error('Error fetching user groups:', error);
      throw error;
    }
  },

  async updateUser(userId, userData) {
    try {
      await SSUsersService.updateUser(userId, userData);
      return { success: true, message: 'Successfully updated user!' };
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  },

  async deleteUser(userId) {
    try {
      await SSUsersService.deleteUser(userId);
      return { success: true, message: 'Successfully deleted user!' };
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  },

  async getUniqueByValues() {
    try {
      return await SSUsersService.getUniqueByValues();
    } catch (error) {
      console.error('Error fetching unique by values:', error);
      throw error;
    }
  },

  parseCSVFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const text = e.target.result;
          const rows = text.split('\n');
          const headers = rows[0].split(',');
          const users = rows.slice(1).map(row => {
            const values = row.split(',');
            const user = {};
            headers.forEach((header, index) => {
              user[header.trim()] = values[index]?.trim();
            });
            return user;
          });
          resolve(users);
        } catch (error) {
          reject(error);
        }
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }
};
