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

function Irish(){
	primaryColor = '#f7f2ea';
	secondaryColor = '#252525';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}

function Metro(){
	primaryColor = '#323437';
	secondaryColor = '#00a4a9';

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

function Alpha(){
	primaryColor = '#5F9EA0';
	secondaryColor = '#FFD700';

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
function Classic(){
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
function Vapor(){
	primaryColor = '#a4a7ea';
	secondaryColor = '#f1ebf1';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}
function Botanical(){
	primaryColor = '#8AAC00';
	secondaryColor = '#eaf1f3';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}

function Darling(){
	primaryColor = '#fec8cd';
	secondaryColor = '#ffffff';

	root.style.setProperty('--primary-color', primaryColor);
	root.style.setProperty('--secondary-color', secondaryColor);

	localStorage.setItem("---primary-color", primaryColor);
  	localStorage.setItem("---secondary-color", secondaryColor);

}
