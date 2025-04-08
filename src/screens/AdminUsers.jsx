import { useNavigate } from 'react-router-dom';
import AdminMenu from "@components/admin/AdminMenu";
import { PencilIcon, ShareIcon } from '@heroicons/react/20/solid';

const BASE_PATH = import.meta.env.BASE_URL;

const AdminUsers = () => {
  const navigate = useNavigate();

  // Example data - replace with actual data fetching
  const users = [
    {
      id: 1,
      name: "User 1",
      wa: "+6281234567890",
      can_read_picture: true,
      doa_message: "Sample doa",
      updated_doa_message_at: "2023-10-01T12:00:00Z",
      is_doa_message_reviewed: false,
      has_seen_n_times: 3,
      updated_seen_at: "2023-10-01T12:00:00Z",
      place_at: "Jakarta",
      by: 'putri',
    }
  ];

  const handleShare = (wa) => {
    const message = encodeURIComponent("Check this out!");
    const whatsappUrl = `https://wa.me/${wa.replace(/\+/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEdit = (userId) => {
    navigate(`${BASE_PATH}/admin/user/${userId}/edit`);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
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
      
      console.log(JSON.stringify(users, null, 2));
    };
    
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mb-6">
        <AdminMenu />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
          <div>
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
        
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">WhatsApp</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Can Read Picture</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doa Message</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Views</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Place</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.wa && (
                      <button
                        onClick={() => handleShare(user.wa)}
                        className="text-green-600 hover:text-green-900 focus:outline-none"
                        title="Share link"
                      >
                        <ShareIcon className="h-5 w-5 inline-block" aria-hidden="true" />
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.can_read_picture ? "Yes" : "No"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.doa_message ? "has written" : "empty"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.has_seen_n_times}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.place_at}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="text-indigo-600 hover:text-indigo-900 focus:outline-none mr-3"
                    >
                      <PencilIcon className="h-5 w-5 inline-block" aria-hidden="true" />
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