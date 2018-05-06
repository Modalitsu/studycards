//Refferanser til spørsmålskort
var card1, card2, card3, card4, card5;

//JSON database
const database = {
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
          "keywords" : [ null, "ekvivalens", "refleksivitet", "symmetri", "transitivitet", "mengder" ],
          "question" : "Hvilke egenskaper kjennetegner en ekvivalensrelasjon?",
          "type" : "QandA"
        },
        "card3" : {
          "answer" : "BxC = {(a,0), (a,1), (b,0), (b,1), (c,0), (c,1)}",
          "keywords" : [ "mengder", "Kartesisk Produkt" ],
          "question" : "Hva er BxC? <br> <h6> Gitt at: B = {a, b, c} og C = {0, 1}</h6>",
          "type" : "derivation"
        },
        "card4" : {
          "answer" : "Ja, for eksempel når alle instanser er på formen (x,x)",
          "keywords" : [ "relasjoner", "mengder", "symmetri", "antisymmetri" ],
          "question" : "Kan en relasjon være både symmetrisk og antisymmetrisk?",
          "type" : "QandA"
        },
        "card5" : {
          "answer" : "I logikken kalles en logisk formel for en tautologi når formelen blir sann uansett hvilken sannhetsverdi man tilskriver formelens enkeltutsagn",
          "keywords" : [ "logikk" ],
          "question" : "Hva er en tautologi?",
          "type" : "QandA"
        },
        "card6" : {
          "answer" : "Alle liker Kari.",
          "keywords" : [ "logikk" ],
          "question" : "Oversett følgende predikat til muntlig språk:<br>&forall;x liker(x,Kari)",
          "type" : "QandA"
        },
        "card7" : {
          "answer" : "Eksistenskvantoren (noteres med &exist;) er en logisk konstant som kan tolkes som \"det finnes..\", \"det finnes minst én..\" eller \"for noen..\"<br><br> Kvantorer kombineres ofte med predikat for å formalisere enkelte utsagn. <br><br> Eksempel: \"noen elsker deg\" kan skrives slik: &exist;xelskerDeg(x) gitt at universet inneholder alle levende vesener",
          "keywords" : [ "logikk" ],
          "question" : "Forklar følgende symbol → &exist;",
          "type" : "QandA"
        }
      }
    },
    "info134" : {
      "cards" : {
        "card1" : {
          "answer" : "Hyper Text Markup Language",
          "keywords" : "HTML",
          "question" : "Hva står HTML for?",
          "type" : "QandA"
        },
        "card2" : {
          "answer" : "JavaScript Object Notation",
          "keywords" : "JavaScript",
          "question" : "Hva står JSON for?",
          "type" : "QandA"
        },
        "card3" : {
          "answer" : "Document Object Model",
          "keywords" : "Javascript",
          "question" : "Hva står DOM for?",
          "type" : "QandA"
        },
        "card4" : {
          "answer" : "En fullstendig lenke er en lenke til et annet nettsted, og vil dermed alltid inneholde hele domenet (inkludert protokollen) til stedet det linker til. F.eks: \"http://wikipedia.com/\". En relativ lenke derimot, peker kun mot en fil som ligger på samme nettsted som det linkes fra og vil da kun være en adresse eller path. F.eks: \"index.html\" eller \"/media/image.png\".",
          "keywords" : "HTML",
          "question" : "Hva er forskjellen på relative og absolutte lenker i <a href> ?",
          "type" : "QandA"
        },
        "card5" : {
          "answer" : "<ol> står for \"ordered list\" som er et element i en ordnet liste. Det vil si at man da vil få et tall forran elementet. <ul> står for \"unordered list\" og vil fremdeles være et liste element, men istedenfor tall så vil elementet bli representert med en dot/prikk istedenfor.",
          "keywords" : "HTML",
          "question" : "Hva er forskjellen mellom <ul> og <ol>?",
          "type" : "QandA"
        },
        "card6" : {
          "question" : {
            "answer" : "ID'er er unike. Et element kan kun ha én ID tag og enhver side kan kun ha et element med den ID taggen. Klasser derimot, er ikke unike. Du kan bruke samme klasse på flere elementer og gi et element så mange klasser du vil. ",
            "keywords" : "HTML",
            "question" : "Forklar forskjellen mellom bruk av \"id\" og \"class\" i HTML elementer.",
            "type" : "QandA"
          }
        }
      }
    }
  }
}

//På load.
$(document).ready(main);

//Main.
function main(){

	let questionPool = generateQuestionPool();
	generateCards();
	console.log("INFO102: " + questionPool.length + " question cards in total.")

	//Jquery Hendelses håndtering:
	$('.answer').hide();
  $('.button').on('click',function(){
    $(this).next().slideToggle(200)
  });

	//Refresh animasjon.
	$( ".crossRotate" ).click(function() {
	    if (  $( this ).css( "transform" ) == 'none' ){
	        $(this).css("transform","rotate(360deg)");
	    } else {
	        $(this).css("transform","" );
	    }
	});
}

//Returner et Array med alle kort fra et bestemt fag.
function generateQuestionPool(){

	var questionPool = [];
	let course = database.fag.info102.cards;

  for (var key in course){
		questionPool.push(course[key]);
	}

	return questionPool;
}

//Fyller ut alle 5 Study Cards med tilfeldig valgte spørsmål.
function generateCards(){
	drawFiveQuestions(generateQuestionPool());

	let shuffleCounter = 0

	while (card1 === card2 || //Så lenge noen kort er like..
    card1 === card3 ||
    card1 === card4 ||
    card1 === card5 ||
		card2 === card3 ||
		card2 === card4 ||
		card2 === card5 ||
		card3 === card4 ||
		card3 === card5 ||
		card4 === card5){
		drawFiveQuestions(generateQuestionPool()
  ); //..stokker vi om på fordelingen
		 shuffleCounter++;
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

	console.log("Cards generated after " +shuffleCounter+ " shuffles.")
}

//Deler ut tilfeldige spørsmål til alle kort.
function drawFiveQuestions(array){

	card1 = random_item(array);
	card2 = random_item(array);
	card3 = random_item(array);
	card4 = random_item(array);
	card5 = random_item(array);
}

//Deler ut nye spørsmål.
function refreshCards(){
	$('.answer').hide();
	removeCards();
	generateCards();
}


//Returner et tilfeldig element fra en ArrayList.
function random_item(arrayList){
	return arrayList[Math.floor(Math.random()*arrayList.length)];
}

//Tømmer alle kort i document
function removeCards(){
	$("#question1").empty();
	$("#answer1").empty();
	$("#question1").empty();
	$("#answer1").empty();
	$("#question2").empty();
	$("#answer2").empty();
	$("#question3").empty();
	$("#answer3").empty();
	$("#question4").empty();
	$("#answer4").empty();
	$("#question5").empty();
	$("#answer5").empty();
}
