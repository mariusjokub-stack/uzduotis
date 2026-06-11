const pokemonContainer = document.getElementById("pokemonContainer");
const collectionContainer = document.getElementById("collectionContainer");
const statsContainer = document.getElementById("statsContainer");
const achievementContainer = document.getElementById("achievementContainer");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const collectionSearch = document.getElementById("collectionSearch");

const showFireBtn = document.getElementById("showFireBtn");
const showAllBtn = document.getElementById("showAllBtn");
const randomBtn = document.getElementById("randomBtn");

const pokemon1Select = document.getElementById("pokemon1");
const pokemon2Select = document.getElementById("pokemon2");
const battleBtn = document.getElementById("battleBtn");
const battleResult = document.getElementById("battleResult");

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

let collection = [];

let trainerStats = {
    xp: 0,
    level: 1,
    caught: 0,
    trainings: 0
};

function saveData() {
    localStorage.setItem("collection", JSON.stringify(collection));
    localStorage.setItem("trainerStats", JSON.stringify(trainerStats));
}

function loadData() {
    const c = localStorage.getItem("collection");
    const t = localStorage.getItem("trainerStats");

    if (c) collection = JSON.parse(c);
    if (t) trainerStats = JSON.parse(t);

    renderCollection();
    renderStats();
}

window.addEventListener("DOMContentLoaded", () => {
    loadStarterPokemon();
    loadData();
});

// ---------- API ----------

async function loadStarterPokemon() {
    try {
        const ids = Array.from({length:10}, () =>
            Math.floor(Math.random()*150)+1
        );

        const data = await Promise.all(
            ids.map(id =>
                fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                    .then(r => r.json())
            )
        );

        data.forEach(renderPokemon);

    } catch(e) {
        pokemonContainer.textContent = "Error loading Pokémon";
    }
}

async function searchPokemon(name) {
    try {
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`
        );

        if(!res.ok) throw new Error("Not found");

        const data = await res.json();
        pokemonContainer.innerHTML = "";
        renderPokemon(data);

    } catch(e) {
        pokemonContainer.textContent = "Pokemon not found";
    }
}

// ---------- RENDER ----------





function renderPokemon(pokemon) {

    

    const card = document.createElement("div");
    card.classList.add("card");

    const name = document.createElement("h3");
    name.textContent = pokemon.name;

    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    // TYPE
    const type = document.createElement("p");
    type.textContent =
        "Type: " +
        pokemon.types.map(t => t.type.name).join(", ");

    // LINE
    const line1 = document.createElement("hr");

    // STATS TITLE
    const statsTitle = document.createElement("strong");
    statsTitle.textContent = "Base Stats";

    const hp = document.createElement("p");
   hp.textContent = "❤️ Health Points: " + pokemon.stats[0].base_stat;

    const attack = document.createElement("p");
    attack.textContent = "⚔️ Attack: " + pokemon.stats[1].base_stat;

    const defense = document.createElement("p");
    defense.textContent = "🛡️ Defence: " + pokemon.stats[2].base_stat;

    // LINE
    const line2 = document.createElement("hr");

    // BUTTON
    const catchBtn = document.createElement("button");
    catchBtn.textContent = "Catch";

    catchBtn.addEventListener("click", () => {
        catchPokemon(pokemon);
    });

    // MODAL CLICK
    card.addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") {
            openModal(pokemon);
        }
    });

    // APPEND VISKO
    card.append(
        name,
        img,
        type,
        line1,
        statsTitle,
        hp,
        attack,
        defense,
        line2,
        catchBtn
    );

    pokemonContainer.append(card);


}











// ---------- CATCH ----------

function catchPokemon(pokemon) {

    if(collection.find(p => p.name === pokemon.name)) return;

    const obj = {
        name: pokemon.name,
        image: pokemon.sprites.front_default,
        types: pokemon.types.map(t=>t.type.name),
        level: 1,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        favorite: false,
        caughtAt: new Date().toLocaleString()
    };

    collection.push(obj);

    trainerStats.caught++;
    addXP(50);

    saveData();
    renderCollection();
    renderStats(); 

}

// ---------- COLLECTION ----------




function renderCollection(list = collection) {

    collectionContainer.innerHTML = "";

    list.forEach(p => {

        const card = document.createElement("div");
        card.classList.add("card");

        // NAME
        const name = document.createElement("h3");
        name.textContent = p.name;

        // IMAGE
        const img = document.createElement("img");
        img.src = p.image;

        // LEVEL
        const level = document.createElement("p");
        level.textContent = "Level: " + p.level;

        // TYPES
        const types = document.createElement("p");
        types.textContent = "Types: " + p.types.join(", ");

        // BUTTONS
        const trainBtn = document.createElement("button");
        trainBtn.textContent = "Train";

        const resultBtn = document.createElement("button");
        resultBtn.textContent = "Result";

        const resultBox = document.createElement("div");
        resultBox.style.display = "none";

        const hp = document.createElement("p");
hp.textContent = "Health Points: " + p.hp;

const attack = document.createElement("p");
attack.textContent = "Attack: " + p.attack;

const defense = document.createElement("p");
defense.textContent = "Defense: " + p.defense;

const caughtAt = document.createElement("p");
caughtAt.textContent = "Caught Time: " + p.caughtAt;

resultBox.append(
    hp,
    attack,
    defense,
    caughtAt
);

        const releaseBtn = document.createElement("button");
        releaseBtn.textContent = "Release";



        
        // EVENTS
       trainBtn.addEventListener("click", () => trainPokemon(p));

resultBtn.addEventListener("click", () => {

    if(resultBox.style.display === "none") {
        resultBox.style.display = "block";
    } else {
        resultBox.style.display = "none";
    }

});

releaseBtn.addEventListener("click", () => releasePokemon(p));
        

        // APPEND
   card.append(
    name,
    img,
    level,
    types,
    trainBtn,
    resultBtn,
    releaseBtn,
    resultBox
);

        collectionContainer.append(card);
    });

    updateBattleOptions();
    renderAchievements();
}




// ---------- TRAIN ----------

function trainPokemon(p) {
    p.level++;
    p.hp += 5;
    p.attack += 5;
    p.defense += 5;

    trainerStats.trainings++;
    addXP(20);

    saveData();
    renderCollection();
}

// ---------- XP ----------

function addXP(amount) {

    trainerStats.xp += amount;

    let leveledUp = false;

    while (trainerStats.xp >= trainerStats.level * 100) {

        trainerStats.xp -= trainerStats.level * 100;
        trainerStats.level++;
        leveledUp = true;
    }

    saveData();

    renderStats();

    renderAchievements();

    if (leveledUp) {

        showLevelUp();
    }
}

function showLevelUp() {

    const popup = document.createElement("div");

    popup.textContent =
        "🎉 LEVEL UP! 🎉";

    popup.classList.add("level-up");

    document.body.appendChild(popup);

    setTimeout(() => {

        popup.remove();

    }, 2000);
}

// ---------- STATS ----------

function renderStats() {

    statsContainer.innerHTML = `
        <div class="dashboard-card">
            <h3>Dashboard</h3>
            <p>Level: ${trainerStats.level}</p>
            <p>Experience Points: ${trainerStats.xp}</p>

            <progress value="${trainerStats.xp}" max="${trainerStats.level*100}"></progress>
            <p>Caught: ${trainerStats.caught}</p>
            <p>Trainings: ${trainerStats.trainings}</p>
        </div>
    `;
}


// ================================
// FAVORITES SISTEMA
// ================================

function toggleFavorite(pokemon) {

    pokemon.favorite = !pokemon.favorite;

    saveData();

    renderCollection();
}


// ================================
// RELEASE SISTEMA
// ================================

function releasePokemon(pokemon) {

    collection = collection.filter(
        p => p.name !== pokemon.name
    );

    trainerStats.caught = collection.length;

    saveData();

    renderCollection();

    renderStats();

    renderAchievements();
}


// ================================
// BATTLE SIMULATOR
// ================================

function startBattle() {

    const pokemon1Name =
        document.getElementById("pokemon1").value;

    const pokemon2Name =
        document.getElementById("pokemon2").value;

    const p1 = collection.find(
        p => p.name === pokemon1Name
    );

    const p2 = collection.find(
        p => p.name === pokemon2Name
    );

    if(!p1 || !p2) return;

    const p1Power =
        p1.hp + p1.attack + p1.defense;

    const p2Power =
        p2.hp + p2.attack + p2.defense;

    const result =
        document.getElementById("battleResult");

    while(result.firstChild) {
        result.removeChild(result.firstChild);
    }

    const title = document.createElement("h3");

    title.textContent =
        p1.name + " VS " + p2.name;

    const stats1 = document.createElement("p");

    stats1.textContent =
        p1.name +
        " Power: " +
        p1Power;

    const stats2 = document.createElement("p");

    stats2.textContent =
        p2.name +
        " Power: " +
        p2Power;

    const winner = document.createElement("h2");

    if(p1Power > p2Power) {

        winner.textContent =
            p1.name + " Wins!";

    } else if(p2Power > p1Power) {

        winner.textContent =
            p2.name + " Wins!";

    } else {

        winner.textContent =
            "Draw!";
    }

    result.append(
        title,
        stats1,
        stats2,
        winner
    );
}


// ================================
// BUTTON EVENT
// ================================

document
    .getElementById("battleBtn")
    .addEventListener("click", startBattle);


// ================================
// UPDATE BATTLE OPTIONS
// ================================

function updateBattleOptions() {

    const pokemon1 =
        document.getElementById("pokemon1");

    const pokemon2 =
        document.getElementById("pokemon2");

    pokemon1.innerHTML = "";

    pokemon2.innerHTML = "";

    collection.forEach(p => {

        const option1 =
            document.createElement("option");

        option1.value = p.name;

        option1.textContent = p.name;

        const option2 =
            document.createElement("option");

        option2.value = p.name;

        option2.textContent = p.name;

        pokemon1.append(option1);

        pokemon2.append(option2);
    });
}





// ---------- SEARCH COLLECTION ----------

collectionSearch.addEventListener("input", () => {

    const val = collectionSearch.value.toLowerCase();

    renderCollection(
        collection.filter(p =>
            p.name.toLowerCase().includes(val)
        )
    );
});

// ---------- FILTER ----------

showFireBtn.onclick = () => {
    renderCollection(
        collection.filter(p =>
            p.types.includes("fire")
        ).sort((a,b)=>b.level-a.level)
    );
};

showAllBtn.onclick = () => renderCollection();

// ---------- RANDOM ----------

randomBtn.onclick = async () => {
    const id = Math.floor(Math.random()*150)+1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    renderPokemon(data);
};

// ---------- ACHIEVEMENTS ----------




// 🔥 ČIA ĮDĖK
function makeBar(current, max, size = 160) {

    const filled = Math.round((current / max) * size);

    let bar = "";

    for (let i = 0; i < size; i++) {

        bar += i < filled ? "█" : "░";
    }

    return bar;
}
function renderAchievements() {

    achievementContainer.innerHTML = "";

    // CATCH 10
    const catchText = document.createElement("p");

    catchText.textContent =
        "Catch 10 Pokémon";

    const catchBar = document.createElement("p");

    catchBar.textContent =
        makeBar(collection.length, 10);

    achievementContainer.append(catchText, catchBar);



    // LEVEL 5
    const levelText = document.createElement("p");

    levelText.textContent =
        "Reach Level 5";

    const levelBar = document.createElement("p");

    levelBar.textContent =
        makeBar(trainerStats.level, 5);

    achievementContainer.append(levelText, levelBar);



    // XP 1000
    const xpText = document.createElement("p");

    xpText.textContent =
        "Collect 1000 XP";

    const xpBar = document.createElement("p");

    xpBar.textContent =
        makeBar(trainerStats.xp, 1000);

    achievementContainer.append(xpText, xpBar);
}
// ---------- BATTLE ----------

function updateBattleOptions() {

    pokemon1Select.innerHTML = "";
    pokemon2Select.innerHTML = "";

    collection.forEach(p => {
        const opt = `<option value="${p.name}">${p.name}</option>`;
        pokemon1Select.innerHTML += opt;
        pokemon2Select.innerHTML += opt;
    });
}

battleBtn.onclick = () => {

    const p1 = collection.find(p => p.name === pokemon1Select.value);
    const p2 = collection.find(p => p.name === pokemon2Select.value);

    if(!p1 || !p2) return;

    const power = p =>
        p.hp + p.attack + p.defense + p.level;

    const result =
        power(p1) > power(p2)
            ? `${p1.name} wins!`
            : power(p2) > power(p1)
                ? `${p2.name} wins!`
                : "Draw!";

    battleResult.textContent = result;
};

// ---------- MODAL ----------

function openModal(pokemon) {

    modal.style.display = "block";

    modalBody.innerHTML = `
        <h2>${pokemon.name}</h2>
        <img src="${pokemon.sprites.front_default}">
        <p>Types: ${pokemon.types.map(t=>t.type.name).join(", ")}</p>
        <p>Height: ${pokemon.height}</p>
        <p>Weight: ${pokemon.weight}</p>
    `;
}

closeModal.onclick = () => modal.style.display = "none";
window.onclick = e => {
    if(e.target === modal) modal.style.display = "none";
};

// ---------- SEARCH API ----------

searchBtn.onclick = () => {
    searchPokemon(searchInput.value.toLowerCase());
};

