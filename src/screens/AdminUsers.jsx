import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminMenu from "@components/admin/AdminMenu";
import { PencilIcon, ShareIcon, DocumentDuplicateIcon, CheckCircleIcon, XCircleIcon, IdentificationIcon, TrashIcon } from '@heroicons/react/20/solid';
import { ss_users2 } from '../data/chatData';
import { SSUsersController } from '../controllers/ss_users_controller';

const BASE_PATH = import.meta.env.BASE_URL;

const AdminUsers = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [groupedUsers, setGroupedUsers] = useState({});
  const [byValues, setByValues] = useState([]);
  const [selectedBy, setSelectedBy] = useState('all');

  useEffect(() => {
    loadUsers();
    loadGroupedUsers();
    loadByValues();
  }, []);

  const loadUsers = async () => {
    try {
      const fetchedUsers = await SSUsersController.getUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      alert('Error loading users');
    }
  };

  const loadGroupedUsers = async () => {
    try {
      const groups = await SSUsersController.getUsersByGroup();
      setGroupedUsers(groups);
    } catch (error) {
      alert('Error loading user groups');
    }
  };

  const loadByValues = async () => {
    try {
      const values = await SSUsersController.getUniqueByValues();
      setByValues(values);
    } catch (error) {
      alert('Error loading by values');
    }
  };

  const handleShare = async (wa, userId, userName) => {
    const message = encodeURIComponent(
      `Hello dear ${userName},\n\nWe've been preparing something very special and meaningful, and we're finally ready to share it with you. It's a joyful surprise that means a lot to us, and we hope it will make you smile too.\nClick the link below to discover it:\n\nhttps://z-anah.github.io/sakinahstory/open/user/${userId}\n\n`
    );
    const whatsappUrl = `https://wa.me/${wa.replace(/\+/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
    try {
      await SSUsersController.updateUser(userId, { shared: true });
      await loadUsers();
    } catch (error) {
      console.error('Error updating shared status:', error);
    }
  };

  const handleCopyId = async (id) => {
    try {
      await navigator.clipboard.writeText(id);
      alert(`ID ${id} copied to clipboard`);
    } catch (error) {
      console.error('Error updating shared status:', error);
    }
  };

  const handleCopyMessage = async (userId) => {
    const user = users.find(user => user.id === userId);
    if (user) {
      const message = `Hello dear ${user.name},\n\nWe've been preparing something very special and meaningful, and we're finally ready to share it with you. It's a joyful surprise that means a lot to us, and we hope it will make you smile too.\nClick the link below to discover it:\n\nhttps://z-anah.github.io/sakinahstory/open/user/${userId}\n\n`;
      try {
        await navigator.clipboard.writeText(message);
        await SSUsersController.updateUser(userId, { shared: true });
        await loadUsers();
        alert('Message copied to clipboard!');
      } catch (error) {
        console.error('Failed to copy message:', error);
        alert('Failed to copy message. Please try again.');
      }
    } else {
      alert('User not found');
    }
  };

  const handleCopyAllMessagesByWeni = async () => {
    const weniUsers = users.filter(user => user.by === 'weni');
    const messages = weniUsers.map(user => {
      return `Hello dear ${user.name},\n\nWe've been preparing something very special and meaningful, and we're finally ready to share it with you. It's a joyful surprise that means a lot to us, and we hope it will make you smile too.\nClick the link below to discover it:\n\nhttps://z-anah.github.io/sakinahstory/open/user/${user.id}\n\n`;
    }).join('\n\n');

    try {
      console.log(messages);
    } catch (error) {
      console.error('Failed to copy all messages:', error);
      alert('Failed to copy all messages. Please try again.');
    }
  }
  const handleEdit = (userId) => {
    navigate(`${BASE_PATH}/admin/user/${userId}/edit`);
  };

  const handleFileUpload = async (event) => {
    try {
      const file = event.target.files[0];
      const users = await SSUsersController.parseCSVFile(file);
      console.log(JSON.stringify(users, null, 2));
    } catch (error) {
      alert('Error processing file');
    }
  };

  const handleImportSSUsers = async () => {
    try {
      const result = await SSUsersController.importUsers(ss_users2);
      alert(result.message);
      await loadUsers();
    } catch (error) {
      alert('Error importing users');
    }
  };

  const handleDelete = async (userId) => {
    if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
      return;
    }

    try {
      await SSUsersController.deleteUser(userId);
      await loadUsers();
      await loadGroupedUsers();
    } catch (error) {
      alert('Error deleting user');
    }
  };

  const handleCreate = () => {
    navigate(`${BASE_PATH}/admin/user/create`);
  };

  const filteredUsers = selectedBy === 'all'
    ? users
    : users.filter(user => (user.by || 'Unknown') === selectedBy);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mb-6">
        <AdminMenu />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Users by Inviter</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries(groupedUsers).map(([by, count]) => (
              <div key={by} className="bg-gray-50 p-4 rounded-lg">
                <div className="font-medium">{by}</div>
                <div className="text-2xl font-bold text-indigo-600">{count}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <div className="flex gap-4 items-center">
            <button
              onClick={handleCopyAllMessagesByWeni}
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            >
              Copy All Messages by Weni 
            </button>
            <button
              onClick={handleCreate}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Create User
            </button>
            <button
              onClick={handleImportSSUsers}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Import
            </button>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
            />
          </div>
        </div>

        <div className="flex items-center mb-4 justify-between">
          <select
            value={selectedBy}
            onChange={(e) => setSelectedBy(e.target.value)}
            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="all">All By</option>
            {byValues.map(by => (
              <option key={by} value={by}>{by}</option>
            ))}
          </select>
        </div>
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shared</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Can Read PIC</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doa Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seen X Times</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.shared ? (
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircleIcon className="h-5 w-5 text-gray-300" />
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.can_read_picture ? "Yes" : "No"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.doa_message ? "has written" : "empty"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.has_seen_n_times}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.by || '-'}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">

                    <button
                      onClick={() => handleCopyId(user.id)}
                      className="text-gray-200 hover:text-gray-300 focus:outline-none mr-3"
                      title="Copy ID"
                    >
                      <IdentificationIcon className="h-5 w-5 inline-block" aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => handleShare(user.wa, user.id, user.name)}
                      className={`text-gray-100 hover:text-gray-200 focus:outline-none mr-3 ${user.wa ? 'text-green-500' : 'text-gray-300'}`}
                      title="Share link"
                      disabled={!user.wa}
                    >
                      <ShareIcon className="h-5 w-5 inline-block" aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => handleCopyMessage(user.id)}
                      className="text-gray-600 hover:text-gray-900 focus:outline-none mr-3"
                      title="Copy Message"
                    >
                      <DocumentDuplicateIcon className="h-5 w-5 inline-block" aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none"
                    >
                      <PencilIcon className="h-5 w-5 inline-block" aria-hidden="true" />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-600 hover:text-red-900 focus:outline-none ml-3"
                      title="Delete User"
                    >
                      <TrashIcon className="h-5 w-5 inline-block" aria-hidden="true" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminUsers;