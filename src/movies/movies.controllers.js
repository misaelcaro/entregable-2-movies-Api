const moviesDB= [
    {
        id: 1,
        title: "Hide and Seek",
        director: "Joel David Moore",
        duracion: "1H 24Min",
        year: 2021,
        distribution: ["Jonathan Rhys" ,"Meyers" ,"Joe Pantoliano" ,"Jacinda Barrett" ,"Mustafa Shakir" ,"Geoffrey Owens", "Marcella Lentz", "Quinn McColgan", "Barbara Rosenblat", "Michael Godere"],
        audio: ["english", "spanish"],
        subtitles: ["spanish"],
        genre: [ "thriller", "terror"],
        country: "United Stated",
        description:"Remake of the homonymous South Korean film starring in this case by Jonathan Rhys Meyers who draws a terrifying story about the class. struggle A businessman comes to a poor apartment trying to find his brother, who has disappeared. However, the walls hide a terrible secret and that is that a series of hidden squatters could be living in the shadows, waiting for the perfect moment to attack and destroy their tenants. ",
        url_image: "https://static.filmin.es/images/media/39225/5/poster_1_3_1000x1500.jpg"
    }
]

let movieId=2

const findAllMovies=async()=>{
    return moviesDB

}

const findMovieById= async(id)=>{
    const movie = moviesDB.find(movieItem=> movieItem.id===id)
    return movie
}

const createMovie=async(movieObj)=>{
    const newMovie= {
        id: movieId++,
        title: movieObj.title || "untitle",
        director:movieObj.director || "Anonimous",
        duracion: movieObj.duracion || "unknowed",
        year: movieObj.year || null,
        distribution: movieObj.distribution || null,
        audio: movieObj.audio|| null,
        subtitles: movieObj.subtitles || null,
        genre: movieObj.genre || null,
        country: movieObj.country || null,
        description: movieObj.description || null,
        url_image: movieObj.url_image || null,
    }

    moviesDB.push(newMovie)
    return newMovie
}
module.exports={
    findAllMovies,
    findMovieById,
    createMovie
}