const openMenuBtn = document.querySelector('.js-open-menu');
const menu = document.querySelector('.js-menu');


openMenuBtn.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);



function openMenu(e) {
	menu.style.display = 'block';

	console.log(e.target)
}

function closeMenu(e) {

	if(e.target.nodeName != 'A' && e.target.nodeName != 'BUTTON') {
		return;
	}


	menu.style.display = 'none';
}


