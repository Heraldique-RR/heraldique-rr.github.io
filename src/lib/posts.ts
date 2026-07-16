export interface PostBlock {
	type: 'paragraph' | 'heading' | 'list';
	level?: 2 | 3;
	text?: string;
	items?: string[];
}

export interface Post {
	slug: string;
	title: string;
	date: string;
	categories: string[];
	excerpt: string;
	blocks: PostBlock[];
}

export const posts: Post[] = [
	{
		slug: 'introduction-heraldique',
		title: "Introduction à l'héraldique",
		date: '2026-07-16',
		categories: ['introduction'],
		excerpt:
			"L'héraldique est bien plus qu'un simple art décoratif : c'est un langage visuel codifié, né au cœur du Moyen Âge.",
		blocks: [
			{
				type: 'paragraph',
				text: "L'héraldique est bien plus qu'un simple art décoratif : c'est un langage visuel codifié, né au cœur du Moyen Âge, qui continue de fasciner par sa richesse symbolique et sa rigueur."
			},
			{ type: 'heading', level: 2, text: 'Les origines' },
			{
				type: 'paragraph',
				text: "C'est vers le milieu du XIIe siècle que l'on voit apparaître les premières armoiries héréditaires en Europe occidentale. La nécessité de reconnaître les combattants sur le champ de bataille, masqués derrière leurs heaumes, a conduit à orner boucliers et bannières de signes distinctifs."
			},
			{ type: 'heading', level: 2, text: 'Le langage du blason' },
			{
				type: 'paragraph',
				text: "Décrire une armoirie se dit blasonner. C'est un langage précis qui permet de décrire avec exactitude n'importe quelle composition héraldique :"
			},
			{
				type: 'list',
				items: [
					"On commence toujours par l'écu (le fond)",
					'On décrit ensuite les pièces et meubles',
					'On précise les émaux (couleurs et métaux)'
				]
			},
			{ type: 'heading', level: 2, text: 'La règle fondamentale' },
			{
				type: 'paragraph',
				text: "La règle principale stipule qu'on ne peut pas poser un émail sur un émail, ni un métal sur un métal. Cette règle garantit la lisibilité des armoiries, même à distance."
			}
		]
	},
	{
		slug: 'emaux-heraldiques',
		title: 'Les émaux héraldiques : couleurs et métaux',
		date: '2026-07-16',
		categories: ['vocabulaire'],
		excerpt:
			"Les émaux constituent la palette chromatique de l'héraldique. Ce terme désigne à la fois les couleurs et les métaux utilisés dans les armoiries.",
		blocks: [
			{
				type: 'paragraph',
				text: "Les émaux constituent la palette chromatique de l'héraldique. Ce terme désigne à la fois les couleurs et les métaux utilisés dans les armoiries."
			},
			{ type: 'heading', level: 2, text: 'Les métaux' },
			{ type: 'paragraph', text: "L'héraldique reconnaît deux métaux :" },
			{
				type: 'list',
				items: [
					'Or — jaune doré, représenté par un pointillé dense',
					'Argent — blanc, laissé en blanc dans les représentations en noir et blanc'
				]
			},
			{ type: 'heading', level: 2, text: 'Les couleurs' },
			{ type: 'paragraph', text: 'Les cinq couleurs classiques sont :' },
			{
				type: 'list',
				items: [
					'Gueules — rouge (lignes horizontales)',
					'Azur — bleu (lignes verticales)',
					'Sable — noir (quadrillage)',
					'Sinople — vert (lignes diagonales descendant à droite)',
					'Pourpre — violet (lignes diagonales descendant à gauche)'
				]
			},
			{ type: 'heading', level: 2, text: 'La règle des émaux' },
			{
				type: 'paragraph',
				text: 'La règle fondamentale est simple : jamais émail sur émail, jamais métal sur métal. Un objet de couleur doit toujours être posé sur un métal, et vice versa.'
			},
			{ type: 'heading', level: 2, text: 'Les fourrures' },
			{
				type: 'paragraph',
				text: "En plus des métaux et des couleurs, l'héraldique utilise des fourrures :"
			},
			{
				type: 'list',
				items: [
					'Hermine — fond argent avec mouchetures de sable',
					"Vair — alternance d'azur et d'argent en petites cloches"
				]
			}
		]
	}
];

export function getPost(slug: string): Post | undefined {
	return posts.find((p) => p.slug === slug);
}

