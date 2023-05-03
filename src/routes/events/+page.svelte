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
	<p><em>
		{event.start_date}
		{#if event.end_date}
			to {event.end_date}
		{/if} at {event.location}
	</em></p>
	<p>{event.desc}</p>
{/each}

<h3>Past Events</h3>

{#each data.past as event}
	<h4 class={event.type}>{event.name}</h4>
	<p><em>
		{event.start_date}
		{#if event.end_date}
			to {event.end_date}
		{/if} at {event.location}
	</em></p>
	<p>{event.desc}</p>
{/each}

<style>
	h2, h3 {
		text-decoration: underline;
	}
	p {
		text-indent: 1rem;
	}
</style>