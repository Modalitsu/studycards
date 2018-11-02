//JSON database
const database = {
  fag: {
    info100: {
      cards: {
        card1: {
          answer: "100010",
          question: "Hva er desimaltallet 34, i binærform?",
          type: "QandA",
          keywords: ["info100"]
        },
        card2: {
          answer: "26",
          question: "Hva er binærtallet 11010, i desimalform?",
          type: "QandA",
          keywords: ["info100"]
        },
        card3: {
          answer:
            "UTF-8 (8-bit Unicode Transformation Format) er en binær representasjonsform for tegn i Unicode-tegnsett (en numerert samling av tegn)",
          question: "Hva er UTF, og hva er forholdet mellom UTF og Unicode?",
          type: "QandA",
          keywords: ["info100"]
        },
        card4: {
          answer:
            "Fordi det finnes ulemper og fordeler med alle UTF varianter. F.eks, bruker UTF-32 fire bytes på å representere hvert symbol i motsetning til UTF-8 som bruker mellom 1 og 4 bytes. Fordelen med å bruke en fiksert bit sekvens på 4 bytes er at det blir mye mer effektivt å søke igjennom teksten. Det er derimot veldig lite effektivt med tanke på lagringsplass da hvert symbol tar 4 bytes uansett.",
          question: "Hvorfor finnes det ulike varianter av UTF, som UTF-8 og UTF-32?",
          type: "QandA",
          keywords: ["info100"]
        },
        card5: {
          answer:
            "UTF-8 representerer numererte Unicode-tegn med 1 til 4 byte, og er konstruert slik at de første 128 tegnene (U+0000 til U+007F), samsvarer nøyaktig med US-ASCII-standarden. UTF-8 er dermed bakoverkompatibelt med systemer som støtter ASCII-tekst.",
          question: "Hva er poenget med UTF-8?",
          type: "QandA",
          keywords: ["info100"]
        },
        card6: {
          answer:
            'Fetch/Execute syklusen er en slags "oppgave motor" i PC\'en som konstant går igjennom en syklus av operasjoner, og som utfører en bestemt instruks etter hver iterasjon. Selve syklusen består av 5 spesifikke steg som gjentas i denne rekkefølgen: <br> <li>1. Instruction Fetch - Hente neste instruksjon  <br> <li>2.Instruction Decode - Finn ut hva instruksjonen består av  <br> <li>3.Data Fetch - Samle inn dataen som trengs for å utføre instruksjonen <br> <li>4.Instruction Execute - Utfør selve intruksen  <br><li>5.Result Return - returner og lagre resultatet av instruksjonen',
          question: "Forklar Fetch/Execute syklusen som alltid foregår i en CPU",
          type: "QandA",
          keywords: ["info100"]
        },
        card7: {
          answer: "Central Processing Unit",
          question: "Hva står CPU for?",
          type: "QandA",
          keywords: ["info100"]
        }
      }
    },
    info102: {
      cards: {
        card1: {
          answer:
            "Universalmengden er mengden over alle elementene i et spesifikt univers.             Komplimentet av universalmengden er den tomme mengden.",
          keywords: ["mengder"],
          question: "Hva er en Universalmengde?",
          type: "QandA"
        },
        card2: {
          answer: "En ekvivalensrelasjon har egenskapene refleksivitet, symmetri og transitivitet.",
          keywords: [null, "ekvivalens", "refleksivitet", "symmetri", "transitivitet", "mengder"],
          question: "Hvilke egenskaper kjennetegner en ekvivalensrelasjon?",
          type: "QandA"
        },
        card3: {
          answer: "BxC = {(a,0), (a,1), (b,0), (b,1), (c,0), (c,1)}",
          keywords: ["mengder", "Kartesisk Produkt"],
          question: "Hva er BxC? <br> <h6> Gitt at: B = {a, b, c} og C = {0, 1}</h6>",
          type: "derivation"
        },
        card4: {
          answer: "Ja, for eksempel når alle instanser er på formen (x,x)",
          keywords: ["relasjoner", "mengder", "symmetri", "antisymmetri"],
          question: "Kan en relasjon være både symmetrisk og antisymmetrisk?",
          type: "QandA"
        },
        card5: {
          answer:
            "I logikken kalles en logisk formel for en tautologi når formelen blir sann uansett hvilken sannhetsverdi man tilskriver formelens enkeltutsagn",
          keywords: ["logikk"],
          question: "Hva er en tautologi?",
          type: "QandA"
        },
        card6: {
          answer: "Alle liker Kari.",
          keywords: ["logikk"],
          question: "Oversett følgende predikat til muntlig språk:<br>&forall;x liker(x,Kari)",
          type: "QandA"
        },
        card7: {
          answer:
            'Eksistenskvantoren (noteres med &exist;) er en logisk konstant som kan tolkes som "det finnes..", "det finnes minst én.." eller "for noen.."<br><br> Kvantorer kombineres ofte med predikat for å formalisere enkelte utsagn. <br><br> Eksempel: "noen elsker deg" kan skrives slik: &exist;xelskerDeg(x) gitt at universet inneholder alle levende vesener',
          keywords: ["logikk"],
          question: "Forklar følgende symbol → &exist;",
          type: "QandA"
        }
      }
    },
    info134: {
      cards: {
        card1: {
          answer: "Hyper Text Markup Language",
          keywords: "HTML",
          question: "Hva står HTML for?",
          type: "QandA"
        },
        card10: {
          answer: "Ved hjelp av .appendChild() metoden.",
          keywords: "JavaScript",
          question: "Hvordan legger man til et element som et barn av et annet element?",
          type: "QandA"
        },
        card11: {
          answer:
            "<ul> \t<li> <b>304 Not Modified</b>: indikerer at det ikke er nødvendig å sende en etterspurt ressurs fordi den allerede ligger i nettleserens hurtigminne. </li> \t<li> <b>401 Unauthorized</b>: indikerer at en etterspurt ressurs ikke blir tatt imot fordi det ikke har blitt gitt nødvendige autentiserings informasjon for ressursen som etterspørres.</li> \t<li> <b>404 Not found</b>: Indikerer at serveren rett å slett ikke finner ressursen som etterspørres</li> </ul>",
          keywords: "HTTP requests, JavaScript",
          question: "Hva betyr følgende HTTP-statuskoder: 304, 401 og 404?",
          type: "QandA"
        },
        card2: {
          answer: "JavaScript Object Notation",
          keywords: "JavaScript",
          question: "Hva står JSON for?",
          type: "QandA"
        },
        card3: {
          answer: "Document Object Model",
          keywords: "Javascript",
          question: "Hva står DOM for?",
          type: "QandA"
        },
        card4: {
          answer:
            'En fullstendig lenke er en lenke til et annet nettsted, og vil dermed alltid inneholde hele domenet (inkludert protokollen) til stedet det linker til. F.eks: "http://wikipedia.com/". En relativ lenke derimot, peker kun mot en fil som ligger på samme nettsted som det linkes fra og vil da kun være en adresse eller path. F.eks: "index.html" eller "/media/image.png".',
          keywords: "HTML",
          question: "Hva er forskjellen på relative og absolutte lenker i &lt;a href&gt; ?",
          type: "QandA"
        },
        card5: {
          answer:
            '&lt;ol&gt; står for "ordered list" som er et element i en ordnet liste. Det vil si at man da vil få et tall forran elementet. &lt;ul&gt; står for "unordered list" og vil fremdeles være et liste element, men istedenfor tall så vil elementet bli representert med en dot/prikk istedenfor.',
          keywords: "HTML",
          question: "Hva er forskjellen mellom &lt;ul&gt; og &lt;ol&gt;?",
          type: "QandA"
        },
        card6: {
          answer:
            "Begge blir brukt for å lage referanser til elementer i andre kodesnutter. Id taggen er unik, så et element kan kun ha én id, og én id kan kun bli gitt til et element. En Class tag derimot, kan brukes på flere elementer og et element kan ha flere klasser.",
          keywords: "HTML, CSS, JavaScript",
          question: 'Hva er forskjellen mellom "id" og "class" attributene som kan brukes på HTML elementer?',
          type: "QandA"
        },
        card7: {
          answer:
            "Media Querries er en mengde med CSS attributter og verdier som kun blir anvendt på HTML dokumentet når en forhåndsdefinert betingelse blir oppfyllt. Dette kan brukes til å anvende et spesielt sett med CSS på HTMLen, kun når skjerm størrelsen er foreksempel mindre en 700px slik at nettsiden tilpasses mobiler. ",
          keywords: "CSS, HTML",
          question: "Hva er Media Querries, og hva blir de brukt til?",
          type: "QandA"
        },
        card8: {
          answer:
            "viewport meta taggen blir brukt for å kontrollere hvordan et HTML dokument skal fremvises, med tanke på skalering og dimensjoner, på brukerens skjerm. (Ved å sette content='width=device-width' vil f.eks nettsidens dimensjoner tilpasse brukerens enhet. Dette kan være lurt å gjør siden det finnes så mange forskjellige skjermstørrelse på forskjellige enheter.",
          keywords: "CSS, HTML",
          question: "Hva brukes viewport meta-taggen til?",
          type: "QandA"
        },
        card9: {
          answer: 'document.createElement("p")',
          keywords: "JavaScript",
          question: "Hvilken metode på 'document' objektet må vi kalle for å opprette et avsnitt-element &lt;p&gt;?",
          type: "QandA"
        }
      }
    }
  }
};

//Main.
function main(courseCode) {
  generateCards(courseCode);

  //Jquery Hendelses håndtering:
  $(".answer").hide();
  $(".button").on("click", function() {
    $(this)
      .next()
      .slideToggle(200);
  });

  //Refresh animasjon.
  $(".rotate").click(function() {
    $(this).toggleClass("down");
  });
}

//Fyller ut alle 5 Study Cards med tilfeldig valgte spørsmål.
function generateCards(courseCode) {
  let questionpool = generateQuestionPool(courseCode);
  let randomlySelectedCards = [];

  for (let i = 0; i < 5; i++) {
    let randomCard = randomItemFrom(questionpool);
    randomlySelectedCards.push(randomCard);
    questionpool = questionpool.filter(el => el !== randomCard); //Forhindrer duplikater.
  }

  //Append to DOM:
  $("#question1")
    .append(randomlySelectedCards[0].question)
    .fadeIn(200);
  $("#answer1")
    .append(randomlySelectedCards[0].answer)
    .fadeIn(200);
  $("#question2")
    .append(randomlySelectedCards[1].question)
    .fadeIn(200);
  $("#answer2")
    .append(randomlySelectedCards[1].answer)
    .fadeIn(200);
  $("#question3")
    .append(randomlySelectedCards[2].question)
    .fadeIn(200);
  $("#answer3")
    .append(randomlySelectedCards[2].answer)
    .fadeIn(200);
  $("#question4")
    .append(randomlySelectedCards[3].question)
    .fadeIn(200);
  $("#answer4")
    .append(randomlySelectedCards[3].answer)
    .fadeIn(200);
  $("#question5")
    .append(randomlySelectedCards[4].question)
    .fadeIn(200);
  $("#answer5")
    .append(randomlySelectedCards[4].answer)
    .fadeIn(200);
}

//Returner et Array med alle kort fra et bestemt fag.
function generateQuestionPool(courseCode) {
  var questionPool = [];
  let course = database.fag[courseCode].cards;

  for (var key in course) {
    questionPool.push(course[key]);
  }

  return questionPool;
}

//Deler ut nye spørsmål.
function refreshCards(courseCode) {
  $(".answer").hide();
  removeCards();
  generateCards(courseCode);
}

//Returner et tilfeldig element fra en ArrayList.
function randomItemFrom(arrayList) {
  return arrayList[Math.floor(Math.random() * arrayList.length + 1)];
}

//Tømmer alle kort i document
function removeCards() {
  $("#question1")
    .empty()
    .fadeOut(1);
  $("#answer1")
    .empty()
    .fadeOut(1);
  $("#question1")
    .empty()
    .fadeOut(1);
  $("#answer1")
    .empty()
    .fadeOut(1);
  $("#question2")
    .empty()
    .fadeOut(1);
  $("#answer2")
    .empty()
    .fadeOut(1);
  $("#question3")
    .empty()
    .fadeOut(1);
  $("#answer3")
    .empty()
    .fadeOut(1);
  $("#question4")
    .empty()
    .fadeOut(1);
  $("#answer4")
    .empty()
    .fadeOut(1);
  $("#question5")
    .empty()
    .fadeOut(1);
  $("#answer5")
    .empty()
    .fadeOut(1);
}
