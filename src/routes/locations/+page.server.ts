import type { PageServerLoad } from './$types';

export const load = (async () => {
	let locations = [
		{
			name: 'Games U',
			addr: '1550 N Stonehenge Dr #102, Gilbert, AZ 85234',
			addr_url: 'https://www.google.com/maps/search/?api=1&query=Games+U',
			desc: 'Home base of Phoenix Squadron',
			url: 'https://gamesuaz.com/',
			slug: 'games-u',
			nights: 'Thursday',
			//TODO: connect to an image
			img: null,
			//TODO: connect to a player object, somehow
			contact: null
		},
		{
			name: 'The Silver Key Lounge',
			addr: '1837 West Guadalupe Road Ste 105, Mesa, Arizona 85202',
			addr_url: 'https://www.google.com/maps/search/?api=1&query=The+Silver+Key+Lounge',
			desc: null,
			url: 'https://thesilverkeylounge.com/',
			slug: 'the-silver-key-lounge',
			nights: 'Tuesday',
			//TODO: connect to an image
			img: null,
			//TODO: connect to a player object, somehow
			contact: null
		},
		{
			name: 'Gamers Guild',
			addr: '2223 S 48th St Suite C/D, Tempe, AZ 85282',
			addr_url: 'https://www.google.com/maps/search/?api=1&query=Gamers+Guild',
			desc: 'Hosts monthly Saturday tournaments',
			url: 'https://gamersguildaz.com',
			slug: 'gamers-guild',
			nights: null,
			//TODO: connect to an image
			img: null,
			//TODO: connect to a player object, somehow
			contact: "John G."
		},
		{
			name: 'Imperial Outpost',
			addr: '4920 W Thunderbird Rd, Ste 121 Glendale, AZ 85306',
			addr_url: 'https://www.google.com/maps/search/?api=1&query=Imperial+Outpost',
			desc: null,
			url: 'https://www.facebook.com/imperial.outpost.7/',
			slug: 'imperial-outpost',
			nights: 'Monday',
			//TODO: connect to an image
			img: null,
			//TODO: connect to a player object, somehow
			contact: null
		},
		{
			name: 'Tabletop Wargamers',
			addr: '13291 W McDowell Rd Unit E4 Goodyear, AZ 85395',
			addr_url: 'https://www.google.com/maps/search/?api=1&query=Tabletop+Wargamers',
			desc: null,
			slug: 'tabletop-wargamers',
			url: 'https://tabletopwargamers.com/',
			nights: 'Thursday',
			//TODO: connect to an image
			img: null,
			//TODO: connect to a player object, somehow
			contact: null
		},
		{
			name: 'Rekreation Games',
			addr: '1075 S Arizona Ave, Chandler, AZ 85286',
			addr_url: 'https://www.google.com/maps/search/?api=1&query=Rekreation+Games',
			desc: null,
			url: 'https://www.rekreationgames.com/',
			slug: 'rekreation-games',
			nights: 'Saturday',
			//TODO: connect to an image
			img: null,
			//TODO: connect to a player object, somehow
			contact: null
		},
	];

	return { locations };
}) satisfies PageServerLoad;
