<header>
	<h1>Phoenix Squadron</h1>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/events">Events</a></li>
			<li><a href="/psc-2023">PSC 2023</a></li>
			<li><a href="/locations">Locations</a></li>
			<li><a href="/gallery">Gallery</a></li>
			<li><a href="/blog">Blog</a></li>
			<li><a href="/about">About</a></li>
		</ul>
	</nav>
</header>

<style>
	h1 {
		display: inline;
		text-align: center;
	}
	nav > ul {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		height: 100%;
		list-style-type: none;
	}

	header {
		width: 100%;
		height: 6rem;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		position: fixed;
		top: 0;
		background-color: rgba(36, 36, 36, 1);
	}

	nav > ul > li {
		display: block;
		padding: 0.5rem;
	}
	li > a {
		color: inherit;
		text-decoration: none;
	}
</style>
