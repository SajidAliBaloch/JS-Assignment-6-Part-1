// ============ Assignment 6 =============


// 1. Write a program that takes two user inputs for first and  last name using prompt and merge them in a new variable  

var firstName = prompt('Enter your first name')
var lastName = prompt('Enter your last name')
var fullName = firstName + " " + lastName
alert(fullName)


// 2. Write a program to take a user input about his favorite  mobile phone model. Find and display the length of user  input in your browser 

var userPhone = prompt('Enter your favorite phone model');
var userPhoneLength = userPhone.length;
document.write(`<h1>My favorite phone is: ${userPhone}</h1>`)
document.write(`<h1>Length of string: ${userPhoneLength}</h1>`)


// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser . 

var nationalties = 'Pakistani'
var index = nationalties.indexOf('n')
document.write(`<h1>String: ${nationalties}</h1>`)
document.write("<br>")
document.write(`<h1>Index of 'n': ${index}</h1>`)


// 4. Write a program to find the last index of letter “l” in the  word “Hello World” and display the result in your browser.

var word ='Hellow World'
var index = word.lastIndexOf('l')
document.write(`<h1>String: ${word}</h1>`)
document.write("<br>")
document.write(`<h1>Last Index of 'l': ${index}</h1>`)


// 5. Write a program to find the character at 3rd index in the  word “Pakistani” and display the result in your browser. 

var word ='Pakistani'
var character = word.charAt('3')
document.write(`<h1>String: ${word}</h1>`)
document.write("<br>")
document.write(`<h1>Character at index '3': ${character}</h1>`)


// 6. Repeat Q1 using string concat() method.

var firstName = prompt('Enter your first name')
var lastName = prompt('Enter your last name')
var fullName = ''.concat(firstName, ' ', lastName)
alert(fullName)


// 7. Write a program to replace the “Hyder” to “Islam” in the  word “Hyderabad” and display the result in your browser. 

var city = 'Hyderabad'
var newCity = city.replace("Hyder", "Islam")
document.write(`City: ${city}`)
document.write("<br>")
document.write(`After replacement: ${newCity}`)


// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.

var message = "Ali and Sami are best friends. They play cricket and football together.";
var updatedMessage = message.split("and").join("&");
document.write(updatedMessage)


// 9. Write a program that converts a string “472” to a number  472. Display the values & types in your browser.

var stringNumber = "472"
var number = parseInt(stringNumber)
document.write(`Value: ${stringNumber}`)
document.write("<br>")
document.write("Type: "+ typeof stringNumber)
document.write("<br>")
document.write(`Value: ${number}`)
document.write("<br>")
document.write("Type: "+ typeof number)


// 10. Write a program that takes user input. Convert and  show the input in capital letters. 

var userInput = prompt('Enter any word')
var capitalCase = userInput.toUpperCase()
document.write(`User input: ${userInput}`)
document.write("<br>")
document.write(`Upper case: ${capitalCase}`)


// 11. Write a program that takes user input. Convert and  show the input in title case. 

var userInput = prompt('Enter any word')
var firstAlpha = userInput.slice(0,1).toUpperCase()
var restAlpha = userInput.slice(1).toLocaleLowerCase()
var titleCase = firstAlpha+restAlpha
document.write(`User input: ${userInput}`)
document.write("<br>")
document.write(`Title case: ${titleCase}`)


// 12. Write a program that converts the variable num to  string. 

var num = 35.36;
var result = num.toString().replace(".", "")
document.write(`Number: ${num}`)
document.write("<br>")
document.write(`Result: ${result}`)

