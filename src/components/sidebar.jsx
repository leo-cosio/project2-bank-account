import { useAuth } from "../contexts/auth-context";
import LogoutButton from "./logoutButton";

function Sidebar() {
  const { user } = useAuth();

  return (
    <div
      id="sidebar"
      className="vh-100 w-25 d-flex flex-column align-items-center py-4 justify-content-between"
    >
      <div className="d-flex flex-column align-items-center">
        <h3>{user.name}</h3>
        <div id="sidebar-buttons" className="mt-4 list-group">
          <li>
            <button className="">Home</button>
          </li>
          <li>
            <button className="">Transactions</button>
          </li>
        </div>
      </div>

      <LogoutButton />
    </div>
  );
}

export default Sidebar;
