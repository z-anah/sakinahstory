import { useState, useEffect } from "react";
import AdminMenu from "@components/admin/AdminMenu";
import { SSUsersService } from '../services/ss_users_service';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    number_of_users: 0,
    number_of_messages: 0,
    number_of_gifts: 0,
    number_of_places: 0,
    number_of_seen: 0,
    number_of_unseen: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const users = await SSUsersService.getAllUsers();
        const stats = {
          number_of_users: users.length,
          number_of_messages: users.filter(u => u.doa_message?.trim()).length,
          number_of_places: new Set(users.filter(u => u.place_at).map(u => u.place_at)).size,
          number_of_seen: users.filter(u => u.has_seen_n_times > 0).length,
          number_of_unseen: users.filter(u => !u.has_seen_n_times).length,
          number_of_gifts: users.filter(u => u.shared).length
        };
        setStats(stats);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="mb-6">
          <AdminMenu />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
            <div className="grid grid-cols-1 gap-6">
              {[1,2,3,4].map((i) => (
                <div key={i} className="bg-gray-200 h-32 rounded-lg"></div>
              ))}
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
        
        <div className="space-y-8">
          {/* User Statistics */}
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-700">Users</h2>
              <p className="text-3xl font-bold text-indigo-600">{stats.number_of_users}</p>
              <p className="text-sm text-gray-500 mt-2">Total registered users in the system</p>
            </div>
          </div>

          {/* Message Statistics */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 my-4">Message Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-700">Messages</h2>
                <p className="text-3xl font-bold text-indigo-600">{stats.number_of_messages}</p>
                <p className="text-sm text-gray-500 mt-2">Total messages exchanged</p>
              </div>
              
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-700">Seen</h2>
                <p className="text-3xl font-bold text-indigo-600">{stats.number_of_seen}</p>
                <p className="text-sm text-gray-500 mt-2">Messages that have been read</p>
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-700">Unseen</h2>
                <p className="text-3xl font-bold text-indigo-600">{stats.number_of_unseen}</p>
                <p className="text-sm text-gray-500 mt-2">Messages pending to be read</p>
              </div>
            </div>
          </div>

          {/* Activity Statistics */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 my-4">Activity Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-700">Places</h2>
                <p className="text-3xl font-bold text-indigo-600">{stats.number_of_places}</p>
                <p className="text-sm text-gray-500 mt-2">Total locations marked in the system</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;