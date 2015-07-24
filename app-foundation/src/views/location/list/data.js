/* Temp Data */
module.exports = {
	dropdowns: [
		{
			items: [
				{
					label: 'Victoria',
					value: 'vic'
				},
				{
					label: 'New South Wales',
					value: 'nsw'
				},
				{
					label: 'Queensland',
					value: 'qld'
				}
			]
		}
	],
	items: [
		{
			link:"http://www.google.com",
			title: "Google",
			description: "A great search engine",
			buttons: [
				{
					theme: "primary",
					href: "/accept",
					label: "Lorem"
				},
				{
					theme: "success",
					href: "/deny",
					label: "Lorem"
				}
			],
			icon: "house"
		},
		{
			link:"http://www.bing.com",
			title: "Bing",
			description: "An ok search engine",
			buttons: [
				{
					theme: "primary",
					href: "/deny",
					label: "Lorem"
				}
			],
			icon: "house"
		},
		{
			link:"http://www.ask.com",
			title: "Ask",
			description: "Non-existent",
			buttons: [
				{
					theme: "secondary",
					href: "/view",
					label: "Lorem"
				}
			],
			icon: "house"
		}
	]
};
