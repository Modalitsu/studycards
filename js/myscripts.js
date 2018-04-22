//Variabler for spørsmålskort
var card1, card2, card3, card4, card5;

//Utfør main metode så snart siden er ferdig lastet.
function main(){
	generateCards();
	$('.answer').hide(); //Skjul alle svar umidelbart.
  $('.button').on('click',function(){ //Sørg for at alle ".button" elementer...
    $(this).next().slideToggle(200) //...kan skjule/vise elementet som er forran i seg i dokumentet.
  });
}
$(document).ready(main);

//Fyller ut alle 5 Study Cards med tilfeldig valgte spørsmål.
function generateCards(){
	let questionPool = generateQuestionPool();
	shuffleQuestions();

	//Denne løkken sørger for at alle kortene forblir unike
	while (card1 === card2 ||
    card1 === card3 ||
    card1 === card4 ||
    card1 === card5 ||
		card2 === card3 ||
		card2 === card4 ||
		card2 === card5 ||
		card3 === card4 ||
		card3 === card5 ||
		card4 === card5){
		shuffleQuestions();
		 console.log("Shuffling..")
	}


	$("#question1").append(card1.question);
	$("#answer1").append(card1.answer);

	$("#question2").append(card2.question);
	$("#answer2").append(card2.answer);

	$("#question3").append(card3.question);
	$("#answer3").append(card3.answer);

	$("#question4").append(card4.question);
	$("#answer4").append(card4.answer);

	$("#question5").append(card5.question);
	$("#answer5").append(card5.answer);
}

//Tildeler et tilfeldig spørsmål til alle cards.
function shuffleQuestions(){
	card1 = random_item(generateQuestionPool());
	card2 = random_item(generateQuestionPool());
	card3 = random_item(generateQuestionPool());
	card4 = random_item(generateQuestionPool());
	card5 = random_item(generateQuestionPool());
}

//Returner et Array med alle studycards fra databasen.
function generateQuestionPool(){
	var questionPool = [];
	let input = database.fag.info102.cards;
	for (var k in input){
		questionPool.push(input[k]);
	}
	return questionPool;
}

//Returner et tilfeldig element fra en ArrayList.
function random_item(arrayList){
	return arrayList[Math.floor(Math.random()*arrayList.length)];
}

//JSON database
var database = {
  "fag" : {
    "info102" : {
      "cards" : {
        "card1" : {
          "answer" : "Universalmengden er mengden over alle elementene i et spesifikt univers.             Komplimentet av universalmengden er den tomme mengden.",
          "keywords" : [ "mengder" ],
          "question" : "Hva er en Universalmengde?",
          "type" : "QandA"
        },
        "card2" : {
          "answer" : "En ekvivalensrelasjon har egenskapene refleksivitet, symmetri og transitivitet.",
          "keywords" : [ "relasjoner", "ekvivalens", "refleksivitet", "symmetri", "transitivitet", "mengder" ],
          "question" : "Hvilke egenskaper kjennetegner en ekvivalensrelasjon?",
          "type" : "QandA"
        },
        "card3" : {
          "answer" : "A&cap;C = {1}",
          "keywords" : [ "mengder", "Snitt" ],
          "question" : "<h6> Gitt at: A = {1, 2, 3}, B = {a, b, c}, C = {0, 1}</h6><br>Hva er A&cap;C?",
          "type" : "derivation"
        },
				"card4" : {
					"answer" : "A&cup;B = {1,2,3,a,b c}",
					"keywords" : [ "mengder", "Union" ],
					"question" : "<h6> Gitt at: A = {1, 2, 3}, B = {a, b, c}, C = {0, 1}</h6> <br> Hva er A&cup;B?",
					"type" : "derivation"
				},
				"card3" : {
					"answer" : "BxC = {(a,0), (a,1), (b,0), (b,1), (c,0), (c,1)}",
					"keywords" : [ "mengder", "Kartesisk Produkt" ],
					"question" : "<h6> Gitt at: B = {a, b, c} og C = {0, 1}</h6> <br> Hva er BxC?",
					"type" : "derivation"
				},
				"card4" : {
					"answer" : "Ja, for eksempel når alle instanser er på formen (x,x)",
					"keywords" : [ "relasjoner", "mengder", "symmetri", "antisymmetri"],
					"question":"Kan en relasjon være både symmetrisk og antisymmetrisk?",
					"type": "QandA"
				},
				"card5" : {
					"answer" : "I logikken kalles en logisk formel for en tautologi når formelen blir sann uansett hvilken sannhetsverdi man tilskriver formelens enkeltutsagn",
					"keywords" : [ "logikk"],
					"question":"Hva er en tautologi?",
					"type": "QandA"
				},
				"card6" : {
					"answer" : "Alle liker Kari.",
					"keywords" : ["logikk"],
					"question":"Oversett følgende predikat til muntlig språk:<br>&forall;x liker(x,Kari)",
					"type": "QandA"
				},
				"card7" : {
					"answer" : 'Eksistenskvantoren (noteres med &exist;) er en logisk konstant som kan tolkes som "det finnes..", "det finnes minst én.." eller "for noen.."<br><br> Kvantorer kombineres ofte med predikat for å formalisere enkelte utsagn. <br><br> Eksempel: "noen elsker deg" kan skrives slik: &exist;xelskerDeg(x) gitt at universet inneholder alle levende vesener',
					"keywords" : ["logikk"],
					"question":"Forklar følgende symbol → &exist;",
					"type": "QandA"
				}
      }
    }
  }
}
