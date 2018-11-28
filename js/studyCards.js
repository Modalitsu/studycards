//JSON database
const database = {
  fag: {
    info100: {
      cards: {
        card1: {
          answer: "100010",
          question: "Hva er desimaltallet 34, i binærform?",
          type: "QandA",
          keywords: ["info100", "HØST2015 - Oppgave 1.1"]
        },
        card2: {
          answer: "26",
          question: "Hva er binærtallet 11010, i desimalform?",
          type: "QandA",
          keywords: ["info100", "HØST2015 - Oppgave 1.2"]
        },
        card3: {
          answer:
            "UTF (Unicode Transformation Format) er en binær representasjonsform for tegn i Unicode-tegnsett (en numerert samling av tegn). UTF forteller oss hvilken, og hvor mange bytes man benytter seg av når man ønsker å representere et eller annet tegn",
          question: "Hva er UTF, og hva er forholdet mellom UTF og Unicode?",
          type: "QandA",
          keywords: ["info100", "HØST2015 - Oppgave 1.3"]
        },
        card4: {
          answer:
            "Fordi det finnes ulemper og fordeler med alle UTF varianter. F.eks, bruker UTF-32 en fiksert sekvens på fire bytes på å representere hvert symbol i motsetning til UTF-8 som kun bruker mellom 1 og 4 bytes. Fordelen med å bruke en fiksert bit sekvens er at det blir mye mer effektivt å søke igjennom teksten. Det er derimot veldig lite effektivt med tanke på lagringsplass da hvert symbol tar 4 bytes uansett hvilken symbol det representerer.",
          question: "Hvorfor finnes det ulike varianter av UTF, som UTF-8 og UTF-32?",
          type: "QandA",
          keywords: ["info100", "HØST2015 - Oppgave 1.4"]
        },
        card5: {
          answer:
            "UTF-8 representerer numererte Unicode-tegn med 1 til 4 byte, og er konstruert slik at de første 128 tegnene (U+0000 til U+007F), samsvarer nøyaktig med US-ASCII-standarden. UTF-8 er dermed bakoverkompatibelt med systemer som støtter ASCII-tekst.",
          question: "Hva er poenget med UTF-8?",
          type: "QandA",
          keywords: ["info100", "HØST2015 - Oppgave 1.5"]
        },
        card6: {
          answer:
            'Fetch/Execute syklusen er en slags "oppgave motor" i PC\'en som konstant går igjennom en syklus av operasjoner, og som utfører en bestemt instruks etter hver iterasjon. Selve syklusen består av 5 spesifikke steg som gjentas i denne rekkefølgen: <br> <li>1. Instruction Fetch - Hente neste instruksjon  <br> <li>2.Instruction Decode - Finn ut hva instruksjonen består av  <br> <li>3.Data Fetch - Samle inn dataen som trengs for å utføre instruksjonen <br> <li>4.Instruction Execute - Utfør selve intruksen  <br><li>5.Result Return - returner og lagre resultatet av instruksjonen',
          question: "Forklar alle trinnene i Fetch/Execute syklusen i en CPU",
          type: "QandA",
          keywords: ["info100", "HØST2015 - Oppgave 2.5"]
        },
        card7: {
          answer: "Central Processing Unit",
          question: "Hva står CPU for?",
          type: "QandA",
          keywords: ["info100", "HØST2015 - Oppgave 2.2"]
        },
        card8: {
          answer: "TCP/IP Står for <br> <li> <b>TCP:</b> Transmission Control Protocol <br> <li> <b>IP:</b> Internet Protocol",
          question: "Hva står TCP og IP for når vi snakker om datanettverk?",
          type: "QandA",
          keywords: ["info100", "HØST2014 - Oppgave 3.1"]
        },
        card9: {
          answer:
            "TCP (Transmission Control Protocol) tilbyr en garanti om at dataen/bytes som blir motatt av en agent fra en annen, er identiske til de som ble sendt og at de blir motatt i riktig rekkefølge. IP protokollen sørger å faktisk få levert disse til riktig mottaker.",
          question: "Hva er det TCP ønsker å tilby, som ikke tilbys av IP?",
          type: "QandA",
          keywords: ["info100", "HØST2014 - Opggave 3.3"]
        },
        card10: {
          answer:
            "Livssyklus modellen er en av nøkkelkonseptene i systemutvikling. Et systems livssyklus inneholder generelt en serie av utviklingssteg, regulert av forskjellige administrative valg som bestemmer når systemet er utviklet nok til å kunne forlate et steg, og gå inn i et annet. Eksempeler på ulike livssyklus modeller kan f.eks være fossefalls-modellen eller den agile-modellen.",
          question: "Hva er en livssyklus model i systemutviklings sammenheng?",
          type: "QandA",
          keywords: ["info100", "HØST2014 - Oppgave 2.4"]
        },
        card11: {
          answer:
            "En heuristisk evaluering er en analytisk metode der en eller flere eksperter sammenligner et produkt's design opp mot en predefinert liste med design-prinsipper (heurestikker). Denne måten å evaluere interaksjonsutformingen til en nettside/artefakt på er som regel mye billigere og raskere en å bruke massevis av empirisk data for å bestemme forskjellige design valg på.",
          question: "Hva er en heuristisk evaluering i forbindelse med interaksjonsutforming?",
          type: "QandA",
          keywords: ["info100", "HØST2014 - Oppgave 5.2"]
        },
        card12: {
          answer:
            "<li><b>Brubkarhetsprøver/Usability testing:</b> <br> Innebærer empirisk (målbare) data som noteres ned under kontrollerte situasjoner, helst med virkelige brukere. Et tilfelle kan f.eks være å måle hvor lang tid eller hvor mange klikk en bruker trenger for å utføre en essensiel oppgave i en applikasjon. Dette er en mye dyrere og tregere evaluerings metode å ta i bruk en én analytisk evaluering, men kan ofte gi veldig konkrete svar på hva som fungere og ikke fungerer i et system.",
          question: "Hva innebærer Usability testing som evalueringsmåte i interaksjonsutforming?",
          type: "QandA",
          keywords: ["info100", "HØST2014 - Oppgave 5.4"]
        },
        card13: {
          answer:
            "<b>CRM = Customer-Relationship Management.</b> Et CRM system forsøker å forbedrede forholdet mellom en forretning og dets kunder, ofte ved hjelp av utfyllende data analyser av kundens kjøpsmønster og ved å tilby en eller annen form for rabatt eller gode for å få kunden til å komme tibake til bedriften.",
          question: "Hva står CRM for i forbindelse med informasjonsystemer?",
          type: "QandA",
          keywords: ["info100", "HØST2015 - Oppgave 4.4"]
        },
        card14: {
          answer:
            "Et informasjons system er noe som driver med innsamling, lagring, bearbeiding, overføring og presentasjon av informasjon. For eksempel: Facebook.com, en telefonkatalog, snapchat osv. ",
          question: "Hva er et informasjons system?",
          type: "QandA",
          keywords: ["info100", "HØST2015 - Oppgave 4.1"]
        },
        card15: {
          answer:
            "Sekundærlager brukes som persistente lager for data. I motsetning til primærminne så slettes ikke dataen som lagres der når PCen blir skrudd av. Eksempler på ulike sekundærlager: <br> <li>Magnetisk/SSD Harddisk <li>USB Minnepenn <li>CD/DVD Plater",
          question: "Hva er et sekundærlager? Gi eksempler på ulike typer.",
          type: "QandA",
          keywords: ["info100", "HØST2016 - Oppgave 1.1"]
        },
        card16: {
          answer:
            "En cache er generelt sett et lager hvor data som blir ofte brukt lagres slik at det kan hentes ut igjen raskere en vanlig.",
          question: "Hva er et hurtiglager/cache?",
          type: "QandA",
          keywords: ["info100", "HØST2015 - Oppgave 1.3"]
        },
        card17: {
          answer:
            "Multipurpose Internet Mail Extensions (MIME) er en internett standard som utvider email formatet i et forsøk på å gjøre e-mails rikere i innhold. MIME gjør dette ved å gi støtte til ting som video, lyd, tegn som er utenfor ASCII enkoding osv.",
          question: "Hva står MIME for i internettsammenheng, og hva brukes det til??",
          type: "QandA",
          keywords: ["info100", "HØST2015 - Oppgave 2.4"]
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
  pick5Cards(courseCode);

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
function pick5Cards(courseCode) {
  let questionpool = generateQuestionPool(courseCode);
  let cardsToRender = [];

  for (let i = 0; i < 5; i++) {
    let randomCard = randomItemFrom(questionpool);
    cardsToRender.push(randomCard);
    questionpool = questionpool.filter(el => el !== randomCard); //Forhindrer duplikater.
  }

  renderCards(cardsToRender);
}

//Konstruer 5 kort på skjermen
function renderCards(cardsToRender) {
  //Render the cards on the page:
  $("#question1")
    .append(cardsToRender[0].question)
    .fadeIn(200);
  $("#answer1")
    .append(cardsToRender[0].answer)
    .fadeIn(200);
  $("#meta1")
    .append(cardsToRender[0].keywords[1])
    .fadeIn(200);
  $("#question2")
    .append(cardsToRender[1].question)
    .fadeIn(200);
  $("#answer2")
    .append(cardsToRender[1].answer)
    .fadeIn(200);
  $("#meta2")
    .append(cardsToRender[1].keywords[1])
    .fadeIn(200);
  $("#question3")
    .append(cardsToRender[2].question)
    .fadeIn(200);
  $("#answer3")
    .append(cardsToRender[2].answer)
    .fadeIn(200);
  $("#meta3")
    .append(cardsToRender[2].keywords[1])
    .fadeIn(200);
  $("#question4")
    .append(cardsToRender[3].question)
    .fadeIn(200);
  $("#answer4")
    .append(cardsToRender[3].answer)
    .fadeIn(200);
  $("#meta4")
    .append(cardsToRender[0].keywords[1])
    .fadeIn(200);
  $("#question5")
    .append(cardsToRender[4].question)
    .fadeIn(200);
  $("#answer5")
    .append(cardsToRender[4].answer)
    .fadeIn(200);
  $("#meta5")
    .append(cardsToRender[4].keywords[1])
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
  pick5Cards(courseCode);
}

//Returner et tilfeldig element fra en ArrayList.
function randomItemFrom(arrayList) {
  return arrayList[Math.floor(Math.random() * arrayList.length)];
}

//Tømmer alle kort i document
function removeCards() {
  $("#question1")
    .empty()
    .fadeOut(1);
  $("#answer1")
    .empty()
    .fadeOut(1);
  $("#meta1")
    .empty()
    .fadeOut(1);
  $("#question2")
    .empty()
    .fadeOut(1);
  $("#answer2")
    .empty()
    .fadeOut(1);
  $("#meta2")
    .empty()
    .fadeOut(1);
  $("#question3")
    .empty()
    .fadeOut(1);
  $("#answer3")
    .empty()
    .fadeOut(1);
  $("#meta3")
    .empty()
    .fadeOut(1);
  $("#question4")
    .empty()
    .fadeOut(1);
  $("#answer4")
    .empty()
    .fadeOut(1);
  $("#meta4")
    .empty()
    .fadeOut(1);
  $("#question5")
    .empty()
    .fadeOut(1);
  $("#answer5")
    .empty()
    .fadeOut(1);
  $("#meta5")
    .empty()
    .fadeOut(1);
}

//Fisher-Yates Array Shuffle.
function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
