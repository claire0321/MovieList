// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// api/movies.js (Vercel Serverless)
const BASE_URL = "https://api.themoviedb.org/3";

export default async function handler(req, res) {
    const API_KEY = process.env.TMDB_API_KEY;
    const { type, query } = req.query;

    let url = "";

    try {
        if (type === "popular") {
            url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
        } else if (type === "search") {
            url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
        } else {
            return res.status(400).json({ message: "Invalid type parameter" });
        }

        const response = await fetch(url);
        const data = await response.json();

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}
