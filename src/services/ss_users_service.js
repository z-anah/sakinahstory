import { collection, addDoc, getDocs, getDoc, updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

const COLLECTION_NAME = 'ss_users';

export const SSUsersService = {
  async getAllUsers() {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME));
    const users = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    return users.sort((a, b) => {
      if (a.description && b.description) {
        const descComp = a.description.localeCompare(b.description);
        if (descComp !== 0) return descComp;
      }
      return (a.name || '').localeCompare(b.name || '');
    });
  },

  async importUsers(users) {
    const usersRef = collection(db, COLLECTION_NAME);
    return Promise.all(users.map(user => addDoc(usersRef, user)));
  },

  async updateUser(userId, userData) {
    const userRef = doc(db, COLLECTION_NAME, userId);
    return updateDoc(userRef, userData);
  },

  async getUser(userId) {
    const docRef = doc(db, COLLECTION_NAME, userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    throw new Error('User not found');
  },

  async getUsersByGroup() {
    const users = await this.getAllUsers();
    return users.reduce((groups, user) => {
      const by = user.by || 'Unknown';
      if (!groups[by]) {
        groups[by] = 0;
      }
      groups[by]++;
      return groups;
    }, {});
  },

  async getUniqueByValues() {
    const users = await this.getAllUsers();
    return [...new Set(users.map(user => user.by || 'Unknown'))].sort();
  },

  async getUsersWithDoaMessages() {
    const users = await this.getAllUsers();
    return users
      .filter(user => user.doa_message && user.doa_message.trim() !== '')
      .map(user => ({
        name: user.name || 'Anonymous',
        location: user.place_at || 'Unknown',
        date: user.updated_doa_message_at ? new Date(user.updated_doa_message_at).toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true
        }) : 'Unknown',
        rawDate: user.updated_doa_message_at,
        message: user.doa_message
      }))
      .sort((a, b) => {
        if (!a.rawDate) return 1;
        if (!b.rawDate) return -1;
        return new Date(b.rawDate) - new Date(a.rawDate);
      });
  },

  async updateUserMessage(userId, message) {
    const userRef = doc(db, COLLECTION_NAME, userId);
    return updateDoc(userRef, {
      doa_message: message,
      updated_doa_message_at: new Date().toISOString()
    });
  }
};
