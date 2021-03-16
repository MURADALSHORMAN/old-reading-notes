
# Html Links

Links are created using the <a> element. Users can click on anything between the opening <a> tag and the closing </a> tag. You specify which page you want to link to using the href attribute.

` <a href="http://www.google.com">google</a> `
for example:

1. ` <a href="http://www.facebook.com">facebook</a> `
2. ` <a href="http://www.google.com">google</a> `
3. ` <a href="http://bitcoin.black">black bitcoin</a> `

the result :

1. <a href="http://www.facebook.com">facebook</a>

2. <a href="http://www.google.com">google</a>
3. <a href="http://bitcoin.black">black bitcoin</a>

![](https://github.com/MURADALSHORMAN/reading-notes/blob/main/links.JPG)

to open linke in new tap for example:

1. ` <a href="http://www.facebook.com" target="_blank">facebook</a> `

the result :
1. <a href="http://www.facebook.com" target="_blank">facebook</a>


# Css layout:

#### Building Blocks
CSS treats each HTML element as if it is in its own box. This box will either be a block-level box or an inline box.

Normal Fl ow :

In normal flow, each block-level element sits on top of the next one. Since this is the default way in which browsers treat HTML elements, you do not
need a CSS property to indicate that elements should appear in normal flow, but the syntax would be:

` position: static; `

I have not specified a width  property for the heading element, so you can see how it stretches the width of the entire browser window by default.
fro example:


```
body {
width: 750px;
font-family: Arial, Verdana, sans-serif;
color: #665544;}
 h1 {
background-color: #efefef;
padding: 10px;}
 p {width: 450px;} 
 ```

# Functions, Methods, and Objects in js 

#### WHAT IS A FUNCTION?
Functions let you group a series of statements together to perform a specific task. If different parts of a script repeat the same task, you can
reuse the function (rather than repeating the same set of st atements).

1. A BASIC FUNCTION

```
var msg = 'Sign up to receive our newsletter for 10% off!';
function updateMessage() {
var el = document.getElementByld('message'};
el .textContent = msg;
}
updateMessage(};
```

declraring the functions :
 ```
 function name() {statments;}
 ```
 to call the function should be write the function name :
 ` name of the function(); `
 
