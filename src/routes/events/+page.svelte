<script lang="ts">
	import { each } from 'svelte/internal';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2>Events</h2>
<h3>Upcoming Events</h3>
<!-- TODO: Turn these into components (with their own pages?) later -->

{#each data.upcoming as event}
	<h4 class={event.type}>{event.name}</h4>
	<em>{event.date} at {event.location}</em>
	<p>{event.desc}</p>
{/each}

<h4>Past Events</h4>

{#each data.past as event}
	<h4 class={event.type}>{event.name}</h4>
	<em>{event.date} at {event.location}</em>
	<p>{event.desc}</p>
{/each}

