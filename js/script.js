/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Quotes array 

var quotes = [
	{ quote: 'There is no substitute for hard work.',
	source: 'Thomas Edison',
	category: 'Inspirational'
	},

	{quote: 'I find that the harder I work, the more luck I seem to have.',
	source: 'Thomas Jefferson',
	category: 'Inspirational'
	},

	{quote: 'To succeed, work hard, never give up, and above all, cherish a magnificent obsession.',
	source: 'Walt Disney',
	category: 'Inspirational'
	},

	{quote: 'Be humble, be hungry, and always be the hardest worker in the room.',
	source: 'Dwayne "The Rock" Johnson',
	category: 'Inspirational'
	},

	{quote: 'Great things come from hard work and perserverance.  No excuses.',
	source: 'Kobe Bryant',
	category: 'Inspirational'
	},

	{quote: 'The road to success comes through hard work, determination, and sacrafice',
	source: 'Dolzinski',
	category: 'Inspirational'
	},

	{quote: 'You talking to me?',
	source: 'Robert DeNiro',
	citation: 'Taxi Driver',
	year: 1976,
	category: 'Movies'
	},

	{quote: "I'll be back",
	source: 'Arnold Schwarzenegger',
	citation: 'The Terminator',
	year: 1984,
	category: 'Movies'
	}
]

// Creating the getRandomQuote function

function getRandomQuote() {
var randNum =   Math.floor(Math.random() * quotes.length)
var randomQuote = quotes[randNum];
return randomQuote;
 }
 console.log(getRandomQuote())

// Generating a random RGB color and concatonating it to a string.
function getRandomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
// Creating the changeColor function 
function changeColor() {
	var randomColor = getRandomColor();
	document.body.style.backgroundColor = randomColor;
}

// Creating the printQuote function

function  printQuote() {

	var randomQuote = getRandomQuote();
	var string = '';
	string = '<p class="quote">' + randomQuote.quote + '</p>';
	string += '<p class="source">' + randomQuote.source;

	if(randomQuote.citation){
		string += '<span class="citation">' + randomQuote.citation + '</span>'
	}
	if(randomQuote.year){
		string += '<span class="year">' + randomQuote.year + '</span>'
	}
	if(randomQuote.category){
		string += '<span class="category">' + " : " + randomQuote.category + '</span>'
	string += '</p>'
	document.getElementById('quote-box').innerHTML = string;
	changeColor();
	}
}
// Adding a timer to call the printQuote function	
var timer = window.setInterval(printQuote, 10000);
// Click event listener
document.getElementById('load-quote').addEventListener("click", printQuote, false);