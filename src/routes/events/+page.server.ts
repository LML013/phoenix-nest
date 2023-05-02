import type { PageServerLoad } from './$types';

export const load = (async () => {
	let events = [
		{
			event_name: 'Phoenix Squadron Championship 2023 Redemption Tournament Aurek',
			event_type: 'tournament',
			event_date: '2023-05-06',
			event_location: 'place',
			event_desc: 'First Redemption Tournament'
		},
		{
			event_name: 'Phoenix Squadron Championship 2023 Redemption Tournament Besh',
			event_type: 'tournament',
			event_date: '2023-05-06',
			event_location: 'place',
			event_desc: 'First Redemption Tournament'
		},
		{
			event_name: 'Phoenix Squadron Championship 2023 Redemption Tournament Cresh',
			event_type: 'tournament',
			event_date: '2023-05-06',
			event_location: 'place',
			event_desc: 'First Redemption Tournament'
		},
		{
			event_name: 'Phoenix Squadron Championship 2023 Invitation Finals',
			event_type: 'tournament',
			event_date: '2023-05-06',
			event_location: 'place',
			event_desc: 'First Redemption Tournament'
		},

	];

	return {events};
}) satisfies PageServerLoad;
