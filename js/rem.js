function calSize () {
	var clientWidth = window.innerWidth || document.documentElement.clientWidth;

	document.documentElement.style.fontSize = clientWidth/3.75 + 'px';
}

calSize();


window.addEventListener('resize',calSize);