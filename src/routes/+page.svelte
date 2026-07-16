<svelte:head>
	<title>Héraldique RR — Accueil</title>
</svelte:head>

<section class="hero">
	<span class="shield">⚜</span>
	<h1>Bienvenue sur Héraldique RR</h1>
	<p class="subtitle">L'art et la science du blason, de la chevalerie à aujourd'hui</p>
</section>

<section class="intro">
	<h2>Qu'est-ce que l'héraldique&nbsp;?</h2>
	<p>
		L'héraldique est la science du blason — l'étude et la description des armoiries. Née au XII<sup>e</sup>
		siècle en Europe occidentale pour identifier les chevaliers en bataille, elle reste aujourd'hui
		une discipline fascinante mêlant histoire, art et symbolisme.
	</p>
</section>

<section class="features">
	<div class="card">
		<span class="icon">🛡️</span>
		<h3>L'écu</h3>
		<p>Le bouclier sur lequel sont représentées les armoiries, fondement de tout blason.</p>
	</div>
	<div class="card">
		<span class="icon">🎨</span>
		<h3>Les émaux</h3>
		<p>Couleurs (gueules, azur, sable…) et métaux (or, argent) qui composent les armoiries.</p>
	</div>
	<div class="card">
		<span class="icon">🦁</span>
		<h3>Les meubles</h3>
		<p>Animaux, objets et figures héraldiques qui ornent l'écu et lui donnent son sens.</p>
	</div>
</section>

<style>
	.hero {
		text-align: center;
		padding: 3rem 0 2rem;
	}

	.shield {
		font-size: 4rem;
		display: block;
		margin-bottom: 0.5rem;
	}

	h1 {
		font-size: 2.25rem;
		margin: 0.25rem 0;
		color: #1a1a2e;
	}

	.subtitle {
		font-size: 1.1rem;
		color: #666;
		font-style: italic;
		margin-top: 0.5rem;
	}

	.intro {
		margin: 2rem 0;
		padding: 1.5rem;
		background: #fff;
		border-left: 4px solid #c9a84c;
		border-radius: 0 8px 8px 0;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
	}

	.intro h2 {
		margin-top: 0;
		color: #1a1a2e;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 1.25rem;
		margin-top: 2rem;
	}

	.card {
		background: #fff;
		border: 1px solid #e8dfc8;
		border-radius: 8px;
		padding: 1.5rem;
		text-align: center;
		box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);
	}

	.icon {
		font-size: 2rem;
	}

	.card h3 {
		margin: 0.5rem 0 0.25rem;
		color: #1a1a2e;
	}

	.card p {
		font-size: 0.95rem;
		color: #555;
		margin: 0;
	}
</style>

