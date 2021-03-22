# A Fixed Width Layout

the width of the main boxes on a page will usually be specified in pixels (and sometimes their height, too). Here you can see several <div> elements, each of which uses an id 
  or class attribute to indicate its purpose on the page.
  ```
  body {
width: 960px;
margin: 0 auto;}
#content {
overflow: auto;
height: 100%;}
#nav, #feature, #footer {
background-color: #efefef;
padding: 10px;
margin: 10px;}
.column1, .column2, .column3 {
background-color: #efefef;
width: 300px;
float: left;
margin: 10px;}
li {
display: inline;
padding: 5px;}
  ```
  
  ## The liquid layout uses
  
percentages to specify the width of each box so that the design will stretch to fit the size of the screen. When trying this in your browser, remember to make the
window smaller and larger.A Liquid Layout
```
body {
width: 90%;
margin: 0 auto;}
#content {overflow: auto;}
#nav, #feature, #footer {
margin: 1%;}
.column1, .column2, .column3 {
width: 31.3%;
float: left;
margin: 1%;}
.column3 {margin-right: 0%;}
li {
display: inline;
padding: 0.5em;}
#nav, #footer {
background-color: #efefef;
padding: 0.5em 0;}
#feature, .article {
height: 10em;
margin-bottom: 1em;
background-color: #efefef;}

```

Layout Grids:
Composition in any visual art (such as design, painting, or photography) is the placement or arrangement of visual elements — how they are organized on a page. Many designers use a grid structure to help them
position items on a page, and the same is true for web designers.


!()[https://github.com/MURADALSHORMAN/reading-notes/blob/main/layout.JPG]

