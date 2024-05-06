/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
const person = {
    name: "soud",
    age:  "28",
    city: "kuwait"
}

console.log(person)
/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/

person.email = "soud9949alegmailcom"


console.log(person)

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
const hasKey = (object,key)=>{
    if (object[key]) {
        return true;
    }  else{
        return false;
    }
};

console.log(hasKey(person,"grade"))


const movies = [
    {
      title: "The Shawshank Redemption",
      director: "Frank Darabont",
      year: 1994,
      genre: "Drama",
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      genre: "Crime",
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      year: 1994,
      genre: "Crime",
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      genre: "Action",
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      year: 1994,
      genre: "Drama",
    },
  ];
  /******************************
      Q4) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to log the titles of all the movies.
  ********************************/
  const mvtit = movies.forEach (  (movie)=>{
    console.log(movie.title)

  })
  

  
  
  /******************************
      Q5) Create a function that accepts an array of objects called 'movies' 
  and iterates through it to count how many movies were released in the year 1994.
  ********************************/
  function countmovi(movies) {
    return movies.reduce((count, movie) => {
      if (movie.year === 1994) {
        return count + 1;
      }
      return count;
    }, 0);
  }
  
  console.log(countMovi(movies))
  
  /******************************
      Q6) Write a function that updates the genre of the movie "The Dark Knight"
   to "Action/Drama" and returns the modified array of movies.
  ********************************/
  

   function updateDarkKnight(movies) {
    return movies.map(movie => {
      if (movie.title === "The Dark Knight") {
        movie.genre = "Action/Drama";
      }
      return movie;
    });
  }

  console.log(updateDarkKnight(movies))