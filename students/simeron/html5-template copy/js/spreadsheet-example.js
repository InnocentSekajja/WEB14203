// <a href="https://docs.google.com/spreadsheets/d/1XAwqayvOEHWkg3RQNehksVoGUriqOUHI-Qjs_g9X2SM/pubhtml?gid=0&single=true">spreadsheet</a>
console.log('main.js up and running!!')

//let's build the spreadsheet URL 
var spreadsheetURL = "https://spreadsheets.google.com/feeds/list/"
spreadsheetURL += "1XAwqayvOEHWkg3RQNehksVoGUriqOUHI-Qjs_g9X2SM" //public key 
spreadsheetURL += "/1/" //sheet number
spreadsheetURL += "public/values?alt=json" // we want JSON

console.log(spreadsheetURL)

// use jQuery to get a JSON file from a certain URL 
// once we get that file, do something
$.getJSON(spreadsheetURL, function(result){
	console.log(result)

	var spreadsheetRows = result.feed.entry
	$.each(spreadsheetRows, function(index, row){

		console.log(row)
		var name = row.gsx$name.$t
		var animal = row.gsx$favouriteanimal.$t
		console.log(name + " would like to have a pet " + animal)
		var sentence = name + " would like to have a pet " + animal
		var li = "<li>" + sentence + "</li>"
		$("ul#likes").append(li)
		//grab the students name 
		//grab the students animal 

		
	})

	$("#loading").fadeOut()
})

/*

food = 
[
	'Italian',
	'Chinese',
	'Indian'
]

*/