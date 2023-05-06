<header>
	<h1>Phoenix Squadron</h1>
	<nav>
		<ul>
			<a href="/"><li>Home</li></a>
			<a href="/events"><li>Events</li></a>
			<a href="/psc-2023"><li>PSC 2023</li></a>
			<a href="/locations"><li>Locations</li></a>
			<a href="/gallery"><li>Gallery</li></a>
			<a href="/blog"><li>Blog</li></a>
			<a href="/about"><li>About</li></a>
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

	nav > ul > a > li {
		display: block;
		padding: 0.5rem;
	}
	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover{
		color: lightblue
	}
</style>
