//Variabel for spørsmålskort
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

//Returner et Array med alle kort.
function generateQuestionPool(){
	var questionPool = [];
	let input = database.fag.info102.cards;
	for (var k in input){
		questionPool.push(input[k]);
	}
	return questionPool;
}

//Fyller ut alle Study Cards.
function generateCards(){
	let questionPool = generateQuestionPool();
	card1 = random_item(generateQuestionPool());
	card2 = random_item(generateQuestionPool());
	card3 = random_item(generateQuestionPool());
	card4 = random_item(generateQuestionPool());
	card5 = random_item(generateQuestionPool());

	while(card1.question === card2.question){
		 card2 = random_item(generateQuestionPool());
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
          "answer" : "A&cap;B = {1,2,3,a,b c}",
          "keywords" : [ "mengder" ],
          "question" : "Hva er BxC?",
          "questionheader" : "Ta utgangspunkt i følgende mengder: A = {1, 2, 3}, B = {a, b, c}, C = {0, 1}",
          "type" : "derivation"
        }
      }
    }
  }
}
