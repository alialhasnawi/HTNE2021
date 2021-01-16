// helper function query selector
function $(i) {
  return document.querySelector(i);
}

// elements
const scrolling_element = $('#scrolling-element');

// questions object
const questions_list = [{
    question: 'who is ur daddy?',
    options: [
      'A awdawd', 'B bfbfbf', 'C. asdawd', 'Dawaw'
    ],
    answer: 1
  },
  {
    question: 'who is ur mommy?',
    options: [
      'Aawdawd', 'Bbfbfbf', 'Casdawd', 'Dawaw'
    ],
    answer: 2
  },
  {
    question: 'who is ur son?',
    options: [
      'Aawdawd', 'Bbfbfbf', 'Casdawd', 'Dawaw'
    ],
    answer: 3
  }
];

//template questions
questions_list.forEach((item, i) => {
  scrolling_element.innerHTML += `<div class="slide" id="slide-testing">

    <div class="logo">
      <img class="logo-img" src="res/logo.gif" alt="Logo">
    </div>
    <div class="pretty-container" id="welcome">
      <div class="message">
        ${item.question}
      </div>
      <div class="button answer" onclick="answer(${i}, ${0})">
        ${item.options[0]}
      </div>
      <div class="button answer" onclick="answer(${i}, ${1})">
        ${item.options[1]}
      </div>
      <div class="button answer" onclick="answer(${i}, ${2})">
        ${item.options[2]}
      </div>
      <div class="button answer" onclick="answer(${i}, ${3})">
        ${item.options[3]}
      </div>
    </div>

  </div>`;
});



// variables
var slides_counter = 0;
var score = 0;

// functions
function next_slide() {
  slides_counter++;
  scrolling_element.style.transform = `translateX(${-100*slides_counter}vw)`;
}

function start_quiz() {
  next_slide();
}

// array: arr[index]  object:   obj.property
function answer(question_number, given_answer) {
  if (given_answer == questions_list[question_number].answer) {
    score++;
  }

  console.log(score);

  next_slide();
}