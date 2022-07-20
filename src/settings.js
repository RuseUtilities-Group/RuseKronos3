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

function Wavez(){
	primaryColor = '#323437';
	secondaryColor = '#00773a';

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

function BlueSamurai(){
	primaryColor = '#0058a3';
	secondaryColor = '#e5a100';

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
