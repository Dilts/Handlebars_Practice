$(document).on('ready', function() {
  // Pre-compile the handlebars template...
	var templateSource = $('#my-template').html();
	console.log ('Template Source: ', templateSource);

//Compile a handlebars template
	var myTemplate = Handlebars.compile(templateSource);
  //Handlebars.compile takes in a string of HTML and gives back a function
	console.log('MyTemplate: ', myTemplate);	

	var context = {
		title: 'Using Handlebars!',
		message: 'This is a Message!'
	};


// Run the template function and append the output to the html DOM
	var output =myTemplate( context );
	console.log('Output: ', output);

// Use jQuery to append the outout string of html to the DOM
	$('body').append(output);


// Render another myTemplate to the page
	var context2 = {
		title: 'This is from 2',
		message: 'Hello, world from template v2'
};

// Short hand. Skipping the intermediate HTML string variable
	$('body').append( myTemplate(context2));

// Starter dataset
	var games=[
		{title: 'Braid', platform: 'all', price: '$5.00'},
		{title: 'HalfLife', platform: 'PC'}
	];

// Pre-compile the template
	var gameItemSource = $('#item-template').html();
	var gameItemTemplate = Handlebars.compile(gameItemSource);

// Run the template function with teach item seperately as a context
	for (var i=0; i < games.length; i++) {
		$('#games-list').append( gameItemTemplate( games[i]))
	}


// Use helper to render the list of games
var gameHelperSource = $('#helper-template').html();
var gameHelperTemplate = Handlebars.compile(gameHelperSource);


// Pass the 'games' array
$('#games-list-helper').append( gameHelperTemplate(
		{games: games}
	));


});















