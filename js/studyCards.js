//JSON database
const database = {
  "fag" : {
    "info102" : {
      "cards" : {
        "card1" : {
          "answer" : "Universalmengden er mengden over alle elementene i et spesifikt univers. Komplimentet av universalmengden er den tomme mengden.",
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
          "question" : "Oversett følgende predikat til naturlig språk: &forall;x liker(x,Kari)",
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
          "question" : "Hva er forskjellen på relative og absolutte lenker i &lt;a href&gt; ?",
          "type" : "QandA"
        },
        "card5" : {
          "answer" : "&lt;ol&gt; står for \"ordered list\" som er et element i en ordnet liste. Det vil si at man da vil få et tall forran elementet. &lt;ul&gt; står for \"unordered list\" og vil fremdeles være et liste element, men istedenfor tall så vil elementet bli representert med en dot/prikk istedenfor.",
          "keywords" : "HTML",
          "question" : "Hva er forskjellen mellom &lt;ul&gt; og &lt;ol&gt;?",
          "type" : "QandA"
        },
        "card6" : {
            "answer" : "ID'er er unike. Et element kan kun ha én ID tag og enhver side kan kun ha et element med den ID taggen. Klasser derimot, er ikke unike. Du kan bruke samme klasse på flere elementer og gi et element så mange klasser du vil. ",
            "keywords" : "HTML",
            "question" : "Forklar forskjellen mellom bruk av \"id\" og \"class\" i HTML elementer.",
            "type" : "QandA"
        }
      }
    }
  }
}

//Main.
function main(courseCode){
	generateCards(courseCode);

	//Jquery Hendelses håndtering:
	$('.answer').hide();
  $('.button').on('click',function(){
    $(this).next().slideToggle(200)
  });

	//Refresh animasjon.
  $(".rotate").click(function(){
    $(this).toggleClass("down")  ;
  })
}

//Fyller ut alle 5 Study Cards med tilfeldig valgte spørsmål.
function generateCards(courseCode){

  let questionpool = generateQuestionPool(courseCode)
  let randomlySelectedCards = []

  for(let i = 0;i<5;i++){
    let randomCard = randomItemFrom(questionpool);
    randomlySelectedCards.push(randomCard);
    questionpool = questionpool.filter(el => el !== randomCard); //Forhindrer duplikat spørsmål.
  }

  //Append to DOM:
  $("#question1").append(randomlySelectedCards[0].question).fadeIn();
	$("#answer1").append(randomlySelectedCards[0].answer).fadeIn();
	$("#question2").append(randomlySelectedCards[1].question).fadeIn();
	$("#answer2").append(randomlySelectedCards[1].answer).fadeIn();
	$("#question3").append(randomlySelectedCards[2].question).fadeIn();
  $("#answer3").append(randomlySelectedCards[2].answer).fadeIn();
	$("#question4").append(randomlySelectedCards[3].question).fadeIn();
	$("#answer4").append(randomlySelectedCards[3].answer).fadeIn();
	$("#question5").append(randomlySelectedCards[4].question).fadeIn();
	$("#answer5").append(randomlySelectedCards[4].answer).fadeIn();
}

//Returner et Array med alle kort fra et bestemt fag.
function generateQuestionPool(courseCode){

	var questionPool = [];
	let course = database.fag[courseCode].cards;

  for (var key in course){
		questionPool.push(course[key]);
	}

	return questionPool;
}

//Deler ut nye spørsmål.
function refreshCards(courseCode){
	$('.answer').hide();
	removeCards();
	generateCards(courseCode);
}

//Returner et tilfeldig element fra en ArrayList.
function randomItemFrom(arrayList){
	return arrayList[Math.floor(Math.random()*arrayList.length)];
}

//Tømmer alle kort i document
function removeCards(){
	$("#question1").empty().fadeOut(1);
	$("#answer1").empty().fadeOut(1);
	$("#question1").empty().fadeOut(1);
	$("#answer1").empty().fadeOut(1);
	$("#question2").empty().fadeOut(1);
	$("#answer2").empty().fadeOut(1);
	$("#question3").empty().fadeOut(1);
	$("#answer3").empty().fadeOut(1);
	$("#question4").empty().fadeOut(1);
	$("#answer4").empty().fadeOut(1);
	$("#question5").empty().fadeOut(1);
	$("#answer5").empty().fadeOut(1);
}
