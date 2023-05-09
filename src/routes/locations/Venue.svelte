<script lang="ts">
    export let location;
    
    const {id, name, desc, nights, addr, url} = location;

</script>

<h3 {id}>{name}</h3>
{#if {desc}}
    <p>{desc}</p>
{/if}
{#if {nights}}
    <p>Open Play {nights} Nights</p>
{/if}
<p><em>{addr}</em></p>
{#if {url}}
    <p><a href={url}>{url}</a></p>
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