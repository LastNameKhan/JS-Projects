1.What Are HTML Tags?
Tags are used to markup the start of an HTML element and they are ususally enclosed in angle brackets.An example of a tag is: <h1>.
Most tags be opened <h1> and closed </h1> in order to function.

2.What are HTML Attributes?
Attributes contain additonal pieces of information. Attributes take the form of an opening tag and additonal info is places inside.
eg:- <img src="" alt="Its an Image" />
In this src and alt are the attributes of the <img> tag

3.Basic Construction of an HTML Page.
<!DOCTYPE html> - This tag specifies the language you will write on the page.In this case, the language is HTML 5.
<html> - This tag signals that from here on we are going to write in HTML code.
<head> - This is where all the metadata for the page goes - stuff mostly meant for search engines and other computer programs.
<body> - This is where content of the page goes.

This is how your average HTML page is structured visually

<html>
<head>
<tilte></title>
</head>
<body>
<h1></h1>
<p></p>
</body>
</html>

Further Tags
<h1>---</h6> - Heading tags
<b> - Bold Tags
<strong> - Similar to bold, highlight key text
<i> - Italic text
<em> - emphasised text used for image caption
<mark> - Marked text highlight background of the text
<small> - Small Text To shrink the text
<strike> - Striked Out text to place horizontal line across the text
<u> - Underlined text Used for links or text highlights
<ins> - Inserted Text Displayed with an underline to show an inserted text
<sub> - Subscribe text stylistic choice
<sup> - Superscript text Typographcal presentation style

4.How To Add Links In HTML?
<a></a> using achor tag whicg takes href as the attribute
The frist page of the attribute points to the page that will open once the link in clicked.
Meanwhile the second part of the attribute contains the text which will be displayed to a visitor in order to entice them to click on that link.
<a href="https://blogging.com/how-to-start-a-blog/">Your Link Text Here </a>
We can also give anchor to the new HTML file we have created by giving its path into the anchor tag inside href attributes
<a href="http://www.google.com ></a>
For the file we will be adding
<a href="*folder(s)*/page2.html">Page 2</a>
We need to ensure that folder path to the file(page@.html) is correct.Hit save and preview index.html in your browser.

5.What is tabnabbing?
Tabnabbing is called reverse tabnabbing, is an exploit that uses the browser's default behaviour with target="_blank" to gain partial access to your page through window.object
eg:-
<a href="https://www.google.com" target="_blank"></a>

To specify the Realtionship Between Source and Destination:rel
rel, attribute is used to describe the relationship between the source anchor and the destination achor.
eg:- <a href="https://www.google.com" rel="author" ></a>

rel="nofollow": Use this attribute if you're linking to a resource you don't want to lend your site's reputation to.

rel="alternate": If your site has more than one version-such as translation into a different language-use this value to identify the linked resource as an alternate version of the current page

rel="help": Identify a linked resources as a help file for the current page with this value.

rel="license": Use this attribute when linking to a recognized copyright license.

rel="next": If the current document exists in a series of documents, use this value when linking to the next document in the series.

rel="prev": If the current document exists in a series of documents, use this value when linking to the previous document in the series.

rel="noreferrer": If you want to link to an external website but avoid letting the destination website know who the referrer is, use this value.


6.How To Make an HTML List?
a.Ordered List - number/roman/Italics
b.Unordered List - bullet point list
c.Description/Definition List -  definition in the list

7.What Does HTML a Table Consist Of?
<thead> - Table Head Top of the table
<tbody> - Table Body Content of the table
<tfoot> - Table Foot Bottom of the table
<colgroup> - Column Group Within the table
<th> - Table Header Data cell for the table header

Q.How to design a complex table :- 
Table cells can be merged using colspan and rowspan attributes
A caption can be added to the table using <caption>
We can define <col> and <colgroup> to define table columns for styling.

**Form**
application/x-www-form-urlencoded: The default value which replaces all spaces with "+" and converts all special characters to ASCII HEX values.

multipart/form-data: Noothing is encoded. Input is uploaded to the server exactly as it is entered into the form.

text/plain: Spaces are converted into "+" symbols, but not other characters are encoded.

method: If post is specified, form data is enclosed in the body of the HTTP request.If get is specified, form data is appended to the end of the URL specified in the action attribute with a "?" symbol, data length is limited to 300 characters, and form input is visible and can be bookmarked. name:Similar to an id attribute,a name is a unique identifier that may only be used once within an HTML document and may be used to select the form with javascript or the default validation of form data. target: Specifies where to display the response received after submitting the form.

_self loads the response in the same frame.
_blank opens a new window or tab.
_parent is used when a form is nested in a descendant browsing context to load the response in the parent context and behaves the same as _self is there is no parent context.

_top is similar to _parent bt select the top level browsing context rather than the immediate parent context.

**Grouping Form Fields**
The <fieldset> elements is used to group together related form fields.
<legend> will be displayed a part of the fieldset border giving website visitors a clue about the purpose of a form.

In the form disabled is used to disable all of the forms in the fieldset.

**Input tag Inside the Form**

form: Used to associate a fieldset with the id of one or more form elements.Note that browser support for this attribute is very limited.

name: Associates a name with the fieldset.

input elements is a very flexible element and behavior can change dramatically based on the type attribute applied to the element. The most common type values include: text. The default value of type="" attribute.

Password: The password type is basically the same as the field with the exception that characters entered into a password field are marked.

Radio: Radio buttons can be used to provide multiple options of which only one may be chosen.

checkbox: Checkboxes are similar to radio buttons, but more than one selection can be active at a time.This means multiple values can be submitted with a set of checkboxes while a set of radio buttons will only accept one value.

Submit: The submit type value creates a form submission button.When clicked the form will take the action specified in the action attribute associated with the form element.Many forms make use of just one or two input types, and most simple forms are built using just the types listed above. However, there are manu additional types you can use to accept form data that doesn't fit into any of the types listed aboove.

reset: This type is used to create a reset button that will return all form fields to their default state.

file: If you want to allow form users to upload and submit files
<input type="file"> will provide that capability.

number: Produces a field for entering a number which has increment buttons on the righthand side of box. Limits can be placed on the range of acceptable antries with the max,min and step attributes.

Range: <input type="range" name="range" min="100" max="1000" step="50">

readonly: When readonly is applied as an attribute of an input element the value in the field cannot be changed

multiple: User can input multiple attribute used in like email and file.

pattern: When you need to specify that the value of an input must meet certain criteria.

required: When it is required, use this attribute to prevent submission of incomplete forms.

**Events in HTML** :-
offline - Triggers when the document foes offline.

onabort - Triggers on an abort event.

onafterprint - Triggers after the document is printed.

onblue - Triggers when the window loses focus.

oncanplay - Triggers when media can start play, but might has to stop for buffering

incanplaythrough - Triggers when media can be played to the end, without stopping for buffering

onchange - Triggers when the element changes

onclick - Triggers on a mouse click

oncentextmenu - Triggers when a contxt menu is triggered

ondbclick - Triggers on a mouse double-click

ondrag - Triggers when an element is dragged

ondragend - Triggers at the end of a drag operation

ondragenter - Triggers when an element has been dragged to a valid drop target

ondragleave - triggers when an element is being dragged over a valid drop target

ondragstart - Triggers at the start of a drag operation

ondrop - Triggers when dragged element is being dropped

ondurationchange - triggers when the length of the media is changed

onemptied - Triggers when a media resource element suddenly becomes empty

onended - Triggers when media has reach the end

onerror - Triggers when an error occur

onfocus - Triggers when the window gets focus

onformchange - Troggers when a form changes

onforminput - Triggers when a form gets user input

onhaschange - Triggers when the document has change

oninput - Triggers when an element is invalid

onkeydown - Triggers when a key is pressed

onkeypress - Triggers when a key is present and released

onkeyup - Triggers when a key is released

onload - triggers when the document loads

onloadeddata - Triggers when media data is loaded

onloadedmetadata - triggers when the duration and other media data of a media element is loaded

onloadstart - Triggers when the browser starts to load the media data

onmessage - Triggers when the message is triggered

onmousedown - Triggers when a mouse button is pressed

onmousemove - Triggers when the mouse pointer moves

onmouseout - Triggers when the mouse pointer moves out of an element

onmouseover - Triggers when the mouse pointer moves over an element

onmouseup - Triggers when a mouse button is released

onmousewheel - Triggers when a mouse wheel is rotated.

ononline - Triggers when the document comes online.

onpagehide - Triggers when the window is hidden

onpageshow - Triggers when the window becomes visible

onpause - Triggers when media data is paused

onplay - Triggers when media data is going to start playing

onplaying - Triggers when media data has start playing

onpopstate - Triggers when the window's history changes

onprogress - Triggers when the browser is fetching the media data

onratechange - Triggers when the media data's playing rate has changed

onreadystatechange - Triggers when the ready-state changes

onredo - Triggers when the document performs a redo

onresize - Triggers when the window is resized

onscroll - Triggers when an element's scrollbar is being scrolled

onseeked - Troggers when a media element's seeking attribute is no longer true, and the seeking has ended

onseeking - triggers when a media element's seeking attribute is true, and the seeking has begun

onselect - Triggers when an element is selected

onstalled - Triggers when there is an error in fetching media data

onstorage - Triggers when a document loads

onsubmit - Triggers when a form is submitted

onsuspend - Triggers when the browser has been fetching media data, but stopped before the entire media file was fetched

ontimeupdate - Triggers when media changes its playing position

onundo - Triggers when a document performs an undo

onunload - Triggers when the user leaved the document

onvolumnechange - Triggers when media changes the volumne, aslo when volumne is set to "mute"

onwaiting - Triggers when media has stopped playing, but is expected to resume.

**HTML5 tags**
<a> - Defines a hyperlink
<article> - Defines an article
<aside> - Defines some content loosely related to the page content
<body> - Defines the document's body
<br> - Prduces a single link break
<details> - Represents a widget from which the user can obtain additonal information or controls on-demand
<div> - Specifies a division or a section in a document
<h1> - <h6> - Defines HTML headings
<head> - Defines the head portion of the document that contains information about the document
<header> - Represents the header of a document or a section
<hgroup> - Defines a group of headings
<hr> - Prduce a horizintal line
<html> - Defines the root of an HTML document
<footer> - Represents the footer of a document or a section
<nav> - Defines a section of navigation links
<p> - Defines a paragraph
<section> - Defines a section of a document, such as header, footer etc
<span> - Defines a inline styleless section in a document
<summary> - Defines a summary for the <details> element

*MetaDataTags*
<base> - Defines the URL for all linked objects on a page
<link> - Defines the relationship between the current document and an external resource
<meta> - Provides structured metadata about the document content
<style> - Inserts style information (commonly CSS) into head of a document

<title> - Defines a title for the document
<button> - Defines a clickable button
<datalist> - Represents a set of pre-defined options for an <input> element
<fieldset> - Specifies a set of related from fields
<form> - Defines an HTML form for user input
<input> - Defines an input control
<keygen> - Represents a control for generating a public-private key pair
<label> - Defines a label for an <input> control
<legend> - Defines a caption for a <fieldset> element
<meter> - Represents a scalar measurement within a known range
<optgroup> - Defines a group of related options in a selection list
<option> - Defines an option in a selection list
<select> - Defines an selection list within a form
<textarea> - Defines a multi-line text input control(text area)

<abbr> -	Defines an abbreviated form of a longer word or phrase.
<acronym> -	Defines an acronym.
<address> -	Specifies the author's contact information.
<b> -	Displays text in a bold style.
<bdi> -	Represents text that is isolated from its surrounding for the purposes of bidirectional text formatting.
<bdo> -	Overrides the current text direction.
<big> -	displays text in a large size.
<blockquote> -	Defines a long quotation.
<cite> -	Indicates a citation or reference to another source.
<code> -	Specifies text as computer code.
<del> -	Specifies a block of deleted text.
<dfn> -	Specifies a definition.
<em> -	Specifies emphasized text.
<i> -	Displays text in an italic style.
<ins> -	Defines a block of text that has been inserted into a document.
<kbd> -	Specifies text as keyboard input.
<mark> -	Represents text highlighted for reference purposes.
<output> -	Represents the result of a calculation.
<pre> -	Defines a block of preformatted text.
<progress> -	Represents the completion progress of a task.
<q> -	Defines a short inline quotation.
<rp> -	Provides fall-back parenthesis for browsers that don't support ruby annotations.
<rt> -	Defines the pronunciation of character presented in a ruby annotations.
<ruby> -	Represents a ruby annotation.
<samp> -	Specifies text as sample output from a computer program.
<small> -	Displays text in a smaller size.
<strong> -	Indicate strongly emphasized text.
<sub> -	Defines subscripted text.
<sup> -	Defines superscripted text.
<tt> -	Displays text in a teletype style.
<var> -	Defines a variable.
<wbr> -	Represents a line break opportunity.
<dd> -	Specifies a definition for a term in a definition list.
<dl> -	Defines a definition list.
<dt> -	Defines a term (an item) in a definition list.
<li> -	Defines a list item.
<ol> -	Defines an ordered list.
<menu> -	Represents a list of commands.
<ul> -	Defines an unordered list.
<caption> -	Defines the title of a table.
<col> -	Defines attribute values for one or more columns in a table.
<colgroup> -	Specifies attributes for multiple columns in a table.
<table> -	Defines a data table.
<tbody> -	Groups a set of rows defining the main body of the table data.
<td> -	Defines a cell in a table.
<tfoot> -	Groups a set of rows summarizing the columns of the table.
<thead> -	Groups a set of rows that describes the column labels of a table.
<th> -	Defines a header cell in a table.
<tr> -	Defines a row of cells in a table.
<noscript> -	Defines alternative content to display when the browser doesn't support scripting.
<script> -	Places script in the document for client-side processing.
<area> -	Defines a specific area within an image map.
<audio> -	Embeds a sound, or an audio stream in an HTML document.
<canvas> -	Defines a region in the document, which can be used to draw graphics on the fly via scripting (usually JavaScript).
<embed> -	Embeds external application, typically multimedia content like audio or video into an HTML document.
<figcaption> -	Defines a caption or legend for a figure.
<figure> -	Represents a figure illustrated as part of the document.
<frame> -	Defines a single frame within a frameset.
<frameset> -	Defines a collection of frames or other frameset.
<iframe> -	Displays a URL in an inline frame.
<img> -	Displays an inline image.
<map> -	Defines a client-side image-map.
<noframes> -	Defines an alternate content that displays in browsers that do not support frames.
<object> -	Defines an embedded object.
<param> -	Defines a parameter for an object or applet element.
<source> -	Defines alternative media resources for the media elements like <audio> or <video>.
<time> -	Represents a time and/or date.
<video> -	Embeds video content in an HTML document.

**Interview Questions**

1. What is difference between HTML and XHTML?

It needs to be well formed, meaning all elements need to be closed and nested correctly or it will return errors.

Since it is more strict than HTML it reuires less pre-processing by the browser, which may improve your sites performance.

2. What are the building blocks of HTML5?
*Semantics* - Allowing you to describe what your content is.

*Connectivity* - Allowing you to communicate with the server in new and innovative ways.

*Offline and storage* - Allowing webpages to store data on the client-side locally and operate offline more effectively.

*Multimedia* - Making video and audio first-class citizens  in the Open web.

*2D/3D graphics and effects* - Allowing a much more diverse range of presentation options.

*Performance and Intergration* - Providing greater speed optimization and better usuage of computer hardware.

*Device access* - Allowing for the usage of various input and output devices.

*Styling* - Letting authors white more sophisticated themes.

3. What are the semantic tags available in html5?

HTML5 offers semantic tags define the function and the category of your text, simplifying the work for browsers and search engines, as well as developers.

HTML5 offers new semantic elements to define different parts of a web page:

<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>

4. What does a <DOCTYPE html> do?
A doctype is always associated to a DTD (Documnet Type Definition). A DTD defines how documents of a certain type should be structured (i.e button can contain span but not a div)

5. What happens when DOCTYPE is not given?
The webpage is rendered in quirks mode.The web browsers engines use quirks mode to support older browsers which does not follow W3C specifications. In quirks mode CSS class and id names are case sensitive. In standards mode they are case sensitive.

6.  What are the new form elements in HTML5?
Five new from are added whiich are:

a. Datalist Tag :-
Allows to attach a list of suggestioons to a text input elements.

b. Meter Tag :-
Indicated a numeric value that falls within a range.The attributes which we can pass inside meter tag is :-
max: The maximum possible value of the item.
min: The minimum possib;e value of the item.
high: If the value can be defined as a range, this is the high end of the range.
low: If the value can be defined as a range, this is the low end of that range.
Optimum: the optimal value of the element.

c. Output Tag :-
It indicates a section of the page that can be modifies by a script(usually Javascript)

d.Progress Tag :- 
Indidicates how much of a task has been completed (often marked as percentage). It expected to be modifies through Javascript code.

