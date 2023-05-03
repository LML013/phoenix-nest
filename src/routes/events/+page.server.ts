import type { PageServerLoad } from './$types';

export const load = (async () => {
	let events = [
		{
			name: 'Phoenix Squadron Championship 2023 - Redemption Tournament - Aurek',
			type: 'tournament',
			start_date: '2023-05-06',
			location: 'Games U',
			desc: 'First Redemption Tournament',
			upcoming: true
		},
		{
			name: 'Phoenix Squadron Championship 2023 - Redemption Tournament - Besh',
			type: 'tournament',
			start_date: '2023-05-06',
			location: 'Imperial Outpost',
			desc: 'Second Redemption Tournament',
			upcoming: true
		},
		{
			name: 'Phoenix Squadron Championship 2023 - Redemption Tournament - Tusken Raiders',
			type: 'tournament',
			start_date: '2023-05-06',
			location: 'Tuscon',
			desc: 'Third Redemption Tournament',
			upcoming: true
		},
		{
			name: 'Phoenix Squadron Championship 2023 - Redemption Tournament - Cresh',
			type: 'tournament',
			start_date: '2023-05-13',
			location: 'Tabletop Wargamers',
			desc: 'Fourth Redemption Tournament',
			upcoming: true
		},
		{
			name: 'Phoenix Squadron Championship 2023',
			type: 'tournament',
			start_date: '2023-05-20',
			location: 'Gamers Guild',
			desc: 'Invitation Finals',
			upcoming: true
		},
		{
			name: 'Phoenix Squadron Championship 2023 - League Play',
			type: 'tournament',
			start_date: '2023-03-19',
			end_date: '2023-04-29',
			location: 'Phoenix & Remote',
			desc: 'Division Play for PSC 2023',
			upcoming: false
		}
	];

	// TODO: Need to create event type/learn how typescript works
	// so I don't have to filter this array twice
	let upcoming = events.filter((x) => x.upcoming);
	let past = events.filter((x) => !x.upcoming);

	return { upcoming, past };
}) satisfies PageServerLoad;
