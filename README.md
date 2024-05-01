# HTML - README Doc
**LESSON 1** 
1. Any visible content should be placed within the opening and closing <body> tags.
2. Headings and sub-headings, <h1> to <h6> tags, are used to provide titles for sections of content.
3. \<p>, <span> and <div> tags specify text or blocks.
  3.1 <p> is used to define a a paragraph
  3.2 <span></span> is used to mark a grop of text if I want to do something different on it
  3.3 <div> is used to divide a section into blocks. DIfferent properties can be applied on this block then. One attribute of <div> is id="idname" to give an ID to the div block.
      Syntax = \<div id="My Id">
4. The <em>Text</em> will display the "Text" in italics, and <strong>Text</strong> will display "Text" in bold.
5. Line breaks are created with the <br> tag. But these will only work under <p> blocks
6. Ordered lists (<ol>) are numbered and unordered lists (<ul>) are bulleted. Each item is to be tagged with <li>Item</li>
7. Images (<img>). Syntax: <img src="(URL)" alt="ALternative text to display if image cannot be render, Add descriptive text for SEO">
8. Videos (<video src="Video URL" heigth="height" width="width" controls>Text to display in case video cannot be played </video>). "controls" attribute inform browser to add basic video controls in the player

**LESSON 2**
1. To let browser interpret the document as HTML file, add following in the starting "<!DOCTYPE html>". All the html code should be between <html></html> tags.
2. After <html> tags, we should have <head><body>...</body></head>. Head contains the metadata about the webpage that is not displayed on the browser.
  2.1 <title>Text</title>. Displays "Text" as the title of the webpage.
3. Hyperlinks. Tag = <a href="URL">Text</a>. "Text" becomes a hyperlink and when clicked, will lead to the resource pointerd by the URL.
  3.1 To open the link in a new window add follwoing attribute in the <a> = target="_blank".
  3.2 To create local links in the same webpage, mark the destination tags with id as explained in 3.3 in Lesson 1 and use that in href as follows: <a href="#id_name">
4. Comments= starts with <!--- and ends with -->

**LESSON 3**
1. Table is defined with tags : <table></table>
2. Table row is created by tags : <tr>..</tr>
3. Data in rows is written by <td></td> tags
   3.1 colspan attribute: Syntax = <td colspan="integer">. The data will merege the integer amount of columns. Similarly we have rowspan 
4. Table headings should be written in tags: <th></th> within the <tr> blocks.
   4.1 <th> has a scope which can have values "row"  or "col" to indicate whether the heading is a row heading or a col heading respectively
5. <tbody></tbody> : Works same as <div></div>. USe to section off parts of table contents for easy managing
6. <thead></thead> : To section off table headings
7. <tfoot></tfoot> : To section off table footer. Point 5,6,7 are used identify sections of the table for special formatting

**LESSON 4**
