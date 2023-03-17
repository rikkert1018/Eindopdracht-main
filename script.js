let hunger = 50;
let happiness = 50;
let energy = 50;
let isAsleep = false;
let petName = "";

var naam = document.querySelector(".name-input")

function updatePet() {
	const pet = document.getElementById("pet");
	pet.src = "./img/Big_chungus.webp";
	const hungerEl = document.getElementById("hunger");
	hungerEl.textContent = hunger;
	const happinessEl = document.getElementById("happiness");
	happinessEl.textContent = happiness;
	const energyEl = document.getElementById("energy");
	energyEl.textContent = energy;
	const nameEl = document.getElementById("petName");
	nameEl.textContent = petName;
}

function feed() {
	if (hunger < 90 && hunger >= 10) {
		hunger -= 10;
		happiness += 5;
		energy += 5;
		const pet = document.getElementById("pet");
		pet.src = "./img/SVG/big_chungus_eat.svg"; 
		setTimeout(function () {
			pet.src = "./img/Big_chungus.webp"; 
			updatePet();
		}, 5000);
	}
}

function play() {
	if (energy >= 10 && hunger <= 95) {
		hunger += 5;
		happiness += 10;
		energy -= 10;
		const pet = document.getElementById("pet");
		pet.src = "./img/SVG/Asset 3.svg";
		setTimeout(function () {
			pet.src = "./img/Big_chungus.webp";  
			updatePet();
		}, 5000);
	}  
}

function sleep() {
	if (!isAsleep && energy < 90) {
		isAsleep = true;
		const pet = document.getElementById("pet");
		pet.src = "./img/SVG/Big_chungus_sleep.svg";
		document.body.style.backgroundImage = "url('./img/SVG/background_night.svg')";
		setTimeout(function () {
			isAsleep = false;      
			happiness += 5;
			energy += 10;
			updatePet();
			pet.src = "./img/Big_chungus.webp";
			document.body.style.backgroundImage = "url('./img/Background.jpg')";
		}, 5000);
	}
}


function setName() {
	const newName = prompt("Enter a new name for your Tamagotchi:");
	if (newName) {
		petName = newName;
		updatePet();
	}
}

function updatePetName() {
	const nameInputEl = document.getElementById("pet-name-input");
	const newName = nameInputEl.value;
	if (newName) {
		petName = newName;
		updatePet();
		naam.classList.add("hide")
	}
}

setInterval(function () {
	if (!isAsleep) {
		if (hunger > 0 && hunger<=100){
			hunger += 5;
		}
		if (happiness > 0){
			happiness -= 5;
		}
		if (energy > 0){
			energy -= 5;
		}
		updatePet();
	}
}, 10000);

updatePet();


const changeBgBtn = document.getElementById("change-bg-btn");
changeBgBtn.addEventListener("click", function() {
  const body = document.querySelector("body");

  if (body.style.backgroundImage === "url(\"./img/Background.jpg\")") {
    body.style.backgroundImage = "url(\"./img/background_2.jpg\")";
  } else {
    body.style.backgroundImage = "url(\"./img/Background.jpg\")";
  }
});
