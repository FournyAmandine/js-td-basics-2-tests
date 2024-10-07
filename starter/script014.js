/*****************************
 * 14 - Les instructions If / Else
 */

// TEST = STRUCTURE DE CONTRÔLE N° 1 = MOYEN DE CONTRÔLER L'EXÉCUTION DES INSTRUCTIONS :
// L'instruction ne s'exécutera que si une certaine condition est remplie (c.-à-d. vraie)

// 1. Exprimez une condition : IF
const h = 10;

if(h === 10){

}

// 1. Écrivez un test dont la condition est true
// 2. Dans le bloc, affichez "Je suis dans un bloc d'instructions soumis à une condition qui est toujours vraie, je vais donc toujours m'afficher"

const myName = "Amandine";

if(myName === "Amandine"){
    console.log("Je suis dans un bloc d'instructions soumis à une condition qui est toujours vraie, je vais donc toujours m'afficher")
}

// Et l'inverse :
// 1. Écrivez un test dont la condition est false
// 2. Dans le bloc, affichez "Bon, je cause toujours, mais vu que je suis dans un bloc d'instructions soumis à une condition qui est toujours fausse, ce que je dis ne va jamais s'afficher"

const a = 10;

if(h > 10){
    console.log(h)
} else {
    console.log("Bon, je cause toujours, mais vu que je suis dans un bloc d'instructions soumis à une condition qui est toujours fausse, ce que je dis ne va jamais s'afficher")
}

// 1. Demandez à l'utilisateur d'entrer un nombre et enregistrez ce nombre (ATTENTION, prenez bien soin qu'il s'agisse bien d'un nombre et pas d'une chaîne de caractères !) dans une constante nombre
// 2. Si ce nombre est positif (et seulement dans ce cas), affichez "… est positif"

const number = parseInt(prompt("Entrez un nombre"));

if(number >= 0){
    console.log(`${number} est positif`)
}


// Écrivez un programme qui dit "Bonjour" à l'utilisateur et n'accepte de lui répondre que si celui-ci lui dit "Bonjour" à son tour. Dans ce cas, le programme lui répond "Toi, tu es poli, tu me dis bonjour, je veux bien te parler… Comment t'appelles-tu ?". Il enregistre alors l'entrée dans une variable nom et, seulement si l'utilisateur a bien entré quelque chose dans le champ (il prend la peine de vérifier avant), il lui répond (dans la console), "Je t'aime bien, …".

const poli = prompt("Bonjour");

if (poli === "Bonjour") {
    console.log(nom = prompt("Toi, tu es poli, tu me dis bonjour, je veux bien te parler… Comment t'appelles-tu ?"));
}

console.log("Je t'aime bien");

// 2. Exprimez une alternative : if / else

// 1. Demandez à l'utilisateur d'entrer un nombre et enregistrez ce nombre dans une constante nombre
// 2. Si ce nombre est positif, affichez "… est positif", sinon, affichez "… est négatif ou nul"

const nombre = parseInt(prompt("Entrez un nombre"));

if(number >= 0){
    console.log(`${nombre} est positif`)
} else {
    console.log(`${nombre} est négatif`);
}



// 1. Initialisez la variable firstName à  John et enregistrez son état civil ('single') dans une variable civilStatus

const firstName = "John"
let civilStatus = "single"

civilStatus = "married";
// 2. Si l'état civil est 'married', affichez "John est marié !", sinon affichez "John va, on l\'espère, bientôt se marier :)"

if(civilStatus==="married"){
    console.log("John est marié !");
} else {
    console.log("John va, on l\'espère, bientôt se marier :)");
}
// 3. Changez l'état civil de John à ('married') et retestez


// 1. Créez à présent une variable isMarried pour enregistrer l'état civil de John et, en imaginant qu'il est marié, initialisez-la à true
// 2. Servez-vous à présent de cette variable pour afficher "John est marié !" ou "John va, on l\'espère, bientôt se marier :)" selon qu'il est marié ou pas
// 3. Retestez votre code après avoir changé la valeur de isMarried à false

const isMarried = false

if(isMarried===true){
    console.log("John est marié !");
} else {
    console.log("John va, on l\'espère, bientôt se marier :)");
}

// 1. Enregistrez la taille et le poids de John (78 kg, 1.69 m) et de Mark (92 kg, 1.95 m) dans 4 variables
// 2. Calculez leur BMI et affichez, selon le cas, "Le BMI de Mark est plus élevé que celui de John" ou "Le BMI de John est plus élevé que celui de Mark"

const poidsJohn = 78
const tailleJohn = 1.69
const poidsMark = 92
const tailleMark = 1.95

const bmiMark = poidsMark / (tailleMark*tailleMark);
const bmiJohn = poidsJohn / (tailleJohn*tailleJohn);

if(bmiJohn < bmiMark){
    console.log("Le BMI de Mark est plus élevé que celui de John");
} else {
    console.log("Le BMI de John est plus élevé que celui de Mark");
}


// Écrire un programme qui teste si un nombre entré par l’utilisateur est pair ou impair.
