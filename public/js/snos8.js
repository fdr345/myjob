(function(global) {
	function Module() {
		var mn = document.getElementsByTagName('main')[0];
		// var amain = mn.querySelectorAll('a[href*="#sdfootnote"');

		let tags = ['a[href*="note_"', 'a[href*="#sdfootnote"', 
			 'a[href*="#c_"', 'a[href*="#a_"', 
			'a[href*="#b_"', 'a[href*="#d_"', 'a[href*="#e_"',
			'a[href*="#f_"', 'a[href*="#["', 'a[href*="#n"'];

		let sups = tags.filter(tag => mn.querySelector(tag))
		console.log('sups: ', sups)

		function sup(elem,i) {
			let aHref = mn.querySelectorAll(elem)
			console.log('aHref: ', aHref.length)

			aHref.forEach(aName)
		}

		function aName(item) {
			let attr = item.getAttribute('href').replace(/#/,'')
			let sp = document.createElement('span')
			sp.className = 'ftn1'
			let prm = document.getElementsByClassName('prim')[0]
			let pa1 = prm.querySelector('a[name="' + attr + '"]')
			let pa2 = prm.querySelector('div[id="' + attr + '"]')
			let aprm

			if (pa2) {
				aprm = pa2.innerText
			} else if(pa1) {
				let aprm1 = pa1.nextSibling.innerText
				let aprm2 = pa1.nextSibling.nextSibling.innerText
				aprm = aprm1 + aprm2
			}

			// if (pa1) {
			// 	let aprm1 = pa1.nextSibling.innerText
			// 	let aprm2 = pa1.nextSibling.nextSibling.innerText
			// 	let aprm = aprm1 + aprm2
			// 	sp.innerHTML = aprm
			// 	item.appendChild(sp)
			// } else if(pa2) {
			// 	let aprm = pa2.innerText
			// 	sp.innerHTML = aprm
			// 	item.appendChild(sp)
			// }

			
			// let pa = pa1 || pa2
			// let aprm1 = pa.nextSibling.innerText
			// let aprm2 = pa.nextSibling.nextSibling.innerText
			// let aprm = aprm1 + aprm2
			sp.innerHTML = aprm
			item.appendChild(sp)
		}

		sups.forEach(sup)
	}
	global.snos = new Module
})(this)


		// var prm = document.getElementsByClassName('prim')[0];
		// // prm.innerHTML = prm.innerHTML.replace(/<br>/g, '');
		// var sp = document.createElement('span');
		// var i, l = amain.length;
		// for (i = 0; i < l; i++) {
		// 	var attrhr = amain[i].getAttribute('href').replace(/#/,'');
		// 	var spp = sp.cloneNode(false);
		// 	spp.className = 'ftn1';
		// 	var pa = prm.querySelector('a[name="' + attrhr + '"]');
		// 	// var pa = prm.querySelector('a[name="' 
		// 	// 	+ amain[i].getAttribute('href').replace(/#/,'') 
		// 	// 	+ amain[i].innerText
		// 	// 	+ '"]');
		// 	// var aprm1 = pa.nextSibling.nextSibling.innerHTML;
		// 	// var aprm2 = pa.nextSibling.nextSibling.nextSibling.innerHTML;
		// 	// var aprm = aprm1 + aprm2;
		// 	var aprm = pa.parentNode.parentNode.innerText;
		// 	// var aprm = pa.parentElement.innerHTML;
		// 	spp.innerHTML = aprm;
		// 	// spp.appendChild(aprm);
		// 	amain[i].appendChild(spp)
		// }