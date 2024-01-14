const questions = [

    {

        question: "In an AC circuit the combined effects of resistance, _______ , and ______ makes up the total opposition to the flow of current, known as _____?",

        answers: [

            { text: "reactance, induction, impedance", correct: false },

            { text: "inductive reactance, capacitive reactance, impedance", correct: true },

            { text: "capacitance, inductance, reactance", correct: false },

            // { text: "Giraffe", correct: false },

        ]

    },

    {

        question: "Transfer of electric energy from one circuit to another without the aid of electrical connections...",

        answers: [

            { text: "is called capacitance.", correct: false },

            { text: "can cause excessive arcing and heat, and as a result is practical for use only with low voltages/amperages.", correct: false },

            { text: "is called induction.", correct: true },

            // { text: "Giraffe", correct: false },

        ]

    },

    {

        question: "__________is the power consumed by both the resistance and the reactance portions of an AC circuit, and is measured in_______.",

        answers: [

            { text: "Apparent power, volt-amps", correct: true },

            { text: "Apparent power, watts", correct: false },

            { text: "True power, watts", correct: false },

            // { text: "Giraffe", correct: false },

        ]

    },

    {

        question: "when inductors are connected in parallel in a circuit, the inductance is:",

        answers: [

            { text: "less than the inductance of the lowest rated inductor", correct: true },

            { text: "equal to the inductance of the highest rated inductor", correct: false },

            { text: "equal to the sum of the individual inductance", correct: false },

            // { text: "Giraffe", correct: false },

        ]

    },

    {

        question: "At which point is the max. negative peak in a sine waves cycle?",

        answers: [

            { text: "180°", correct: false },

            { text: "90°", correct: false },

            // { text: "Elephant", correct: false },

            { text: "270°", correct: true },

        ]

    },

    {

        question: "Frequency is the number of cycles of AC per _________ , and is measured in_______",

        answers: [

            { text: "minute, joules", correct: false },

            { text: "minute, hertz", correct: false },

            // { text: "Elephant", correct: false },

            { text: "second, hertz", correct: true },

        ]

    },

    {

        question: "What are two additional effects that AC has, but DC does not?",

        answers: [

            { text: "Inductive reactance and Capacitive reactance", correct: true },

            { text: "Reduced frequency and vibration", correct: false },

            { text: "Higher current flow and lower voltage", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "Alternating current circuits are sensitive to inputs. If an increase occurred in which of the following factors, an increase in the inductive reactance will also occur.",

        answers: [
            
            { text: "Resistance and voltage", correct: false },

            { text: "Resistance and capacitive reactance", correct: false },

            { text: "Inductance and frequency", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "Voltage and current change direction at regular intervals. This is a definition of______",

        answers: [
            
            { text: "Direct current", correct: false },

            { text: "Alternating current", correct: true },

            { text: "Complex current", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "When calculating the true power of a reactive (out-of-phase) AC circuit, the power factor is:",

        answers: [
            
            { text: "the product of volts time the amps", correct: false },

            { text: "the impedance divided by the apparent power", correct: false },

            { text: "the ratio of the apparent power to the true power", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "Which of the following AC values produces the same amount of heat as a corresponding amount DC?",

        answers: [
            
            { text: "the PEAK value", correct: false },

            { text: "the INSTANTANEOUS value", correct: false },

            { text: "the RMS value", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "In an AC series circuit with a resistor of 10 ohms, an inductive reactance of 28ohms, and a capacitive reactance of 28ohms, does current lead or lag voltage?",

        answers: [
            
            { text: "current leads voltage", correct: false },

            { text: "voltage lags current", correct: false },

            { text: "There is no phase shift", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "What device is used to convert DC to AC?",

        answers: [
            
            { text: "Rectifier", correct: false },

            { text: "Inverter", correct: true },

            { text: "Diode", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "What is the capacitive reactance of a 115 volts AC / 400 Hertz circuit containing a 150 micro-farad capacitor?",

        answers: [
            
            { text: "2,653 ohms", correct: false },

            { text: "265 ohms", correct: false },

            { text: "2.65 ohms", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "A capacitor used in an AC circuit should have a working voltage:",

        answers: [
            
            { text: "equal to the highest applied voltage.", correct: false },

            { text: "at least 20 percent greater than the highest applied voltage.", correct: false },

            { text: "at least 50 percent greater than the highest applied voltage.", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "If we have some capacitors of different ratings, and we connect them in parallel in a circuit, the total capacitance is:",

        answers: [
            
            { text: "less than the capacitance of the lowest rated capacitor", correct: false },

            { text: "equal to the sum of all the capacitances", correct: true },

            { text: "equal to the capacitance of the highest rated capacitor", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "When an AC circuit is purely inductive, The current ________ the voltage by_________",

        answers: [
            
            { text: "leads, 90 degrees", correct: false },

            { text: "lags, 180 degrees", correct: false },

            { text: "lags, 90 degrees", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "In transformers, Regarding electrical energy:",

        answers: [
            
            { text: "The primary coil must always use a DC input to function properly.", correct: false },

            { text: "Current must always follow voltage during step up/down processes.", correct: false },

            { text: "The total amount of energy in a circuit must remain the same.", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "Which of the following are commonly used as rectifiers in electrical circuits? 1. Anodes. 2. Cathodes. 3. Diodes.",

        answers: [
            
            { text: "3, 1.", correct: false },

            { text: "3, 2.", correct: false },

            { text: "3.", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "Which is NOT one of the basic parts of a transformer?",

        answers: [
            
            { text: "primary winding", correct: false },

            { text: "silicon core", correct: true },

            { text: "iron core", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "Which of the following AC values produces the same amount of heat as a corresponding amount DC?",

        answers: [
            
            { text: "the PEAK value", correct: false },

            { text: "the INSTANTANEOUS value", correct: false },

            { text: "the RMS value", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "What happens to the current in a voltage step-up transformer with a ratio of 1 to 4?",

        answers: [
            
            { text: "The current is stepped up by a1 to 4 ratio.", correct: false },

            { text: "The current is stepped down by a 4 to 1 ratio", correct: true },

            { text: "The current does not change.", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "In an ac circuit, the effective voltage is",

        answers: [
            
            { text: "equal to the maximum instantaneous voltage.", correct: false },

            { text: "greater than the maximum instantaneous voltage.", correct: false },

            { text: "less than the maximum instantaneous voltage.", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "If we have capacitors that have different ratings in Farads, and we connect them in parallel in a circuit, the total capacitance is: (Note: C(T) = C(1) + C(2) + C(3)...)",

        answers: [
            
            { text: "less than the capacitance of the lowest rated capacitor.", correct: false },

            { text: "equal to the capacitance of the highest rated capacitor.", correct: false },

            { text: "equal to the sum of all the capacitances.", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "When calculating power in a reactive or inductive ac circuit, the true power is",

        answers: [
            
            { text: "more than the apparent power.", correct: false },

            { text: "less than the apparent power in a reactive circuit and more than the apparent power in an inductive circuit.", correct: false },

            { text: "less than the apparent power.", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "What happens to the current in a voltage step-up transformer with a ratio of 1 to 4?",

        answers: [
            
            { text: "The current is stepped up by a1 to 4 ratio.", correct: false },

            { text: "The current is stepped down by a 4 to 1 ratio", correct: true },

            { text: "The current does not change.", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "Unless otherwise specified, any values of current or voltage in an AC circuit are assumed to be:",

        answers: [
            
            { text: "effective values", correct: true },

            { text: "instantaneous values", correct: false },

            { text: "maximum values", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "What is the power that is consumed by the resistance portion of an AC circuit, and what is it measured in?",

        answers: [
            
            { text: "Apparent power, watts", correct: false },

            { text: "True power, watts", correct: true },

            { text: "True power, volt-amps", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "The maximum voltage measured on the AC sine wave is known as:",

        answers: [
            
            { text: "Peak Voltage", correct: true },

            { text: "Phase Voltage", correct: false },

            { text: "Effective Voltage", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "RMS value is also known as the_____",

        answers: [
            
            { text: "effective value", correct: true },

            { text: "peak value", correct: false },

            { text: "instantaneous value", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "In Alternating Current circuits, what is the name of the term that describes the combined resistive forces?",

        answers: [
            
            { text: "Impedance", correct: true },

            { text: "Resistance", correct: false },

            { text: "Reactance", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "When direct current to a magnetic field drops, the field will?",

        answers: [
            
            { text: "Collapse", correct: true },

            { text: "Reverse polarity", correct: false },

            { text: "Remain Active", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "Transformers work on the principal of:",

        answers: [
            
            { text: "Mutual induction", correct: true },

            { text: "Magnetic attraction", correct: false },

            { text: "Static electricity", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "What is the total capacitance of a certain circuit containing three capacitors, with capacitance's of .35 microfarad, .07 microfarad, and .16 microfarad, respectively? (Note: C(T) = C(1) + C(2) + C(3))",

        answers: [
            
            { text: "58 uF.", correct: true },

            { text: ".04 pF.", correct: false },

            { text: ".04 uF.", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "When calculating the true power of a reactive (out-of-phase) AC circuit, the power factor is:",

        answers: [
            
            { text: "the product of volts time the amps", correct: false },

            { text: "the impedance divided by the apparent power", correct: false },

            { text: "the ratio of the apparent power to the true power", correct: true },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "Increasing ____________ results in a decrease of the capacitive reactance present in an AC circuit?",

        answers: [
            
            { text: "frequency", correct: true },

            { text: "voltage", correct: false },

            { text: "power", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "The effective value of AC is ________ times that of the maximum value.",

        answers: [
            
            { text: "1.41", correct: false },

            { text: ".707", correct: true },

            { text: ".638", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    {

        question: "Referring to AC values, when the voltage and current are “in-phase” the circuit is described:",

        answers: [
            
            { text: "as purely inducative", correct: false },

            { text: "as purely resistive", correct: true },

            { text: "as purely capacitive", correct: false },

            // { text: "Elephant", correct: false },

        ]

    },

    // {

    //     question: "Which of the following are commonly used as rectifiers in electrical circuits? 1. Anodes. 2. Cathodes. 3. Diodes.",

    //     answers: [
            
    //         { text: "3, 1.", correct: false },

    //         { text: "3, 2.", correct: false },

    //         { text: "3.", correct: true },

    //         // { text: "Elephant", correct: false },

    //     ]

    // },

    // {

    //     question: "Which of the following are commonly used as rectifiers in electrical circuits? 1. Anodes. 2. Cathodes. 3. Diodes.",

    //     answers: [
            
    //         { text: "3, 1.", correct: false },

    //         { text: "3, 2.", correct: false },

    //         { text: "3.", correct: true },

    //         // { text: "Elephant", correct: false },

    //     ]

    // },

    // {

    //     question: "Which of the following are commonly used as rectifiers in electrical circuits? 1. Anodes. 2. Cathodes. 3. Diodes.",

    //     answers: [
            
    //         { text: "3, 1.", correct: false },

    //         { text: "3, 2.", correct: false },

    //         { text: "3.", correct: true },

    //         // { text: "Elephant", correct: false },

    //     ]

    // },

    // {

    //     question: "Which of the following are commonly used as rectifiers in electrical circuits? 1. Anodes. 2. Cathodes. 3. Diodes.",

    //     answers: [
            
    //         { text: "3, 1.", correct: false },

    //         { text: "3, 2.", correct: false },

    //         { text: "3.", correct: true },

    //         // { text: "Elephant", correct: false },

    //     ]

    // },

    // {

    //     question: "Which of the following are commonly used as rectifiers in electrical circuits? 1. Anodes. 2. Cathodes. 3. Diodes.",

    //     answers: [
            
    //         { text: "3, 1.", correct: false },

    //         { text: "3, 2.", correct: false },

    //         { text: "3.", correct: true },

    //         // { text: "Elephant", correct: false },

    //     ]

    // },

    // {

    //     question: "Which of the following are commonly used as rectifiers in electrical circuits? 1. Anodes. 2. Cathodes. 3. Diodes.",

    //     answers: [
            
    //         { text: "3, 1.", correct: false },

    //         { text: "3, 2.", correct: false },

    //         { text: "3.", correct: true },

    //         // { text: "Elephant", correct: false },

    //     ]

    // },

    // {

    //     question: "Which of the following are commonly used as rectifiers in electrical circuits? 1. Anodes. 2. Cathodes. 3. Diodes.",

    //     answers: [
            
    //         { text: "3, 1.", correct: false },

    //         { text: "3, 2.", correct: false },

    //         { text: "3.", correct: true },

    //         // { text: "Elephant", correct: false },

    //     ]

    // },

    // {

    //     question: "Which of the following are commonly used as rectifiers in electrical circuits? 1. Anodes. 2. Cathodes. 3. Diodes.",

    //     answers: [
            
    //         { text: "3, 1.", correct: false },

    //         { text: "3, 2.", correct: false },

    //         { text: "3.", correct: true },

    //         // { text: "Elephant", correct: false },

    //     ]

    // },

];



const questionElement = document.getElementById("question");

const answerButtons = document.getElementById("answer-buttons");

const nextButton = document.getElementById("next-btn");



let currentQuestionIndex = 0;

let score = 0;



function startQuiz() {

    currentQuestionIndex = 0;

    score = 0;

    nextButton.innerHTML = "Next";

    showQuestion();

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffleArray(questions);


function showQuestion() {

    resetState();

    let currentQuestion = questions[currentQuestionIndex];

    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;



    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");

        button.innerHTML = answer.text;

        button.classList.add("btn");

        answerButtons.appendChild(button);

        if (answer.correct) {

            button.dataset.correct = answer.correct;

        }

        button.addEventListener("click", selectAnswer);

    });

}



function resetState() {

    nextButton.style.display = "none";

    while (answerButtons.firstChild) {

        answerButtons.removeChild(answerButtons.firstChild);

    }

}



function selectAnswer(e) {

    const selectedBtn = e.target;

    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {

        selectedBtn.classList.add("correct");

        score++;

    } else {

        selectedBtn.classList.add("incorrect");

    }

    Array.from(answerButtons.children).forEach(button => {

        if (button.dataset.correct === "true") {

            button.classList.add("correct");

        }

        button.disabled = true;

    });

    nextButton.style.display = "block";

}



function showScore() {

    resetState();

    shuffleArray(questions);

    questionElement.innerHTML = `You scored ${score} out of 10 which is ${score / 10 * 100}% !`;

    nextButton.innerHTML = "Play Again";

    nextButton.style.display = "block";



}



function handleNextButton() {

    currentQuestionIndex++;

    if (currentQuestionIndex < 10) {

        showQuestion();

    } else {

        showScore();

    }

}



nextButton.addEventListener("click", () => {

    if (currentQuestionIndex < 10) {

        handleNextButton();

    } else {

        startQuiz();

    }

})



startQuiz();