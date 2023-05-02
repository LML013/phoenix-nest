import type { PageServerLoad } from './$types';

export const load = (async () => {
	let events = [
		{
			name: 'Phoenix Squadron Championship 2023 Redemption Tournament Aurek',
			type: 'tournament',
			date: '2023-05-06',
			location: 'place',
			desc: 'First Redemption Tournament',
			upcoming: true
		},
		{
			name: 'Phoenix Squadron Championship 2023 Redemption Tournament Besh',
			type: 'tournament',
			date: '2023-05-06',
			location: 'place',
			desc: 'First Redemption Tournament',
			upcoming: true
		},
		{
			name: 'Phoenix Squadron Championship 2023 Redemption Tournament Cresh',
			type: 'tournament',
			date: '2023-05-06',
			location: 'place',
			desc: 'First Redemption Tournament',
			upcoming: true
		},
		{
			name: 'Phoenix Squadron Championship 2023 Invitation Finals',
			type: 'tournament',
			date: '2023-05-20',
			location: 'Gamers Guild',
			desc: 'First Redemption Tournament',
			upcoming: true
		},
		{
			name: 'Phoenix Squadron Championship 2023 Division Play',
			type: 'tournament',
			date: '2023-05-06 to ',
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
