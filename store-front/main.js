$(document).on('ready', function() {
  
// Pre-compile the handlebars template...
	var templateSource = $('#store-template').html();
	console.log('Template Source :', templateSource);

//Compile a handlebars template
	var storeTemplate = Handlebars.compile(templateSource);

	$('#product-container').append( storeTemplate(
		{productsData: productsData}
	));


	$('.addWish').on('click', function(){
		var productTitle = $(this).closest('.product').find(".productTitle").text()
		console.log(productTitle)
		$(this).closest('#product-container').siblings().append(productTitle)

	})

});