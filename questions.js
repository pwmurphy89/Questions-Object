var theClass = [
"Tristan", 
"Josh", 
"Bogdan", 
"Laz",
"Keith",
"Will", 
"Curtis", 
"Joe", 
"Kochan", 
"Patrick", 
"Jon",
"Jeremy"
];

var questionArray = 
[
    {
        question: "What is CSS?",
        answer: "Cascading Style Sheets",
        difficulty:"1"
    },
    
    { 
        question: "What is HTML?",
        answer: "HyperText Markup Language",
        difficulty: "1"
    },
    {
        question: "What is Sublime?",
        answer: "Text Editor",
        diffculty: "2"
    },
      {
        question: "What the instructor's name?",
        answer: "Rob",
        diffculty: "1"
    },
      {
        question: "What floor is DigitalCrafts on?",
        answer: "5th",
        diffculty: "1"
    },
      {
        question: "What two characters distinguish a function?",
        answer: "()",
        diffculty: "2"
    },
      {
        question: "Is an object a type of array?",
        answer: "Yes",
        diffculty: "2"
    },
      {
        question: "Where should you link your javascript text?",
        answer: "Before the Body closing",
        diffculty: "2"
    },
      {
        question: "Can you loop through an object?",
        answer: "No",
        diffculty: "2"
    },
      {
        question: "What characters open and close arrays?",
        answer: "[]",
        diffculty: "2"
    }
      
    
    
]

questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));
questionArray.push(new ClassQuizItem("What is CSS?", "Cascading Style Sheets","1"));
questionArray.push(new ClassQuizItem("What is Sublime?","Text Editor", "2"));

questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));
questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));
questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));
questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));
questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));
questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));
questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));
questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));
questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));
questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));
questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));
questionArray.push(new ClassQuizItem("What is HTML?", "HyperText Markup Language", "1"));





function ClassQuizItem(parameter1, parameter2, parameter3) {
	this.question = parameter1;
	this.answer = parameter2;
	this.diffculty = parameter3;
}



//for(i=0; i < myArray.length; i++) {
	
//}

function newQuestion() {

	var rand=Math.floor(Math.random() * questionArray.length);
	var rand2 = Math.floor(Math.random() * theClass.length);
	document.getElementById("question-text").innerHTML = questionArray[rand].question + ' ' + theClass[rand2];


	document.getElementById("answer").innerHTML = questionArray[ran].answer;
}




//Constructr/ Prototype work
function Plan(name, price, space, transfer, pages) {
	this.name = name;
	this.price = price;
	this.space = space;
	this.transfer = transfer;
	this.pages = pages;
    this.discountMonths = discountMonths;
    
}

var plan1 = new Plan("Basic", 99, 100, 1000, 10, [0,1];
var plan2 = new Plan("Premium", 199, 500, 5000, 50,[2,3]);
var plan3 = new Plan("Diamond", 299, 1000, 2000, 500,[4,5]);

console.log(plan1);


Plan.prototype.calcAnnual = function(percentIfDisc) {

        var bestPrice = this.price;
        var currDate = new Date();
        var currMonth = currDate.getMonth();
        for (i=0; i<this.discountMonths.length; i++) {
            if(discountMonths[i] == currMonth) {
                bestPrice = this.price * percentIfDisc;
                break;
            }
    	}
    	return bestPrice * 12;
    };	

