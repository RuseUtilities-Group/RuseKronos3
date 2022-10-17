var root = document.querySelector(':root');
var primaryColor = '#2E3440';
var secondaryColor = '#D8DEE9';

function alterColor(){
	primaryColor = localStorage.getItem('---primary-color');
	secondaryColor = localStorage.getItem('---secondary-color');
	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);
}

function changeColor(){
	primaryColor = document.getElementById('_primaryColor').value;
	secondaryColor = document.getElementById('_secondaryColor').value;

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}

function changeDefaultColor(){
	primaryColor = '#2E3440';
	secondaryColor = '#D8DEE9';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}

function Olivia(){
	primaryColor = '#c87e74';
	secondaryColor = '#f7f2ea';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}

function Light(){
	primaryColor = '#f7f2ea';
	secondaryColor = '#555555';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}

function RacingGreen(){
	primaryColor = '#204C4B';
	secondaryColor = '#BCB79A';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}

function MonkeyType(){
	primaryColor = '#323437';
	secondaryColor = '#e2b714';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}

function Shoko(){
	primaryColor = '#00589f';
	secondaryColor = '#e0ecff';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}

function RedSamurai(){
	primaryColor = '#84202c';
	secondaryColor = '#e5a100';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}
function Dark(){
	primaryColor = '#252525';
	secondaryColor = '#f7f2ea';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}
function Blueberry(){
	primaryColor = '#212b42';
	secondaryColor = '#add7ff';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}
function Taro(){
	primaryColor = '#a4a7ea';
	secondaryColor = '#f1ebf1';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}
function Matcha(){
	primaryColor = '#789048';
	secondaryColor = '#eaf1f3';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}

function Atlantis(){
	primaryColor = '#30303B';
	secondaryColor = '#6D99A2';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}

function Aphrodite(){
	primaryColor = '#4C2033';
	secondaryColor = '#D2A3BA';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}
