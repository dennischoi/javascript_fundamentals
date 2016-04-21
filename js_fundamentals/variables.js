// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: job title, geographic location, partner's name, number of children.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var job = "god"
god
var location = "Heaven"
Heaven
var partner = "miss god"
miss god
var numChildren = 1
1

Fortune = 'You will be a ' + job + ' in '+ loc + ', and married to ' + partner + ' with '+ numChildren + ' kid.'
  ==> "You will be a god in Heaven, and married to miss god with 1 kid."

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are NN years old.", substituting the values.

var currentYear = 2016
2016
var birthYear = 1991
1991
var Age = currentYear - birthYear
25
ageOutput = 'They are ' + Age + ' years old.'
==> "They are 25 years old."

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 24
24

var deathAge = 90
90

var crunchBarDaily = 1
1

var totalCrunch = 100000
100000

var remainingYears = deathAge - currentAge
66

var crunchAYear = crunchBarDaily * 365
365

var crunchToDeath = remainingYears * crunchAYear
24090

var crunchOutput = 'You will need ' + crunchToDeath + ' to last you until the ripe old age of ' + deathAge + '.'
"You will need 24090 to last you until the ripe old age of 90."


// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var circleRadius = 25
25
var pie = 3.14
3.14
var circleCircumference = 'The circumference is ' + 2 * pie * circleRadius
"The circumference is 157"

var circleArea = 'The area is ' + pie * Math.pow(circleRadius, 2)
"The area is 1962.5"


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celciusTemp = 15
15

var convertFahrenheit = 'Temperature is ' + celciusTemp + '°C or ' + (celciusTemp * 1.8 + 32) + '°F.'
"Temperature is 15°C or 59°F."

var fahrenheitTemp = 70
70

var convertCelcius = 'Temperature is ' + fahrenheitTemp + '°F or ' + (fahrenheitTemp - 32) / 1.8 + '°C.'
"Temperature is 70°F or 21.11111111111111°C."
