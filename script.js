// helper function query selector
function $(i) {
  return document.querySelector(i);
}

// elements
const scrolling_element = $('#scrolling-element');

// questions object
const questions_list = [{
    question: '1. The fashion industry is responsible for what percent of the world’s carbon emissions?',
    options: [
      '2%', '8%', '12%', '4%'
    ],
    answer: 1
  },
  {
    question: '2. The average American throws away how many pounds of clothing per year?',
    options: [
      '10', '25', '55', '80'
    ],
    answer: 3
  },
  {
    question: '3. How many gallons of water does it take to make a single pair of jeans?',
    options: [
      '1,000', '600', '1,800', '2,300'
    ],
    answer: 2
  },
  {
    question: '4. How many years does it take for polyester to decompose?',
    options: [
      '10', '200', '50', '500'
    ],
    answer: 1
  },
  {
    question: '5. Open-loop recycling is often used in fast fashion practices. \
What is the correct definition of open-loop recycling?',
    options: [
      'All materials become waste', 'Materials are recycled specifically for the same use with little material degradation',
      'The materials that are recycled are transformed both into new raw material and enter the waste cycle', 'None of the above'
    ],
    answer: 2
  },
  {
    question: '6. The production of clothes is \
often outsourced, meaning that it is done in a foreign country. Why does the fashion \
industry outsource manufacturing rather than use domestic suppliers?',
    options: [
      'Strict labour laws in foreign countries',
      'Ability to directly manage production',
      'Low costs of labour in foreign countries',
      'Ownership of the manufacturing facilities'
    ],
    answer: 2
  },
  {
    question: '7. Microplastics are tiny pieces of plastic that will never biodegrade. \
They make up about 31% of the plastic pollution in the ocean. What percent of the \
microplastics found in the ocean is the fashion industry responsible for?',
    options: [
      '35%', '60%', '2%', '15%'
    ],
    answer: 0
  },
  {
    question: '8. How many new articles of clothing does the average American purchase each year?',
    options: [
      '32', '106', '19', '68'
    ],
    answer: 3
  },
  {
    question: '9. Insecticides can be detrimental to the environment if used irresponsibly. How much does cotton \
production contribute to our use of insecticides?',
    options: [
      '25% of total insecticide use',
      '22% of total insecticide use',
      '50% of total insecticide use',
      '41% of total insecticide use'
    ],
    answer: 0
  },
  {
    question: '10. What percentage of donations to thrift stores are never resold?',
    options: [
      '30%', '15%', '80%', '65%'
    ],
    answer: 2
  },
];

//template questions
questions_list.forEach((item, i) => {
  scrolling_element.innerHTML += `<div class="slide" id="slide-testing">

    <div class="logo">
      <img class="logo-img" src="res/logo.svg" alt="Logo">
    </div>
    <div class="pretty-container" id="welcome">
      <div class="message">
        ${item.question}
      </div>
      <button id="a${i}0" class="button answer" onclick="answer(${i}, ${0})">
        ${item.options[0]}
      </button>
      <button id="a${i}1" class="button answer" onclick="answer(${i}, ${1})">
        ${item.options[1]}
      </button>
      <button id="a${i}2" class="button answer" onclick="answer(${i}, ${2})">
        ${item.options[2]}
      </button>
      <button id="a${i}3" class="button answer" onclick="answer(${i}, ${3})">
        ${item.options[3]}
      </button>
    </div>

  </div>`;
});

scrolling_element.innerHTML += `<div class="slide" id="slide-testing">
  <div class="logo">
    <img class="logo-img" src="res/logo.svg" alt="Logo">
  </div>
  <div class="pretty-container" id="end-screen">
    <div class="message centre-text">
      Congratulations on completing the quiz!
      <br><br>
      Your score is:
    </div>
    <div id="score-counter">
    </div>
    <div class="message centre-text">
    <a href="https://www.nytimes.com/2019/09/03/books/review/how-fast-fashion-is-destroying-the-planet.html" target="_blank">
    Click here if you're interested in learning more about fast fashion
    </a>
    </div>
  </div>

</div>`;



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
  scrolling_element.style.transitionDelay = '0s';
  if (given_answer == questions_list[question_number].answer) {
    score++;
  }

  for (var i = 0; i < 4; i++) {
    let e = $(`#a${question_number}${i}`);
    if (i == questions_list[question_number].answer) {
      e.classList.add('correct');
    } else {
      e.classList.add('wrong');
    }
    e.onclick = '';
  }

  if (question_number == 9) {
    $('#score-counter').innerHTML = `${score}/10`;
  }

  next_slide();
}