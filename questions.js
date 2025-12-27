const quizTopics = {

  "Current Affairs": [
    {
      question: "1.Who is the current Prime Minister of India?",
      choices: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Arvind Kejriwal", "Yogi Adityanath"],
      correct: "Narendra Modi"
    },
    {
      question: "2.Which Indian city hosted the G20 Summit 2023?",
      choices: ["Mumbai", "New Delhi", "Bengaluru", "Hyderabad", "Chennai"],
      correct: "New Delhi"
    },
    {
      question: "3.Which Indian mission successfully landed on the Moon south pole in 2023?",
      choices: ["Chandrayaan-1", "Chandrayaan-2", "Chandrayaan-3", "Mangalyaan", "Aditya-L1"],
      correct: "Chandrayaan-3"
    },
    {
      question: "4.Which Indian state launched the Gruha Lakshmi scheme?",
      choices: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh", "Telangana"],
      correct: "Karnataka"
    },
    {
      question: "5.Aditya-L1 mission is launched to study which celestial body?",
      choices: ["Moon", "Mars", "Sun", "Jupiter", "Venus"],
      correct: "Sun"
    }
  ],

  "Technology": [
    {
      question: "1.What does AI stand for?",
      choices: ["Automated Intelligence", "Artificial Intelligence", "Advanced Internet", "Applied Interface", "Algorithmic Input"],
      correct: "Artificial Intelligence"
    },
    {
      question: "2.Which company developed ChatGPT?",
      choices: ["Google", "Microsoft", "OpenAI", "Meta", "Amazon"],
      correct: "OpenAI"
    },
    {
      question: "3.HTML is used for?",
      choices: ["Styling", "Logic", "Structuring web pages", "Database", "Server-side scripting"],
      correct: "Structuring web pages"
    },
    {
      question: "4.Which language is mainly used for web interactivity?",
      choices: ["Python", "Java", "JavaScript", "C++", "PHP"],
      correct: "JavaScript"
    },
    {
      question: "5.What does CSS stand for?",
      choices: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets", "Control Style Syntax"],
      correct: "Cascading Style Sheets"
    }
  ],

  "Space Exploration": [
    {
      question: "1.Which was the first artificial satellite?",
      choices: ["Apollo 11", "Sputnik 1", "Voyager 1", "Hubble", "Explorer 1"],
      correct: "Sputnik 1"
    },
    {
      question: "2.Which planet is known as the Red Planet?",
      choices: ["Venus", "Mars", "Jupiter", "Saturn", "Mercury"],
      correct: "Mars"
    },
    {
      question: "3.Who was the first woman in space?",
      choices: ["Kalpana Chawla", "Sally Ride", "Valentina Tereshkova", "Sunita Williams", "Mae Jemison"],
      correct: "Valentina Tereshkova"
    },
    {
      question: "4.ISRO stands for?",
      choices: ["Indian Space Research Organisation", "International Space Research Office", "Indian Satellite Research Organisation", "Inter Stellar Research Office", "Indian Science Research Office"],
      correct: "Indian Space Research Organisation"
    },
    {
      question: "5.Which telescope was launched in 2021?",
      choices: ["Hubble", "Kepler", "James Webb", "Spitzer", "Chandra"],
      correct: "James Webb"
    }
  ],

  "Movie Trivia": [
    {
      question: "1.What is Harry's position in Quidditch?",
      choices: ["Chaser", "Beater", "Seeker", "Keeper","None of above"],
      correct: "Seeker",
    },
    {
      question:"2.Vijay plays an army officer who uncovers sleeper cells in Mumbai?",
      choices: ["Kaththi","Thuppaki","Beast","Sarkar","Velayudham"],
      correct: "Thuppaki",
    },
    {
      question: "3.Which Indian movie won an Oscar in 2023?",
      choices: ["RRR", "KGF", "Pushpa", "Baahubali", "Pathaan"],
      correct: "RRR"
    },
    {
      question: "4.Who is Elena Gilbert first true love in Vampire Diaries?",
      choices: ["Stefan Salvatore", "Damon Salvatore", "Klaus", "Matt Donovan","Elijah"],
      correct: "Stefan Salvatore"
    },
    {
      question: "5.Which movie features the character Jack Sparrow?",
      choices: ["Harry Potter", "Pirates of the Caribbean", "Avatar", "Titanic", "The Mummy"],
      correct: "Pirates of the Caribbean"
    }
  ],

  "Sports": [
    {
      question: "1.Which country won the FIFA World Cup 2022?",
      choices: ["France", "Argentina", "Brazil", "Germany", "Croatia"],
      correct: "Argentina"
    },
    {
      question: "2.Who is known as the 'God of Cricket'?",
      choices: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Brian Lara", "Ricky Ponting"],
      correct: "Sachin Tendulkar"
    },
    {
      question: "3.Which CSK player won the 'Player of the Tournament' award in IPL 2018?",
      choices: ["MS Dhoni", "Shane Watson", "Suresh Raina", "Ambati Rayudu", "Sunil Narine"],
      correct: "Sunil Narine"
    },
    {
      question: "4.How many players are on the field for one team in cricket?",
      choices: ["9", "10", "11", "12", "15"],
      correct: "11"
    },
    {
      question: "5.Which country hosts the Wimbledon tournament?",
      choices: ["USA", "France", "Australia", "England", "Spain"],
      correct: "England"
    }
  ]
};
let quizData=null;
let currentquestion=0;
let scores=0;
let questionEl=document.querySelector('.quizquest');
let nextEl=document.querySelector('.next-btn');
const inputs=document.querySelectorAll('.option input');


function showTopics() {
    questionEl.innerText = "Select your topic for quiz"; 
    const topics = Object.keys(quizTopics);
    inputs.forEach((input, i) => {
        if (topics[i]) {
            input.nextElementSibling.innerText = topics[i]; 
            input.style.display = "inline"; // show input
        } else {
            input.nextElementSibling.innerText = ""; 
            input.style.display = "none"; 
        }
        input.checked = false; 
    });
}


function startQuestion(){
  if(quizData===null)return;
  inputs.forEach(input=>input.checked=false);
  const q=quizData[currentquestion];
  questionEl.innerHTML=q.question;
  for(let i=0;i<q.choices.length;i++){
  document.querySelector(`.option${i}`).innerHTML=q.choices[i];
}}


function answer(){
  let selected=null;
  inputs.forEach(input=>{
  if(input.checked){
  selected=input.nextElementSibling.innerText.trim();
  }});
  return selected;
}


function restart(){
  quizData=null;
  document.querySelector('.quiz').classList.remove('result');
  document.querySelectorAll('.option').forEach(option=>{
  option.style.display="flex";
  });
  inputs.forEach(input=>input.checked=false);
  nextEl.style.display="inline-block";
  document.querySelector('.cbutton').style.display="none";
  showTopics(); 
}


nextEl.addEventListener('click',()=>{
  if(!quizData){
  let selectedTopic=null;
  inputs.forEach(input=>{
  if(input.checked){
  selectedTopic=input.nextElementSibling.innerText.trim();
  }});
  if(!selectedTopic){
  alert('Select a topic to proceed');
  return;
  }
  quizData=quizTopics[selectedTopic];
  currentquestion=0;
  scores=0;
  startQuestion();
  return;
}
  const selectedAnswer=answer();
  if(!selectedAnswer){
  alert('Select an option to proceed');
  return;
  }
  if(selectedAnswer===quizData[currentquestion].correct){
  scores++;
  }
  if(currentquestion<quizData.length-1){
  currentquestion++;
  startQuestion();
  }else{
  questionEl.innerHTML=`Quiz finished! <br><br> Your score is: ${scores} <br><br> ${scores<2?'You can do better. Keep practicing!':'Great job! You nailed it!'}`;
  document.querySelector('.quiz').classList.add('result');
  document.querySelectorAll('.option').forEach(option=>{
  option.style.display="none";
  });
  nextEl.style.display="none";
  document.querySelector('.cbutton').style.display="block";
}});


showTopics();