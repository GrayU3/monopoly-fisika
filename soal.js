const questionPools = {
  physics: [
    {
      text: "What is 7 × 8?",
      options: ["54", "56", "58", "60"],
      correctAnswer: 1, // Index of the correct option
      reward: 100,
      loses: -100,
    },
    {
      text: "Solve: 15 ÷ 3",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1,
      reward: 100,
      loses: -100,
    },
    {
      text: "Solve: 15 ÷ 5",
      options: ["4", "3", "6", "7"],
      correctAnswer: 1,
      reward: 100,
      loses: -100,
    },
    {
      text: "solve: 77 + 33",
      options: ["100", "110", "120", "130"],
      correctAnswer: 1,
      reward: 100,
      loses: -100,
    },
    {
      text: "solve: 55 + 45",
      options: ["90", "100", "110", "120"],
      correctAnswer: 1,
      reward: 100,
      loses: -100,
    },
    {
      text: "solve: 7 × 7",
      options: ["42", "14", "49", "47"],
      correctAnswer: 2,
      reward: 100,
      loses: -100,
    },
    {
      text: "solve: 9 × 8",
      options: ["86", "89", "72", "74"],
      correctAnswer: 2,
      reward: 100,
      loses: -100,
    },
    {
      text: "73 + 27",
      options: ["120", "130", "110", "100"],
      correctAnswer: 3,
      reward: 100,
      loses: -100,
    },
    {
      text: "Gerak Lurus: Mobil melaju dengan kecepatan 30 m/s selama 5 detik. Berapakah jarak yang ditempuh mobil?",
      options: ["100 m", "125 m", "150 m", "175 m"],
      correctAnswer: 2,
      reward: 100,
      loses: -100,
    },
    {
      text: "Hukum Newton: Sebuah gaya 12 N bekerja pada benda bermassa 3 kg. Berapakah percepatan benda?",
      options: ["2 m/s^2", "3 m/s^2", "4 m/s^2", "5 m/s^2"],
      correctAnswer: 2,
      reward: 100,
      loses: -100,
    },
    {
      text: "Energi Kinetik: Sebuah bola bermassa 2 kg bergerak dengan kecepatan 3 m/s. Berapakah energi kinetiknya?",
      options: ["6 J", "8 J", "9 J", "12 J"],
      correctAnswer: 2,
      reward: 100,
      loses: -100,
    },
    {
      text: "Hukum Ohm: Sebuah rangkaian memiliki arus 3 A dan hambatan 4 Ω. Berapakah tegangan pada rangkaian tersebut?",
      options: ["6 V", "9 V", "12 V", "15 V"],
      correctAnswer: 2,
      reward: 100,
      loses: -100,
    },
    
  ],
};

function popupQuiz(question, onComplete) {
  const popupHTML = `
        <div style="font-weight: bold; font-size: 16px; margin-bottom: 10px;">Question:</div>
        <div style="text-align: justify; margin-bottom: 10px;">${
          question.text
        }</div>
        <div>
            ${question.options
              .map(
                (option, index) => `
                <button style="margin: 5px;" onclick="handleAnswer(${index})">${option}</button>
            `
              )
              .join("")}
        </div>
    `;

  document.getElementById("popuptext").innerHTML = popupHTML;
  $("#popupbackground").fadeIn(400, function () {
    $("#popupwrap").show();
  });

  window.handleAnswer = function (selectedIndex) {
    $("#popupwrap").hide();
    $("#popupbackground").fadeOut(400);

    const player = window.player[turn]; // Current player

    if (selectedIndex === question.correctAnswer) {
      addAlert(player.name + " Correct! You earned $" + question.reward + ".");
      player.money += question.reward;
      player.correctAnswers += 1; // Increment correct answer count
    } else if (selectedIndex != question.correctAnswer) {
      addAlert(
        player.name +
          " Incorrect. You lost $" +
          Math.abs(question.loses) +
          ". The correct answer was: " +
          question.options[question.correctAnswer] +
          ". You answered incorrectly, so you can't buy this property."
      );

      setTimeout(function () {
        popup("You answered incorrectly, so you can't buy this property.");
      }, 500);

      player.money += question.loses; // Deduct money
      player.wrongAnswers += 1; // Increment wrong answer count
      return; //another else? wanna add trade?
    }

    updateMoney(); // Update the player's money display
    updateScore(); // Update the player's score display

    if (typeof onComplete === "function") {
      onComplete();
    }
  };
}

function updateScore() {
  for (let i = 1; i <= window.pcount; i++) {
    const player = window.player[i];
    document.getElementById(`p${i}correct`).textContent = player.correctAnswers;
    document.getElementById(`p${i}wrong`).textContent = player.wrongAnswers;
  }
}
