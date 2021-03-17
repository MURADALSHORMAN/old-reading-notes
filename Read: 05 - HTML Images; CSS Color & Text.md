
# Images
#### Choosing Images for Your Site

A picture can say a thousand words, and great images help make the difference between an average-looking site and a really engaging one.

Images should
- Be relevant
- Convey information
- Convey the right mood
- Be instantly recognisable
- Fit the color palette

If you are building a site from scratch, it is good practice to create a folder for all of the images the site uses.

#### Adding Images

```
<img src="..." title="...." />
```
```
img src= .... width="600" height="450" />

```

for example :

<img src="http://www.webdesignerwall.com/wp-content/uploads/2008/05/basic-concept.gif" title="img"  />

change width and hight:
<img src="http://www.webdesignerwall.com/wp-content/uploads/2008/05/basic-concept.gif" title="img"  width="100" height="100" />

### Aligning Images
```
<p><img src="images/bird.gif" alt="Bird" width="100" height="100" align="left" /> 

```

# Colors

The color property allows you to specify the color of text inside an element. You can specify any color in CSS in one of three ways:

- rgb values
These express colors in terms of how much red, green and blue are used to make it up. For example: rgb(100,100,90)
- hex codes
These are six-digit codes that represent the amount of red, green and blue in a color, preceded by a pound or hash # sign. For example: #ee3e80
- color names
There are 147 predefined color names that are recognized by browsers.

```
body {
background-color: rgb(200,200,200);}
h1 {
background-color: DarkCyan;}
h2 {
background-color: #ee3e80;}
p {
background-color: white;}
```

# fonts
There are several ways to use fonts other than those listed on the previous page. However, typefaces are subject to copyright, so the
techniques you can choose from are limited by their respective licenses

for example

```
<!DOCTYPE html>
<html>
<head>
<title>Font Family</title>
<style type="text/css">
body {
font-family: Georgia, Times, serif;}
h1, h2 {
font-family: Arial, Verdana, sans-serif;}
.credits {
font-family: "Courier New", Courier,
monospace;}
</style>

```

### font-size
```
body {
font-family: Arial, Verdana, sans-serif;
font-size: 12px;}
h1 {
font-size: 200%;}
h2 {
font-size: 1.3em;}

```


