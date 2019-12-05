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
	},
	{
		id: 4,
		template: `
		<div class="modal">
			<h3 class="modal-title">Профілактика та лiкуванню шийки матки</h3>	
					<p class="modal-descriptions__text"><span>1.</span> Профілактичний гінекологічний огляд жінок.</p>
					<p class="modal-descriptions__text"><span>2.</span> Цитологічний скринінг на рак шийки матки(РШМ).</p>
					<p class="modal-descriptions__text"><span>3.</span> Проведення простої та розширеної кольпоскопії.</p>
					<p class="modal-descriptions__text"><span>4.</span> Контроль та спостереження за жінками при виявленні передракових захворювань.</p>
					<p class="modal-descriptions__text"><span>5.</span> Своєчасна діагностика та лікування передракових захворювань шийки матки,взаємодія з онкогінекологом.</p>
					<p class="modal-descriptions__text"><span>6.</span> Надання інформації щодо профілактики захворювань шийки матки,впливу факторів ризику розвитку раку шийки матки пов'язаних зі способом життя.</p>
					<p class="modal-descriptions__text"><span>7.</span> Надання інформації щодо вакцинації проти вірусу папіломи людини(ВПЛ).</p>
			<button class="modal-close">
				<span class="modal-close__img"></span>
			</button>
		</div>`
	},
	{
		id: 5,
		template: `
		<div class="modal">
			<h3 class="modal-title">Мамологічні послуги</h3>	
					<p class="modal-descriptions__text"><span>1.</span> Проведення прийому хворих, які звертаються в ЦПС з приводу скарг щодо грудних залоз.</p>
					<p class="modal-descriptions__text"><span>2.</span>	Здійснення скринінгу патології грудних залоз.</p>
					<p class="modal-descriptions__text"><span>3.</span>	Надання консультативної допомоги хворим з патологією грудної залози.</p>
					<p class="modal-descriptions__text"><span>4.</span> Здійснення обліку всіх хворих на доброякісні та злоякісні новоутворення, які проживають на території діяльності кабінету, і контроль за своєчасним направленням повідомлень про кожний випадок злоякісного новоутворення до онкологічних диспансерів.</p>
					<p class="modal-descriptions__text"><span>5.</span> Проведення лікування хворих з передраковими та іншими захворюваннями грудної залози.</p>
					<p class="modal-descriptions__text"><span>6.</span> Обстеження грудних залоз у жінок, які приймають гормональні препарати(КОК, ЗГТ, гестагени, ВМС «Мірена») та визначення показань та протипоказань для їх використання.</p>
					<p class="modal-descriptions__text"><span>7.</span> Визначення жінок групи високого ризику захворюваності на рак молочної залози і надання кваліфікованої допомоги щодо подальшого способу життя та спостереженню.</p>
					<p class="modal-descriptions__text"><span>8.</span> Навчання жінок методам самообстеження молочних залоз та проведення активної санітарно-просвітницької діяльності щодо здорового способу життя,безпечного материнства,планування сім ї,тощо</p>
					<p class="modal-descriptions__text"><span>9.</span> Консультування з лактації та вирішення проблем,які можуть виникати на фоні грудного вигодовування(тріщини,лактосази,мастити,гіпогалактії,правильне завершення лактації)</p>

			<button class="modal-close">
				<span class="modal-close__img"></span>
			</button>
		</div>`
	},
	{
		id: 7,
		template: `
		<div class="modal">
			<h3 class="modal-title">УЗД</h3>	
					<p class="modal-descriptions__text"><span>1.</span> Молочних залоз </p>
					<p class="modal-descriptions__text"><span>2.</span> Органів малого тазу </p>
					<p class="modal-descriptions__text"><span>3.</span> Передміхурової залози та нирок</p>
					<p class="modal-descriptions__text"><span>4.</span> Щитоподібної залози </p>
					<p class="modal-descriptions__text"><span>5.</span> Черевної порожнини</p>
					<p class="modal-descriptions__text"><span>6.</span> Визначення терміну вагітності </p>
					<p class="modal-descriptions__text"><span>7.</span> Фолікулометрія </p>
					<p class="modal-descriptions__text"><span>8.</span> Пункційна біопсія кіст молочних залоз</p>
			<button class="modal-close">
				<span class="modal-close__img"></span>
			</button>
		</div>`
	},
	{
		id: 8,
		template: `
		<div class="modal">
			<h3 class="modal-title">Ведення від пубертату до менопаузи:</h3>	
					<p class="modal-descriptions__text"><span>1.</span> Консультування підлітків з різних питань(в тому числі, які мають статеві стосунки)</p>
					<p class="modal-descriptions__text"><span>2.</span> Діагностика та лікування порушень менструального циклу у підлітковому періоді</p>
					<p class="modal-descriptions__text"><span>3.</span> Допомога підліткам з питань профілактики, діагностики та лікування інфекцій, що передаються статевим шляхом </p>
					<p class="modal-descriptions__text"><span>4.</span> Контрацепція підлітків, в тому числі невідкладна контрацепція</p>
					<p class="modal-descriptions__text"><span>5.</span> Вибір сучасних методів контрацепції пацієнтам з міомою матки, ендометріозом та в пременопаузальному періоді</p>
					<p class="modal-descriptions__text"><span>6.</span> Ведення пацієнток з клімактеричним синдромом</p>
					<p class="modal-descriptions__text"><span>7.</span> Діагностика і диференціальна діагностика клімактерію</p>
					<p class="modal-descriptions__text"><span>8.</span> Призначення гормональної та негормональної менопаузальної терапії</p>
					<p class="modal-descriptions__text"><span>9.</span> Нові методи лікування та профілактики атрофічного вагініту у період менопаузи, які виникають внаслідок дефіциту гормонів</p>
					<p class="modal-descriptions__text"><span>10.</span> Діагностика ті лікування безпліддя</p>

			<button class="modal-close">
				<span class="modal-close__img"></span>
			</button>
		</div>`
	},
];