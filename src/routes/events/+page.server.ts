import type { PageServerLoad } from './$types';

export const load = (async () => {
	let events = [
		{
			name: 'Phoenix Squadron Championship 2023 - Redemption Tournament - Aurek',
			type: 'tournament',
			start_date: '2023-05-06',
			start_time: '10:30 AM',
			location: 'Games U',
			location_slug:'games-u',
			desc: 'First Redemption Tournament',
			url: 'https://rollbetter.gg/tournaments/338',
			upcoming: false
		},
		{
			name: 'Phoenix Squadron Championship 2023 - Redemption Tournament - Besh',
			type: 'tournament',
			start_date: '2023-05-06',
			start_time: '10:00 AM',
			location: 'Imperial Outpost',
			location_slug: 'imperial-outpost',
			desc: 'Second Redemption Tournament',
			url: 'https://rollbetter.gg/tournaments/339',
			upcoming: false
		},
		{
			name: 'Phoenix Squadron Championship 2023 - Redemption Tournament - Tuscon Raiders',
			type: 'tournament',
			start_date: '2023-05-06',
			start_time: '11:00 AM',
			location: 'Tuscon',
			location_slug: 'tuscon',
			desc: 'Third Redemption Tournament',
			url: "https://rollbetter.gg/tournaments/340",
			upcoming: false
		},
		{
			name: 'Phoenix Squadron Championship 2023 - Redemption Tournament - Cresh',
			type: 'tournament',
			start_date: '2023-05-13',
			start_time: '11:00 AM',
			location: 'Tabletop Wargamers',
			location_slug: 'tabletop-wargamers',
			desc: 'Fourth Redemption Tournament',
			url: 'https://rollbetter.gg/tournaments/326',
			upcoming: false
		},
		{
			name: 'Phoenix Squadron Championship 2023',
			type: 'tournament',
			start_date: '2023-05-20',
			start_time: '10:00 am',
			location: 'Gamers Guild',
			location_slug: 'gamers-guild',
			desc: 'Invitation Finals',
			url: 'https://rollbetter.gg/tournaments/408',
			upcoming: true
		},
		{
			name: 'Phoenix Squadron Championship 2023 - League Play',
			type: 'tournament',
			start_date: '2023-03-19',
			end_date: '2023-04-29',
			location: 'Phoenix & Remote',
			location_slug: null,
			desc: 'Division Play for PSC 2023',
			upcoming: false
		},
		{
			name: 'Silver Key Store Championship',
			type: 'store-championship',
			start_date: '2023-06-17',
			location: 'The Silver Key Lounge',
			location_slug: 'the-silver-key-lounge',
			desc: 'Store Championship with Organized Play Store Kit',
			prizes: 'OP Store Kit',
			upcoming: true
		}
	];

	// TODO: Need to create event type/learn how typescript works
	// so I don't have to filter this array twice
	
	// TODO: determine upcoming/past using timestamp comparison 
	// rather than boolean upcoming flag 
	let upcoming = events.filter((x) => x.upcoming);
	let past = events.filter((x) => !x.upcoming);

	return { upcoming, past };
}) satisfies PageServerLoad;
