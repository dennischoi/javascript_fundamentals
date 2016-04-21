// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(x, y){
  if (x > y) {
    console.log(x + ' is greater than ' + y);
  }else{
    console.log(y + ' is greater than ' + x);
  }
}
greaterNum(55, 22)
greaterNum(5, 10)

55 is greater than 22
10 is greater than 5



// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(langCode){
  switch (langCode){
    case "Korean":
      console.log("안녕하세요, 세계")
      break;
    case "French":
      console.log("Bonjour le monde")
      break;
    case "Japanese":
      console.log("こんにちは世界")
      break;
    default:
      console.log("Hello, World!")
  }
}

helloWorld("Korean")
  ==> 안녕하세요, 세계

helloWorld("French")
  ==> Bonjour le monde

helloWorld()
  ==> Hello, World!

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(testScore){
  if(testScore < 50){
    console.log("Your score was " + testScore + "... YOU FAIL!")
  }else if(testScore < 60){
    console.log("Your score was " + testScore + ", you got a D")
  }else if(testScore < 70){
    console.log("Your score was " + testScore + ", you got a C")
  }else if(testScore < 80){
    console.log("Your score was " + testScore + ", you got a B")
  }else if(testScore < 90){
    console.log("Your score was " + testScore + ", you got a A")
  }else{
    console.log("You did too well... go away!")
  }
}

assignGrade(88)
  ==> Your score was 88, you got a A

assignGrade(63)
  ==> Your score was 63, you got a C

assignGrade(99)
  ==> You did too well... go away!

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".


function pluralized(aNoun, aNum){
if(aNum > 1){
console.log(aNum + ' ' + aNoun + 's... You could use some more ' + aNoun + 's')
}else{
console.log(aNum + ' ' + aNoun + '... Need a better imagination!')
}
}



function pluralized(aNoun, aNum){
  switch (aNoun){
    case "sheep":
      console.log(aNum + ' sheep')
      break;
    case "goose":
      if(aNum > 1){
        console.log(aNum + ' Geese in da HOOD')
      }else{
        console.log(aNum + ' Goose... YEEEA')
      }
      break;
      default:
        if(aNum > 1){
          console.log(aNum + ' ' + aNoun + 's... You could use some more ' + aNoun + 's')
        }else{
          console.log(aNum + ' ' + aNoun + '... Need a better imagination!')
        }
    }
}


pluralized('goose', 5)
  ==> Geese in da HOOD

pluralized("cat", 100)
  ==> 100 cats... You could use some more cats
