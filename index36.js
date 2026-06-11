 
  /*
        const antraste = document.getElementById('pagrindine-antraste');
        const mygtukas = document.getElementById('keitimo-mygtukas');

        if (mygtukas && antraste) {
            mygtukas.addEventListener('click', function() {
                antraste.textContent = 'Sveiki';
                antraste.style.color = 'red';
            });
        }

     */
// Pasirenkame mygtuka


   /* const button = document.getElementById("btn");

    
    button.addEventListener("click", function () {
      console.log("Mygtukas paspaustas!");
    });
  
/*


const mygtukas = document.getElementById("mygtukas");
    const antraste = document.getElementById("antraste");

    mygtukas.addEventListener("click", function () {
      antraste.textContent = "Antraštė !";
    });
    */
/*
       const blokas = document.getElementById("blokas");

    blokas.addEventListener("click", function () {
      blokas.style.backgroundColor = "red";
    });
    */


/*
 const mygtukas = document.getElementById("mygtukas");
    const tekstas = document.getElementById("tekstas");

    mygtukas.addEventListener("click", function () {
      tekstas.style.display = "none";
    });

*/


 /*
    const mygtukas = document.getElementById("mygtukas");
    const tekstas = document.getElementById("tekstas");

    mygtukas.addEventListener("click", function () {
      tekstas.style.display = "block";
    });

    */


 /*
    const mygtukas = document.getElementById("mygtukas");

    let plotis = 120;
    let aukstis = 50;

    mygtukas.addEventListener("click", function () {
      plotis += 20;
      aukstis += 10;

      mygtukas.style.width = plotis + "px";
      mygtukas.style.height = aukstis + "px";
    });
  


*/

/*
    const fonas = document.getElementById("fonas");

    fonas.addEventListener("dblclick", function () {
      fonas.style.backgroundColor = "blue";
    });
  
*/


/*
 
    const blokas = document.getElementById("blokas");

    blokas.addEventListener("mouseover", function () {
      blokas.style.width = "250px";
      blokas.style.height = "250px";
    });
  
*/

/*

    const blokas = document.getElementById("blokas");

    blokas.addEventListener("mouseout", function () {
      blokas.style.width = "150px";
      blokas.style.height = "150px";
    });
  
*/
/*
 
    const rezultatas = document.getElementById("rezultatas");

    document.addEventListener("keydown", function (event) {
      rezultatas.textContent = "Paspaustas klavišas: " + event.key;
    });
  

*/



  /*
    const rezultatas = document.getElementById("rezultatas");

    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        rezultatas.textContent = "Paspaustas Enter!";
      }
    });
  
*/

 /*
    const laukas = document.getElementById("laukas");
    const info = document.getElementById("info");

    laukas.addEventListener("keydown", function (event) {
      if (event.key >= "0" && event.key <= "9") {
        event.preventDefault();
        info.textContent = "Skaičiai draudžiami!";
      } else {
        info.textContent = "";
      }
    });
  
*/

/*

    const zaidejas = document.getElementById("zaidejas");

    let x = 100;
    let y = 100;
    const speed = 10;

    document.addEventListener("keydown", function (event) {
      if (event.key === "ArrowUp") {
        y -= speed;
      }
      if (event.key === "ArrowDown") {
        y += speed;
      }
      if (event.key === "ArrowLeft") {
        x -= speed;
      }
      if (event.key === "ArrowRight") {
        x += speed;
      }

      zaidejas.style.left = x + "px";
      zaidejas.style.top = y + "px";
    });
  
*/



  /*
    const levelText = document.getElementById("level");
    const progressBar = document.getElementById("progressBar");

    



const barksound= new Audio('sounds/barksound.mp3');
console.log(barksound);


function playbark(){
  barksound.currentTime = 0;
  barksound.play();
}

const barkButton = document.createElement('cockies');

    const cookie = document.getElementById("cookie");

    

    let cookies = 0;
    let clickPower = 1;

  
  
cookie.addEventListener("click", function () {

  let earned = clickPower;

  cookies += earned;
  counter.textContent = "Cookies: " + cookies;

  playbark()
});




setInterval(function () {

    document.getElementById("autoUpgrade").click();

}, 10000);




let progress = 0;


document.getElementById("cookie").addEventListener("click", function () {

    progress += 10;
    if (progress > 100) {
        progress = 100;
    }
    document.getElementById("progressBar").style.width = progress + "%";

});

  setInterval(function () {
    document.getElementById("cookie").click();
  }, 5000);

*/


/*

let cooki = 0;

// Strong clicker
document.getElementById("passiveUpgrade").addEventListener("click", function () {

    // Po 5 sekundžių
    setTimeout(function () {

        cooki++;

        document.getElementById("counter").textContent = cooki;

    }, 2000);

});
*/
/*

let cooki = 0;
let level = 1;

document.getElementById("cookie").addEventListener("click", function () {

    cooki++;

    // Counter
    document.getElementById("counter").textContent = cooki;

    // Level kas 5 cookies
    level = Math.floor(cooki / 5) + 1;

    document.getElementById("level").textContent = "Level: " + level;

});


























  setInterval(function () {
    document.getElementById("cookie").click();
  }, 5000);
*/
    
   

  
/*
  
    const levelText = document.getElementById("level");
    const progressBar = document.getElementById("progressBar");

    
    let cookies = Number(localStorage.getItem("cookies")) || 0;
    let click = Number(localStorage.getItem("clickPower")) || 1;
    let autoClickers = Number(localStorage.getItem("autoClickers")) || 0;
    let passiveIncome = Number(localStorage.getItem("passiveIncome")) || 0;

    let clickUpgradeCost = 1;
    let autoUpgradeCost = 1;
    let passiveUpgradeCost = 1;

    let level = 1;

    
    function updateUI() {

      clickUpgrade.textContent =
        "Click Upgrade (" + clickUpgradeCost + ")";

      autoUpgrade.textContent =
        "Auto Clicker (" + autoUpgradeCost + ")";

      passiveUpgrade.textContent =
        "Passive Income (" + passiveUpgradeCost + ")";

      
      level = Math.floor(cookies / 100) + 1;

      levelText.textContent = "Level: " + level;

      
      let progress = cookies % 1;
      progressBar.style.width = progress + "%";

    }

    

    
    clickUpgrade.addEventListener("click", function () {

      if (cookies >= clickUpgradeCost) {

        cookies -= clickUpgradeCost;

       

        clickUpgradeCost =
          Math.floor(clickUpgradeCost * 1.5);

        updateUI();
      }
    });

  
    setInterval(function () {

      cookies += autoClickers;
      cookies += passiveIncome;

      updateUI();

    }, 1000);

    
    */
   

/*

const string = "Hello, World!"; 
console.log('string', string);
const number = 3.14;
console.log('number', number);
const boolean = true;
console.log('boolean', boolean);
const nullValue = null;
console.log('nullValue', nullValue);
const undefinedValue = undefined;
console.log('undefinedValue', undefinedValue);
const array = [1, 2, 3, 4, 5];
console.log('array', array);
const object = {
   name: "John",
   age: 30,
   isStudent:  true,
   hobbies: ["reading", "gaming", "coding"]
  };
console.log('object', object);



*/
/*
console.log('Hello from index36.js!');
const string1 = "Hello";
const string2 = "World";
const number1 = 5;
const number2 = 10;


const stringResult = '${string1} ${string2}';
console.log('StringResult:', stringResult, typeof stringResult);

const number=3.14;
console.log('Number:', number, typeof number);

const boolean = true;
console.log('boolean:', boolean, typeof boolean);

const nullValue = null;
console.log('NullValue:', nullValue, typeof nullValue);

const undefinedValue = undefined;
console.log('Undefined:', undefinedValue, typeof undefinedValue);

const array = [1, 2, 3, 4, 5];
console.log('Array', array, typeof array);





let  a=1;
console.log('Kintamojo a reiksme:', a, typeof a);
a=2;
console.log('Kintamojo a reiksme:', a, typeof a);


let b='Jusu vardas';
c='Mano vardas';

console.log(c+''+b);




let metai = 1978;
let menuo = 5 ;
let diena = 6;
let suma = metai + menuo + diena;
console.log('Gimimo data:', metai + '-' + menuo + '-' + diena);
console.log(suma);



let svorisMarkas=78;
let ugisMarkas=1.69;
let svorisDzonas=95;
let ugisDzonas=1.88;
kmiMarkas=svorisMarkas/(ugisMarkas*ugisMarkas);
kmiDzonas=svorisDzonas/(ugisDzonas*ugisDzonas);
console.log('Marko KMI:', kmiMarkas);
console.log('Džono KMI:', kmiDzonas);
if (kmiMarkas>kmiDzonas){
    console.log('Marko KMI yra didesnis už Džono KMI');
} else if (kmiMarkas<kmiDzonas){
    console.log('Džono KMI yra didesnis už Marko KMI');
} else {
    console.log('Marko ir Džono KMI yra lygūs');
} 
let markoDidesnisKMI = kmiMarkas > kmiDzonas;
console.log('Ar Marko KMI yra didesnis už Džono KMI?', markoDidesnisKMI);
console.log('Marko KMI:', kmiMarkas);
console.log('Džono KMI:', kmiDzonas); 
*/
/*
const amzius = 66;
if(amzius>=20){
    console.log('Pilnametis');
}

if (amzius>=18){
    console.log('Galite pirkti alkoholį ir rūkyti');
}
    if (amzius>=65){
     console.log('Galite gauti pensiją');
    }
    
 else if (amzius<16){
    console.log('Beveik pilnametis');
}
else {
  console.log('Visiskai vaikas');
}
*/



/*
console.log("Pradžia");


function parodytiPranesima() {
    setTimeout(() => {
        console.log("Praėjo 2 sekundės!");
    }, 2000);
}

parodytiPranesima();

console.log("Pabaiga");
*/
const zmogus={
    vardas:'Jonas',
    amzius:50,
    profesija:'programuotojas'
};
const jsonFormatas = JSON.stringify(zmogus);
console.log('JSON formatas:', jsonFormatas);




























































































































































































  













