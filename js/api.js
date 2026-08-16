export async function getMovie(Name) {
    const response = await fetch(
        `https://api.poiskkino.dev/v1.4/movie/search?query=${Name}`,
        {
            headers: {
                "X-API-KEY": "VB2JE9B-HWVM184-K658SZ5-BQ1SD2W"
            }
        }
    );

    if (!response.ok){
        throw new Error(`Ошибка API: ${response.status}`);
    }

    const data = await response.json();

    return data

}


