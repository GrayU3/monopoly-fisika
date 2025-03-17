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
    {
  text: "Gerak Jatuh Bebas: Sebuah benda dijatuhkan dari ketinggian 20 m. Berapa waktu yang dibutuhkan untuk mencapai tanah? (g = 10 m/s²)",
  options: ["1 s", "2 s", "3 s", "4 s"],
  correctAnswer: 1,
  reward: 100,
  loses: -100,
},
{
  text: "Momentum: Sebuah benda bermassa 4 kg bergerak dengan kecepatan 5 m/s. Berapakah momentumnya?",
  options: ["10 kg·m/s", "15 kg·m/s", "20 kg·m/s", "25 kg·m/s"],
  correctAnswer: 2,
  reward: 100,
  loses: -100,
},
{
  text: "Daya: Sebuah mesin melakukan usaha sebesar 600 J dalam waktu 20 detik. Berapakah dayanya?",
  options: ["20 W", "25 W", "30 W", "35 W"],
  correctAnswer: 1,
  reward: 100,
  loses: -100,
},
{
  text: "Pemuaian: Sebuah batang logam panjangnya 1 m memuai 0,002 m ketika dipanaskan. Berapa persen pertambahan panjangnya?",
  options: ["0,02%", "0,2%", "2%", "0,002%"],
  correctAnswer: 1,
  reward: 100,
  loses: -100,
},
{
  text: "Cermin Cekung: Jarak benda 10 cm, jarak fokus 5 cm. Di manakah bayangan terbentuk?",
  options: ["10 cm di belakang cermin", "10 cm di depan cermin", "20 cm di depan cermin", "20 cm di belakang cermin"],
  correctAnswer: 2,
  reward: 100,
  loses: -100,
},
{
  text: "Induksi Magnetik: Sebuah kawat lurus dialiri arus 5 A. Berapakah arah medan magnet di sekeliling kawat?",
  options: ["Ke atas", "Melingkar searah jarum jam", "Ke bawah", "Melingkar berlawanan jarum jam"],
  correctAnswer: 1,
  reward: 100,
  loses: -100,
},
{
  text: "Gelombang: Sebuah gelombang memiliki frekuensi 50 Hz dan panjang gelombang 2 m. Berapakah cepat rambat gelombang tersebut?",
  options: ["50 m/s", "100 m/s", "150 m/s", "200 m/s"],
  correctAnswer: 1,
  reward: 100,
  loses: -100,
},
{
  text: "Listrik Statis: Dua muatan masing-masing 2 μC dan 3 μC terpisah 0,5 m. Berapakah gaya tarik-menarik antara keduanya? (k = 9×10⁹ Nm²/C²)",
  options: ["108 N", "216 N", "324 N", "432 N"],
  correctAnswer: 1,
  reward: 100,
  loses: -100,
},
{
  text: "Kalor: 100 gram air dipanaskan dari 20°C menjadi 70°C. Berapakah kalor yang diperlukan? (c = 4200 J/kg·°C)",
  options: ["21.000 J", "25.000 J", "27.000 J", "30.000 J"],
  correctAnswer: 0,
  reward: 100,
  loses: -100,
},
{
  text: "Hukum Archimedes: Sebuah benda 5 kg dicelupkan ke dalam air dan mengalami gaya ke atas 40 N. Berapa berat benda di dalam air?",
  options: ["10 N", "20 N", "30 N", "40 N"],
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
