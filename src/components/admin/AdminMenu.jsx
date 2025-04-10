const BASE_PATH = import.meta.env.BASE_URL;

const menuItems = [
  { path: '/admin/url', label: 'URL' },
  { path: '/admin/login', label: 'Login' },
  { path: '/admin/dashboard', label: 'Dashboard' },
  { path: '/admin/users', label: 'Users' },
  { path: '/admin/doa-messages', label: 'Doa Messages' },
];

const AdminMenu = () => {
  return (
    <div className="w-full bg-white shadow-md">
      <div className="flex items-center">
        <h2 className="bg-gray-100 px-4 py-3 m-0 border-r-2 border-gray-200 text-lg font-bold text-gray-700">
          Admin Menu
        </h2>
        <ul className="py-2 flex flex-row">
          {menuItems.map((item, index) => (
            <li key={index} className="hover:bg-gray-50">
              <a 
                href={`${BASE_PATH}${item.path}`}
                className="block px-6 py-2 text-gray-700 hover:text-gray-900"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AdminMenu;