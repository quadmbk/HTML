**Javascript Crash Course**
1. To load JAvascript in HTML. USe Tags: \<script src="JS location"> </script>
2. To print somethinbg in the B  rowser console: console.log("To print") . Output :To print. Others are console.error("string") and console.warning("message")\
3. Variables:
   3.1 var : had a global scope. So not used with later versions that much
   3.2 let : has a block level scope. Can be reassigned. Eg. let score = 30; score = 10; console.log(score). Ouput: 10
   3.3 const : has a block level scope and its value cannot be reassigned. Always used const, if the variable wont be reassigned. Eg. const score = 30 ; console.log(score). Output: 30
4. Datatypes: This means the type of data that can be assigned to above variables. These are:
   4.1 strings. Eg: const name = "shubhsha"; const a = "30"
   4.2 number. Eg: let num = 30; let num = 4.5;
   4.3 null. Eg: let empty = null (empty a)
   4.4 undefined.
   4.5 boolean. Eg. const boole = true
5. To find type of the data stored in the variable. command: typeof <varname> Eg. console.log(typeof name). Ouput: string || console.log(typeof empty). Output: object ( and not null. **GOTCHA!!!**)
6. To execute command in console.log or use variables in console.log: console.log(`Name = ${name} typeof name = ${typeof name}`). Output: Name = shubhsha typeof name = string
7. String Properties:
      7.1 name.length: Gives the length of the variable length
      7.2 name.toUpperCase()
      7.3 name.toLowerCase()
      7.4 name.substring(<startindex>, <length of substring>)
      7.5 name.split(<delimiter>): To split string into Array: name.split('')
9. Chaining Functions:
   name = "Hello World". To fetch "Hello" from the previous string and convert it into string, we can do: console.log(name.substring(0,5).toUpperCase())
10. Comments: // single line. /* Mulit-line */
11. Arrays:
    11.1 Creating an array:
       11.1.1 using new method = const numbers = new Array(0,1,2,3,4,5); console.log(numbers). Output: [0,1,2,3,4,5]
       11.1.2 using initialisation = const numbers = [0,1,2,3,4];
    11.2 We can have multiple datatypes as array elements;
    11.3 To access single element: numbers[0]
    11.4 To push element at the end: numbers.push(<element to add>)
    11.5 To pop element   from the end: numbers.pop()
    11.6 We can manipulate arrays even if they are const.
    11.7 To check if some element is an array: Array.isArray(<varname>). REturns true or false
    11.8 To find index of some element. name.indexOf(0)

12. Object Literals: Like python Disctionaries
    12.1 const person = {
                         name: "John",
                         age: 30,
                         hobbies: ['sports', 'Movies', 'Books'],
                         address: {
                                     street: 'ABC',
                                     Block: 'B'
                                  }
                       }
       console.log(person). Output: {name: 'John', age: 30, hobbies: Array(3), address: {…}}. To access speicific items: person.name
    12.2 To add properties like email to above object: person.email = "JOhn.doe@email.com"
13. Loops:
    13.1 For Loop: for(let i = 0 ; i < 10; i++) { console.log(i); }
    13.2 while loop
    13.3 foreach: <arrayvar>.forEach(function(<iteratorname_userdefined>) { console.log(iteratorname); //iteratorname gets the element at each iteration} **);** all is argeument to forEach
    13.4 map: 
    13.5 filter
14. Conditionals:
    14.1 if-else and if-else if-else(just like c++):
          const x = 110;
          if(x==110) {
             console.log('x is 110');
          }
    14.2 == only matches the content and not the datatype so 10 is equal to '10'. To do strict checking where the conditional passes only if x is a numeric 110, we use ===
    14.3. switch-case: syntax: switch(vaarto check) { case 1: <statements>;break; case 2: <statements>; default:}

15. Functions:
   15.1 function <func_name> (arg1, arg2) { return val;}
   15.2 Arrow Function

16. Object Oriented Programming:
   16.1 Constructor function:
           function Person(name, age, email) { this.name = name; this.age = age; this.email = email;}; const myperson = new Person("shubhsha", 30, "abc@email.com"); //myperson will hold a object literal
      16.1.1  We can even add function to above constructor function. Eg. in the function Person, add this: this.getage = function() { return this.age;} ; //NOw : myperson.getage() will return the age;
      16.1.2  To define these functions outside constructor function body, do this: Person.prototype.getAge = function() { return this.age;};
   16.2 class: class Person {
                               constructor(name, age, email) {
                                  this.name = name;
                                  this.age = age;
                                  this.email = email;
                               }  
                           getAge() { //function
                               return this.age; }
                            }
          //Object creation
          const myobj = new Person("shubhsha", 28, '13 May 1996');
          const myperson = new Person("shubhsha", 30, "shubhsha@email.com"}; myperson.getAge();
    
                        
18. DOM
    18.1 "document" object has all the HTML elements of the page.
    18.2 To get a HTML element by id attribute: document.getElementById("<idname>"). We can print it using console.log and variable.
    18.3 Another method to do the same task as 18.2 is document.querySelector('<tagname, classname, idname>'). This will only ouput the first match
    18.4 To get all the elements matching the criterian passed as arguement, use document.querySElectorAll('<tag>'). This gives us a NodelIst which vlike an array can be iterated via a for loop. E.g const headings = document.querySelectorAll('h1') //Returns a nodeList of all the h1 tags in the page.
    18.5 To access any element of the element rteturned by the querySElector(example if \<li> tags are returned), use, <var>.children[<index>].
    18.6 To change text of the element. \<var>.children[<index>].innerTExt = 'text';
    18.7 To change HTML of the element. FOr eg. make the text \<h1>, <var>.children[<index>].innerHTML = "\<h1>Heelo</h1>";
    18.8 To change background of an element, say button with id "btn". const btn = document.querySelector('btn'); btn.**style**.background= 'red';
    18.9 To Add event listeners.:
       18.1 Get the element using querySElector. E.g: const btn = document.querySelector('.btn');
       18.2 use addEventListenerfunction.E.g. : btn.addEventListener('click', (e) => { <call a funciton that does something on clicked>})

Example: Form validation:
**HTML**
\<form id="my-form">
          \<div class="msg">
                \<h1 id="form-title">Add User</h1>
                \<div>
                    \<label for="name">Name:</label>
                        \<input type="text" id="name"> 
                \</div>
                \<div>
                    \<label for="email">Email:</label>
                    \<input type="text" id="email">
                \</div>    
                \<div>
                    \<input type="submit" class="btn">
                \</div>
            \</div>    
        \</form>
**Javascript**
/ USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}
    
   
   
