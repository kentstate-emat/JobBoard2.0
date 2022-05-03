JobBoard2.0

A job board that pulls in information through RSS Handshake feeds and displays jobs through Javascript, HTML and CSS for the use of Kent State University students and alumni on their website.

To copy for a different college/platform:

This code relies on the fact that Handshake uses RSS feeds and those feeds display information in a certain way. If that changes or if the RSS feed program through Handshake
is depreciated, then the code will have to be refactored for API use. 

The only things that should need replaced to use this for other majors or other colleges should be the RSS feeds themselves, which are labeled in the index.html file.
These feeds are put in <button> tags, which can be copied and pasted to make more buttons, or can be deleted to make less buttons on the screen. The labels can 
also be changed, and the RSS feeds in them need to be changed in order to display different jobs for that major. 