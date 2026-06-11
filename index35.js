/*


function pasisveikink() {
    console.log("labas pasauli");
}

pasisveikink();

function pasisveikink(vardas) {
    console.log(`Labas, ${vardas}!`);
}


pasisveikink("tomas");



function patikrinkLyginuma(skaicius) {
    if (skaicius % 2 === 0) {
        console.log(`${skaicius} yra lyginis`);
    } else {
        console.log(`${skaicius} yra nelyginis`);
    }
}


patikrinkLyginuma(10); 
patikrinkLyginuma(7); 


function rastiDidesni(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log(rastiDidesni(10, 2));


function skaiciuotiSuma(masyvas) {
    let suma = 0;
    for (let i = 0; i < masyvas.length; i++) {
        suma += masyvas[i];
    }
    return suma;
}

const skaiciai = [5, 5, 2, 5];
console.log(skaiciuotiSuma(skaiciai));




const rastiDidziausia = (masyvas) => {
    return masyvas.reduce((max, dabartinis) => (dabartinis > max ? dabartinis : max), masyvas[0]);
};

console.log(rastiDidziausia([7, 12, 3, 40])); 


function skaiciuotiBeTarpu(tekstas) {

    const tekstasBeTarpu = tekstas.replace(/\s/g, "");
    return tekstasBeTarpu.length;
}

console.log(skaiciuotiBeTarpu("Labas pasauli"));




function apverstiTeksta(tekstas) {
    return tekstas.split("").reverse().join("");
}


console.log(apverstiTeksta("12345")); 




function apverstiTeksta(tekstas) {
    return tekstas.split("").reverse().join("");
}


console.log(apverstiTeksta("123456789"));






function skaiciuotiFaktoriala(n) {
    if (n < 0) return "Klaida: neigiami skaičiai neturi faktorialo";
    
    let rezultatas = 1;
    for (let i = 2; i <= n; i++) {
        rezultatas *= i;
    }
    return rezultatas;
}

console.log(skaiciuotiFaktoriala(5)); // Išves: 120 (1 * 2 * 3 * 4 * 5)
console.log(skaiciuotiFaktoriala(0)); // Išves: 1 (pagal apibrėžimą 0! = 1)


function faktorialas(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * faktorialas(n - 1);
}

console.log(faktorialas(6));




function arPalindromas(tekstas) {
    
    const normalizuotasTekstas = tekstas.toLowerCase();
    const apverstasTekstas = normalizuotasTekstas.split("").reverse().join("");
    
    return normalizuotasTekstas === apverstasTekstas;
}

console.log(arPalindromas("Sėtis")); 
console.log(arPalindromas("Krepšinis")); 


function arPalindromas(tekstas) {
    
    const normalizuotasTekstas = tekstas.toLowerCase();
    const apverstasTekstas = normalizuotasTekstas.split("").reverse().join("");
    
    return normalizuotasTekstas === apverstasTekstas;
}

console.log(arPalindromas("Sėtis"));
console.log(arPalindromas("Krepšinis"));




function didelisFaktorialas(n) {
    let sk = BigInt(n);
    if (sk < 0n) return "Klaida";
    
    let rezultatas = 1n;
    for (let i = 2n; i <= sk; i++) {
        rezultatas *= i;
    }
    return rezultatas.toString();
}

console.log(didelisFaktorialas(100)); 






function konvertuotiIFarenhaita(celsijus) {
    return celsijus * 9 / 5 + 32;
}


console.log(konvertuotiIFarenhaita(2));   
console.log(konvertuotiIFarenhaita(10));  
console.log(konvertuotiIFarenhaita(100)); 





function gautiUnikalius(masyvas) {
    
    return [...new Set(masyvas)];
}

const skaiciukai = [1, 2, 2, 3, 4, 4, 4, 5];
console.log(gautiUnikalius(skaiciukai));




function sujungtiBePasikartojimu(masyvas1, masyvas2) {
    
    return [...new Set([...masyvas1, ...masyvas2])];
}

const m1 = [1, 2, 5,4];
const m2 = [4, 5, 6, 7];

console.log(sujungtiBePasikartojimu(m1, m2)); 





function dazniausiasSimbolis(tekstas) {
    const simboliuKiekiai = {};
    let maxKiekis = 0;
    let dazniausias = "";

    
    for (let simbolis of tekstas) {
        
        simboliuKiekiai[simbolis] = (simboliuKiekiai[simbolis] || 0) + 1;
    }

    
    for (let simbolis in simboliuKiekiai) {
        if (simboliuKiekiai[simbolis] > maxKiekis) {
            maxKiekis = simboliuKiekiai[simbolis];
            dazniausias = simbolis;
        }
    }

    return dazniausias;
}


console.log(dazniausiasSimbolis("mamammamam")); 
console.log(dazniausiasSimbolis("tete"));



function arAnagramos(tekstas1, tekstas2) {
    
    const paruosti = (str) => str
        .toLowerCase()           
        .replace(/[^a-z0-9]/g, "") 
        .split("")               
        .sort()                  
        .join("");               

    
    return paruosti(tekstas1) === paruosti(tekstas2);
}


console.log(arAnagramos("Karta", "Tarka"));   
console.log(arAnagramos("Labas", "Balas"));   
console.log(arAnagramos("Mano", "Tavo"));     





function gautiFibonaci(n) {
    if (n < 0) return "Skaičius turi būti teigiamas";
    if (n === 0) return 0;
    if (n === 1) return 1;

    let ankstesnis = 0; 
    let dabartinis = 1;  

    for (let i = 2; i <= n; i++) {
        let kitas = ankstesnis + dabartinis;
        ankstesnis = dabartinis;
        dabartinis = kitas;
    }

    return dabartinis;
}


console.log(gautiFibonaci(7));  
console.log(gautiFibonaci(10)); 
console.log(gautiFibonaci(50)); 




function rodytiObjekta(obj) {
    for (let savybe in obj) {
        
        if (obj.hasOwnProperty(savybe)) {
            console.log(savybe + " -> " + obj[savybe]);
        }
    }
}


function gautiSavybiuSkaiciu(objektas) {
    
    return Object.keys(objektas).length;
}

const knyga = {
    pavadinimas: "Metai",
    autorius: "Kristijonas Donelaitis",
    puslapiai: 150,
    zanras: "Poema"
};

console.log(gautiSavybiuSkaiciu(knyga)); 



function arYraRaktas(objektas, raktas) {
    return raktas in objektas;
}

const auto = { marke: "Audi", modelis: "A6" };

console.log(arYraRaktas(auto, "marke"));   
console.log(arYraRaktas(auto, "metai"));


function sumuotiSkaicius(objektas) {
    return Object.values(objektas).reduce((suma, reiksme) => {
        
        if (typeof reiksme === 'number' && !isNaN(reiksme)) {
            return suma + reiksme;
        }
        return suma;
    }, 0);
}

const duomenys = {
    obuoliai: 10,
    kriauses: 20,
    vardas: "Parduotuvė",
    slyvos: 5,
    arAtidaryta: true
};

console.log(sumuotiSkaicius(duomenys));





function pridetiSavybeSaugiai(objektas, raktas, reiksme) {
    return {
        ...objektas,
        [raktas]: reiksme
    };
}

const originalas = { vardas: "Jonas" };
const naujas = pridetiSavybeSaugiai(originalas, "amzius", 25);

console.log(originalas);
console.log(naujas); 



function sukurtiKopija(objektas) {
    return { ...objektas };
}

const original = { vardas: "Jonas", amzius: 30 };
const kopija = sukurtiKopija(originalas);

kopija.vardas = "Antanas";
console.log(original.vardas);




function sujungtiObjektus(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const asmuo = { vardas: "Jonas", amzius: 25 };
const darbas = { profesija: "Programuotojas", miestas: "Vilnius" };

const rezultatas = sujungtiObjektus(asmuo, darbas);
console.log(rezultatas);




function pasalintiSavybe(objektas, raktas) {
    delete objektas[raktas];
    return objektas;
}

const vartotojas = { vardas: "Jonas", amzius: 30, miestas: "Vilnius" };
pasalintiSavybe(vartotojas, "amzius");

console.log(vartotojas);







function paliktiTikSkaicius(objektas) {
   
    const isfiltruota = Object.entries(objektas).filter(([raktas, reiksme]) => {
        return typeof reiksme === 'number' && !isNaN(reiksme);
    });

    return Object.fromEntries(isfiltruota);
}


const misrusDuomenys = {
    amzius: 25,
    vardas: "Linas",
    ugis: 185.5,
    arProgramuotojas: true,
    balai: [10, 8, 9],
    kaina: 100
};

console.log(paliktiTikSkaicius(misrusDuomenys)); 






function tekstasIDidziasias(obj) {
    return Object.fromEntries(
        Object.entries(obj).map(([raktas, reiksme]) => [
            raktas,
            typeof reiksme === 'string' ? reiksme.toUpperCase() : reiksme
        ])
    );
}


const asmenis = { vardas: "jonas", amzius: 30, miestas: "vilnius" };
const rezultat = tekstasIDidziasias(asmenis);

console.log(rezultat); 





function rastDidziausia(masyvas, raktas) {
    if (masyvas.length === 0) return null; 

    return masyvas.reduce((didziausias, dabartinis) => {
        
        return (dabartinis[raktas] > didziausias[raktas]) ? dabartinis : didziausias;
    });
}


const produktai = [
    { pavadinimas: "Pieštukas", kaina: 1.5 },
    { pavadinimas: "Sąsiuvinis", kaina: 4.2 },
    { pavadinimas: "Kuprinė", kaina: 55.0 },
    { pavadinimas: "Trintukas", kaina: 0.8 }
];

const brangiausias = rastiDidziausia(produktai, "kaina");
console.log(brangiausias); 




function saugusVidurkis(objektas) {
    const tikSkaiciai = Object.values(objektas).filter(val => 
        typeof val === 'number' && !isNaN(val)
    );

    if (tikSkaiciai.length === 0) return 0;

    const suma = tikSkaiciai.reduce((acc, val) => acc + val, 0);
    return suma / tikSkaiciai.length;
}


const duomenis = {
    vardas: "Jonas",
    matematika: 10,
    fizika: 6,
    lankomumas: "geras"
};

console.log(saugusVidurkis(duomenys));

*/
/*
let pirmas = 12;
let antras = 11;
let trecias = 11;

// Ar pirmas ir antras skaičius lygūs?
if (pirmas < antras) {
    console.log("antras skaičius yra didesnis");
}

if (antras === trecias) {
    console.log("Antras ir trečias skaičius yra lygūs");
}

if (pirmas > antras) {
    console.log("Pirmas skaičius yra didesnis už antrą");
}
if (antras < trecias*2) {
    console.log("Antras skaičius yra mazesnis už trečią(*2)");
}
if (pirmas % 2 === 0) {
    console.log("Pirmas skaičius yra lyginis");
}

if (antras % 2 !== 0) {
    console.log("Antras skaičius yra nelyginis");
}
if (trecias > 0) {
    console.log("Trečias skaičius yra teigiamas");
}
if (pirmas > 0) {
    console.log("Pirmas skaičius yra teigiamas");
}
if (pirmas < 0) {
    console.log("Pirmas skaičius yra neigiamas");
}
if (antras % 4 === 0) {
    console.log("Antras skaičius dalijasi iš 4");
}
if (trecias % 8 === 0) {
    console.log("Trečias skaičius dalijasi iš 8");

}

let amzius = 20;
if (amzius >= 18) {
    console.log("Jus galite balsuoti");
}   


let pazymis1 = 5;
let pazymis2 = 10;
let pazymis3 = 9;

let vidurkis = (pazymis1 + pazymis2 + pazymis3) / 3;
if (vidurkis >= 5) {
    console.log("Vidurkis teigimas");
}   



let skaicius = 25;

if (skaicius % 5 === 0) {

    
    for (let i = 1; i <= 5; i++) {
        console.log(skaicius + " x " + i + " = " + (skaicius * i));
    }
} 


let skaiciu = 12;


if (skaiciu % 2 === 0) {

    console.log("Skaičius: " + skaiciu);
    console.log("Kvadratas: " + (skaiciu * skaiciu));
    console.log("Padalinta iš 2: " + (skaiciu / 2));

}
let skaic = 10;


if (skaic % 7 !== 0) {

    let antrasSkaic = 5;

    console.log("Suma: " + (skaic + antrasSkaic));
    console.log("Skirtumas: " + (skaic - antrasSkaic));
    console.log("Sandauga: " + (skaic * antrasSkaic));
    console.log("Dalmuo: " + (skaic / antrasSkaic));

}

*/







/*



function parodytiPranesimus() {

    console.log("Pranešimas prieš setTimeout");

    setTimeout(() => {
        console.log("Praėjo 2 sekundės!");
    }, 2000);

    console.log("Pranešimas po setTimeout");
}


parodytiPranesimus();







function parodytiPranesimus() {

    console.log("Pranešimas prieš setTimeout");

    setTimeout(() => {
        console.log("Praėjo 0.5 sekundės!");
    }, 100);

    console.log("Pranešimas po setTimeout");
}


parodytiPranesimus();







function pirmaFunkcija() {
    setTimeout(() => {
        console.log("Pirma funkcija įvykdyta po 3 sekundžių");
    }, 3000);
}


function antraFunkcija() {
    setTimeout(() => {
        console.log("Antra funkcija įvykdyta po 1 sekundės");
    }, 1000);
}


pirmaFunkcija();
antraFunkcija();

console.log("Funkcijos paleistos");





function gautiDuomenis(){
console.log("kraunami duomenys");
setTimeout(()=>{
    console.log("Duomenys gauti");
},3000);
}


gautiDuomenis();



function gautiDuomenis(){
console.log("Duomenys gaunami");
setTimeout(()=>{
    console.log("Duomenys gauti")
},3000);

}
gautiDuomenis();







function parodytiVarda(vardas, callback) {

    console.log("Vardas: " + vardas);

    
    callback();
}


function pranesimas() {
    console.log("Callback funkcija įvykdyta!");
}

// Funkcijos iškvietimas
parodytiVarda("Marius", pranesimas);







function padvigubintiSkaiciu(skaicius, callback) {

    let rezultatas = skaicius * 2;

    
    callback(rezultatas);
}


function parodytiRezultata(rezultatas) {
    console.log("Padvigubintas skaičius:", rezultatas);
}


padvigubintiSkaiciu(5, parodytiRezultata);






function pakeistiDidziosiomis (tekstas, callback){


    let didziausiasRaides=tekstas.toUpperCase();

    callback(didziausiasRaides);

}
function parodytiTeksta(rezultatas){

    console.log(rezultatas);
}

pakeistiDidziosiomis("labas Mariau", parodytiTeksta);







function apdorotiMasyva (masyvas,callback) {
    for (let elementas of masyvas) {
callback(elementas);
    }
}

function parodytiElementa(elementas){
console.log("Elemento reiksme:", elementas);

}
let skaiciai=[1,2,3,4,5];

apdorotiMasyva(skaiciai, parodytiElementa);






function paleistiCallback(callback) {

    setTimeout(() => {

        callback();

    }, 2000);
}

function pranesimas() {
    console.log("Callback funkcija įvykdyta po 2 sekundžių!");
}

paleistiCallback(pranesimas);









let pazadas = new Promise((resolve, reject) => {

    setTimeout(() => {

        resolve("Duomenys gauti");

    }, 2000);

});


pazadas.then((rezultatas) => {
    console.log(rezultatas);
});









/*

let pazadas = new Promise((resolve, reject) => {

    let sekme = Math.random() > 0.5;

    setTimeout(() => {

        if (sekme) {
            resolve("Operacija sėkminga!");
        } else {
            reject("Įvyko klaida!");
        }

    }, 2000);

});


pazadas
    .then((rezultatas) => {
        console.log(rezultatas);
    })
    .catch((klaida) => {
        console.log(klaida);
    });





/*

let pazadas = new Promise((resolve, reject) => {

    let sekme = Math.random() > 0.5;

    if (sekme) {
        resolve("Operacija pavyko!");
    } else {
        reject("Įvyko klaida!");
    }

});

// Promise apdorojimas

pazadas
    .then((rezultatas) => {
        console.log("SEKMĖ:", rezultatas);
    })
    .catch((klaida) => {
        console.log("KLAIDA:", klaida);
    });
*/
/*
const atsitiktinisPromise = new Promise((resolve, reject) => {
  const sekme = Math.random() > 0.5;

  setTimeout(() => {
    if (sekme) {
      resolve("✅ Operacija pavyko");
    } else {
      reject("❌ Įvyko klaida");
    }
  }, 2000);
});

atsitiktinisPromise
  .then(rezultatas => {
    console.log(rezultatas);
  })
  .catch(klaida => {
    console.log(klaida);
  });



const vartotojoPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const vartotojas = {
      vardas: "Marius",
      amzius: 50,
      profesija: "Automobilių inžinierius"
    };

    resolve(vartotojas);
  }, 2000);
});

vartotojoPromise
  .then(vartotojas => {
    console.log("Vartotojas gautas:");
    console.log(vartotojas);
  })
  .catch(klaida => {
    console.log("Klaida:", klaida);
  });

*/
/*
const skaiciais = [7, 2, 9, 4, 6, 1, 8, 3];

const rezultatas = skaiciais
  .filter(skaicius => skaicius % 2 === 0) 
  .map(skaicius => skaicius * 2) 
  .sort((a, b) => a - b); 

console.log(rezultatas);

*/

/*

const masyvas = ["obuolys", "namas", "programavimas", "katė", "automobilis", "JavaScript"];

const rezultatas = masyvas
  .filter(item => item.length > 5)
  .map(item => item.toUpperCase());

console.log(rezultatas);


*/
/*
const produktai = [
  { pavadinimas: "Telefonas", kaina: 799 },
  { pavadinimas: "Pelė", kaina: 25 },
  { pavadinimas: "Klaviatūra", kaina: 60 },
  { pavadinimas: "Monitorius", kaina: 150 },
  { pavadinimas: "USB laidas", kaina: 10 }
];

const rezultatas = produktai
  .filter(produktas => produktas.kaina > 50)
  .map(produktas => produktas.pavadinimas);

console.log(rezultatas);



const skaiciai = [10, -7, 7, 3, -2, 8, 0, 4];

const suma = skaiciai
  .filter(skaicius => skaicius > 0)
  .reduce((acc, skaicius) => acc + skaicius, 0);

console.log(suma);

*/
/*
const zmogus = {
  vardas: "Marius",
  amzius: 50,
  profesija: "Automobilių inžinierius"
};


const jsonFormatas = JSON.stringify(zmogus);

console.log(jsonFormatas);
*/

/*
const jsonTesktas = '{"vardas":"Marius","amzius":50,"profesija":"Automobilių inžinierius"}';

console.log(jsonTesktas);

const zmogus = {
  vardas: "Marius",
  amzius: 50,
  profesija: "Automobilių inžinierius"
};


*/
/*
const jsonTesktas = '{"vardas":"Marius","amzius":50,"profesija":"Automobilių inžinierius"}';

console.log(jsonTesktas);


const objektas = JSON.parse(jsonTesktas);

console.log(objektas.vardas);
console.log(objektas.amzius);
console.log(objektas.profesija);

*/


 
  
    
  
  

  /******** *
    
    const studentoJSON = `{
      "vardas": "Marius",
      "amzius": 65,
      "kursas": "JavaScript"
    }`;

    
    const studentas = JSON.parse(studentoJSON);

    
    const blokas = document.getElementById("studentas");

    
    blokas.innerHTML = `<----------------<
      <p>Vardas: ${studentas.vardas}</p>
      <p>Amžius: ${studentas.amzius}</p>
      <p>Kursas: ${studentas.kursas}</p>
    `;
  
*//////////////////////////////*

  /*
    
    const produktaiJSON = `[
      {
        "pavadinimas": "Pieštukas",
        "kaina": 10
      },
      {
        "pavadinimas": "Telefonas",
        "kaina": 80
      },
      {
        "pavadinimas": "Ausinės",
        "kaina": 14
      }
    ]`;

    
    const produktai = JSON.parse(produktaiJSON);

    
    const sarasas = document.getElementById("produktai");

    
    produktai.forEach(produktas => {
      sarasas.innerHTML += `<li>${produktas.pavadinimas}</li>`;
    });
  
    */////////////////////////////
    
  
 
/*
    
    fetch("https://jsonplaceholder.typicode.com")
      .then(response => response.json())
      .then(data => {

        const sarasas = document.getElementById("vartotojai");

        
        data.forEach(vartotojas => {

          sarasas.innerHTML += `
            <li>
              ${vartotojas.name}
            </li>
          `;

        });

      })
      .catch(error => {
        console.log("Įvyko klaida:", error);
      });
*/
/*
fetch("https://jsonplaceholder.typicode.com")
  .then(response => response.json())
  .then(data => {
    console.log(data); // JSON rezultatas konsoleje
  })
  .catch(error => {
    console.error("Klaida:", error);
  });
  
*/
 /*
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log(users[0].name);
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log(users);
  });




fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP klaida: " + response.status);
    }
    return response.json();
  })
  .then(users => {
    console.log("Gauti vartotojai:", users);
  })
  .catch(error => {
    console.log("Klaida:", error.message);
  });


fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data));






 console.log("Kraunama...");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    setTimeout(() => {
      console.log("Duomenys gauti:", users);
    }, 4000);
  })
  .catch(error => {
    console.log("Klaida:", error.message);
  });




  console.log("Kraunama...");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.clear(); 
    console.log("Duomenys gauti:", users);
  })
  .catch(error => {
    console.clear();
    console.log("Klaida:", error.message);
  });

*/


/*
async function gautiVartotojus() {   
  const response = await fetch("https://jsonplaceholder.typicode.com/users"); // <-- await
  const users = await response.json(); 

  console.log(users);
}

gautiVartotojus();

*/

/*
async function gautiVartotojus() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("HTTP klaida: " + response.status);
    }

    const users = await response.json();

    console.log(users);
  } catch (error) {
    console.log("Klaida:", error.message);
  }
}

gautiVartotojus();  


*/

/*
async function gautiVartotojus() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return users;
}

gautiVartotojus().then(data => {
  console.log(data);
});

*/
/*
async function gautiVartotojuVardus() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return users.map(user => user.name);
}


gautiVartotojuVardus().then(vardai => {
  console.log(vardai);
});




/*

async function gautiIrSkaiciuotiKaina() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  
  const bendrasVarduIlgis = users.reduce((sum, user) => sum + user.name.length, 0);

  return bendrasVarduIlgis;
}


gautiIrSkaiciuotiKaina().then(kaina => {
  console.log("Bendras vardu ilgis :", kaina);
});


async function gautiIrRodytiLentele() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  const lentele = users.map(user => ({
    ID: user.id,
    Vardas: user.name,
    Email: user.email
  }));

  console.table(lentele);
}

gautiIrRodytiLentele();









const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const data = {
      id: 1,
      name: "Jonas",
      role: "developer"
    };

    resolve(data);
  }, 2000);
});



promise.then(result => {
  console.log(result);
});




const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      id: 1,
      name: "Jonas",
      role: "developer"
    });
  }, 2000);
});

async function gautiDuomenis() {
  console.log("Laukiama...");

  const data = await promise;

  console.log("Gauta:", data);

  const div = document.createElement("div");
  div.textContent = `Vardas: ${data.name}, Role: ${data.role}`;

  document.body.appendChild(div);
}

gautiDuomenis();





function apdorotiDuomenis(data) {
  console.log("Gauti duomenys:", data);
}

function gautiVartotojus(callback) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {
      callback(data); 
    })
    .catch(error => {
      console.log("Klaida:", error);
    });
}

gautiVartotojus(apdorotiDuomenis);









fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    return users
      .filter(user => user.id > 3)                 
      .sort((a, b) => a.name.localeCompare(b.name)) 
      .map(user => user.name.toUpperCase());        
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Klaida:", error);
  });


  

async function gautiIrFiltruotiVartotojus() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  const search = prompt("Įvesk vardą paieškai:");

  const filtravimas = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log("Paieškos rezultatai:", filtravimas);
}




gautiIrFiltruotiVartotojus();

async function gautiIrFiltruotiVartotojus() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  const search = prompt("Įvesk vardą paieškai:");

  
  if (typeof search !== "string" || search.trim() === "") {
    console.log("Paieška atšaukta arba tuščia");
    return;
  }

  const filtravimas = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  console.log("Paieškos rezultatai:", filtravimas);
}

gautiIrFiltruotiVartotojus();




const button = document.createElement("button");
button.textContent = "Užkrauti duomenis";

document.body.appendChild(button);

async function gautiDuomenis() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  console.clear();
  console.table(users);
}

button.addEventListener("click", () => {
  gautiDuomenis();
});


function generuotiKorteles(data) {
  data.forEach(user => {
    const card = document.createElement("div");

    card.style.border = "1px solid black";
    card.style.padding = "10px";
    card.style.margin = "10px";
    card.style.width = "200px";

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>Email: ${user.email}</p>
      <p>Miestas: ${user.address.city}</p>
    `;

    document.body.appendChild(card);
  });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    generuotiKorteles(data);
  });
  
  

  function generuotiKorteles(data) {
  return data.map(user => {
    return `
      <div class="card">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <p>${user.address.city}</p>
      </div>
    `;
  });
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
    const korteles = generuotiKorteles(data);

    console.log(korteles);
  });

  


 const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log("Pirmas .then:", values);

    return values.map(num => num * 2);
  })
  .then(result => {
    console.log("Antras .then:", result);

    return result.reduce((sum, num) => sum + num, 0);
  })
  .then(finalResult => {
    console.log("Trečias .then:", finalResult);
  })
  .catch(error => {
    console.log("Klaida:", error);
  });

  */


const input = document.createElement("input");
const table = document.createElement("table");

document.body.appendChild(input);
document.body.appendChild(table);

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {

    function showUsers(data) {
      table.innerHTML = "";

      data.forEach(user => {
        table.innerHTML += `
          <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
          </tr>
        `;
      });
    }

    showUsers(users);

    input.addEventListener("input", () => {
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(input.value.toLowerCase())
      );

      showUsers(filtered);
    });
  });