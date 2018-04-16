(function(){
	const myQuestions = [
		{
			question: "Almacenar y compartir contenidos a través de la sincronización de computadoras y/o dispositivos móviles.",
			answers: {
				a: "Prezi",
				b: "Gmail",
				c: "Lync",
				d: "Dropbox",
				e: "Wunderlist"
			},
			correctAnswer: "d"
		},
		{
			question: "Le permitirá tener un mayor control de las tareas que tiene asignadas, además de catalogarlas por fecha y estar al día con sus actividades.",
			answers: {
				a: "Prezi",
				b: "Gmail",
				c: "Lync",
				d: "Dropbox",
				e: "Wunderlist"
			},
			correctAnswer: "e"
		},
		{
			question: "Elabora presentaciones dinámicas.",
			answers: {
				a: "Prezi",
				b: "Gmail",
				c: "Lync",
				d: "Dropbox",
				e: "Wunderlist"
			},
			correctAnswer: "a"
		},
		{
			question: "Le permite sincronizar sus cuentas de correo electrónico institucionales con las comerciales.",
			answers: {
				a: "Prezi",
				b: "Gmail",
				c: "Lync",
				d: "Dropbox",
				e: "Wunderlist"
			},
			correctAnswer: "b"
		},
		{
			question: "Se sincroniza con Outlook y permite conferencias de audio y video y reuniones en línea con uso compartido del escritorio.",
			answers: {
				a: "Prezi",
				b: "Gmail",
				c: "Lync",
				d: "Dropbox",
				e: "Wunderlist"
			},
			correctAnswer: "c"
		}
	];
	
	function Shuffle(o) {
		for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
	};
	
	function buildQuiz() {
	    // we'll need a place to store the HTML output
	    const output = [];
	
	    // for each question...
	    myQuestions.forEach((currentQuestion, questionNumber) => {
	      
		// we'll want to store the list of answer choices
		const answers = [];
		
		
		// and for each available answer...
		for (letter in currentQuestion.answers) {
			
			// ...add an HTML radio button
			answers.push(
			    `<label class="${currentQuestion.answers[letter]} item">
					<input type="radio" name="question${questionNumber}" value="${letter}">
                ${currentQuestion.answers[letter]}
				</label>`   
		);
		
	}
	
	Shuffle(answers);
		
	

      // add this question and its answers to the output
      output.push(
        `<div class="slide app">
        	<h4>Definición:</h4>
           <h4 class="question">${currentQuestion.question}</h4>
           <div id="app-list" class="answers">
	           ${answers.join("")}
           </div>
         </div>`
      );
      
    });
    
    
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }
  
  
  
	//show results function
	function showResults() {
	    // gather answer containers from our quiz
	    const answerContainers = quizContainer.querySelectorAll(".answers");
	    
	
	    // keep track of user's answers
	    let numCorrect = 0;

	    // for each question...
	    myQuestions.forEach((currentQuestion, questionNumber) => {
			// find selected answer
			const answerContainer = answerContainers[questionNumber];
			const selector = `input[name=question${questionNumber}]:checked`;
			const userAnswer = (answerContainer.querySelector(selector) || {}).value;
			
			// if answer is correct
			if (userAnswer === currentQuestion.correctAnswer) {
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[questionNumber].style.borderColor = "#1ccfc9";
			} else {
				// if answer is wrong or blank
				// color the answers red
				answerContainers[questionNumber].style.borderColor = "tomato";
			}
	    });

    // show number of correct answers out of total
    resultsContainer.style.display = "block";
    resultsContainer.innerHTML = `<div class="destacado"><p class="puntos">${numCorrect} opciones correctas de ${myQuestions.length}.</p>
    <p>Prezi le facilita la elaboración de presentaciones dinámicas.</p>

	<p>Gmail le permite sincronizar sus cuentas de correo electrónico institucionales con las comerciales.</p>
	
	<p>Lynk es una herramienta que se sincroniza con Outlook y le permite realizar conferencias de audio, video y reuniones en línea con uso compartido del escritorio.</p>
	
	<p>Dropbox le da la posibilidad de almacenar y compartir contenidos a través de la sincronización de computadoras y/o dispositivos móviles.</p>
	
	<p>Wunderlist le da un mayor control de las tareas que tiene asignadas, además de catalogarlas por fecha y estar al día con sus actividades.</p>

    </div>`;

    
    resetBtn.style.display = "block";
    
    
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

	function showNextSlide() {
		showSlide(currentSlide + 1);
	}
	
	function showPreviousSlide() {
		showSlide(currentSlide - 1);
		resultsContainer.style.display = "none";
		resetBtn.style.display = "none";
	}
	
	function restart() {
		showSlide(0);
		numCorrect = 0;
		resultsContainer.style.display = "none";
		resetBtn.style.display = "none";
		
		var allAnswers = document.getElementsByClassName("answers");
		//allAnswers.style.color = "#333";
		
		//disable radio button
		var gatos = $('input[type="radio"]');
		for (var i = 0; i< gatos.length;  i++){
		    gatos[i].checked = false;
		}
		
	}
	
	const quizContainer = document.getElementById("quiz");
	const resultsContainer = document.getElementById("results");
	const submitButton = document.getElementById("submit");
	
	// display quiz right away
	buildQuiz();
	
	const previousButton = document.getElementById("previous");
	const nextButton = document.getElementById("next");
	const slides = document.querySelectorAll(".slide");
	let currentSlide = 0;
	
	showSlide(0);
	
	// on submit, show results
	submitButton.addEventListener("click", showResults);
	previousButton.addEventListener("click", showPreviousSlide);
	nextButton.addEventListener("click", showNextSlide);
  
	// restart the quiz
	const resetBtn = document.getElementById("reset");
	resetBtn.addEventListener("click", restart);
	

	//resize quiz height
	$(window).resize(function() {
	    $('.quiz-container').height($('.slide').height() + 80);
	});
	
	$(window).trigger('resize');
	
	
  
  
  
	
})();