
# HTML 
>
#### What is the HTML?
Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

### how to use Html?
>
#### Basic Html Structure:
![](BasicHtmlStructure.png)

that html using the Tags to write the code and also contain  opining Tag and closing Tag for example 

```
<!DOCTYPE html>
<html lang="en">
<head>
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

## css
### what is th CSS ?
>
CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.


#### Why we need Css?

CSS is the language for describing the presentation of Web pages, including colors, layout, and fonts. It allows one to adapt the presentation to different types of devices, such as large screens, small screens, or printers. CSS is independent of HTML and can be used with any XML-based markup language.


### how to use CSS?
CSS can be added to HTML documents in 3 ways:

1. Inline - by using the style attribute inside HTML elements.
```
<header style="color: red ;">
    .
          </header>
```
3. Internal - by using a style element in the head section for example 

```
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
```
4. External - by using a link element to link to an external CSS file.

```
<!DOCTYPE html>
<html lang="en">
<head>
<link rel="stylesheet" href="file name">
  </head>
<body>
 .
 .
</body>
</html>
```
