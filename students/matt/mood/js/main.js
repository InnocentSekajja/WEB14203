//https://docs.google.com/spreadsheets/d/1XAwqayvOEHWkg3RQNehksVoGUriqOUHI-Qjs_g9X2SM/pubhtml?gid=0&single=true"
console.log('main.js ready!')

// let's build the spreadsheet URL
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "18rOSwgEsIHnQzHgv6rMTQ0rX30ioLZTJV7rRVZPZN7I" //public key
spreadsheetURL += "/1/" //sheet number
spreadsheetURL += "public/values?alt=json" // we want JSON!

console.log(spreadsheetURL)

// let's build the quote spreadsheet URL
var quoteURL = "https://spreadsheets.google.com/feeds/list/"
quoteURL += "1NmuDsZDs-FnhRJQB1A83V8uz1DVnUXQVAOplZSmpHj8" //public key
quoteURL += "/1/" //sheet number
quoteURL += "public/values?alt=json" // we want JSON!

console.log(quoteURL)






// let's define the weather types
var ThunderstormData = []
var DrizzleData = []
var RainData = []
var SnowData = []
var AtmosphereData = []
var CloudsData = []
var ExtremeData = []
var AdditionalData = []

var isSpreadSheetLoaded = false;
var isWeatherLoaded = false;

var weatherCondition = null;

var feelingsQuotes = {} // empty object

// feelingsQuotes[row.gsx$feeling.$t] = row.gsx$quote.$t
/*

	feelingsQuotes
	{
		Happy: '"Happiness is when what you think, what you say, and what you do are in harmony." - Mahatma Gandhi',
		Excited: 'qkjdfhladskj',

	}

	feelingsQuotes[mood] 

*/




// use jQuery to get a JSON file from a certain URL
// once we get that file, do something
$.getJSON(spreadsheetURL, function(result)
{
	// console.log(result)

	var weatherTypeSpreadsheetRows = result.feed.entry
	// loop through each row in the spreadsheet
	$.each(weatherTypeSpreadsheetRows, function(index, row){
		// console.log(row)

		//Thunderstorm weather
		var thunderstorm = row.gsx$thunderstorm.$t
		// console.log(thunderstorm)

		if (thunderstorm !="") ThunderstormData.push(thunderstorm)

			


		//Drizzle weather
		var drizzle = row.gsx$drizzle.$t
		// console.log(drizzle)

		if (drizzle !="") DrizzleData.push(drizzle)

		//Rain weather
		var rain = row.gsx$rain.$t
		// console.log(rain)

		if (rain !="") RainData.push(rain)	

		//Snow weather
		var snow = row.gsx$snow.$t
		// console.log(snow)

		if (snow !="") SnowData.push(snow)

		//Atmosphere weather
		var atmosphere = row.gsx$atmosphere.$t
		// console.log(atmosphere)

		if (atmosphere !="") AtmosphereData.push(atmosphere)

		//Clouds weather
		var clouds = row.gsx$clouds.$t
		// console.log(clouds)

		if (clouds !="") CloudsData.push(clouds)

		//Extreme weather
		var extreme = row.gsx$extreme.$t
		// console.log(extreme)

		if (extreme !="") ExtremeData.push(extreme)

		//Additional weather
		var additional = row.gsx$additional.$t
		// console.log(additional)

		if (additional !="") AdditionalData.push(additional)


		//var name = student.gsx$name.$t //grab the student's name
		//var animal = student.gsx$favouriteanimal.$t //grab the student's animal
		//console.log(name + " would love to get a pet " + animal + " for Christmas!")
		//var sentence = name + " would love to get a pet " + animal + " for Christmas!"
		//var li = "<li>" + sentence + "</li>"
		//$("ul#likes").append(li)	
	})

	isSpreadSheetLoaded = true

	tryMoodPrediction()
})

var decidedMood

function tryMoodPrediction()
{
	// checks for spreadsheet loaded
	if (isSpreadSheetLoaded == false) return

	// checks for weather condition loaded
	if (isWeatherLoaded == false) return

	// if both there, then we can proceed
	console.log('let us proceed to predict your mood, based on ' + weatherCondition)

	var moodsArray

	if (weatherCondition < 300)
	{
		moodsArray = ThunderstormData
	}	
	else if (weatherCondition < 400)
	{
		moodsArray = DrizzleData
	}
	else if (weatherCondition < 600)
	{
		moodsArray = RainData
	}
	else if (weatherCondition < 700)
	{
		moodsArray = SnowData
	}
	else if (weatherCondition < 800)
	{
		moodsArray = AtmosphereData
	}
	else if (weatherCondition < 900)
	{
		moodsArray = CloudsData
	}
	else if (weatherCondition < 950)
	{
		moodsArray = ExtremeData
	}
	else if (weatherCondition < 1000)
	{
		moodsArray = AdditionalData
	}
	// TODO the rest
	else
	{
		moodsArray = ['Happy']
	}	
	

	// pick a mood randomly from the moodsArray
	var mood = moodsArray[Math.floor(Math.random()*moodsArray.length)];

	// display the mood
	// check for examples on CodePen
	$("#scanMessage") .fadeOut("slow");
	$("#configuring") .fadeIn("slow");
	$("#message").delay ("3000") .fadeIn("slow") .html("You should be " + mood + " today")
	$("#configuring").delay ("1500") .fadeOut("slow");
	
	decidedMood = mood;

	console.log(mood);

	// var mood 

	var quote = quotes[mood]
	if (!quote) quote = 'It is okay to cry' // if the line above doesn't return anything

	$("#quote").delay("4000").fadeIn("slow").html(quote)


	/*if (decidedMood = 'Happy') { 
		$("#HappyQuote").show("slow");
	}
	else if (decidedMood = 'Excited') {
		$("#ExcitedQuote").delay ("3000") .fadeIn("slow").html(ExcitedQuote)
	}
	else if (decidedMood = 'Melancholy') {
			$("#MelancholyQuote").show("slow");
				}
	else if (decidedMood= 'Depressed') {
		$("#DepressedQuote").delay ("3000") .fadeIn("slow").html(DepressedQuote)
	}*/

}

// let's define the mood quotes
var quotes = 
{
	'Happy' : "'Happiness is when what you think, what you say, and what you do are in harmony.' - Mahatma Gandhi",
	'Excited' : " 'When I'm inspired, I get excited because I can't wait to see what I'll come up with next.' - Dolly Parton",
	'Thankful' : " 'If the only prayer you ever say in your entire life is thank you, it will be enough.' - Meister Eckhart",
	'Loving' : " 'Love is when the other person's happiness is more important than your own.' - H. Jackson Brown, Jr",
	'Upset' : " 'Only way you can get upset is when you expect something.' - Bernie Mac",
	'Hateful' : " 'Everything is funny as long as it is happening to somebody else.' - Will Rogers",
	'Melancholy' : " 'I can barely conceive of a type of beauty in which there is no Melancholy.' - Charles Baudelaire",
	'Depressed' : " 'The word 'happiness' would lose its meaning if it were not balanced by sadness.' - Carl Jung",
}

/*var HappyQuote = ["'Happiness is when what you think, what you say, and what you do are in harmony.' - Mahatma Gandhi"]
var MelancholyQuote = [" 'I can barely conceive of a type of beauty in which there is no Melancholy.' - Charles Baudelaire"]

var ExcitedQuote = []
var ThankfulQuote = []
var LovingQuote = []
var UpsetQuote = []
var HatefulQuote = []
var MelancholyQuote = [" 'I can barely conceive of a type of beauty in which there is no Melancholy.' - Charles Baudelaire"]
var DepressedQuote = [" 'The word 'happiness' would lose its meaning if it were not balanced by sadness.' - Carl Jung"]
*/


		
function moodQuote(){

}


	
