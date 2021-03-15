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
  
  
  
  
