<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2>Locations</h2>
<!-- to be turned into components pulling from database later -->
{#each data.locations as location}
	<h3><a href={location.url}>{location.name} ↗</a></h3>
	{#if location.desc}
		<p>{location.desc}</p>
	{/if}
	{#if location.nights}
		<p>Open Play {location.nights} Nights</p>
	{/if}
	<p><em>{location.addr}</em></p>
{/each}

<style>
	h2, h3 {
		text-decoration: underline;
	}
	p {
		text-indent: 1rem;
	}
	a {
		color: inherit;
	}
	a:hover {
		color: lightblue;
	}
</style>
