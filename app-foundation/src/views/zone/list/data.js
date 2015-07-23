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
		},
		{
			items: [
				{
					label: 'Entrance',
					value: 'entrance'
				},
				{
					label: 'Lending Consult',
					value: 'lending-consult'
				},
				{
					label: 'Room',
					value: 'room'
				},
				{
					label: 'Cashier',
					value: 'cashier'
				},
				{
					label: 'ATM',
					value: 'atm'
				}
			]
		},
		{
			items: [
				{
					label: 'Beacon',
					value: 'vic'
				},
				{
					label: 'Geo Fence',
					value: 'nsw'
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
			icon: "beacon-light"
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
			icon: "beacon-light"
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
			icon: "beacon-light"
		}
	]
};
