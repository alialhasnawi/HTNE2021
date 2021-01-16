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
  }
  {
    question: '4. How many years does it take for polyester to decompose?',
    options: [
      '10', '200', '50', '500'
    ],
    answer: 1
  }
  {
    question: '5. Open-loop recycling is often used in fast fashion practices. \
What is the correct definition of open-loop recycling?',
    options: [
      'All materials become waste', 'Materials are recycled specifically for the same use with little material degradation', 
      'The materials that are recycled are transformed both into new raw material and enter the waste cycle', 'None of the above'
    ],
    answer: 2
  }
  {
    question: '6. The production of clothes is \
often outsourced, meaning that it is done in a foreign country. Why does the fashion \
industry outsource manufacturing rather than use domestic suppliers?',
    options: [
      'Strict labour laws', 'Ability to directly manage production', 'Low costs of labour', 'Ownership of the manufacturing facilities'
    ],
    answer: 2
  }
  {
    question: '7. Microplastics are tiny pieces of plastic that will never biodegrade. \
They make up about 31% of the plastic pollution in the ocean. What percent of the \
microplastics found in the ocean is the fashion industry responsible for?',
    options: [
      '35%', '60%', '2%', '15%'
    ],
    answer: 0
  }
  {
    question: '8. How many new articles of clothing does the average American purchase each year?',
    options: [
      '32', '106', '19', '68'
    ],
    answer: 3
  }
  {
    question: '9. Pesticides and insecticides are substances that keep pests off of our crops. \
They can also be detrimental to the environment if used irresponsibly. How much does cotton \
production contribute to our use of pesticides and insecticides?',
    options: [
      '18% of total pesticide use and 25% of total insecticide use', 
      '30% of total pesticide use and 22% of total insecticide use', 
      '18% of total pesticide use and 50% of total insecticide use', 
      '30% of total pesticide use and 50% of total insecticide use'
    ],
    answer: 0
  }
  {
    question: '10. What percentage of donations to thrift stores are never resold?',
    options: [
      '30%', '15%', '80%', '65%'
    ],
    answer: 2
  }
  {
    question: 'who is ur son?',
    options: [
      'abortion', 'pesticide', 'papa', 'laminate hardwood flooring'
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
