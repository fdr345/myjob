(function(global) {
	function Brr2() {
		// var mn = document.getElementsByTagName('main')[0];
		var mn = document.querySelector('main');
		// mn.innerHTML = mn.innerHTML.replace(/<div>/g, '<div><br>');
		// mn.innerHTML = mn.innerHTML.replace(/<\/h1>/g, '</h1><br>');
		// mn.innerHTML = mn.innerHTML.replace(/<\/h2>/g, '</h2><br>');
		// mn.innerHTML = mn.innerHTML.replace(/<\/h3>/g, '</h3><br>');
		// mn.innerHTML = mn.innerHTML.replace(/<\/h4>/g, '</h4><br>');
		mn.innerHTML = mn.innerHTML.replace(/<\/h5>/g, '</h5></p><p>');
		// mn.innerHTML = mn.innerHTML.replace(/<br>/g, '</p><p>');
		// mn.innerHTML = mn.innerHTML.replace(/<\/blockquote>/g, '</blockquote><br>');
		// mn.innerHTML = mn.innerHTML.replace(/<br>/g, '<p>');

		mn.innerHTML = mn.innerHTML.replace(/<div>/g, '<div></p><p>');
		// mn.innerHTML = mn.innerHTML.replace(/<\/div>/g, '</div></p><p>');
		mn.innerHTML = mn.innerHTML.replace(/<\/blockquote>/g, '</blockquote></p><p>');
		// mn.innerHTML = mn.innerHTML.replace(/<\/h1>/g, '</h1></p><p>');
		// mn.innerHTML = mn.innerHTML.replace(/<\/h2>/g, '</h2></p><p>');

		// return {
		// 	getBr: function() {
		// 		return
		// 	}
		// }
	}
	global.Brr2 = new Brr2;
})(this);

// console.log('mn: ' + window.Brr2.getBr)