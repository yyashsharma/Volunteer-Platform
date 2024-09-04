import { Avatar, Dropdown, Navbar, TextInput, Button } from "flowbite-react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon ,FaSun} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { toggleTheme } from "../redux/theme/themeSlice";
import { useSelector, useDispatch } from "react-redux";


const Header = () => {
  const path = useLocation().pathname;
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  return (
    <Navbar className="border-b-2">
      <Link
        to={"/"}
        className="self-center whitespace-nowrap text-md sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-3 bg-gradient-to-r from-teal-200  to-lime-200 rounded-l-full text-slate-900">
            Volunto
          </span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button gradientDuoTone="tealToLime" className="w-12 h-10 md:hidden" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
      <Button
          gradientDuoTone="purpleToBlue"
          className="w-12 h-10 hidden sm:inline"
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </Button>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Link to={"/sign-in"}>
            <Button gradientDuoTone="tealToLime" outline>
              Sign In
            </Button>
          </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"}>
          <Link to={"/"} className="hover:underline">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to={"/about"} className="hover:underline">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/services"} as={"div"}>
          <Link to={"/services"} className="hover:underline">Services</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/pricing"} as={"div"}>
          <Link to={"/pricing"} className="hover:underline">Pricing</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
