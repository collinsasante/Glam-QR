export const menuList = [
  {
    id: 0,
    name: "dashboards",
    path: "/",
    icon: "feather-airplay",
    dropdownMenu: [],
  },
  {
    id: 1,
    name: "products",
    path: "#",
    icon: "feather-cast",
    dropdownMenu: [
      {
        id: 1,
        name: "Create Products",
        path: "/products/form",
        subdropdownMenu: false,
      },
      {
        id: 2,
        name: "Availbale Products",
        path: "/product/table",
        subdropdownMenu: false,
      },
    ],
  },
  {
    id: 2,
    name: "warehouse",
    path: "#",
    icon: "feather-box",
    dropdownMenu: [
      {
        id: 1,
        name: "Inventory",
        path: "/inventory/page",
        subdropdownMenu: false,
      },
      {
        id: 2,
        name: "Stock Movement",
        path: "/Stock/Movement",
        subdropdownMenu: false,
      },
    ],
  },

  // Add other dropdown menus here

  {
    id: 4,
    name: "help",
    path: "#",
    icon: "feather-life-buoy",
    dropdownMenu: [
      {
        id: 1,
        name: "Support",
        path: "https://themeforest.net/user/theme_ocean",
        subdropdownMenu: false,
      },
      {
        id: 2,
        name: "KnowledgeBase",
        path: "/help/knowledgebase",
        subdropdownMenu: false,
      },
      {
        id: 3,
        name: "Documentations",
        path: "/documentations",
        subdropdownMenu: false,
      },
    ],
  },
];
