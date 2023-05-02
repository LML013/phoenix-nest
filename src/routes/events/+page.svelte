<script lang="ts">
	import { each } from 'svelte/internal';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2>Events</h2>
<h3>Upcoming Events</h3>
<!-- TODO: Turn these into components (with their own pages?) later -->

{#each data.events as event}
<h4 class={event.event_type}>{event.event_name}</h4>
<p>Date: {event.event_date}</p>
{/each}
<h4 class="tournament">Phoenix Squadron Championship 2023 Invitation Finals</h4>

<h4>Past Events</h4>
<h4 class="league">Phoenix Squadron Championship 2023 Division Play</h4>
<p></p>