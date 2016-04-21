// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var favRecipe = {
  title: "Jellybean Pie",
  servings: 5,
  ingredients: ['Jellybean', 'Dough', 'Apple', "Butter", 'Whatever Left in the Fridge']
};


console.log(favRecipe.title)
console.log(favRecipe.servings)

favRecipe.ingredients.forEach(function (item, index, array){
  console.log(item, index)
})


favRecipe.ingredients.forEach(function (item, index, array){
  console.log(item, index)
})
Jellybean 0
Dough 1
Apple 2
Butter 3
Whatever Left in the Fridge 4


// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

var myBooks = [
  {title: "Game of Thrones: Series",
    author: "Some fat guy",
    readit: false},
  {title: "The Hobbit",
    author: "J.R.R. Tolkien",
    readit: true}
]

for (var i = 0; i < myBooks.length; i++){

  var myBook = myBooks[i]
  // Be sure to add the myBook (the name for each object in the array because of the for loop iteration [i])
  if(myBook.readit === true){
    console.log("I've Already read " + myBook.title + ' by: ' + myBook.author + '.')
  }else{
    console.log('Still gotta read ' + myBook.title + ' by: ' + myBook.author + '.')
  }
}

  ==> Still gotta read Game of Thrones: Series by: Some fat guy.
  ==> Ive Already read The Hobbit by: J.R.R. Tolkien.




// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."


var favMovie = {
  title: "Snatch",
  duration: 100,
  stars: ['Jason Statham', 'Brad Pitt', "Gypsies", 'Green Machines', 'Extras']
}

function movieRating(movie){
  console.log(movie.title + ' is just about ' + movie.duration + ' minutes long. Stars: ' + movie.stars + '.' )
}

movieRating(favMovie)
  ==> Snatch is just about 100 minutes long. Stars: Jason Statham,Brad Pitt,Gypsies,Green Machines,Extras.
