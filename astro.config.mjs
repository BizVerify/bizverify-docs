// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://docs.bizverify.co',
	integrations: [
		starlight({
			title: 'BizVerify Docs',
			logo: {
				src: './src/assets/logo.svg',
				alt: 'BizVerify',
				replacesTitle: true,
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/bizverify' },
			],
			editLink: {
				baseUrl: 'https://github.com/bizverify/bizverify-docs/edit/main/',
			},
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Welcome', slug: '' },
				{ label: 'Quickstart', slug: 'quickstart' },
				{ label: 'Authentication', slug: 'authentication' },
				{ label: 'Error Codes', slug: 'errors' },
				{ label: 'Webhooks', slug: 'webhooks' },
				{
					label: 'MCP',
					items: [
						{ label: 'Setup', slug: 'mcp/setup' },
					],
				},
				{
					label: 'SDKs',
					items: [
						{ label: 'Node.js', slug: 'sdks/node' },
						{ label: 'Python', slug: 'sdks/python' },
						{ label: 'Go', slug: 'sdks/go' },
					],
				},
				{
					label: 'API Reference ↗',
					link: 'https://api.bizverify.co/reference',
					attrs: { target: '_blank' },
				},
			],
		}),
	],
});
