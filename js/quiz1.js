(function(){
	const myQuestions = [
		{
			question: "1. Cree en el teletrabajo como una modalidad laboral.",
			answers: {
				a: "Sí",
				b: "No"
			},
			correctAnswer: "a"
		},
		{
			question: "2. Su estilo de supervisión es orientado a resultados.",
			answers: {
				a: "Sí",
				b: "No"
			},
			correctAnswer: "a"
		},
		{
			question: "3. Aplica estándares de calidad en los resultados del trabajo de sus colaboradores.",
			answers: {
				a: "Sí",
				b: "No"
			},
			correctAnswer: "a"
		},
		{
			question: "4. Utiliza las TIC para su trabajo y comunicación con sus colaboradores.",
			answers: {
				a: "Sí",
				b: "No"
			},
			correctAnswer: "a"
		},
		{
			question: "5. Garantiza la protección de datos institucionales.",
			answers: {
				a: "Sí",
				b: "No"
			},
			correctAnswer: "a"
		},
		{
			question: "6. Tiene una comunicación abierta y fluida con sus colaboradores.",
			answers: {
				a: "Sí",
				b: "No"
			},
			correctAnswer: "a"
		},
		{
			question: "7. Proporciona realimentación a sus colaboradores del quehacer institucional y del accionar del departamento.",
			answers: {
				a: "Sí",
				b: "No"
			},
			correctAnswer: "a"
		},
		{
			question: "8. Tiene habilidad para mantener un ambiente laboral de equipo y colaboración.",
			answers: {
				a: "Sí",
				b: "No"
			},
			correctAnswer: "a"
		},
		{
			question: "9. Confía usted en sus colaboradores.",
			answers: {
				a: "Sí",
				b: "No"
			},
			correctAnswer: "a"
		},
		{
			question: "10. Respeta la vida privada de sus colaboradores.",
			answers: {
				a: "Sí",
				b: "No"
			},
			correctAnswer: "a"
		}
	];
	
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
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
                ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <h4 class="question">${currentQuestion.question}</h4>
           <div class="answers">${answers.join("")}</div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

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
        //answerContainers[questionNumber].style.color = "#1ccfc9";
      } else {
        // if answer is wrong or blank
        // color the answers red
        //answerContainers[questionNumber].style.color = "tomato";
      }
    });

    // show number of correct answers out of total
    if (numCorrect >= 6) {
	    resultsContainer.style.display = "block";
	    resultsContainer.innerHTML = `<div class="destacado"><p><strong>Puntos: ${numCorrect} de ${myQuestions.length}.</p><p>Si obtuvo 6 puntos o más, usted es un candidato idóneo para liderar teletrabajadores.</p></div>`;
    } else if (numCorrect <= 5) {
	    resultsContainer.style.display = "block";
	    resultsContainer.innerHTML = `<div class="destacado"><p><strong>Puntos: ${numCorrect} de ${myQuestions.length}</strong></p><p>Si obtuvo 5 puntos o menos, tal vez sea mejor que espere y se dé un tiempo para conocer y escuchar más sobre las experiencias de otros colegas jefes y compañeros teletrabajadores para que considere nuevamente incorporarse a este proceso.</p></div>`;
	    
    }
    
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