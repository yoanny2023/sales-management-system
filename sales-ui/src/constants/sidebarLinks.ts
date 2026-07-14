import {IconBox, IconLayoutDashboard,IconLogout,IconReportAnalytics,IconTrendingUp,IconUser,IconUsers} from "@tabler/icons-react";

export const sidebarLinks = [
  { 
    section: "Overview",
    items: [
       {label: "Dashboard", href: "/dashboard", icon: IconLayoutDashboard }
    ]
  },
  {
    section: "Management",
    items: [
      {label: "Products", href: "/products", icon: IconBox,},
      {label: "Sales", href: "/sales", icon: IconTrendingUp,},
    ],
  },
  { 
    section: "Account",
    items: [
       {label: "Logout", action: "logout", icon: IconLogout},
    ]
  }, 
];
