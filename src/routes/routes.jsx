import {
  HomeIcon,
  GroupsIcon,
  LibraryBooksIcon,
  SchoolIcon,
  BusinessIcon,
  HandshakeIcon,
  ContactMailIcon,
  DashboardIcon,
} from "../assets/icons";

export const routes = [
  {
    label: "Home",
    icon: HomeIcon,
    path: "/",
    isProtected: false,
  },
  {
    label: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
    isProtected: false,
  },
  {
    label: "Community",
    icon: GroupsIcon,
    path: "/community",
    isProtected: true,
  },
  {
    label: "Resources",
    icon: LibraryBooksIcon,
    path: "/resources",
    isProtected: false,
  },
  {
    label: "Educational",
    icon: SchoolIcon,
    path: "/educational",
    isProtected: true,
  },
  {
    label: "About Us",
    icon: BusinessIcon,
    path: "/about",
    isProtected: false,
  },
  {
    label: "Partners",
    icon: HandshakeIcon,
    path: "/partners",
    isProtected: false,
  },
  {
    label: "Contact",
    icon: ContactMailIcon,
    path: "/contact",
    isProtected: false,
  }
];
