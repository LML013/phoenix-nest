import type { PageServerLoad } from './$types';

export const load = (async () => {
	let locations = [
		{
			name: 'Games U',
			addr: '1550 N Stonehenge Dr #102, Gilbert, AZ 85234',
			desc: 'Home base of Phoenix Squadron',
			url: 'https://gamesuaz.com/',
			nights: 'Thursday',
			//TODO: connect to an image
			img: null,
			//TODO: connect to a player object, somehow
			contact: null
		},
		{
			name: 'The Silver Key Lounge',
			addr: '1837 West Guadalupe Road Ste 105, Mesa, Arizona 85202',
			desc: null,
			url: 'https://thesilverkeylounge.com/',
			nights: 'Tuesday',
			//TODO: connect to an image
			img: null,
			//TODO: connect to a player object, somehow
			contact: null
		},
		{
			name: 'Gamers Guild',
			addr: '2223 S 48th St Suite C/D, Tempe, AZ 85282',
			desc: 'Hosts monthly tournaments',
			url: 'https://gamersguildaz.com',
			nights: null,
			//TODO: connect to an image
			img: null,
			//TODO: connect to a player object, somehow
			contact: "John G."
		},
		{
			name: 'Imperial Outpost',
			addr: '4920 W Thunderbird Rd, Ste 121 Glendale, AZ 85306',
			desc: null,
			url: 'https://www.facebook.com/imperial.outpost.7/',
			nights: 'Monday',
			//TODO: connect to an image
			img: null,
			//TODO: connect to a player object, somehow
			contact: null
		},
		{
			name: 'Tabletop Wargamers',
			addr: '13291 W McDowell Rd Unit E4 Goodyear, AZ 85395',
			desc: null,
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
			desc: null,
			url: 'https://www.rekreationgames.com/',
			nights: 'Saturday',
			//TODO: connect to an image
			img: null,
			//TODO: connect to a player object, somehow
			contact: null
		},
	];

	return { locations };
}) satisfies PageServerLoad;
