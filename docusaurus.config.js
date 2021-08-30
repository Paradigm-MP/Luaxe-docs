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
                // {to: '/blog', label: 'Blog', position: 'left'},
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
        algolia: {
            apiKey: 'YOUR_API_KEY',
            indexName: 'YOUR_INDEX_NAME',
            // Optional: see doc section below
            contextualSearch: true,
            // Optional: see doc section below
            appId: 'YOUR_APP_ID',
            // Optional: Algolia search parameters      
            searchParameters: {},
            //... other Algolia params    
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/Paradigm-MP/Luaxe-docs/edit/main/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl:
                        'https://github.com/Paradigm-MP/Luaxe-docs/edit/main/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
