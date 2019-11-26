const servicesMenu = document.querySelector('.js-services');
const overlay = document.querySelector('.js-overlay');



function servicesMenuOpen(e) {
	e.preventDefault();

	if(e.target.nodeName != 'A') return;

	const servicesMenuBtn = e.target.dataset.actions;
	
	services.map(item => {

		if (item.id == servicesMenuBtn) {

			overlay.insertAdjacentHTML('afterbegin', item.template);
			overlay.style.display = 'block';
		}
	})
};

function servicesMenuClose(e) {
	if(e.target.nodeName != 'BUTTON' && e.target.nodeName != 'SPAN') return;

	overlay.innerHTML = "";
	overlay.style.display = 'none';
}

servicesMenu.addEventListener('click', servicesMenuOpen);
overlay.addEventListener('click', servicesMenuClose);


const services = [
	{
		id: 1,
		template: 
		`
			<div class="modal">
			<h3 class="modal-title">Психологічна <br>просвіта та профілактика</h3>	
			<div class="modal-content">
				<div class="modal-descriptions">
					<p class="modal-descriptions__text">Індивідуальне та групове консультування, у тому числі дошлюбне консультування</p>
					<p class="modal-descriptions__text">Консультування психогенного безпліддя та психологічне супроводження при лікуванні безпліддя</p>
					<p class="modal-descriptions__text">Робота з психосоматичними проявами</p>
					<p class="modal-descriptions__text">Психологічна допомога людям що пережили втрату близької людини</p>
					<p class="modal-descriptions__text">Проведення сертифікованих тренінгів та семінарів</p>
					<p class="modal-descriptions__text">Психологічна допомога вагітним, у тому числі підготовка до пологів</p>
				</div>
				<div class="modal-info">
					<h3 class="modal-info__title">Експрес-курс (термін вагітності 38-40 тижнів)</h3>	
					<p class="modal-descriptions__text">Поглиблений курс з використанням арт-терапії, метафоричних карт. </p>
					<h3 class="modal-info__title">Базовий курс</h3>	
					<p class="modal-descriptions__text">Підготовка до партнерських пологів.</p>
				</div>
			</div>
			<button class="modal-close">
				<span class="modal-close__img"></span>
			</button>
		</div>`
	},
	{
		id: 2,
		template: `
		<div class="modal">
			<h3 class="modal-title">Медичні послуги <br>андрологічного кабінету</h3>	
			<div class="modal-content">
				<div class="modal-descriptions">
					<p class="modal-descriptions__text"><span>1.</span> Консультування з питань чоловічого здоров я.</p>
					<p class="modal-descriptions__text"><span>2.</span> Консультування,діагностика та лікування всіх видів чоловічого безпліддя.</p>
					<p class="modal-descriptions__text"><span>3.</span> Діагностика та лікування зпсш,хронічних запальних процесів чоловічих статевих органів.</p>
					<p class="modal-descriptions__text"><span>4.</span> Діагностика та лікування сексуальних розладів(швидке сім явиверження,порушення ерекції).</p>
					<p class="modal-descriptions__text"><span>5.</span> Консервативне лікування доброякісної гіперплазії простати.</p>
					<p class="modal-descriptions__text"><span>6.</span> Корекція клімактеричних порушень у чоловіків.</p>
					<p class="modal-descriptions__text"><span>7.</span> Консультування дітей та  підлітків (затримка статевого розвитку,вади розвитку).</p>
				</div>
				<div class="modal-info">
					<p class="modal-descriptions__text">При обстеженні виконуються загальні клінічні аналізи крові та сечі,аналізи крові на гормони та ПСА,аналізи еякуляту та секрету простати та посів на флору та чутливість до антибіотиків.</p>	
					<p class="modal-descriptions__text">УЗД органів малого тазу.</p>
				</div>
			</div>
			<button class="modal-close">
				<span class="modal-close__img"></span>
			</button>
		</div>`
	},
	{
		id: 3,
		template: `
		<div class="modal">
			<h3 class="modal-title">Дошлюбне консультування</h3>	
					<p class="modal-descriptions__text"><span>1.</span> Надання загальної інформації з контрацепції враховуючи потреби жінки.</p>
					<p class="modal-descriptions__text"><span>2.</span> Вибір контрацептиву відповідно до стану здоров'я, періоду життя, репродуктивних планів, можливостей.</p>
					<p class="modal-descriptions__text"><span>3.</span> Планування дітей в сім'ї та інтервали між пологами.</p>
					<p class="modal-descriptions__text"><span>4.</span> Підбір сучасного методу контрацепції.</p>
					<p class="modal-descriptions__text"><span>5.</span> Післяпологова та післяабортна контрацепція.</p>
					<p class="modal-descriptions__text"><span>6.</span> Внутрішньоматкова контрацепція (введення/видалення спиралей з подальшим консультативним супроводом лікаря).</p>
					<p class="modal-descriptions__text"><span>7.</span> Дошлюбне консультування - фундамент збереження здоров'я жінки та чоловіка.</p>
			<button class="modal-close">
				<span class="modal-close__img"></span>
			</button>
		</div>`
	}
];