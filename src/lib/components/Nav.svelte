<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/state';

	const links = [
		{ href: `${base}/`, label: 'Accueil' },
		{ href: `${base}/blog`, label: 'Blog' },
		{ href: `${base}/about`, label: 'À propos' }
	];
</script>

<nav>
	<a class="brand" href="{base}/">⚜ Héraldique RR</a>
	<ul>
		{#each links as link}
			<li>
				<a href={link.href} class:active={page.url.pathname === link.href}>
					{link.label}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 2rem;
		height: 4rem;
		background: #1a1a2e;
		color: #e0c97f;
		border-bottom: 2px solid #c9a84c;
	}

	.brand {
		font-size: 1.25rem;
		font-weight: 700;
		text-decoration: none;
		color: #e0c97f;
		letter-spacing: 0.05em;
	}

	ul {
		list-style: none;
		display: flex;
		gap: 2rem;
		margin: 0;
		padding: 0;
	}

	a {
		color: #c9c9c9;
		text-decoration: none;
		transition: color 0.2s;
	}

	a:hover,
	a.active {
		color: #e0c97f;
	}

	a.active {
		font-weight: 600;
		border-bottom: 2px solid #e0c97f;
	}
</style>
