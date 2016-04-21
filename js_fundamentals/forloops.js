// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").


  for (var i = 0; i < 20; i++){
    if(i % 2 === 0){
      console.log(i + ' is an even Numba and is gangsta!')
    }else if(i === 0){
      console.log(i + ' is truly lonely being undivisble.')
    }else{
      console.log(i + ' is a lonely Prime.')
    }
  }

0 is truly lonely being undivisble.
1 is a lonely Prime.
2 is an even Numba and is gangsta!
3 is a lonely Prime.
4 is an even Numba and is gangsta!
5 is a lonely Prime.
6 is an even Numba and is gangsta!
7 is a lonely Prime.
8 is an even Numba and is gangsta!
9 is a lonely Prime.
10 is an even Numba and is gangsta!
11 is a lonely Prime.
12 is an even Numba and is gangsta!
13 is a lonely Prime.
14 is an even Numba and is gangsta!
15 is a lonely Prime.
16 is an even Numba and is gangsta!
17 is a lonely Prime.
18 is an even Numba and is gangsta!
19 is a lonely Prime.



// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).

Bonus:
for (var i = 0; i < 10; i++){
  for (var k = 0; k < 10; k++) {
    console.log(i + ' x ' + k + ' = ' + i * k)
  }
}


for (var i = 0; i < 10; i++){
  console.log(i + ' x 9 = ' + i * 9)
}


// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.


for (var i = 50; i <= 100; i++) {
  if(i < 60){
    console.log("Your score was " + i + "... YOU FAIL!")
  }else if(i < 70){
    console.log("Your score was " + i + ", you got a D")
  }else if(i < 80){
    console.log("Your score was " + i + ", you got a C")
  }else if(i < 90){
    console.log("Your score was " + i + ", you got a B")
  }else if(i < 99){
    console.log("Your score was " + i + ", you got a A")
  }else{
    console.log("You did too well... go away!")
  }
}
