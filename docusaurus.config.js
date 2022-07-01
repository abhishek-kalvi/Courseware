// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const parseSidebarItems = (items) => {
  const result = items.map((item) => {
    if (item.items && item.items.length > 0) {
      item.items = parseSidebarItems(item.items);
    }
    let label = item.label;
    if (!label) {
      const generatedLabel = item.id.split("/");
      label = generatedLabel[generatedLabel.length - 1];
    }
    item.label = label.replace(/-/g, " ");
    return item;
  });
  return result;
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kalvi",
  tagline: "Courseware",
  url: "https://kalvi-education.github.io/",
  baseUrl: "/Courseware/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://kalvieducation.com/assets/imgs/favicon.png",

  // GitHub pages deployment config.
  organizationName: "Kalvi-Education",
  projectName: "Courseware",
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          path: "course1",
          routeBasePath: "course1",
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            return parseSidebarItems(sidebarItems);
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "course2",
        path: "course2",
        routeBasePath: "course2",
        sidebarPath: require.resolve("./sidebars.js"),
        async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return parseSidebarItems(sidebarItems);
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "Contribution-Guide",
        path: "Contribution-Guide",
        routeBasePath: "Contribution-Guide",
        sidebarPath: require.resolve("./sidebars.js"),
        async sidebarItemsGenerator({ defaultSidebarItemsGenerator, ...args }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return parseSidebarItems(sidebarItems);
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Kalvi courseware",
        logo: {
          alt: "Kalvi logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "dropdown",
            label: "Courses",
            position: "left",
            items: [
              {
                label: "Course1",
                to: "/course1/docs",
              },
              {
                label: "Course2",
                to: "/course2/docs",
              },

              // ... more items
            ],
          },
          {
            label: "Contribution Guide",
            to: "/Contribution-Guide/docs",
            position: "right",
          },
          {
            label: "Contribute",
            position: "right",
            href: "https://githubbox.com/Kalvi-Education/Courseware",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
