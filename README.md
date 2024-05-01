# HTML - README Doc
**LESSON 1** 
1. Any visible content should be placed within the opening and closing \<body> tags.
2. Headings and sub-headings, \<h1> to \<h6> tags, are used to provide titles for sections of content.
3. \<p>, \<span> and \<div> tags specify text or blocks.
  3.1 \<p> is used to define a a paragraph
  3.2 \<span>\</span> is used to mark a grop of text if I want to do something different on it
  3.3 \<div> is used to divide a section into blocks. DIfferent properties can be applied on this block then. One attribute of \<div> is id="idname" to give an ID to the div block.
      Syntax = \<div id="My Id">
4. The \<em>Text\</em> will display the "Text" in italics, and \<strong>Text\</strong> will display "Text" in bold.
5. Line breaks are created with the \<br> tag. But these will only work under <p> blocks
6. Ordered lists (\<ol>) are numbered and unordered lists (\<ul>) are bulleted. Each item is to be tagged with \<li>Item\</li>
7. Images (\<img>). Syntax: \<img src="(URL)" alt="ALternative text to display if image cannot be render, Add descriptive text for SEO">
8. Videos (\<video src="Video URL" heigth="height" width="width" controls>Text to display in case video cannot be played </video>). "controls" attribute inform browser to add basic video controls in the player

**LESSON 2**
1. To let browser interpret the document as HTML file, add following in the starting "\<!DOCTYPE html>". All the html code should be between \<html>\</html> tags.
2. After \<html> tags, we should have \<head>\<body>...\</body>\</head>. Head contains the metadata about the webpage that is not displayed on the browser.
  2.1 \<title>Text\</title>. Displays "Text" as the title of the webpage.
3. Hyperlinks. Tag = \<a href="URL">Text\</a>. "Text" becomes a hyperlink and when clicked, will lead to the resource pointerd by the URL.
  3.1 To open the link in a new window add follwoing attribute in the \<a> = target="_blank".
  3.2 To create local links in the same webpage, mark the destination tags with id as explained in 3.3 in Lesson 1 and use that in href as follows: \<a href="#id_name">
4. Comments= starts with \<!--- and ends with -->

**LESSON 3**
1. Table is defined with tags : \<table>\</table>
2. Table row is created by tags : \<tr>..\</tr>
3. Data in rows is written by \<td>\</td> tags
   3.1 colspan attribute: Syntax = \<td colspan="integer">. The data will merege the integer amount of columns. Similarly we have rowspan 
4. Table headings should be written in tags: \<th>\</th> within the \<tr> blocks.
   4.1 \<th> has a scope which can have values "row"  or "col" to indicate whether the heading is a row heading or a col heading respectively
5. \<tbody>\</tbody> : Works same as <div></div>. USe to section off parts of table contents for easy managing
6. \<thead>\</thead> : To section off table headings
7. \<tfoot>\</tfoot> : To section off table footer. Point 5,6,7 are used identify sections of the table for special formatting

**LESSON 4 (FoRMS)**
1. Forms are created with tags <form></form>. Sytax: \<form action="url where the inputs enetered in form will go" method="POST">
2. \<label for="label-name"> the heading of the field
3. \<input type="text|password" name="field-name" id="field-id"> : This will create a input box and whatever is entered in the box will sent to action-page as "field-name"="value entered"
4. \<input type="number" name="field-name" id="field-id" step="1"> : This will create an input box which accepts number and some special characters. "step" adds a up-down arrow in the box to increase/decrease the values.
5. \<input type="range" min="0" max="100" step="1"> : Creates a slider option only now the acceptable values can only be in range 0 - 100
6. \<input type="checkbox" value="value"> <label>label</label> : Adds a checkbox before the label. When checked, the response is value
7. \<select id="id" name="name">\<option value="value1">value1</option></select> : To create a dropdown list, value1 will be passed if value 1 is sleected in drpdown list to action-page.
8. \<datalist id="id" name="name">\<option value="value1">value1</option></datalist> : To create a dropdown list where we can also type, value1 will be passed if value 1 is sleected in drpdown list to action-page.
9. \<textarea id="extra" name="extra" rows="3" cols="40">DEfault text</textarea>: To create a text area to write a paragraph.
10. \<input type="submit">: To create a submit button to submit the form. if no "value" attribbte is given then the button is filled with vbalue"Submit" by default

**LESSON 5(Form Validation)**
1. \<input id="allergies" name="allergies" type="text" **required**> : To make a field mandatory to fill, add "required" attribute
2. \<input id="guests" name="guests" type="number" min="1" max="4"> : To limit the range of numerical inputs, add "in" and "max" attributes
3. \<input id="summary" name="summary" type="text" minlength="5" maxlength="250" required>: To set limit on min and max lenght of text input add "minlength" and "maxlenght" attribute. Same can be used for password fields as well
4. \<input id="username" name="username" type="text" required minlength="3" maxlength="15" pattern="[a-zA-Z0-9]+"> : PAttern matching. REgex can be passed like this.


**LESSON 6(Semantic HTML)**
1. By using Semantic HTML, we select HTML elements based on their meaning, not on how they are presented. Elements such as <div> and <span> are not semantic elements since they provide no context as to what is inside of those tags.
2. For example, instead of using a <div> element to contain our header information, we could use a <header> element, which is used as a heading section. By using a <header> tag instead of a <div>, we provide context as to what information is inside of the opening and closing tag.
3. Why use Semantic HTML?
  3.1 Better SEO
  3.2 Webpage can be displayed on multiple displays as those devices can read the code better now
  3.3 Easy to Understand
4. A \<header> is a container usually for either navigational links or introductory content containing \<h1> to \<h6> headings.
5. A \<nav> is used to define a block of navigation links such as menus and tables of contents. It is important to note that \<nav> can be used inside of the \<header> element but can also be used on its own.
6. The element \<main> is used to encapsulate the dominant content within a webpage.
7. The content at the bottom of the subject information is known as the footer, indicated by the \<footer> element. The footer contains information such as:Contact information, Copyright information, Terms of use, Site Map, Reference to top of page links.
8. Sub elements of \<main> block, The two elements are <section> and <article>.
9. The \<article> element holds content that makes sense on its own. \<article> can hold content such as articles, blogs, comments, magazines, etc. An \<article> tag would help someone using a screen reader understand where the article content (that might contain a combination of text, images, audio, etc.) begins and ends.
10. The \<aside> element is used to mark additional information that can enhance another element but isn’t required in order to understand the main content. This element can be used alongside other elements such as \<article> or \<section>. Some common uses of the \<aside> element are for: Bibliographies, Endnotes, Comments, Pull quotes, Editorial sidebars, Additional information
11. With \<aside>, we learned that we can put additional information next to a main piece of content, but what if we wanted to add an image or illustration? That is where \<figure> and \<figcaption> come in. \<figure> is an element used to encapsulate media such as an image, illustration, diagram, code snippet, etc, which is referenced in the main flow of the document.
12. We can create a \<figure> element so that we can encapsulate our \<img> tag. In \<figure> we used the \<img> tag to insert an image onto the webpage. We used the src attribute within the \<img> tag so that we can link the source of the image. It’s possible to add a caption to the image by using \<figcaption>. Code example: _\<figure>   \<img src="overwatch.jpg">   \<figcaption>This picture shows characters from Overwatch.</figcaption> </figure>_
13. The \<audio> element is used to embed audio content into a document. Like \<video>, \<audio> uses src to link the audio source. Code: _\<audio controls autoplay> \<source src="URL to audio file" type="audio/mp3"> </audio>_
14.  We can also use _"loop"_ attibute to play audio or video in a loop.
15.  \<embed> tag, which can embed any media content including videos, audio files, and gifs from an external source. This is deprecated and should not be used. USe \<video>, \<audio>, \<img>
