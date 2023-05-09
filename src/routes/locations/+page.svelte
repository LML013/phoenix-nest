<script lang="ts">
	import type { PageData } from './$types';
	import Venue from './Venue.svelte';

	export let data: PageData;
</script>

<h2>Locations</h2>
<!-- to be turned into components pulling from database later -->
{#each data.locations as location}	
	<Venue {location}/>
{/each}

<style>
	h2{
		text-decoration: underline;
	}
</style>
