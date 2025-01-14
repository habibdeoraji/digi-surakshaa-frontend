import {
  HomeIcon,
  SecurityIcon,
  GroupsIcon,
  LibraryBooksIcon,
  SchoolIcon,
  HelpOutlineIcon,
  ArticleIcon,
  InfoIcon,
  BusinessIcon,
  HandshakeIcon,
  PersonIcon,
  ReportProblemIcon,
  ContactMailIcon,
  DashboardIcon,
} from "../assets/icons";

export const routes = [
  { label: "Home", icon: HomeIcon, path: "/", isProtected: false },
  { label: "Safety", icon: SecurityIcon, path: "/safety", isProtected: false },
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
    children: [
      {
        label: "Educational",
        icon: SchoolIcon,
        path: "/resources/educational",
      },
      {
        label: "FAQ",
        icon: HelpOutlineIcon,
        path: "/resources/faq",
        isProtected: false,
      },
      {
        label: "Blog",
        icon: ArticleIcon,
        path: "/resources/blog",
        isProtected: false,
      },
      {
        label: "Features",
        icon: InfoIcon,
        path: "/resources/features",
        isProtected: false,
      },
    ],
  },
  {
    label: "Dashboard",
    icon: DashboardIcon,
    path: "/dashboard",
    isProtected: false,
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
    label: "Profile", 
    icon: PersonIcon, 
    path: "/profile", 
    isProtected: true,
  },
  {
    label: "Report Scam",
    icon: ReportProblemIcon,
    path: "/report-scam",
    isProtected: true,
  },
  {
    label: "Contact",
    icon: ContactMailIcon,
    path: "/contact",
    isProtected: false,
  },
];
