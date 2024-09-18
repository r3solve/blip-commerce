import { Outlet, NavLink } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { HiOutlineShoppingBag, HiOutlineUsers } from "react-icons/hi2";
function AdminPage() {
  return (
    <>
      {/* Navigation Bar */}
      <div className="navbar h-11 bg-[#131313] text-gray-100 ">
        <div className="flex-1 ml-5">
          <div className="w-14 rounded-full">
            <img className="" alt="blip logo" src="/bplip2.jpeg" />
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
            <li>
              <details>
                <summary>Admin</summary>
                <ul className="bg-red text-black rounded-t-none p-2">
                  <li className="hover:cursor-pointer">
                    <a>logout</a>
                  </li>
                  
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="w-full flex h-screen flex-row">
        {/* Drawer for Sidebar Navigation */}
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet />

            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>

          {/* Sidebar Menu */}
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu  bg-[#131313] font-light text-base text-white min-h-full w-80 p-4">
              <NavLink to={"dashboard"} className="flex flex-row my-4">
                <RiHome6Line className="" color="white" size={30} />
                <a className="mt-1 mx-2">Dashboard</a>
              </NavLink>
              <NavLink to={"orders"} className="flex flex-row my-4">
                <CgNotes className="" color="white" size={30} />
                <a className="mt-1 mx-2">Orders</a>
              </NavLink>
              <NavLink to={"products"} className="flex flex-row my-4">
                <HiOutlineShoppingBag className="" color="white" size={30} />
                <a className="mt-1 mx-2">Products</a>
              </NavLink>
              <NavLink to={"customers"} className="flex flex-row my-4">
                <HiOutlineUsers className="" color="white" size={30} />
                <a className="mt-1 mx-2">Customers</a>
              </NavLink>
            </ul>
          </div>
        </div>

        {/* Outlet for Nested Routes */}
      </div>
    </>
  );
}

export default AdminPage;
