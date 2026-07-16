<script lang="ts">
	import { base } from '$app/paths';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const post = $derived(data.post);
</script>

<svelte:head>
	<title>{post.title} — Héraldique RR</title>
</svelte:head>

<article>
	<header>
		<a class="back" href="{base}/blog">← Retour au blog</a>
		<h1>{post.title}</h1>
		<time datetime={post.date}>
			{new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
		</time>
		{#each post.categories as cat}
			<span class="tag">{cat}</span>
		{/each}
	</header>

	<div class="content">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html post.content}
	</div>
</article>

<style>
	article {
		background: #fff;
		border-radius: 8px;
		padding: 2rem;
		box-shadow: 0 1px 6px rgba(0, 0, 0, 0.08);
	}

	header {
		border-bottom: 2px solid #e8dfc8;
		padding-bottom: 1rem;
		margin-bottom: 1.5rem;
	}

	.back {
		font-size: 0.9rem;
		color: #8b4513;
		text-decoration: none;
		display: inline-block;
		margin-bottom: 0.75rem;
	}

	.back:hover {
		text-decoration: underline;
	}

	h1 {
		margin: 0 0 0.5rem;
		color: #1a1a2e;
		font-size: 2rem;
	}

	time {
		font-size: 0.875rem;
		color: #888;
		margin-right: 0.75rem;
	}

	.tag {
		display: inline-block;
		background: #f0e8d0;
		color: #6b4c1e;
		font-size: 0.75rem;
		padding: 0.15rem 0.5rem;
		border-radius: 999px;
		margin-right: 0.25rem;
	}

	.content :global(h2) {
		color: #1a1a2e;
		margin-top: 2rem;
	}

	.content :global(strong) {
		color: #1a1a2e;
	}

	.content :global(ul) {
		padding-left: 1.5rem;
	}

	.content :global(li) {
		margin-bottom: 0.4rem;
	}
</style>
