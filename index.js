

let amzius = 25;

if (amzius >= 18) {
    console.log("Jūs galite balsuoti");
}

let p1 = 10;
let p2 = 6;
let p3 = 7;
let p4 = 6;

let vidurkis = (p1 + p2 + p3 + p4) / 4;
console.log("Pazymių vidurkis:", vidurkis);

if (vidurkis >= 5) {
    console.log("Vidurkis teigiamas");
}

let skaicius = 10;

// 4.1. Jei dalinasi iš 5 - daugybos lentelė (1-5)
if (skaicius % 5 === 0) {
    console.log(`Daugybos lentelė skaičiui ${skaicius}:`);
    console.log(`${skaicius} * 1 = ${skaicius * 1}`);
    console.log(`${skaicius} * 2 = ${skaicius * 2}`);
    console.log(`${skaicius} * 3 = ${skaicius * 3}`);
    console.log(`${skaicius} * 4 = ${skaicius * 4}`);
    console.log(`${skaicius} * 5 = ${skaicius * 5}`);
}

// 4.2. Jei lyginis - skaičius, kvadratas ir pusė
if (skaicius % 2 === 0) {
    console.log("Skaičius yra lyginis:");
    console.log("Skaičius:", skaicius);
    console.log("Kvadratas:", skaicius ** 2); // arba skaicius * skaicius
    console.log("Padalinta iš 2:", skaicius / 2);
}

// 4.3. Jei nesidalina iš 7 - aritmetiniai veiksmai su antru kintamuoju
if (skaicius % 7 !== 0) {
    let antrasSkaicius = 4;
    console.log("Skaičius nesidalina iš 7, rezultatai su antru skaičiumi:");
    console.log("Suma:", skaicius + antrasSkaicius);
    console.log("Skirtumas:", skaicius - antrasSkaicius);
    console.log("Sandauga:", skaicius * antrasSkaicius);
    console.log("Dalmuo:", skaicius / antrasSkaicius);
}


return



let pirmas = 6;
let antras = 4;
let trecias = 8;


if (pirmas === antras) {
    console.log("1. Pirmas ir antras yra lygūs.");
}


if (antras === trecias) {
    console.log("2. Antras ir trečias yra lygūs.");
}


if (pirmas >= antras) {
    console.log("3. Pirmas yra didesnis už antrąjį.");
}


if (antras > (trecias * 2)) {
    console.log("4. Antras yra didesnis už dvigubą trečią.");
}


if (pirmas % 2 === 0) {
    console.log("5. Pirmas skaičius yra lyginis.");
}


if (antras % 2 !== 0) {
    console.log("6. Antras skaičius yra nelyginis.");
}


if (trecias > 0) {
    console.log("7. Trečias skaičius yra teigiamas.");
}


if (pirmas < 0) {
    console.log("8. Pirmas skaičius yra neigiamas.");
}


if (antras % 4 === 0) {
    console.log("9. Antras skaičius dalinasi iš 4.");
}


if (trecias % 8 === 0) {
    console.log("10. Trečias skaičius dalinasi iš 8.");
}




l














