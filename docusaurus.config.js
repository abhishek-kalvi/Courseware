// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
            label: "Contribute",
            position: "left",
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
