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
				{
					label: 'Guides',
					items: [
						{ label: 'Async Jobs', slug: 'guides/async-jobs' },
						{ label: 'Credits & Billing', slug: 'guides/billing' },
						{ label: 'Rate Limits', slug: 'guides/rate-limits' },
						{ label: 'Webhooks', slug: 'webhooks' },
						{ label: 'AI Agents', slug: 'guides/ai-agents' },
						{ label: 'Error Codes', slug: 'errors' },
						{ label: 'API Versioning', slug: 'guides/versioning' },
					],
				},
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
				{ label: 'Jurisdiction Coverage', slug: 'jurisdictions' },
				{ label: 'Changelog', slug: 'changelog' },
				{
					label: 'OpenAPI Spec ↗',
					link: 'https://api.bizverify.co/v1/openapi.json',
					attrs: { target: '_blank' },
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
