// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(numChildren, partnerName, geoLocation, jobTitle){
  console.log("You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numChildren + " kids.")

}

tellFortune(3, "Penny", "California", "Actor")
  ==> You will be a Actor in California, and married to Penny with 3 kids.

tellFortune(1, "Miss God", "Heaven", "Almighty")
  ==> You will be a Almighty in Heaven, and married to Miss God with 1 kids.

tellFortune(10, "Jen", "Mount Olympus", "Arm-Wrestler")
  ==> You will be a Arm-Wrestler in Mount Olympus, and married to Jen with 10 kids.


// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear, curYear){
  var curYear = new Date().getFullYear()
  var yourAge = curYear - birthYear

  console.log("You are either " + yourAge + " or " + (yourAge - 1))
}


calculateAge(1991)
  ==> You are either 25 or 24

calculateAge(1988)
  ==> You are either 28 or 27

calculateAge(1700)
  ==> You are either 316 or 315





// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function caclulateSupply(age, amountDay){
  var maxAge = 90
  var inYear = amountDay * 365

  console.log("If you were " + age + " now, You will need " + (inYear * (maxAge - age)) + " to last you until the ripe old age of " + maxAge + '.')

}

caclulateSupply(24, 1)
  ==> If you were 24 now, You will need 24090 to last you until the ripe old age of 90.

caclulateSupply(15, 22)
  ==> If you were 15 now, You will need 602250 to last you until the ripe old age of 90.

caclulateSupply(60, 5)
  ==> If you were 60 now, You will need 54750 to last you until the ripe old age of 90.


// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".


function calcCircumfrence(radius){
  console.log("The circumference of this badass circle is " + 2 * Math.PI * radius + '! :)')
}

function calcArea(radius){
  console.log("The area of this badass circle is " + Math.PI * Math.pow(radius, 2) + '! :)')
}


calcCircumfrence(4)
  ==> The circumference of this badass circle is 25.132741228718345! :)

calcArea(4)
  ==> The area of this badass circle is 50.26548245743669! :)



// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celciusToFahrenheit(cTemp){
  if(cTemp < 5){
    console.log("It's freezing you CraZy?! it's " + cTemp + '°C or ' + (cTemp * 1.8 + 32) + '°F.' )
  }else{
    console.log("Warm enough?? it's " + cTemp + '°C or ' + (cTemp * 1.8 + 32) + '°F.')
  }
}

celciusToFahrenheit(2)
  ==> Its freezing you CraZy?! its 2°C or 35.6°F.

celciusToFahrenheit(50)
  ==> Warm enough?? its 50°C or 122°F.


function fahrenheitToCelsius(fTemp){
  if(fTemp < 37){
    console.log("It's freezing you CraZy?! it's " + fTemp + '°F. or ' + (fTemp - 32) / 1.8 + '°C.')
  }else{
    console.log("Warm enough?? it's " + fTemp + '°F. or ' + (fTemp - 32) / 1.8 + '°C.')
  }
}


fahrenheitToCelsius(35)
  ==> Its freezing you CraZy?! its 35°F. or 1.6666666666666665°C.

fahrenheitToCelsius(122)
  ==> Warm enough?? its 122°F. or 50°C.
