function print_head(page_name) {
	document.write('<head><title>' + page_name + '</title><link rel="icon" href="https://bymuno.com/img/icon.png"><meta property="og:type" content="website"><meta property="og:url" content="https://bymuno.com"><meta property="og:title" content="by Muno!"><meta property="og:description" content="The very cool website of a pixel artist, animator, programmer, and graphic designer."><meta property="og:image" content="https://bymuno.com/img/logo-full.png"></head>');
}

function print_page_start() {
	document.write('<body><div class="bg_image"><img src="https://bymuno.com/img/body_top.gif" style="margin:auto; display: block;"><div class="main"><a href="/" class="home"><img src="https://bymuno.com/img/header.gif" title="Back to the Home Page"></a>');
}

function print_page_end(contact_info = false) {
	document.write('<img src="https://bymuno.com/img/line.png" class="line">');
	if (contact_info) {
		document.write('<div class="pad" style="text-align: center;"><p><i><a href="../professional">Press / Business / Contact</a></i></p></div>');
	}
	document.write('</div></div><img src="https://bymuno.com/img/body_bottom.gif" style="margin:auto; display: block; background-color: #201541;"></body>');
	
	// document.write('<img src="img/trum.gif" style="position: absolute; right: 0px; bottom: 0px;">');
	
	document.write('<div style="height:100%; width:100%;"><img src="https://bymuno.com/img/trum.gif" style="position: fixed; left: 0px; bottom: 0px; z-index: -2;"></div>')
}

function print_line(small = false) {
	if (small) {
		document.write('<img src="https://bymuno.com/img/line_small.png" class="line">');
	}
	else{
		document.write('<img src="https://bymuno.com/img/line.png" class="line">');
	}
}

function print_content(contents) {
	document.write('<div class="pad" style="image-rendering: auto; text-align: center;">');
	if (Array.isArray(contents)) {
		for (const content of contents) {
			if (content.endsWith(".png") || content.endsWith(".jpeg") || content.endsWith(".jpg") || content.endsWith(".gif")) {
				document.write('<img src="' + content + '" style="margin-bottom: 20px">');
			}
			else if (content.startsWith("https://youtu.be/") || content.startsWith("https://youtube.com/watch?v=")) {
				document.write('<iframe width="768" height="432" style="margin-bottom: 20px" src="https://www.youtube.com/embed/' + content.replace("https://youtu.be/", "").replace("https://youtube.com/watch?v=", "") + '"></iframe>');
			}
			else {
				document.write('<p>' + content + '</p>');
			}
		}
	}
	document.write('</div>');
}

function redirect_to(url) {
	document.write('<!DOCTYPE html><meta charset="utf-8"><title>Redirecting to ' + url + '</title><meta http-equiv="refresh" content="0; URL=' + url + '"><link rel="canonical" href="' + url + '">');
}