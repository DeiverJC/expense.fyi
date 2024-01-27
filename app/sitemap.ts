import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://gastos.site',
			lastModified: new Date(),
		},
		{
			url: 'https://app.gastos.site',
			lastModified: new Date(),
		},
		{
			url: 'https://app.gastos.site/signin',
			lastModified: new Date(),
		},
		{
			url: 'https://app.gastos.site/siginup',
			lastModified: new Date(),
		},
		{
			url: 'https://app.gastos.site/expenses',
			lastModified: new Date(),
		},
		{
			url: 'https://app.gastos.site/income',
			lastModified: new Date(),
		},
		{
			url: 'https://app.gastos.site/investments',
			lastModified: new Date(),
		},
		{
			url: 'https://app.gastos.site/settings',
			lastModified: new Date(),
		},
	];
}
