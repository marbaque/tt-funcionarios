(function() {
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
            <input id="gato" type="radio" name="question${questionNumber}" value="${letter}">
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="qwrap">
	        <div class="question"> ${currentQuestion.question} </div>
	        <div class="answers"> ${answers.join("")} </div>
	        <div class="solution">${currentQuestion.solution}</div>
        </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

	function showResults() {
	    // gather answer containers from our quiz
	    const answerContainers = quizContainer.querySelectorAll(".answers");
	    const solutions = quizContainer.querySelectorAll(".solution");

	    // keep track of user's answers
	    let numCorrect = 0;
	
	    // for each question...
	    myQuestions.forEach((currentQuestion, questionNumber) => {
			
			// find selected answer
			const answerContainer = answerContainers[questionNumber];
			const selector = `input[name=question${questionNumber}]:checked`;
			const userAnswer = (answerContainer.querySelector(selector) || {}).value;
						
			//show solution
			solutions[questionNumber].style.display = "block";
			
			// if answer is correct
			if (userAnswer === currentQuestion.correctAnswer) {
				// add to the number of correct answers
				numCorrect++;
				
				// color the answers green
				answerContainers[questionNumber].style.color = "#1ccfc9";
				solutions[questionNumber].style.background = "#1ccfc9";
			} else {
				// if answer is wrong or blank
				// color the answers red
				answerContainers[questionNumber].style.color = "tomato";
				solutions[questionNumber].style.background = "tomato";
			}
			

	    });

		// show number of correct answers out of total
		resultsContainer.innerHTML = `<div>${numCorrect} puntos de ${myQuestions.length}</div>`;
		
		//show reset button and hide verify button
		resetButton.style.display = "block";
		submitButton.style.display = "none";
		resultsContainer.style.display = "block";
		
		//disable radio button
		for (var i = 0; i< gatos.length;  i++){
		    gatos[i].disabled = true;
		}
		
		

	  }

  const quizContainer = document.getElementById("quiz");
  
  const submitButton = document.getElementById("submit");
  const myQuestions = [
		{
			question: "1. Trabajar 10 horas seguidas para al día siguiente dormir hasta mediodía.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "b",
			solution: "Esta actividad no va a contribuir con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "2. Realizar micropausas mientras se trabaja.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "b",
			solution: "Esta actividad no va a contribuir con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "3. Solicitar a los hijos o algún familiar ayuda para revisar exámenes.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "b",
			solution: "Esta actividad no va a contribuir con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "4. Alimentarse con comida preparada en su propia casa.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "a",
			solution: "Esta actividad si contribuye con tu salud, tu calidad de vida o tu ambiente familiar."		
		},
		{
			question: "5. Trabajar ocho horas máximo.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "a",
			solution: "Esta actividad si contribuye con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "6. Mantenerse en concentración y desactivar chat, apagar el teléfono y evitar cualquier distracción todos los días y durante todo el horario laboral.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "b",
			solution: "Esta actividad no va a contribuir con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "7. Realizar ejercicios.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "a",
			solution: "Esta actividad si contribuye con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "8. Llevar todos los cursos virtuales que encuentre en la red, sin importar que le consuman hasta las horas de sueño, con tal de estar actualizado en temas laborales y profesionales.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "b",
			solution: "Esta actividad no va a contribuir con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "9. Realizar exámenes de sangre al menos una vez al año.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "a",
			solution: "Esta actividad si contribuye con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "10. Mantener una diferenciación entre los asuntos de la familia y la oficina.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "a",
			solution: "Esta actividad si contribuye con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "11. Automedicarse en caso de enfermedad.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "b",
			solution: "Esta actividad no va a contribuir con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "12. Buscar actualizaciones pertinentes sobre la formación profesional y accionar laboral.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "a",
			solution: "Esta actividad si contribuye con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "13. Pedir servicio exprés a cualquier comida rápida para evitar cocinar.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "b",
			solution: "Esta actividad no va a contribuir con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "14. Mantener una comunicación constante con amigos, familiares y compañeros de trabajo utilizando el teléfono, el chat o cualquier otra herramienta que lo permita.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "a",
			solution: "Esta actividad si contribuye con tu salud, tu calidad de vida o tu ambiente familiar."
		},
		{
			question: "15. Dormir toda la mañana y trabajar en la tarde-noche.",
			answers: {
				a: "Sí contribuye a mantener tu buen estado de salud",
				b: "No contribuye a mantener tu buen estado de salud"
			},
			correctAnswer: "b",
			solution: "Esta actividad no va a contribuir con tu salud, tu calidad de vida o tu ambiente familiar."
		}
	];

	// display quiz right away
	buildQuiz();
	
	// get the results div
	const resultsContainer = document.getElementById("results");
	var gatos = $('input[type="radio"]');
  
	// on submit, show results
	submitButton.addEventListener("click", showResults);
	
	// restart the quiz
	const resetButton = document.getElementById("reset");
	
	
	
	//reset the activity
	resetButton.addEventListener("click", restart);
	
	function restart() {
		// gather answer containers from our quiz
	    const answerContainers = quizContainer.querySelectorAll(".answers");
	    const solutions = quizContainer.querySelectorAll(".solution");
	
	    // for each question...
	    myQuestions.forEach((currentQuestion, questionNumber) => {
			
			// find selected answer
			const answerContainer = answerContainers[questionNumber];
			const selector = `input[name=question${questionNumber}]:checked`;
			const userAnswer = (answerContainer.querySelector(selector) || {}).value;
			
			//show solution
			solutions[questionNumber].style.display = "none";
			//change the color back
			answerContainers[questionNumber].style.color = "#333";
	    });

		//show reset button and hide verify button
		resetButton.style.display = "none";
		submitButton.style.display = "block";
		resultsContainer.style.display = "none";
		
		//disable radio button
		
		for (var i = 0; i< gatos.length;  i++){
		    gatos[i].checked = false;
		    gatos[i].disabled = false; //disable the radio buttons
		}
	}
	
	
	
})();