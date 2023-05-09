<script lang="ts">
	export let location;

	const { slug, name, desc, nights, addr, url, addr_url } = location;
</script>

<h3 id={slug}>{name}</h3>
{#if desc}
	<p>{desc}</p>
{/if}
{#if nights}
	<p>Open Play {nights} Nights</p>
{/if}
<p><a href={addr_url} target="_blank"><em>{addr}</em></a></p>
{#if url}
    <p><a href={url} target="_blank">{url}</a></p>
{/if}

<style>
	h3 {
		text-decoration: underline;
	}
	p {
		text-indent: 1rem;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	a:hover {
		color: lightblue;
	}
</style>
