// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Shuang',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Go to Sleep!',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '030b1e7abe72d3c34c6f7d017d124528', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://outlook.live.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'list-checks',
			link: 'https://to-do.live.com/tasks/',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://outlook.live.com/calendar/0/view/week',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'coffee',
			id: '1',
			links: [
				{
					name: 'Mail',
					link: 'https://outlook.live.com',
				},
				{
					name: 'Calendar',
					link: 'https://outlook.live.com/calendar/0/view/week',
				},
				{
					name: 'ChatGPT',
					link: 'https://chat.openai.com',
				},
				{
					name: 'To do',
					link: 'https://to-do.live.com/tasks/inbox',
				},
			],
		},
		{
			icon: 'users',
			id: '2',
			links: [
				{
					name: 'Blog',
					link: 'https://blog.tswhale.eu.org',
				},
				{
					name: 'Drive',
					link: 'https://drive.tswhale.eu.org',
				},
				{
					name: 'Scholar',
					link: 'https://scholar.tswhale.eu.org',
				},
				{
					name: 'Chatgpt',
					link: 'https://chat.tswhale.eu.org',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'gamepad',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'YouTube',
					link: 'https://www.youtube.com',
				},
				{
					name: 'Bilibili',
					link: 'https://Bilibili.com',
				},
				{
					name: 'Alist',
					link: 'https://alist.tswhale.eu.org',
				},
			],
		},
		{
			icon: 'cloud-cog',
			id: '2',
			links: [
				{
					name: 'GitHub',
					link: 'https://www.github.com/tsgit741',
				},
				{
					name: 'Vercel',
					link: 'https://www.vercel.com/tsgit741',
				},
				{
					name: 'Cloudflare',
					link: 'https://dash.cloudflare.com',
				},
				{
					name: 'Replit',
					link: 'https://replit.com/@tsre',
				},
			],
		},
		
	],
};
