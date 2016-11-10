var quiz = {
  "allQuestions":[{

  "question":{
    "questionIdx": 1,
    "question": "Wann wurde der Verein - damals noch FV Werder Bremen - gegründet?",
    "options": [{
      "option": "01.Oktober 1893"
      },{
      "option": "04.Februar 1899"
      },{
      "option": "07.Juli 1907"
      },{
      "option": "01.Januar 1920"
    }],
    "answer": "2"
  }
},
{

  "question":{
    "questionIdx": 2,
    "question": "Werders Rekordtorschütze Claudio Pizarro ist ein absoluter Pferde-Narr. Mit seinem früheren Bayern-Mitspieler Thomas Müller hat er ein gemeinsames Pferd. Wie heißt es?",
    "options": [{
      "option": "Don Jupp"
      },{
      "option": "Hoeneß"
      },{
      "option": "Mia san Triple"
      },{
      "option": "Hattrick"
    }],
    "answer": "3"
  }
},
{

  "question":{
    "questionIdx": 3,
    "question": "Arnd Zeigler ist einer der größten Fußball-Nerds der Republik, regiert 'Zeiglerswunderbare Welt des Fußball' in Radio und Fernsehen und ist außerdem Stadionsprecher im Weserstadion. Wie aber heißt sein Co-Stadionsprecher?",
    "options": [{
      "option": "Manfred 'Wolle' Wollenhaupt"
      },{
      "option": "Christian 'Stolli' Stoll"
      },{
      "option": "Andres 'Action-Andy' Schneider"
      },{
      "option": "Norbert 'Nobbi' Germeshausen"
    }],
    "answer": "2"
  }
},
{

  "question":{
    "questionIdx": 4,
    "question": "Wie heißt ein langjähriges Maskottchen des SV Werder?",
    "options": [{
      "option": "Pico (Heidschnuckenbock)"
      },{
      "option": "Werner Bremen (Esel)"
      },{
      "option": "Roland (Fischreiher)"
      },{
      "option": "König Otto (Comic-Figur)"
    }],
    "answer": "1"
  }
},
{

  "question":{
    "questionIdx": 5,
    "question": " Wie lautet ein Spitzname von Werders Cheftrainer Viktor Skripnik?",
    "options": [{
      "option": "Der Beckham der Ukraine"
      },{
      "option": "Ostblock-Okocha"
      },{
      "option": "Der Henker vom Dnjepr"
      },{
      "option": "Die Axt"
    }],
    "answer": "1"
  }
},
{

  "question":{
    "questionIdx": 6,
    "question": "Wie lauten die Vornamen der drei Bundesliga-Rekordspieler des SV Werder?",
    "options": [{
      "option": "Torsten, Dieter, Dieter"
      },{
      "option": "Dieter, Horst-Dieter, Dieter"
      },{
      "option": "Dieter, Wynton, Dieter"
      },{
      "option": "Dieter, Horst-Dieter, Horst"
    }],
    "answer": "2"
  }
},
{
  "question":{
    "questionIdx": 7,
    "question": "Wann wurde Werder Bremen zum ersten Mal Deutscher Meister?",
    "options": [{
      "option": "1931"
      },{
      "option": "1965"
      },{
      "option": "1988"
      },{
      "option": "2004"
    }],
    "answer": "2"
  }
},
{

    "question":{
    "questionIdx": 8,
    "question": "2013 wurde Werder Bremen Deutscher Meister. In welcher Sportart?",
    "options": [{
      "option": "Handball"
      },{
      "option": "Basketball"
      },{
      "option": "Tischtennis"
      },{
      "option": "Feldhockey"
    }],
    "answer": "3"
  }
},
{
  "question":{

    "questionIdx": 9,
    "question": "Welches dieser Zitate wird nicht Werders „Ostfriesen-Alemao“ Dieter Eilts zugeschrieben?",
    "options": [{
      "option": "„Das interessiert mich wie eine geplatzte Currywurst im ostfriesischen Wattenmeer.“"
      },{
      "option": "„Wir dürfen jetzt nicht den Sand in den Kopf stecken.“"
      },{
      "option": "„Wenn meine Oma ein Bus wäre, dann könnte sie hupen.“"
      },{
      "option": "„Moin moin, Gascoigne.“"
    }],
    "answer": "2"
  }
},
{

    "question":{
    "questionIdx": 10,
    "question": "Claudio Pizarro hat in dieser Saison Marco Bode als Werders Bundesliga-Rekordtorschütze abgelöst. Gegen wen und wie erzielte er sein erstes Bundesliga-Tor?",
    "options": [{
      "option": "Borussia Mönchengladbach, Fallrückzieher"
      },{
      "option": "1. FC Kaiserslautern, Kopfball"
      },{
      "option": "Alemannia Aachen, Elfmeter"
      },{
      "option": "1. FC Köln, Hackentrick"
    }],
    "answer": "2"
  }
}]

};


function antwortPruefen(ele, answer){
//	var $ele = $(ele);
  $ele= $(ele);                              // cast zu jQuery
  antwortId = $(ele).attr("data-antwortId");

  console.log($ele);
  console.log(antwortId);
  console.log(answer);

  if(answer === antwortId){
//    $("#rof").html("Richtig");
//    setTimeout(function() {$ele.css("background-color", "#40FF00")}, 2000);
//  $ele.css("background-color", "#FFFFFF");
$ele.addClass("richtig"); //

  } else {
//    $("#rof").html("falsch");

//    setTimeout(function() {$ele.css("background-color", "#FF0000")}, 2000);
//    $ele.css("background-color", "#FFFFFF");
$ele.addClass("falsch"); //


  }



}

function count(){
  i--;
    //  document.getElementById("text").innerHTML = i;
  console.log(i);
  if(i===5){

    aktuelleFrage++;
          clearInterval(timer);
          if(aktuelleFrage<=9){
         neueFrage( quiz.allQuestions[aktuelleFrage].question, aktuelleFrage );
          }
          else{
              clearInterval(timer);
              $("#question").html("Quizrunde ist vorbei" + test++ );
          }
      }


}
function neueFrage( data, aktuelleFrage ){


  $("#antwort1").removeClass("richtig", "falsch");
  $("#antwort2").removeClass("richtig", "falsch");
  $("#antwort3").removeClass("richtig", "falsch");
  $("#antwort4").removeClass("richtig", "falsch");

  $("#frage").html(data.question);
  $("#antwort1").html(data.options[0].option);    // ändert per Id den Inhalt
  $("#antwort2").html(data.options[1].option);    //$ signalisiert das jQuery Objekt, # ersetzt getElementbyId, .html signalisiert html Objekt(Inhalt)
  $("#antwort3").html(data.options[2].option);
  $("#antwort4").html(data.options[3].option);

  clearInterval(timer);
  i=10;
  timer = setInterval("count()", 1000);

      $("#question").html("Frage: " + (aktuelleFrage+1) +"/10");
  }

  function buttonKlick(){
  $("#antworten").click(function(e){ //click-Funktion außerhalb von neueFrage schreiben,
  //	var cButton = e.target;
    antwortPruefen(e.target, quiz.allQuestions[aktuelleFrage].question.answer);    // Antwort


          aktuelleFrage++;
          console.log(aktuelleFrage);


          if(aktuelleFrage<=9){
               neueFrage( quiz.allQuestions[aktuelleFrage].question, aktuelleFrage );

          }
          else{
              //window.location="http://www.google.de";
              //document.getElementById("text").innerHTML = "Jetzt auf Endscreen leiten";
              clearInterval(timer);
              $("#question").html("Quizrunde ist vorbei" + test++ );


          }
  });
}


  var test=0;
  var $ele;
var antwortId;
  var timer= null;
var i=10;

  var data = {};
  var aktuelleFrage = 0;
  data = quiz.allQuestions[0].question;

  buttonKlick();
   neueFrage( data, aktuelleFrage );
