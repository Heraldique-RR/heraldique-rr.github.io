<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="description" content="Un site dédié à l'héraldique et aux arts du blason" />
</svelte:head>

<Nav />

<main>
	{@render children()}
</main>

<footer>
	<p>© {new Date().getFullYear()} Héraldique RR — Fait avec <a href="https://svelte.dev">Svelte</a></p>
</footer>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(body) {
		margin: 0;
		font-family: Georgia, 'Times New Roman', serif;
		background: #f9f5ec;
		color: #2c2c2c;
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	main {
		flex: 1;
		max-width: 900px;
		width: 100%;
		margin: 2rem auto;
		padding: 0 1.5rem;
	}

	footer {
		text-align: center;
		padding: 1.5rem;
		font-size: 0.875rem;
		color: #666;
		border-top: 1px solid #ddd;
	}

	footer a {
		color: #8b4513;
		text-decoration: none;
	}
</style>

