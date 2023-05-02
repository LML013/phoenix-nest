import type { PageServerLoad } from './$types';

export const load = (async () => {
	let events = [
		{
			event_name: 'Phoenix Squadron Championship 2023 Redemption Tournament Aurek',
			event_type: 'tournament',
			event_date: '2023-05-06'
		},
		{
			event_name: 'Phoenix Squadron Championship 2023 Redemption Tournament Besh',
			event_type: 'tournament',
			event_date: '2023-05-06'
		},
		{
			event_name: 'Phoenix Squadron Championship 2023 Redemption Tournament Cresh',
			event_type: 'tournament',
			event_date: '2023-05-06'
		}

	];

	return {events};
}) satisfies PageServerLoad;
