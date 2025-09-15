
let progressBar = document.getElementById("timeBar");

export function updateTimerUI(timeLeft, totalTime) {
    document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;
    let percentage = (timeLeft / totalTime) * 100;
    progressBar.style.width = percentage + "%";
}

export function startTimer(updateTimerUI, endExamCallback, totalTime) {
    let timeLeft = totalTime;
    let timerId = setInterval(() => {
        updateTimerUI(timeLeft, totalTime);
        if (timeLeft <= 0) {
            clearInterval(timerId);
            endExamCallback();
        }
        timeLeft--;
    }, 1000);
    return timerId;
}

export let quest = {
    "questions": [
        {
        "title": "Do you know this breed?",
        "image": "images/dog1.png",
        "answers": [
            "Bulldog",
            "Pug",
            "Beagle"
        ],
        "correct": "Bulldog"
        },
        {
        "title": "What is the breed shown here?",
        "image": "images/dog2.png",
        "answers": [
            "Golden Retriever",
            "Poodle",
            "Chihuahua"
        ],
        "correct": "Golden Retriever"
        },
        {
        "title": "What is the capital of France?",
        "image": "images/france_flag.png",
        "answers": [
            "Paris",
            "London",
            "Berlin",
            "Rome"
        ],
        "correct": "Paris"
        },
        {
        "title": "Which planet is known as the Red Planet?",
        "image": "images/planet1.jpg",
        "answers": [
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn"
        ],
        "correct": "Mars"
        },
        {
        "title": "What is 5 + 7?",
        "image": "",
        "answers": [
            "10",
            "11",
            "12",
            "13"
        ],
        "correct": "12"
        },
        {
        "title": "Who wrote 'Romeo and Juliet'?",
        "image": "",
        "answers": [
            "Charles Dickens",
            "William Shakespeare",
            "Mark Twain",
            "Jane Austen"
        ],
        "correct": "William Shakespeare"
        },
        {
        "title": "Which gas do plants absorb from the atmosphere?",
        "image": "",
        "answers": [
            "Oxygen",
            "Nitrogen",
            "Carbon Dioxide",
            "Helium"
        ],
        "correct": "Carbon Dioxide"
        },
        {
        "title": "Identify this animal.",
        "image": "images/animal1.jpg",
        "answers": [
            "Lion",
            "Tiger",
            "Leopard",
            "Cheetah"
        ],
        "correct": "Tiger"
        },
        {
        "title": "What is the largest ocean on Earth?",
        "image": "images/worldmap.png",
        "answers": [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        "correct": "Pacific Ocean"
        },
        {
        "title": "Which country hosted the 2016 Summer Olympics?",
        "image": "images/Olympics2016.png",
        "answers": [
            "China",
            "Brazil",
            "UK",
            "Japan"
        ],
        "correct": "Brazil"
        },
        {
        "title": "What is the chemical symbol for Gold?",
        "image": "",
        "answers": [
            "G",
            "Au",
            "Ag",
            "Go"
        ],
        "correct": "Au"
        },
        {
        "title": "Who painted the Mona Lisa?",
        "image": "images/monalisa.jpg",
        "answers": [
            "Vincent Van Gogh",
            "Pablo Picasso",
            "Leonardo da Vinci",
            "Michelangelo"
        ],
        "correct": "Leonardo da Vinci"
        },
        {
        "title": "Which is the smallest prime number?",
        "image": "",
        "answers": [
            "0",
            "1",
            "2",
            "3"
        ],
        "correct": "2"
        },
        {
        "title": "Which element has the chemical symbol 'O'?",
        "image": "",
        "answers": [
            "Oxygen",
            "Osmium",
            "Oxide",
            "Oganesson"
        ],
        "correct": "Oxygen"
        },
        {
        "title": "Identify this famous landmark.",
        "image": "images/landmark1.jpg",
        "answers": [
            "Eiffel Tower",
            "Big Ben",
            "Statue of Liberty",
            "Burj Khalifa"
        ],
        "correct": "Eiffel Tower"
        },
        {
        "title": "How many continents are there?",
        "image": "images/worldmap.png",
        "answers": [
            "5",
            "6",
            "7",
            "8"
        ],
        "correct": "7"
        },
        {
        "title": "Which is the largest mammal?",
        "image": "",
        "answers": [
            "Elephant",
            "Blue Whale",
            "Giraffe",
            "Hippopotamus"
        ],
        "correct": "Blue Whale"
        },
        {
        "title": "Which language is primarily spoken in Brazil?",
        "image": "images/worldmap.png",
        "answers": [
            "Spanish",
            "Portuguese",
            "French",
            "English"
        ],
        "correct": "Portuguese"
        },
        {
        "title": "What is the boiling point of water at sea level?",
        "image": "",
        "answers": [
            "90°C",
            "100°C",
            "110°C",
            "120°C"
        ],
        "correct": "100°C"
        },
        {
        "title": "Who is known as the father of computers?",
        "image": "",
        "answers": [
            "Alan Turing",
            "Charles Babbage",
            "Bill Gates",
            "Steve Jobs"
        ],
        "correct": "Charles Babbage"
        },
        {
        "title": "Which country is known as the Land of the Rising Sun?",
        "image": "",
        "answers": [
            "China",
            "Japan",
            "Thailand",
            "India"
        ],
        "correct": "Japan"
        },
        {
        "title": "Which programming language is known for its snake logo?",
        "image": "",
        "answers": [
            "Java",
            "Python",
            "C++",
            "JavaScript"
        ],
        "correct": "Python"
        }
    ]
    }