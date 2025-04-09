import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AdminMenu from "@components/admin/AdminMenu";
import { SSUsersService } from '../services/ss_users_service';

const AdminUserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    wa: '',
    can_read_picture: false,
    doa_message: '',
    place_at: '',
    shared: false,
    by: ''  // Add this line
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await SSUsersService.getUser(id);
        setFormData(userData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch user data');
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccessMessage('');
    
    try {
      await SSUsersService.updateUser(id, formData);
      setSuccessMessage('Changes saved successfully!');
      setTimeout(() => setSuccessMessage(''), 3000); // Clear success message after 3 seconds
    } catch (error) {
      setError('Failed to update user');
    } finally {
      setSaving(false);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <AdminMenu />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="bg-white shadow rounded-lg p-6">
              <div className="space-y-6">
                {[1].map((i) => (
                  <div key={i} className="h-10 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mb-6">
        <AdminMenu />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Edit User</h1>
        
        {successMessage && (
          <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            {successMessage}
          </div>
        )}
        
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="bg-white shadow rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mt-4">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  disabled={saving}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mt-4">WhatsApp</label>
                <input
                  type="text"
                  name="wa"
                  value={formData.wa}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  disabled={saving}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mt-4">Doa Message</label>
                <textarea
                  name="doa_message"
                  value={formData.doa_message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  disabled={saving}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mt-4">Place</label>
                <input
                  type="text"
                  name="place_at"
                  value={formData.place_at}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  disabled={saving}
                />
              </div>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  name="can_read_picture"
                  checked={formData.can_read_picture}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  disabled={saving}
                />
                <label className="ml-2 block text-sm text-gray-900">Can Read Picture</label>
              </div>

              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  name="shared"
                  checked={formData.shared}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  disabled={saving}
                />
                <label className="ml-2 block text-sm text-gray-900">Shared</label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mt-4">Added By</label>
                <input
                  type="text"
                  name="by"
                  value={formData.by}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  disabled={saving}
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  disabled={saving}
                  className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="relative ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
                >
                  {saving ? (
                    <>
                      <span className="animate-spin inline-block mr-2">⭮</span>
                      Saving...
                    </>
                  ) : (
                    'Save Changes'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminUserEdit;

