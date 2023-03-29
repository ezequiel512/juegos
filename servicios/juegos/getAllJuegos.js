export default function getAllJuegos () {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9faa849701mshb9078be043df846p1af6ddjsn282d3a471ec4',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    return fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
      .then(response => {
          const data = response.json();
          return data;
    })
}
