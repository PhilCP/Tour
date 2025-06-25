import { Link, NavLink } from "react-router-dom"; // ✅ correct!
import { sidebarItems, users } from "~/constants"; // ✅ use your dummy data
import { cn } from "~/lib/utils";

const NavItems = ({ handleClick }: { handleClick?: () => void }) => {
  // pick the first dummy user
  const user = users[0]; // or any index you like

  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>Tour</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn(
                    "group nav-item",
                    "hover:bg-primary-100 hover:text-white",
                    { "bg-primary-100 !text-white": isActive }
                  )}
                  onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 group-hover:invert ${
                      isActive ? "brightness-0 invert" : "text-dark-200"
                    }`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className="nav-footer flex items-center gap-4 mt-4 ">
          <img
            src={user?.imageUrl || "/assets/images/david.webp"}
            alt={user?.name || "User"}
            className="w-10 h-10 rounded-full object-cover"
            referrerPolicy="no-referrer"
          />

          <div className="flex flex-col">
            <h2 className="text-sm font-medium">{user?.name || "Guest"}</h2>
            <p className="text-xs text-gray-500">{user?.email || "No email"}</p>
          </div>

          <button className="ml-auto cursor-pointer">
            <img
              src="/assets/icons/logout.svg"
              alt="logout"
              className="size-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default NavItems;
