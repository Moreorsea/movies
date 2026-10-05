export type MockMovieDetail = {
	id: string;
	title: string;
	kicker: string;
	overview: string;
	year: number;
	genre: string;
	runtime: string;
	tmdbRating: number;
	posterUrl: string;
	backdropUrl: string;
	userRating?: number | null;
};

export const mockMovies: Record<string, MockMovieDetail> = {
	"ash-and-orbit": {
		id: "ash-and-orbit",
		title: "Пепел и орбита",
		kicker: "Рекомендация вечера",
		overview:
			"Тихий sci-fi о памяти, которую нельзя стереть. Медленный ритм, сильный визуальный язык — если любите «Arrival» и «Enemy».",
		year: 2024,
		genre: "Sci-Fi",
		runtime: "2ч 08м",
		tmdbRating: 8.2,
		posterUrl:
			"https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80",
		userRating: 8,
	},
	"midnight-run": {
		id: "midnight-run",
		title: "Midnight Run",
		kicker: "Из каталога",
		overview:
			"Ночная погоня по пустому городу. Напряжение без лишнего шума — чистый триллер про выбор, который нельзя отменить.",
		year: 2023,
		genre: "Триллер",
		runtime: "1ч 54м",
		tmdbRating: 8.4,
		posterUrl:
			"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80",
		userRating: null,
	},
	"glass-house": {
		id: "glass-house",
		title: "Glass House",
		kicker: "Из каталога",
		overview:
			"Семейная драма в доме, где стены помнят слишком много. Тихие разговоры, резкие паузы и свет, который ничего не скрывает.",
		year: 2021,
		genre: "Драма",
		runtime: "1ч 48м",
		tmdbRating: 7.9,
		posterUrl:
			"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1800&q=80",
		userRating: null,
	},
	"red-signal": {
		id: "red-signal",
		title: "Red Signal",
		kicker: "Из каталога",
		overview:
			"Криминальный узел в мегаполисе: один сигнал, три версии правды. Темп держит до финальных титров.",
		year: 2024,
		genre: "Криминал",
		runtime: "2ч 01м",
		tmdbRating: 8.1,
		posterUrl:
			"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1800&q=80",
		userRating: null,
	},
	"sand-empire": {
		id: "sand-empire",
		title: "Sand Empire",
		kicker: "Из каталога",
		overview:
			"Империя на краю пустыни и карта, которую никто не должен был найти. Широкий sci-fi с личной историей в центре.",
		year: 2022,
		genre: "Sci-Fi",
		runtime: "2ч 22м",
		tmdbRating: 8.7,
		posterUrl:
			"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1800&q=80",
		userRating: null,
	},
	static: {
		id: "static",
		title: "Static",
		kicker: "Из каталога",
		overview:
			"Шум эфира, пропавший сигнал и человек, который слышит то, чего нет. Камерная драма на грани фантастики.",
		year: 2020,
		genre: "Драма",
		runtime: "1ч 41м",
		tmdbRating: 7.6,
		posterUrl:
			"https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1800&q=80",
		userRating: null,
	},
	dune: {
		id: "dune",
		title: "Dune",
		kicker: "Сейчас в тренде",
		overview: "Эпическая сага о власти, пустыне и цене пророчества.",
		year: 2021,
		genre: "Sci-Fi",
		runtime: "2ч 35м",
		tmdbRating: 8.0,
		posterUrl:
			"https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1800&q=80",
		userRating: null,
	},
	"night-drive": {
		id: "night-drive",
		title: "Night Drive",
		kicker: "Сейчас в тренде",
		overview: "Дорога ночью, радио и решение, которое меняет всё.",
		year: 2023,
		genre: "Триллер",
		runtime: "1ч 52м",
		tmdbRating: 7.8,
		posterUrl:
			"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1800&q=80",
		userRating: null,
	},
	"neon-city": {
		id: "neon-city",
		title: "Neon City",
		kicker: "Сейчас в тренде",
		overview: "Неоновый мегаполис и детектив, который не верит своим глазам.",
		year: 2022,
		genre: "Sci-Fi",
		runtime: "1ч 58м",
		tmdbRating: 7.5,
		posterUrl:
			"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=1800&q=80",
		userRating: null,
	},
	afterglow: {
		id: "afterglow",
		title: "Afterglow",
		kicker: "Сейчас в тренде",
		overview: "После финала остаётся свет — и вопросы без ответа.",
		year: 2024,
		genre: "Драма",
		runtime: "1ч 46м",
		tmdbRating: 7.9,
		posterUrl:
			"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=1800&q=80",
		userRating: null,
	},
	orbit: {
		id: "orbit",
		title: "Orbit",
		kicker: "Сейчас в тренде",
		overview: "Короткий путь вокруг себя — и долгая дорога домой.",
		year: 2023,
		genre: "Драма",
		runtime: "1ч 39м",
		tmdbRating: 7.4,
		posterUrl:
			"https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1800&q=80",
		userRating: null,
	},
	harbor: {
		id: "harbor",
		title: "Harbor",
		kicker: "Сейчас в тренде",
		overview: "Порт, туман и письмо, которое опоздало на годы.",
		year: 2020,
		genre: "Драма",
		runtime: "1ч 55м",
		tmdbRating: 7.7,
		posterUrl:
			"https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1800&q=80",
		userRating: null,
	},
	"harbor-lights": {
		id: "harbor-lights",
		title: "Harbor Lights",
		kicker: "Из вашего списка",
		overview: "Огни гавани и вечер, который не хочется заканчивать.",
		year: 2021,
		genre: "Драма",
		runtime: "1ч 50м",
		tmdbRating: 8.0,
		posterUrl:
			"https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=600&q=80",
		backdropUrl:
			"https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1800&q=80",
		userRating: 8,
	},
};

const defaultMovie = mockMovies["ash-and-orbit"] as MockMovieDetail;

export function getMockMovie(id: string): MockMovieDetail {
	const known = mockMovies[id];
	if (known) {
		return known;
	}

	return {
		...defaultMovie,
		id,
		title: id
			.split("-")
			.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
			.join(" "),
		kicker: "Карточка фильма",
	};
}
