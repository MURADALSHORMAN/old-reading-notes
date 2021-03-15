# Read: 01 - Introductory HTML and JavaScript
# HTML 
>
#### What is the HTML?
Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

### how to use Html?
>
#### Basic Html Structure:
![](https://github.com/MURADALSHORMAN/reading-notes/blob/main/html%20stracture1.JPG)

that html using the Tags to write the code and also contain  opining Tag and closing Tag for example 

```
<!DOCTYPE html>
<html lang="en">
<head>
<title> ... </title>
  </head>
<body>
    <header>
    .
          </header>
    <main>
    .
    .
                </main>
    <footar>
    .
              </footer>
</body>
</html>
```
### why we need the HTML?

HTML code ensures the proper formatting of text and images for your Internet browser. Without HTML, a browser would not know how to display text as elements or load images or other elements. HTML also provides a basic structure of the page, upon which Cascading Style Sheets are overlaid to change its appearance.


# JavaScript
### what is JavaScript?

JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, ...

### why we need JavaScript?

JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.Incorporating JavaScript improves the user experience of the web page by converting it from a static page into an interactive one. To recap, JavaScript adds behavior to web pages.

### Summary
1. HTML pages are text documents.
2. HTML uses tags (characters that sit inside angled brackets) to give the information they surround special meaning.
3. Tags are often referred to as elements.
4. Tags usually come in pairs. The opening tag denotes the start of a piece of content; the closing tag denotes the end.
5. Opening tags can carry attributes, which tell us more about the content of that element.
6. Attributes require a name and a value.
7. To learn HTML you need to know what tags are available for you to use, what they do, and where they can go.
*referance :duckett Html && CSS book*


### id and class

we can defined the id for any element by write the name of the id in the Tag for example ``` <p id="id name"> </p> ``` and it should be uniqe.
for the classes we can use the name of the class for multi elements for example ``` <li class="class name">..</> <li class="class name">..</> ```


## HTML 5 Layout:
[](https://github.com/MURADALSHORMAN/reading-notes/blob/main/site%20map.JPG?raw=true)

### Summary HTML5
1. The new HTML5 elements indicate the purpose of different parts of a web page and help to describe its structure.
2. The new elements provide clearer code (compared with using multiple <div> elements).
3. Older browsers that do not understand HTML5 elements need to be told which elements are block-level elements.
4. To make HTML5 elements work in Internet Explorer 8 (and older versions of IE), extra JavaScript is needed, which is available free from Google.
*referance :duckett Html && CSS book*
  
 ##### Example for the site map
 
[site map](https://github.com/MURADALSHORMAN/reading-notes/blob/main/site%20map.JPG)
 
### how to use JavaScript?
A computer program is a list of "instructions" to be "executed" by a computer.In a programming language, these programming instructions are called statements.
A JavaScript program is a list of programming statements for example:
``` document.getElementById("demo").innerHTML = "Hello Dolly."; ```

#### Semicolons ;
Semicolons separate JavaScript statements. Add a semicolon at the end of each executable statement:
``` 
var a, b, c;     // Declare 3 variables
a = 5;           // Assign the value 5 to a
b = 6;           // Assign the value 6 to b
c = a + b;       // Assign the sum of a and b to c
```
#### JavaScript Values
The JavaScript syntax defines two types of values:
* Fixed values
* Variable values
Fixed values are called Literals.Variable values are called Variables.

#### JavaScript Literals
The two most important syntax rules for fixed values are:

1. Numbers are written with or without decimal
2. Strings are text, written within double or single quotes

#### JavaScript Variables
In a programming language, variables are used to store data values.JavaScript uses the var keyword to declare variables.
An equal sign is used to assign values to variables. In this example, x is defined as a variable. Then, x is assigned (given) the value 6:
```
var x;

x = 6;
```

#### JavaScript Operators
JavaScript uses arithmetic operators ( + - * / ) to compute values:
```
(5 + 6) * 10
```
JavaScript uses an assignment operator ( = ) to assign values to variables:
```
var x, y;
x = 5;
y = 6;
```



Quiz :

1. for the following HTML stracture which is the correct standerd stracutre ?
* a 
 ```
 <!DOCTYPE html>
<html lang="en">
<head>
  </head>
<body>
    <header>
          </header>
    <main>
          </main>
    <footar>
             </footer>
</body>
</html>
 ```
* b 
 ```
  <!DOCTYPE html>
<html lang="en">
<body>
    <header>
          </header>
    <main>
          </main>
    <footar>
             </footer>
</body>
</html>
 ```
* c 
 ```
  <!DOCTYPE html>
<html lang="en">
<head>
  </head>
<body>
      <main>
          </main>
    <footar>
             </footer>
</body>
</html>
 ```
 

2. which method is correct to defiened a b c variables is js?
- a ``` var a, b , c;```
- b ``` var a; var b; var c; ```
- all of the above 



