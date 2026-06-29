import { useNavigate } from "react-router-dom";

function Settings() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>

      <div className="bg-white shadow rounded p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Profile Information
        </h2>

        <p className="mb-2">
          <strong>Name:</strong>{" "}
          {user?.name || "User"}
        </p>

        <p>
          <strong>Email:</strong>{" "}
          {user?.email || "No Email"}
        </p>
      </div>

      <div className="bg-white shadow rounded p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">
          Preferences
        </h2>

        <p>Theme customization coming soon.</p>
      </div>

      <div className="bg-white shadow rounded p-6">
        <h2 className="text-xl font-semibold mb-4">
          Account Actions
        </h2>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Settings;