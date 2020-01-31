const openMenuBtn = document.querySelector('.js-open-menu');
const menu = document.querySelector('.js-menu');
const templateMenu = `
	<button class="close-menu js-close-menu"></button>
        <nav class="navigation">
                <a href="index.html#services" class="navigation-item">ПОСЛУГИ</a>
                <a href="index.html#about-us" class="navigation-item">ПРО НАС</a>
                <a href="index.html#our-doctors" class="navigation-item">НАШІ ЛІКАРІ</a>
                <a href="index.html#article" class="navigation-item">НАШІ CТАТТІ</a>
                <a href="index.html#contacts" class="navigation-item">КОНТАКТИ</a>
                <a href="news.html" class="navigation-item">НОВИНИ</a>
                <a href="events.html" class="navigation-item">АНОНС</a>
        </nav>
`;

openMenuBtn.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);



function openMenu(e) {
	menu.insertAdjacentHTML('afterbegin', templateMenu); 
	menu.style.display = 'block';
}

function closeMenu(e) {

	if(e.target.nodeName != 'A' && e.target.nodeName != 'BUTTON') {
		return;
	}
	menu.innerHTML = '';
	menu.style.display = 'none';
}


