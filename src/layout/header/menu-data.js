const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/home-2",
    active: "active",
    sub_menus: [
      { link: "/", title: "Home Style 1" },
      { link: "/home-2", title: "Home Style 2" },
      { link: "/home-3", title: "Home Style 3" },
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    active: "",
    sub_menus: [
      // { link: "/about", title: "About" },
      // { link: "/team-1", title: "Careers" },
      // { link: "/team-2", title: "Team 02" },
      // { link: "/team-details", title: "Team Details" },
      // { link: "/pricing-plan", title: "Pricing Plan" },
      // { link: "/shop", title: "Shop" },
      // { link: "/product-details", title: "Product Details" },
      // { link: "/cart", title: "cart" },
      // { link: "/checkout", title: "Checkout" },
      // { link: "/project-details", title: "Project Details" },
      // { link: "/faq", title: "FAQ's" },
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Bulk Orders",
    link: "/team-details",
    active: "",
    sub_menus: [
    //   { link: "/service", title: "Service 1" },
    //   { link: "/service-2", title: "Service 2" },
    //   { link: "/service-3", title: "Service 3" },
    //   { link: "/service-details", title: "Service Details" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Careers",
    link: "/research",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Franchise",
    link: "/project-details",
    active: "",
    sub_menus: [
      { link: "/find-locations", title: "Find Location" },
      { link: "/request", title: "Request" },
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Investors",
    link: "/investors",
    active: "",
  },
  {
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
