<script lang="ts">
	import { base } from '$app/paths';
	import { posts } from '$lib/posts';
</script>

<svelte:head>
	<title>Blog — Héraldique RR</title>
</svelte:head>

<h1>Blog</h1>

<p class="lead">Articles sur l'héraldique, le blason et les armoiries.</p>

<ul class="post-list">
	{#each posts as post}
		<li>
			<a href="{base}/blog/{post.slug}">
				<h2>{post.title}</h2>
				<time datetime={post.date}>{new Date(post.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
				<p>{post.excerpt}</p>
			</a>
		</li>
	{/each}
</ul>

<style>
	h1 {
		color: #1a1a2e;
		border-bottom: 2px solid #c9a84c;
		padding-bottom: 0.5rem;
	}

	.lead {
		color: #555;
		font-style: italic;
	}

	.post-list {
		list-style: none;
		padding: 0;
		margin-top: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.post-list li a {
		display: block;
		background: #fff;
		border: 1px solid #e8dfc8;
		border-left: 4px solid #c9a84c;
		border-radius: 0 8px 8px 0;
		padding: 1.25rem 1.5rem;
		text-decoration: none;
		color: inherit;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
		transition: box-shadow 0.2s;
	}

	.post-list li a:hover {
		box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
	}

	h2 {
		margin: 0 0 0.25rem;
		color: #1a1a2e;
		font-size: 1.25rem;
	}

	time {
		font-size: 0.85rem;
		color: #888;
	}

	p {
		margin: 0.5rem 0 0;
		color: #555;
		font-size: 0.95rem;
	}
</style>
