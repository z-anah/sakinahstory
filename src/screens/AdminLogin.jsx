import '@styles/AdminLogin.css';

const AdminLogin = () => {
  return (
    <div className="admin-login">
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
          <h1 className="block text-sm font-medium text-red-700">Admin Login</h1>
          <form className="mt-8">
            <div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username:
                  <input
                    type="text"
                    name="username"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </label>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Password:
                  <input
                    type="password"
                    name="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AdminLogin;