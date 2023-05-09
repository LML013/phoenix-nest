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
	<p>
		<em>
			{#if event.start_time}
				{event.start_time} on
			{/if}
			{event.start_date}
			{#if event.end_date}
				to {event.end_date}
				<!-- TODO: use event data to tie to a location, then pull location name and slug from location instead of hardcoded to event -->
			{/if} at <a href="./locations#{event.location_slug}">{event.location}</a>
		</em>
	</p>
	<p>{event.desc}</p>
	{#if event.url}
		<p>Signup: <a href={event.url}>{event.url}</a></p>
	{/if}
{/each}

<h3>Past Events</h3>

{#each data.past as event}
	<h4 class={event.type}>{event.name}</h4>
	<p>
		<em>
			{event.start_date}
			{#if event.end_date}
				to {event.end_date}
			{/if} at <a href="./locations#{event.location_slug}">{event.location}</a>
		</em>
	</p>
	<p>{event.desc}</p>
{/each}

<style>
	h2,
	h3 {
		text-decoration: underline;
	}
	p {
		text-indent: 1rem;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	a:hover {
		color: lightblue;
	}
</style>
