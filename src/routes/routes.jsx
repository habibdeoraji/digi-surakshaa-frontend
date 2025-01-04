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
  DashboardIcon
} from "../assets/icons";

export const routes = [
  { label: "Home", icon: HomeIcon, path: "/" },
  { label: "Safety", icon: SecurityIcon, path: "/safety" },
  { label: "Community", icon: GroupsIcon, path: "/community" },
  {
    label: "Resources",
    icon: LibraryBooksIcon,
    path: "/resources",
    children: [
      {
        label: "Educational",
        icon: SchoolIcon,
        path: "/resources/educational",
      },
      { label: "FAQ", icon: HelpOutlineIcon, path: "/resources/faq" },
      { label: "Blog", icon: ArticleIcon, path: "/resources/blog" },
  { label: "Features", icon: InfoIcon, path: "/resources/features" },

    ],
  },
  { label: "Dashboard", icon: DashboardIcon, path: "/dashboard" },
  { label: "About Us", icon: BusinessIcon, path: "/about" },
  { label: "Partners", icon: HandshakeIcon, path: "/partners" },
  { label: "Profile", icon: PersonIcon, path: "/profile" },
  { label: "Report Scam", icon: ReportProblemIcon, path: "/report-scam" },
  { label: "Contact", icon: ContactMailIcon, path: "/contact" },
];
