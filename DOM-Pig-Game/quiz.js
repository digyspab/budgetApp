(function() {
  function Question(question, answer, correct) {
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  }

  Question.prototype.display = function() {
    console.log(this.question);

    for (var i = 0; i < this.answer.length; i++) {
      console.log(`${i + 1} : ${this.answer[i]}`);
    }
  };

  Question.prototype.checkAns = function(ans, callback) {
    var sc;
    if (ans === this.correct) {
      console.log("Correct answer");
      sc = callback(true);
    } else {
      console.log("Incorrect");

      sc = callback(false);
    }

    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("Your score: " + score);
    console.log("----------------------------------------------------");
  };

  var q1 = new Question(
    "Is javascritp is coolest programming language?",
    ["Yes", "No"],
    1
  );
  var q2 = new Question(
    "Which one is India's capital?",
    ["Delhi", "New Delhi", "Panji", "None of these"],
    2
  );

  var questions = [q1, q2];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].display();

    var ans = prompt("Please select correct answer.");

    if (ans !== "exit") {
      questions[n].checkAns(parseInt(ans), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
