function get_posts() {
	return [
		{
			name: "How do 2d Cameras Work?",
			description: "An animated tour of various challenges in creating game cameras (e.g. Super Mario Bros.).",
			url: "post/camera",
			date: new Date("2022-11-28"),
		},
		{
			name: "What is Rollback Netcode?",
			description: "An animated tour through various approaches to programming an online video game.",
			url: "post/rollback",
			date: new Date("2022-11-23"),
		},
	]
}

function print_head(page_name) {
	if (page_name != "") {
		page_name += " - ";
	}
	page_name += "by Muno!";
	document.write('<head><title>' + page_name + '</title><link rel="icon" href="https://bymuno.com/img/icon.png"><meta property="og:type" content="website"><meta property="og:url" content="https://bymuno.com"><meta property="og:title" content="by Muno!"><meta property="og:description" content="The very cool website of a pixel artist, animator, programmer, and graphic designer."><meta property="og:image" content="https://bymuno.com/img/logo-full.png"></head>');
}

function print_page_start(pixel = false) {
	if (pixel) {
		// document.write('<body><div class="bg_image"><img src="img/body_top.gif" style="margin:auto; display: block; width: 968px;"><div class="main"><a href="/" class="home"><img src="img/header.svg" title="Back to the Home Page"></a>');
		document.write('<body><div class="bg_image"><img src="https://bymuno.com/img/body_top.gif" style="margin:auto; display: block; width: 968px;"><div class="main"><a href="/" class="home"><img src="https://bymuno.com/img/header.gif" title="Back to the Home Page"></a>');
		return;
	}
	// document.write('<body><div class="bg_image"><img src="img/body_top.svg" style="margin:auto; display: block; width: 968px;"><div class="main"><a href="/" class="home"><img src="img/header.svg" title="Back to the Home Page"></a>');
	document.write('<body><div class="bg_image"><img src="https://bymuno.com/img/body_top.svg" style="margin:auto; display: block; width: 968px;"><div class="main"><a href="/" class="home"><img src="https://bymuno.com/img/header.svg" title="Back to the Home Page"></a>');
}

function print_page_end(contact_info = false, pixel = false) {
	print_line(false, pixel)
	if (contact_info) {
		document.write('<div class="pad" style="text-align: center;"><p><i><a href="../professional">Press / Business / Contact</a></i></p></div>');
	}
	if (pixel) {
		// document.write('</div></div><img src="img/body_bottom.gif" style="margin:auto; display: block; background-color: #201541; width: 968px;"></body>');
		document.write('</div></div><img src="https://bymuno.com/img/body_bottom.gif" style="margin:auto; display: block; background-color: #201541; width: 968px;"></body>');
		return;
	}
	// document.write('</div></div><img src="img/body_bottom.svg" style="margin:auto; display: block; background-color: #201541; width: 968px;"></body>');
	document.write('</div></div><img src="https://bymuno.com/img/body_bottom.svg" style="margin:auto; display: block; background-color: #201541; width: 968px;"></body>');
}

function print_line(small = false, pixel = false) {
	if (small) {
		if (pixel) {
			// document.write('<img src="img/line_small.png" style="width: 228px" class="line">');
			document.write('<img src="https://bymuno.com/img/line_small.png" style="width: 228px" class="line">');
			return;
		}
		// document.write('<img src="img/line_small.svg" style="width: 228px" class="line">');
		document.write('<img src="https://bymuno.com/img/line_small.svg" style="width: 228px" class="line">');
	}
	else{
		if (pixel) {
			// document.write('<img src="img/line.png" style="width: 832" class="line">');
			document.write('<img src="https://bymuno.com/img/line.png" style="width: 832px" class="line">');
			return;
		}
		// document.write('<img src="img/line.svg" style="width: 832px" class="line">');
		document.write('<img src="https://bymuno.com/img/line.svg" style="width: 832px" class="line">');
	}
}

function print_back_to_blog() {
	document.write('<div class="pad" style="image-rendering: auto; text-align: center;"><p style=\"text-align: left\"><a href="../blog"><< Blog</a></p></div>')
}

function print_back_to_home() {
	document.write('<div class="pad" style="image-rendering: auto; text-align: center;"><p style=\"text-align: left\"><a href="/"><< Home</a></p></div>')
}

function print_content(contents) {
	document.write('<div class="pad" style="image-rendering: auto; text-align: center;">');
	if (Array.isArray(contents)) {
		for (const content of contents) {
			if (content.endsWith(".png") || content.endsWith(".jpeg") || content.endsWith(".jpg") || content.endsWith(".gif") || content.endsWith(".svg")) {
				document.write('<img src="' + content + '" style="margin-bottom: 20px">');
			}
			else if (content.startsWith("https://youtu.be/") || content.startsWith("https://youtube.com/watch?v=") || content.startsWith("https://www.youtu.be/") || content.startsWith("https://www.youtube.com/watch?v=")) {
				document.write('<iframe width="768" height="432" style="margin-bottom: 20px" src="https://www.youtube.com/embed/' + content.replace("https://youtu.be/", "").replace("https://youtube.com/watch?v=", "").replace("https://www.youtu.be/", "").replace("https://www.youtube.com/watch?v=", "") + '"></iframe>');
			}
			else {
				document.write('<p>' + content + '</p>');
			}
		}
	}
	document.write('</div>');
}

function print_content_no_div(contents) {
	if (Array.isArray(contents)) {
		for (const content of contents) {
			if (content.endsWith(".png") || content.endsWith(".jpeg") || content.endsWith(".jpg") || content.endsWith(".gif") || content.endsWith(".svg")) {
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
}

function redirect_to(url) {
	document.write('<!DOCTYPE html><meta charset="utf-8"><title>Redirecting to ' + url + '</title><meta http-equiv="refresh" content="0; URL=' + url + '"><link rel="canonical" href="' + url + '">');
}