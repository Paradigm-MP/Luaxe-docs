const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Luaxe',
    tagline: 'Create wonderous gamemodes for Valheim with Lua',
    url: 'https://luaxe.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'Paradigm-MP', // Usually your GitHub org/user name.
    projectName: 'Luaxe-docs', // Usually your repo name.
    themeConfig: {
        announcementBar: {
            id: 'indev',
            content:
                '<b>Luaxe is still in development, so expect these docs to change frequently!</b>',
            backgroundColor: '#fcff00',
            textColor: '#091E42',
            isCloseable: false,
        },
        image: 'img/luaxe.png',
        metadatas: [{ name: 'theme-color', content: '#0a259c' }],
        navbar: {
            title: 'Luaxe',
            logo: {
                alt: 'Luaxe logo',
                src: 'img/luaxe.png',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'main',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    href: 'https://github.com/Paradigm-MP/Luaxe',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: 'https://discord.gg/XAQ34Td',
                    label: 'Discord',
                    position: 'right',
                }
            ],
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
        googleAnalytics: {
            trackingID: 'G-L8C8DGW51W',
            anonymizeIP: true,
        }
    },
    plugins: [
        // ... Your other plugins.
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                hashed: true,
            },
        ],
    ],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/Paradigm-MP/Luaxe-docs/edit/main/',
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                    trailingSlash: false,
                }
            },
        ],
    ],
};
