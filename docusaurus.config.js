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
        navbar: {
            title: 'Luaxe',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.svg',
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
                    href: 'http://discord.paradigm.mp',
                    label: 'Discord',
                    position: 'right',
                },
            ],
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
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
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
