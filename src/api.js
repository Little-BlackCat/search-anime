export const animeApiOption = {
  method: 'GET',
	headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
		'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
	}
};

export const ANIME_URL = 'https://anime-db.p.rapidapi.com/anime?page=1&size=25&sortBy=title&sortOrder=asc';
