<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte'

	import './styles.css';

	//export let data: LayoutData;
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>

<style>
	main {
		width: 80%;
  margin-top: 0;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
	}
</style>