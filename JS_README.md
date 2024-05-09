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



