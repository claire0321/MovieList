const BASE_URL = "/api/movies"; // Serverless function

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}?type=popular`);

    if (!response.ok) {
        throw new Error("Failed to fetch popular movies");
    }

    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}?type=search&query=${encodeURIComponent(query)}`);

    if (!response.ok) {
        throw new Error("Failed to search movies");
    }

    const data = await response.json();
    return data.results;
};
