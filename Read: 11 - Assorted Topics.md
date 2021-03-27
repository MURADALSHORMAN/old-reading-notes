# sizes of images in CSS

You can control the size of an image using the width and height properties in CSS, just like you can for any other box.
Specifying image sizes helps pages to load more smoothly because the HTML and CSS code will often load before the images, and telling the browser how much space to leave for an
image allows it to render the rest of the page without waiting for the image to download.

```
<img src="images/magnolia-large.jpg"
class="large" alt="Magnolia" />
<img src="images/magnolia-medium.jpg"
class="medium" alt="Magnolia" />
<img src="images/magnolia-small.jpg"
class="small" alt="Magnolia" />
```
```
img.large {
width: 500px;
height: 500px;}
img.medium {
width: 250px;
height: 250px;}
img.small {
width: 100px;
height: 100px;}
```
## AligNi ng images Using CSS
In the last chapter, you saw how the float property can be used to move an element to the left or the right of its containing block, allowing text to flow around it.
Rather than using the <img> element's align attribute, web page authors are increasingly using the float property to align images. There are two ways that
this is commonly achieved:
1: The float property is added to the class that was created to represent the size of the image (such as the small class in our
example).
2: New classes are created with names such as align-left or align-right to align the images to the left or right of the page. These class names are used in
addition to classes that indicate the size of the image.
```
img.align-left {
float: left;
margin-right: 10px;}
img.align-right {
float: right;
margin-left: 10px;}
img.medium {
width: 250px;
height: 250px;}
```

1 Search engine optimization h XX elps visitors find your sites when using search engines.
2 Analytics tools such as Google Analytics allow you to see how many people visit your site, how they find it, and what they do when they get there.
3 To put your site on the web, you will need to obtain a domain name and web hosting.
4FTP programs allow you to transfer files from your local computer to your web server.
5 Many companies provide platforms for blogging, email newsletters, e-commerce and other popular website tools (to save you writing them from scratch).
