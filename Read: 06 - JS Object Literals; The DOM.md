
# WHAT IS AN OBJECT?

Objects group together a set of variables and functions to create a model of a something you would recognize from the real world. In an object,variables and functions take on new names.

### CREATING OBJECTS USING LITERAL NOTATION

```
var hotel = {
name: 'Quay',
rooms : 40,
booked: 25,
checkAvailability: function() {
return this.rooms - this.booked;
}
} ;
JAVASCRIPT
var elName = document .getElementByld('hotelName');
elName.textContent =hotel .name;
var elRooms = document.getElementByid{'rooms');
elRooms .textContent = hotel .checkAvailability();
```

update an Object

![](https://github.com/MURADALSHORMAN/reading-notes/blob/main/updateObject.JPG)


#### THE DOM TREE IS A MODEL OF A WEB PAGE
```
<html>
<body>
<di v id="page">
<hl id="header">List</hl>
<h2>Buy groceries</h2>
<ul>
<li id="one" class="hot"><em>fresh</em> figs</li>
<li id="two" class="hot">pine nuts</l i>
<l i id="three" class="hot">honey</l i>
<l i id="four">balsamic vinegar</l i>
</ ul>
<script src="js/l i st. js "></scri pt>
</ div>
</ body>
</ html>
```
![](https://github.com/MURADALSHORMAN/reading-notes/blob/main/demotree.JPG)

getElementByld( 1 id 1)
Selects an individual element given the value of its i d attribute .The HTML must have an id attribute in order for it to be selectable.

``` querySel ector( 1css selector ') ```

Uses CSS selector syntax that would select one or more element s .This method returns only the first of the matching elements.

``` ... get ElementByld('one') ```

METHODS THAT RETURN ONE OR MORE ELEMENTS (AS A NODELIST):

getEl ement sByClassName( 1class 1)

Selects one or more elements given the va lue of their cl ass attribute.The HTML must have a cl ass attribu te for it to be selectable.
This method is faster than querySe 1ectorA11 () .


``` getEl ementsByTagName( 1 tagName 1) ```

Selects all elements on the page with the specified tag name. This method is faster than querySe 1ectorA11 ().

``` querySelectorAll ( 1css select or •) ```
Uses CSS selector syntax to select one or more elements and returns all of those that match.

HOW TO GET/UPDATE ELEMENT CONTENT

So far this chapter has focused on finding elements in the DOM tree. The rest of this chapter shows how to access/update element content. Your choice of techniques depends upon what the element contains.




