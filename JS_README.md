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

