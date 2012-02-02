$(document).ready(function(){
	var mainCssObj = {
		'background-color' : '#ccc',
		'color' : '#444',
		'width' : '200px',
		'border' : '1px solid #222',
		'position' : 'absolute',
		'top' : '10px',
		'right' : '10px'
    }
    
    var childCssObj = {
    	'margin' : '10px auto',
    }
    
	var seoPanel = $('<div id="seo-panel"></div>');
	$('body').append(seoPanel);
	seoPanel.css(mainCssObj);
	
	seoPanel.append('<p><strong>SEOjs - Overview of SEO</strong></p>');
	
	var h1Value = $('h1:first').text();
	var h1 = '<p><strong>H1</strong>: ' + h1Value + '</p>';
	
	var titleValue = document.title;
	var title = '<p><strong>Title</strong>: ' + titleValue + '</p>';
	
	var altsValue = Array();
	
	$('img').each(function(){
	   $(this).wrap('<span></span>');
	   var html = $(this).parent().html();
	   var alt = html.match( /alt=/ );
	   if(alt!=null) {
	      if(!$(this).attr('alt')) {
	          altsValue.push($(this));
	      }
	   } else {
	      altsValue.push($(this));
	   }
	});
	
	var i = altsValue.length;
	while(i--){
		$(altsValue[i].css('border', '5px solid red'));
	}

	var alt = '<p><strong>Missing Alts</strong>: Outlined in red borders</p>';
	
	var imageTitleValue = Array();
	
	$('img').each(function(){
	   $(this).wrap('<span></span>');
	   var html = $(this).parent().html();
	   var title = html.match( /title=/ );
	   if(title!=null) {
	      if(!$(this).attr('title')) {
	          imageTitleValue.push($(this));
	      }
	   } else {
	      imageTitleValue.push($(this));
	   }
	});
	
	var i = imageTitleValue.length;
	while(i--){
		$(imageTitleValue[i].css('box-shadow', '0px 0px 20px blue'));
	}
	
	var imageTitle = '<p><strong>Missing Image Titles</strong>: Shadowed in blue</p>';
	
	var metaDescValue = $('meta[name=description]').attr("content") ? $('meta[name=description]').attr("content") : 'Missing';
	var metaDesc = '<p><strong>Meta Description</strong>: ' + metaDescValue + '</p>';
	
	var metaKeywordsValue = $('meta[name=keywords]').attr("content") ? $('meta[name=keywords]').attr("content") : 'Missing';
	var metaKeywords = '<p><strong>Meta Keywords</strong>: ' + metaKeywordsValue + '</p>';
	
	seoPanel.append(h1, title, alt, imageTitle, metaDesc, metaKeywords);
	
	seoPanel.append('<p><small>Made by <a href="http://twostepmedia.co.uk" target="_BLANK">Ben Howdle</a></small></p>');
	
	seoPanel.children('p').css(childCssObj);
	
});