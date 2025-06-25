import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import {NavItems, MobileSidebar} from "../../../components/";  // ✅ adjust path if needed
import { Outlet } from "react-router-dom";  // ✅ Use react-router-dom!

const Adminlayout = () => {
  return (
    <div className="admin-layout">
      <MobileSidebar/>
      <aside className="w-full max-w-[270px] hidden lg:block">
        <SidebarComponent width={270} enableGestures={false}>
          <NavItems />
        </SidebarComponent>
      </aside>

      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default Adminlayout;
