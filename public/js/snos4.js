(function(global) {
	function Module() {
		// body...
		var mn = document.getElementsByTagName('main')[0];
		// var amain = mn.querySelectorAll('a[href*="note_"');
		var amain = mn.querySelectorAll('a[href*="#"');
		// var amain = mn.querySelectorAll('main sup a');
		var prm = document.getElementsByClassName('prim')[0];
		// prm.innerHTML = prm.innerHTML.replace(/<br>/g, '');
		var sp = document.createElement('span');
		var i, l = amain.length;
		for (i = 0; i < l; i++) {
			var attrhr = amain[i].getAttribute('href').replace(/#/,'');
			var spp = sp.cloneNode(false);
			spp.className = 'ftn1';
			var pa = prm.querySelector('a[name="' + attrhr + '"]');
			// var pa = prm.querySelector('a[name="' 
			// 	+ amain[i].getAttribute('href').replace(/#/,'') 
			// 	+ amain[i].innerText
			// 	+ '"]');
			// var aprm1 = pa.nextSibling.nextSibling.innerHTML;
			// var aprm2 = pa.nextSibling.nextSibling.nextSibling.innerHTML;
			// var aprm = aprm1 + aprm2;
			var aprm = pa.parentNode.innerText;
			// var aprm = pa.parentElement.innerHTML;
			spp.innerHTML = aprm;
			// spp.appendChild(aprm);
			amain[i].appendChild(spp)
		}
	}
	global.snos = new Module
})(this)