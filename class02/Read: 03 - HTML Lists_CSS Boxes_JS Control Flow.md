# HTML lists

1. #### Ordered lists 
are lists where each item in the list is numbered. For example, the list might be a set of steps for a recipe that must be performed in order, or a legal contract
where each point needs to be identified by a section number .

``` <ol>
<li>...</li>
.
.
<li>...</li>
</ol>
```

2. #### Unordered lists
 
 are lists that begin with a bullet point(rather than characters that indicate order).
 ``` <ul>
<li>...</li>
.
.
<li>...</li>
</ul>
```
 
3. ####  Definition lists 
are made up of a set of terms along with the definitions for each of those terms.

```
<dl>
<dt>
</dt>
<dd> ...</dd>
<dd>....</dd>
</dl>
```
4- #### Nested Lists
You can put a second list inside an <li> element to create a sublist or nested list.
 ``` <ul>
<li>
<ul>
<li>...</li>
<li>...</li>
</ul>
</li>
.
.
<li>...</li>
</ul>
```
  
- There are three t XX ypes of HTML lists: ordered, unordered, and definition.
-  Ordered lists use numbers.
- Unordered lists use bullets.
- Definition lists are used to define terminology.
- Lists can be nested inside one another.
  
  # Css Boxs
  
  #### Box Dimensions 
  
  By default a box is sized just big enough to hold its contents. To set your own dimensions for a box you can use the height and width properties.
  
  for example :

`<div>`
  
`<p> ...text ...</p>`

`</div>`

`div.box {
height: 300px;
width: 300px;
background-color: #bbbbaa;}
p {
height: 75%;
width: 75%;
background-color: #0088dd;}
`
  
 #### Limiting Width
 In the same way that you might want to limit the width of a box on a page, you may also want to limit the height of it. This is achieved using the min-height
and max-height properties.

 
 `<tr>`
 
`<td><img src="images/..." width="200"
height="100" alt="..." /></td>`
` <td class="..."></td>`
`<td>$1400</td>`

`</tr>`
`td.description {`
`min-width: 450px;`
`max-width: 650px;`
`text-align: left;`
`padding: 5px;`
`margin: 0px;}`



#### Overflowing Content
The overflow property tells the browser what to do if the content contained within a box is larger than the box itself. It can have one of two

` <h2>.....</h2> `
` <p class="....">.... </p> `
` <h2>......</h2> `
` <p class="...">... </p> `
` p.one`` {overflow: hidden;} `
` p.two`` {overflow: scroll;} `

### border-style
You can control the style of a border using the border-style property.

`p.one {border-style: solid;}`

`p.two {border-style: dotted;}`

`p.three {border-style: dashed;}`

`p.four {border-style: double;}`

`p.five {border-style: groove;}`

`p.six {border-style: ridge;}`

`p.seven {border-style: inset;}`

`p.eight {border-style: outset;}
`

[](https://github.com/MURADALSHORMAN/reading-notes/blob/main/class02/broderstyle.JPG)

Summary BOXES
- CSS treats each HTML e XX lement as if it has its own box.
- You can use CSS to control the dimensions of a box.
- You can also control the borders, margin and padding for each box with CSS.
- It is possible to hide elements using the display and visibility properties.
- Block-level boxes can be made into inline boxes, and inline boxes made into block-level boxes.
- Legibility can be improved by controlling the width of boxes containing text and the leading.
- CSS3 has introduced the ability to create image borders and rounded borders.

# CREATING AN ARRAY in JS

You create an array and give it a name just like you would any other variable (using the var keyword followed by the name of the array).
 
 `
 var colors;
colors ['white', 'black', ' custom '];
var el document.getElementByld('col ors');
el . textContent = col ors[O];
`
Values in an array are accessed as if they are in a numbered list. It is important to know that the numbering of this list starts at zero (not one).


### Switch Statement
Use the switch statement to select one of many code blocks to be executed.

Syntax:
```
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
```
This is how it works:

* The switch expression is evaluated once.
* The value of the expression is compared with the values of each case.
* If there is a match, the associated block of code is executed.
* If there is no match, the default code block is executed.

This example uses the weekday number to calculate the weekday name:
```
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
```

Quiz

1- which of the following list we can use in the HTML?
- a main list  
- b sub list
- c ordered list

2- we can not use the arthmaitic opration with arry in java script
- a True
- b fulse

3- we can not use CSS to control the dimensions of a box
- a True
- b Fulse

