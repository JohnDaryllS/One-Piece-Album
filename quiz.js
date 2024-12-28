const questions = [
    { question: "What is Monkey D. Luffy’s ultimate dream?", options: ["To become a Yonko", "To find the One Piece and become Pirate King", "To destroy the Navy", "To join Shanks' crew"], answer: "To find the One Piece and become Pirate King" },
    { question: "What fruit did Luffy eat?", options: ["Gomu Gomu no Mi", "Mera Mera no Mi", "Hito Hito no Mi", "Tori Tori no Mi"], answer: "Gomu Gomu no Mi" },
    { question: "Who is the doctor of the Straw Hat Pirates?", options: ["Tony Tony Chopper", "Franky", "Brook", "Sanji"], answer: "Tony Tony Chopper" },
    { question: "What is the name of Luffy's first ship?", options: ["Going Merry", "Thousand Sunny", "Red Force", "Viva Ship"], answer: "Going Merry" },
    { question: "Who is the first member to join Luffy's crew?", options: ["Nami", "Usopp", "Roronoa Zoro", "Sanji"], answer: "Roronoa Zoro" },
    { question: "What is Nico Robin’s role in the crew?", options: ["Doctor", "Navigator", "Archaeologist", "Swordsman"], answer: "Archaeologist" },
    { question: "Which Yonko did Luffy defeat first?", options: ["Kaido", "Big Mom", "Shanks", "Blackbeard"], answer: "Kaido" },
    { question: "Who trained Luffy during the time skip?", options: ["Silvers Rayleigh", "Shanks", "Dragon", "Garp"], answer: "Silvers Rayleigh" },
    { question: "What is the bounty of Monkey D. Luffy after defeating Kaido?", options: ["1.5 Billion Berries", "3 Billion Berries", "5 Billion Berries", "4 Billion Berries"], answer: "3 Billion Berries" },
    { question: "Who saved Luffy from drowning as a child?", options: ["Garp", "Shanks", "Ace", "Dragon"], answer: "Shanks" },
    { question: "What is Sanji's dream?", options: ["To become the world's best swordsman", "To find the All Blue", "To be Pirate King", "To defeat Kaido"], answer: "To find the All Blue" },
    { question: "Who is the cook on the Straw Hat Pirates' crew?", options: ["Zoro", "Sanji", "Nami", "Chopper"], answer: "Sanji" },
    { question: "Who gave Luffy his straw hat?", options: ["Shanks", "Garp", "Ace", "Dragon"], answer: "Shanks" },
    { question: "Which character uses a slingshot as a weapon?", options: ["Franky", "Usopp", "Robin", "Nami"], answer: "Usopp" },
    { question: "What is Franky’s profession in the Straw Hat Pirates?", options: ["Doctor", "Shipwright", "Navigator", "Cook"], answer: "Shipwright" },
    { question: "What is Nami’s dream?", options: ["To draw a map of the entire world", "To find the All Blue", "To be Pirate Queen", "To defeat Kaido"], answer: "To draw a map of the entire world" },
    { question: "Who is Luffy’s father?", options: ["Shanks", "Dragon", "Garp", "Roger"], answer: "Dragon" },
    { question: "Which character is known as the ‘Surgeon of Death’?", options: ["Law", "Kidd", "Zoro", "Brook"], answer: "Law" },
    { question: "What is the New World?", options: ["A location in East Blue", "The second half of the Grand Line", "An island in North Blue", "A Yonko territory"], answer: "The second half of the Grand Line" },
    { question: "What is the One Piece?", options: ["A treasure", "A weapon", "An ancient map", "A Devil Fruit"], answer: "A treasure" },
    { question: "Which Devil Fruit allows users to manipulate gravity?", options: ["Zushi Zushi no Mi", "Hie Hie no Mi", "Pika Pika no Mi", "Gura Gura no Mi"], answer: "Zushi Zushi no Mi" },
    { question: "Who is the captain of the Heart Pirates?", options: ["Trafalgar D. Water Law", "Monkey D. Luffy", "Eustass Kid", "Marshall D. Teach"], answer: "Trafalgar D. Water Law" },
    { question: "What is Luffy's signature attack?", options: ["Gomu Gomu no Pistol", "Gear Second", "Gomu Gomu no Bazooka", "Red Hawk"], answer: "Gomu Gomu no Pistol" },
    { question: "Which ship is known as the ‘Ship of Dreams’?", options: ["Going Merry", "Thousand Sunny", "Viva Ship", "Oro Jackson"], answer: "Oro Jackson" },
    { question: "What is the name of the fish-man who is Luffy's ally?", options: ["Arlong", "Jinbe", "Hody Jones", "Fisher Tiger"], answer: "Jinbe" },
    { question: "What is the name of the island where Luffy first meets Chopper?", options: ["Drum Island", "Skypiea", "Alabasta", "Enies Lobby"], answer: "Drum Island" },
    { question: "What is Nami's primary weapon?", options: ["Climatact", "Wado Ichimonji", "Kabuto", "Shusui"], answer: "Climatact" },
    { question: "Who is the ruler of Dressrosa?", options: ["Donquixote Doflamingo", "Edward Newgate", "Big Mom", "Kaido"], answer: "Donquixote Doflamingo" },
    { question: "What is the name of the giant whale Luffy and his crew encounter?", options: ["Laboon", "Zunisha", "Sea King", "Momoo"], answer: "Laboon" },
    { question: "Which character has the ability to control fire?", options: ["Portgas D. Ace", "Sabo", "Vinsmoke Judge", "Pica"], answer: "Portgas D. Ace" },
    { question: "Who is the leader of the Revolutionary Army?", options: ["Monkey D. Dragon", "Emporio Ivankov", "Sabo", "Koala"], answer: "Monkey D. Dragon" },
    { question: "What was the name of the island where Luffy fought Crocodile?", options: ["Arabasta", "Water 7", "Alabasta", "Skypiea"], answer: "Alabasta" },
    { question: "Who is the youngest member of the Straw Hat Pirates?", options: ["Chopper", "Luffy", "Usopp", "Nami"], answer: "Chopper" },
    { question: "What is Zoro’s signature sword style?", options: ["Three-Sword Style", "One-Sword Style", "Two-Sword Style", "Swordless Style"], answer: "Three-Sword Style" },
    { question: "Which character is known for his dream of becoming the world’s greatest swordsman?", options: ["Roronoa Zoro", "Dracule Mihawk", "Shanks", "Mihawk"], answer: "Roronoa Zoro" },
    { question: "Who was Luffy's first major enemy in the East Blue?", options: ["Arlong", "Buggy", "Kuro", "Crocodile"], answer: "Buggy" },
    { question: "What is Usopp's nickname?", options: ["Sniper King", "Cyborg", "Shipwright", "Greenhorn"], answer: "Sniper King" },
    { question: "What is the name of Luffy’s brother?", options: ["Ace", "Sabo", "Dragon", "Garp"], answer: "Ace" },
    { question: "Which island is known for its giant robots?", options: ["Water 7", "Enies Lobby", "Punk Hazard", "Dressrosa"], answer: "Water 7" },
    { question: "Which character was a former member of the Navy?", options: ["Smoker", "Garp", "Aokiji", "Akainu"], answer: "Smoker" },
    { question: "What is the name of the kingdom that Nico Robin is from?", options: ["Ohara", "Alabasta", "Dressrosa", "Skypiea"], answer: "Ohara" },
    { question: "Who is the leader of the Red Haired Pirates?", options: ["Shanks", "Beard", "Roger", "Ace"], answer: "Shanks" },
    { question: "What is Sanji's family background?", options: ["Vinsmoke", "D. Luffy", "Donquixote", "Nefertari"], answer: "Vinsmoke" },
    { question: "What is Chopper’s Devil Fruit?", options: ["Hito Hito no Mi", "Mera Mera no Mi", "Gomu Gomu no Mi", "Gura Gura no Mi"], answer: "Hito Hito no Mi" },
    { question: "Which character uses a whip as a weapon?", options: ["Nami", "Boa Hancock", "Kaya", "Marguerite"], answer: "Boa Hancock" },
    { question: "What is the name of the pirate crew Luffy originally wanted to join?", options: ["Red Haired Pirates", "Roger Pirates", "Whitebeard Pirates", "Blackbeard Pirates"], answer: "Red Haired Pirates" },
    { question: "What is the name of the kingdom where Nami was born?", options: ["Coco Village", "Arlong Park", "Alabasta", "Skypiea"], answer: "Coco Village" },
    { question: "Who was the first character to know Luffy’s dream?", options: ["Shanks", "Zoro", "Nami", "Ace"], answer: "Shanks" },
    { question: "What is the name of the swordsman who fights with two swords?", options: ["Zoro", "Mihawk", "Tashigi", "Vista"], answer: "Vista" },
    { question: "What is the name of the fish-man who was a former member of the Arlong Pirates?", options: ["Hody Jones", "Arlong", "Jimbei", "Fisher Tiger"], answer: "Arlong" },
    { question: "Which one of the following is an ability of the Gomu Gomu no Mi?", options: ["Stretching body", "Controlling fire", "Shapeshifting", "Shooting water"], answer: "Stretching body" },
    { question: "What is the goal of the Revolutionary Army?", options: ["To overthrow the World Government", "To conquer the seas", "To find the One Piece", "To defeat the Yonko"], answer: "To overthrow the World Government" },
    { question: "What is the name of the leader of the Skypieans?", options: ["Enel", "Gan Fall", "Aisa", "Wiper"], answer: "Gan Fall" },
    { question: "What is the main goal of the Straw Hat Pirates?", options: ["To find the One Piece", "To take down the World Government", "To become the greatest pirates", "To defeat the Yonko"], answer: "To find the One Piece" },
    { question: "Who are the members of the Worst Generation?", options: ["Luffy, Law, Kid, Hawkins, Drake, Apoo", "Zoro, Nami, Sanji", "Luffy, Zoro, Sanji, Usopp", "Luffy, Chopper, Franky, Robin"], answer: "Luffy, Law, Kid, Hawkins, Drake, Apoo" },
    { question: "Which island is known for its mysterious ruins?", options: ["Skypiea", "Dressrosa", "Thriller Bark", "Enies Lobby"], answer: "Skypiea" },
    { question: "What is Franky's dream?", options: ["To build a ship that can sail around the world", "To become a great doctor", "To find the All Blue", "To defeat the World Government"], answer: "To build a ship that can sail around the world" },
    { question: "Which character is a member of the Mink Tribe?", options: ["Carrot", "Jinbe", "Chopper", "Sabo"], answer: "Carrot" },
    { question: "What is the name of the last island in the Grand Line?", options: ["Raftel", "Dressrosa", "Skypiea", "Wano"], answer: "Raftel" },
    { question: "What is the name of the pirate who killed Ace?", options: ["Blackbeard", "Sengoku", "Shanks", "Kaido"], answer: "Blackbeard" },
    { question: "Which character possesses the power of the Hie Hie no Mi?", options: ["Aokiji", "Kizaru", "Akainu", "Smoker"], answer: "Aokiji" },
    { question: "What is the name of the island where the Straw Hat Pirates meet the Revolutionary Army?", options: ["Dressrosa", "Sabaody Archipelago", "Skypiea", "Wano"], answer: "Sabaody Archipelago" },
    { question: "Which character is the captain of the Big Mom Pirates?", options: ["Big Mom", "Kaido", "Shanks", "Blackbeard"], answer: "Big Mom" },
    { question: "Who created the Devil Fruits?", options: ["The Celestial Dragons", "The World Government", "The Ancient Kingdom", "The Sea Kings"], answer: "The Ancient Kingdom" },
    { question: "Which character possesses the power of the Gura Gura no Mi?", options: ["Whitebeard", "Blackbeard", "Shanks", "Big Mom"], answer: "Whitebeard" },
    { question: "What is the name of Luffy's older brother?", options: ["Sabo", "Ace", "Garp", "Dragon"], answer: "Ace" },
    { question: "Which character is known for his invincible power to turn anything into stone?", options: ["Boa Hancock", "Dracule Mihawk", "Bartholomew Kuma", "Gol D. Roger"], answer: "Boa Hancock" },
    { question: "Which Devil Fruit does Blackbeard possess?", options: ["Yami Yami no Mi", "Gura Gura no Mi", "Magu Magu no Mi", "Gomu Gomu no Mi"], answer: "Yami Yami no Mi" },
    { question: "What is the name of the pirate crew led by Gol D. Roger?", options: ["Roger Pirates", "Whitebeard Pirates", "Red Haired Pirates", "Blackbeard Pirates"], answer: "Roger Pirates" },
    { question: "Which character has the power to change the world by creating a giant shadow army?", options: ["Brook", "Usopp", "Jinbe", "Moria"], answer: "Moria" },
    { question: "Who is the leader of the World Government?", options: ["The Celestial Dragons", "Sengoku", "Akainu", "Dragon"], answer: "The Celestial Dragons" },
    { question: "What is the name of the first ship of the Straw Hat Pirates?", options: ["Going Merry", "Thousand Sunny", "Red Force", "Viva Ship"], answer: "Going Merry" },
    { question: "What is the name of Luffy’s second-in-command?", options: ["Roronoa Zoro", "Sanji", "Nami", "Usopp"], answer: "Roronoa Zoro" },
    { question: "What is the name of the island where Luffy first met Robin?", options: ["Skypiea", "Water 7", "Alabasta", "Sabaody Archipelago"], answer: "Alabasta" },
    { question: "Who is the first member to join Luffy after Zoro?", options: ["Nami", "Usopp", "Sanji", "Chopper"], answer: "Nami" },
    { question: "Who is the leader of the Revolutionary Army?", options: ["Monkey D. Dragon", "Emporio Ivankov", "Sabo", "Koala"], answer: "Monkey D. Dragon" },
    { question: "Which character is known as the ‘Pirate Empress’?", options: ["Boa Hancock", "Nico Robin", "Nami", "Charlotte Linlin"], answer: "Boa Hancock" },
    { question: "Who is the shipwright of the Straw Hat Pirates?", options: ["Franky", "Zoro", "Nami", "Sanji"], answer: "Franky" },
    { question: "Which fruit grants the ability to control the weather?", options: ["Gomu Gomu no Mi", "Goro Goro no Mi", "Clima-Tact", "Mera Mera no Mi"], answer: "Goro Goro no Mi" },
    { question: "Who is the Captain of the Whitebeard Pirates?", options: ["Edward Newgate", "Shanks", "Roger", "Blackbeard"], answer: "Edward Newgate" },
    { question: "What is the name of Luffy’s grandfather?", options: ["Garp", "Roger", "Shanks", "Dragon"], answer: "Garp" },
    { question: "Who killed Ace?", options: ["Blackbeard", "Sengoku", "Akainu", "Kaido"], answer: "Akainu" },
    { question: "Which island is known for its ancient weapon, Pluton?", options: ["Alabasta", "Water 7", "Skypiea", "Wano"], answer: "Water 7" },
    { question: "What is the name of the island where Luffy trains with Rayleigh?", options: ["Ruskaina", "Skypiea", "Sabaody Archipelago", "Dressrosa"], answer: "Ruskaina" },
    { question: "What is the name of Luffy’s signature technique after using Gear Second?", options: ["Red Hawk", "Gear Fourth", "Gomu Gomu no Bazooka", "Gomu Gomu no Pistol"], answer: "Gear Fourth" },
    { question: "Which island is known for its clock tower?", options: ["Water 7", "Skypeia", "Alabasta", "Dressrosa"], answer: "Water 7" },
    { question: "What is the name of the government agency tasked with capturing pirates?", options: ["Marines", "Revolutionary Army", "World Government", "Yonko"], answer: "Marines" },
    { question: "Who is the first person to defeat Luffy in the series?", options: ["Crocodile", "Kuro", "Buggy", "Akainu"], answer: "Crocodile" },
    { question: "What is the name of the island where Luffy meets Nami?", options: ["Coco Village", "Alabasta", "Skypiea", "Water 7"], answer: "Coco Village" },
    { question: "Which character is the captain of the Kid Pirates?", options: ["Eustass Kid", "Law", "Luffy", "Aokiji"], answer: "Eustass Kid" },
    { question: "Which character can transform into a giant snake?", options: ["Boa Hancock", "Pica", "Moria", "Luffy"], answer: "Boa Hancock" },
    { question: "Who is the brother of Whitebeard?", options: ["Oden Kozuki", "Gol D. Roger", "Shanks", "Ace"], answer: "Oden Kozuki" },
    { question: "What is the name of the island where Luffy first meets Franky?", options: ["Water 7", "Skypiea", "Alabasta", "Punk Hazard"], answer: "Water 7" },
    { question: "What was Luffy's bounty before the timeskip?", options: ["100 million berries", "50 million berries", "300 million berries", "200 million berries"], answer: "100 million berries" },
    { question: "Who was the first character to join the Straw Hat Pirates as a member?", options: ["Roronoa Zoro", "Luffy", "Nami", "Sanji"], answer: "Roronoa Zoro" },
    { question: "Who is the leader of the Blackbeard Pirates?", options: ["Marshall D. Teach", "Shanks", "Roger", "Whitebeard"], answer: "Marshall D. Teach" },
    { question: "Which character uses the power of the Gomu Gomu no Mi?", options: ["Luffy", "Franky", "Zoro", "Sanji"], answer: "Luffy" },
    { question: "Which character has a bounty of 1.5 billion berries after the Dressrosa arc?", options: ["Luffy", "Zoro", "Sanji", "Law"], answer: "Luffy" },
    { question: "Who is known as the ‘Surgeon of Death’?", options: ["Trafalgar D. Water Law", "Zoro", "Luffy", "Sabo"], answer: "Trafalgar D. Water Law" },
    { question: "What is the main goal of the World Government?", options: ["To control the seas", "To find the One Piece", "To maintain power", "To fight pirates"], answer: "To maintain power" },
    { question: "What is the name of the ancient weapon that can destroy islands?", options: ["Pluton", "Poseidon", "Uranus", "Zunisha"], answer: "Pluton" },
    { question: "Who is the leader of the Big Mom Pirates?", options: ["Charlotte Linlin", "Kaido", "Shanks", "Whitebeard"], answer: "Charlotte Linlin" },
    { question: "What is the name of Luffy’s bounty after the Enies Lobby arc?", options: ["200 million berries", "300 million berries", "500 million berries", "400 million berries"], answer: "200 million berries" },
    { question: "What is the name of Luffy’s childhood friend who is also his rival?", options: ["Sabo", "Ace", "Kuro", "Shanks"], answer: "Ace" },
    { question: "Which Devil Fruit grants the ability to control ice?", options: ["Hie Hie no Mi", "Mera Mera no Mi", "Yami Yami no Mi", "Goro Goro no Mi"], answer: "Hie Hie no Mi" },
    { question: "Who is the ruler of the Wano Country?", options: ["Kaido", "Oden Kozuki", "Shogun Orochi", "Trafalgar D. Law"], answer: "Kaido" },
    { question: "What is the name of the island where the Straw Hat Pirates meet the Mink Tribe?", options: ["Zou", "Water 7", "Skypiea", "Alabasta"], answer: "Zou" },
    { question: "What is the name of the island where the Straw Hat Pirates fight Enel?", options: ["Skypiea", "Water 7", "Alabasta", "Wano"], answer: "Skypiea" },
    { question: "Who is the creator of the One Piece manga?", options: ["Eiichiro Oda", "Masashi Kishimoto", "Hiro Mashima", "Tite Kubo"], answer: "Eiichiro Oda" },
    { question: "Which character has the power of the Yami Yami no Mi?", options: ["Blackbeard", "Luffy", "Kaido", "Aokiji"], answer: "Blackbeard" },
    { question: "What is the name of the government organization tasked with taking down pirates?", options: ["The Marines", "The Revolutionary Army", "The World Government", "The Yonko"], answer: "The Marines" },
    { question: "What is the name of the character who is the son of the Pirate King?", options: ["Monkey D. Luffy", "Ace", "Sabo", "Gol D. Roger"], answer: "Monkey D. Luffy" },
    { question: "Which character is the strongest swordsman in the world?", options: ["Dracule Mihawk", "Zoro", "Shanks", "Rayleigh"], answer: "Dracule Mihawk" }
];

let currentQuestionIndex = 0;
let score = 0;
const userAnswers = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(questions);

function loadQuestion(index) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next');

    const questionData = questions[index];
    questionElement.textContent = `${index + 1}. ${questionData.question}`;
    optionsElement.innerHTML = questionData.options
        .map(option => `<label><input type="radio" name="option" value="${option}"> ${option}</label>`)
        .join('<br>');

    nextButton.disabled = true;

    optionsElement.querySelectorAll('input[name="option"]').forEach(input => {
        input.addEventListener('change', () => {
            nextButton.disabled = false;
        });
    });
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    userAnswers.length = 0;
    shuffleArray(questions);
    document.getElementById('result').textContent = '';
    document.getElementById('next').style.display = 'inline-block';
    document.getElementById('show-answers').style.display = 'none';
    document.getElementById('play-again').style.display = 'none';
    loadQuestion(currentQuestionIndex)
}

function showAnswers() {
    let answerSummary = '';
    
    userAnswers.forEach((userAnswer, index) => {
        const question = questions[index];
        const isCorrect = userAnswer.answer === question.answer;
        answerSummary += `
            <p>Question ${index + 1}: ${question.question}</p>
            <p>Your answer: ${userAnswer.answer} <span style="color:${isCorrect ? 'green' : 'red'};">(${isCorrect ? 'Correct' : 'Incorrect'})</span></p>
            <p>Correct answer: ${question.answer}</p>
            <hr>
        `;
    });

    document.getElementById('result').innerHTML = answerSummary;
    document.getElementById('show-answers').style.display = 'none';
    document.getElementById('play-again').style.display = 'inline-block';
}

document.getElementById('next').addEventListener('click', () => {
    const selectedOption = document.querySelector('input[name="option"]:checked').value;

    userAnswers.push({ question: questions[currentQuestionIndex].question, answer: selectedOption });

    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < 10 && currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        document.getElementById('quiz').innerHTML = '';
        document.getElementById('result').textContent = `Quiz complete! You scored ${score} out of ${Math.min(10, questions.length)}.`;
        document.getElementById('next').style.display = 'none';
        document.getElementById('show-answers').style.display = 'inline-block';
        document.getElementById('play-again').style.display = 'inline-block';
    }
});

document.getElementById('play-again').addEventListener('click', restartQuiz);
document.getElementById('show-answers').addEventListener('click', showAnswers);

loadQuestion(currentQuestionIndex);
