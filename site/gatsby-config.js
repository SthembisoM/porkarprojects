const path = require(`path`);
module.exports = {
	siteMetadata: {
		title: 'Porkat',
		description: 'Gatsby site with Strapi',
		author: 'Strapi team'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Noto Sans`,
					`source sans pro\:300,400,400i,700` // you can also specify font weights and styles
				],
				display: 'swap'
			}
		},
		{
			resolve: 'gatsby-source-strapi',
			options: {
				apiURL: 'http://localhost:1337',
				contentTypes: [
					// List of the Content Types you want to be able to request from Gatsby.
					'home',
					'logo',
					'about',
					'service',
					'ourpeople',
					'mgrole',
					'ourproject',
					'contactus',
					'gallery'
				],
				queryLimit: 1000
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
				once: true, // Defines if animation needs to be launched once
				disable: false, // Flag for disabling animations

				// Advanced Options
				selector: '[data-sal]', // Selector of the elements to be animated
				animateClassName: 'sal-animate', // Class name which triggers animation
				disabledClassName: 'sal-disabled', // Class name which defines the disabled state
				rootMargin: '0% 50%', // Corresponds to root's bounding box margin
				enterEventName: 'sal:in', // Enter event name
				exitEventName: 'sal:out' // Exit event name
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'gatsby-starter-default',
				short_name: 'starter',
				start_url: '/',
				background_color: '#663399',
				theme_color: '#663399',
				display: 'minimal-ui',
				icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
			}
		},
		'gatsby-plugin-offline',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: path.join(__dirname, `src`, `images`)
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`
	]
};
