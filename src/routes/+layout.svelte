<script lang="ts">
	import type { LayoutData } from './$types';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	// Vercel analytics bits 
	import { dev } from '$app/environment'
	import { inject } from  '@vercel/analytics'

	inject({mode: dev ? 'development' : 'production' });

	//Stylesheet
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
		margin-bottom: 2rem;
		margin-left: auto;
		margin-right: auto;
		max-width: 600px;
		padding-top: 6rem;
		padding-bottom: 4rem;
		flex: 1 0 auto
	}

	.app {
  		display: flex;
  		flex-direction: column;
  		height: 100vh;
	}
</style>
