1. What is JavaScript?

- It as created to make web pages initially alive.

- Scripts are provided and executed as plain text.They don't need special preparation or compilation to run.

- Javascript can execute not only in the browser, but also on the server, or actually on any device that has a special program called the Javscript Engine.

2. How does javascript engines work?

- The engine (embedded if it's browser) reads ("parses") the script.
- Then it converts ("compiles") the script to machine code.
- And then the machine code runs, pretty fast.

3. What can in-browser JavaScript do?
   It does not provide low-level access to memory or the CPU, because it was intially created for browsers which do not require it.

- Javascript capabilities greatly depend on the environment it's running. For instance, Node.js supports functions that allow Javascript to read/write arbitrary files,perfrom network reuests, etc..

- In-browser javascript can do everything related to webpage manipulation, interaction with the user, and the webserver.

For instance, in-browser JavaScript is able to:

- Add new HTML to the page, change the existing content, modify styles.
- React to user actions, run on mouse clicks, pointer movement , key presses.
- Send requests over the network to remote servers, download and upload files.
- Get and set cookies , ask questions to the visitor, shoe messages.
- Remember the data on the client-side("local storage").

4. What CAN’T in-browser JavaScript do?

- It has no direct access to OS functions.

5. What makes JavaScript unique?

- Fully integration with HTML/CSS.
- Simple thinfs are done simply.
- Supported by all major browsers and enabled by default.

6. What are languages “over” JavaScript?

- Typescript is concentrated on adding "strict data typing" to simplify the development and support of complex systems. It is developed by Microsoft.

7.  What is script tag used for?
    Javascript can be inserted almost anywhere into an HTML document using the <script> tag.
    The script tag has few attributes that are rarely used nowadays but can still be founf in old code:
    The type attribute <script type=...>
    The old HTML 4 required a script to have a type. Usually it was type="text/javascript".

        The language attribute <script language=...>
        It is used to show the language of the script that is being passed.

# External Scripts

We need to gove path of the script folder where we have made the script file.
<srcipt src="/path/to/script.js">

Here /path/to/script.js is an absolute path to the script from the site root. One can also provode a relative path from the current page.

We can give a full URL as well.

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js"> 

To attach several scripts we can use multiple script tags.

If src is set the script content is ignored
<script src="file.js">
alert(1) //Content is ignored,because src is set.
</script>

# The modern mode, "use strict"

We need to enable "use strict" to make the code work the modern way.

Ensure that "use strict" is at the top of your scripts, otherwise strict mode may not be enabled.

alert("some code")
"use strict"
strict mode is not activated

"use strict"
//this code works the modern way

There is no way to cancel use strict mode.
Once we enter strict mode there's no going back.

# Variables

A variable is a named storage for data. We can use variables to store goodies, visitors, and other data.
To create varibales in javascript use let keyword.

There are 8 basic data types:

- number for numbers of any kind: integer or floating-point , integers are limited by +-(2 to the power of 53 - 1).
- bigint for integer numbers od arbitrary length.
- string for strings. A string may have zero or more characters, there's no separate single-character type.
- boolean for true/false
- null for unkown values - a standalone type that has a single value null.
- undefined for unassigned values - a standalone type that has a single value undefined
- symbol for unique identifiers
  And one primitve data type:
- object for more complex data structures.

# Interaction: alert,prompt,confirm

_Alert_
It shows a message and waits for the user to press "OK".
alert("Hello")
The mini window with the message is called a modal window.

_Prompt_
The function promt accepts two arguments:
result = prompt(title,[default]);
It shows a modal with a text message, ann input field for the visitor, and the buttons OK/Cancel.
title
The text to show the visitor.
default
An optional second parameter, the initial value for the input field.

_Confirm_
result = confirm(question);
The function confirm shoes a modal windoe with a square.
The result is true if OK is pressed and false otherwise.

let isBoss = confirm("Are you the boss");
alert(isBoss);

# Type Conversion

Operators and functions are automatically converted into values of the given type.

Numeric conversion is done with the help of number kryword being introduced.
alert("1"/"0")
output - Infinity in the form of number

The type conversion in numeric values is of dofferent sort.
The alert(Number("123")) --It will give number but input is in the form of a string.
alert(Number("123a")) Again the input is in the form of a string but its gonna get converted into a number but a is not a number hence output will be NAN.
alert(Number(true)) -- 1
alert(Number(false)) -- 0

Here null becomes zero while undefined becomes NaN.

# Basic Operators, maths

- An operand - is what operators are applied to. For instance, in the multiplication of 5 \* 2 there are teo operand: the left operand is 5 and the right operand is 2. Ssometimes, people call these "arguments" instead of "operands".

An operator is unary if it has a single operand. For example, the unary negation - reverse the sign of a number:

# String concatenation with bonary +
let s = "my" + "string"
alert(s); //mystring

alert(2 + 2 + "1") //41;

# Bitwise Operator
Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.
These operators are not Javascript-specific. They are supported in most programming languages.

The list of operators:
- AND(&)
- OR(|)
- XOR(^)
- NOT(~)
- LEFT SHIFT(<<)
- RIGHT SHIFT(>>)
- ZERO-FILL RIGHT SHIFT(>>>)

# Comparisons
*String Comparison*
To see whether a string is grater than another, Javascript uses the so-called "dictionary" or "lexicographical" order.
In other words, strings are compared letter-by-letter.

*Comparison on differnt types*
When comparing values of differnet types, Javascript converts the values to numbers.

example:-
alert('2' > 1); //true, string '2' becomes a number 2
alert('01' == 1); // true, string '01' becomes a number 1

*Strict equality*
== and ===
alert(0 === false); //false because the types are different.

*Comparison with null and undefined*
alert(null === undefined); //false
alert(null == undefined); //true
null and undefined are converted into numbers: null becomes 0, while undefined becomes NaN.

alert(null > 0); //false
alert(null == 0); //false
alert(null >= 0); //true

*An incomparable undefined*
The value undefined shouldn't be compared to other values:

alert(undefined > 0); //false
alert(undefined < 0); //false
alert(undefined == 0); //false

NaN is special numeric value which return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.

The equality check (3) return false because undefined only equals null, undefined, and no other value.

*Conditional Branching if*
Sometimes we need to perfrom different actions based on different conditions.

The if statement evaluated a condition in parentheses and, if the result is true, executes a block of code.

For example :-
