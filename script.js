var matrix1 = {"Title":"matrix1","Year":"1999","Rated":"R","Released":"31 Mar 1999","Runtime":"136 min","Genre":"Action, Sci-Fi","Director":"Andy Wachowski, Lana Wachowski","Writer":"Andy Wachowski, Lana Wachowski","Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving","Plot":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.","Language":"English","Country":"USA, Australia","Awards":"Won 4 Oscars. Another 33 wins & 40 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTkxNDYxOTA4M15BMl5BanBnXkFtZTgwNTk0NzQxMTE@._V1_SX300.jpg","Metascore":"73","imdbRating":"8.7","imdbVotes":"1,119,993","imdbID":"tt0133093","Type":"movie","Response":"True", "Oscars": ["Best Film Editing","Best Sound","Best Effects, Sound Effects Editing","Best Effects, Visual Effects"]}


var matrix2 = {"Title":"matrix2","Year":"2003","Rated":"R","Released":"15 May 2003","Runtime":"138 min","Genre":"Action, Sci-Fi","Director":"Andy Wachowski, Lana Wachowski","Writer":"Andy Wachowski, Lana Wachowski, Andy Wachowski (characters), Lana Wachowski (characters)","Actors":"Ray Anthony, Christine Anu, Andy Arness, Alima Ashton-Sheibu","Plot":"Neo and the rebel leaders estimate that they have 72 hours until 250,000 probes discover Zion and destroy it and its inhabitants. During this, Neo must decide how he can save Trinity from a dark fate in his dreams.","Language":"English, French","Country":"USA, Australia","Awards":"5 wins & 21 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMjA0NDM5MDY2OF5BMl5BanBnXkFtZTcwNzg5OTEzMw@@._V1_SX300.jpg","Metascore":"62","imdbRating":"7.2","imdbVotes":"400,966","imdbID":"tt0234215","Type":"movie","Response":"True","Oscars": ["Best Science Fiction Film(Nominated)","Best Costumes(Nominated)"]}
	
var matrix3 = {"Title":"matrix3","Year":"2003","Rated":"R","Released":"05 Nov 2003","Runtime":"129 min","Genre":"Action, Sci-Fi","Director":"Andy Wachowski, Lana Wachowski","Writer":"Andy Wachowski, Lana Wachowski, Andy Wachowski (characters), Lana Wachowski (characters)","Actors":"Mary Alice, Tanveer K. Atwal, Helmut Bakaitis, Kate Beahan","Plot":"The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.","Language":"English, French","Country":"Australia, USA","Awards":"1 win & 19 nominations.","Poster":"http://ia.media-imdb.com/images/M/MV5BMTkyNjc4NTQzOV5BMl5BanBnXkFtZTcwNDYzMTQyMQ@@._V1_SX300.jpg","Metascore":"47","imdbRating":"6.7","imdbVotes":"346,296","imdbID":"tt0242653","Type":"movie","Response":"True","Oscars": ["NO AWARDS(piece of crap)"]}	

//Vanilla
// onload = function(){
// // 	var xhr = new XMLHttpRequest();
// // xhr.open("GET", "http://www.omdbapi.com/?t=the+matrix+reloaded&y=&plot=short&r=json", false);
// // xhr.send();


// var elem = document.createElement("img");
// elem.setAttribute("src", matrix2.Poster);
// elem.setAttribute("alt", matrix2.Title);
// document.getElementById("matrix2").appendChild(elem);

// var elem2 = document.createElement("img");
// elem2.setAttribute("src", matrix3.Poster);
// elem2.setAttribute("alt", matrix3.Title);
// document.getElementById("matrix3").appendChild(elem2);
	
// }

var matrixArr = [matrix1,matrix2,matrix3]


//Jquery
$( document ).ready(function() {

var m1 = '<img src='+ matrix1.Poster + ' />'
var m2 = '<img src='+ matrix2.Poster + ' />'
var m3 = '<img src='+ matrix3.Poster + ' />'
	
$(m1).hide().prependTo('#matrix1').fadeIn(2000).width("200px");
$(m2).hide().prependTo('#matrix2').fadeIn(3000).width("200px");
$(m3).hide().prependTo('#matrix3').fadeIn(4000).width("200px");
  console.log( 'ready!' );
});


var choosenMatrix = function(ev){	 	
$.each(matrixArr, function( i, l ){
  if(l.Title==ev.id){	  
	 animateChoosenMatrix(l)
    }  
  }); 
}




// function animateChoosenMatrix(choosenOne){
// 	var choosen;
//  if ($(".stashed")[0]){
//     // Do something if class exists
// } else {
//     // Do something if class does not exist
//     $(".row").append("<div class='col-md-3  choosenMatrix'><img/></div>");
//     $(".row").append("<div class='col-md-3 col-md-offset-5 stashed'></div>");
// }
  
// 	$.each(matrixArr, function( i, l ){
    
//   	if(l.Title!==choosenOne.Title){	  
//      var img = l.Poster; 
//      choosen = l.Title;
//     $( ".stashed" ).append("<img id="+choosen+" class='myClass' src="+ img +"/>"); 
// 	  $( "#" + l.Title ).remove("#" + l.Title)
//     } else {
//     choosen = l.Title;
    
    
//     $( ".choosenMatrix img" ).attr('src', l.Poster); 
    
    
// 		$( "#" + l.Title ).append( "<p> Year: "+ l.Year +"</p>" ).append( "<p> Plot: "+ l.Plot+"</p>" );
//     $(".page-header").append($("<button onClick=showAwards("+ choosen +")>Awards</button>"));
//     $(".page-header").find("h1").html(l.Title);
    
// 	} 
//   }); 
// }

function animateChoosenMatrix(choosenOne){

 if ($(".stashed")[0]){
    // Do something if class exists
    $( ".stashed" ).empty();
} else {
    // Do something if class does not exist
    $(".row").append("<div class='col-md-3  choosenMatrix'><img/></div>");
    $(".row").append("<div class='col-md-3 col-md-offset-5 stashed'></div>");
}
  
	$.each(matrixArr, function( i, l ){
    
  	if(l.Title!==choosenOne.Title){	  
     
    $( ".stashed" ).append("<img  class='myClass' name="+ l.Title +" src="+ l.Poster +"/>"); 
	  $( "#" + l.Title ).remove("#" + l.Title)
    } else {
   
    console.log(l);
    $( "#" + l.Title ).remove("#" + l.Title)
    $( ".choosenMatrix img" ).attr('src', l.Poster).attr('class', l.Title);
                             
    updateHeader(l);                         
       
	} 
  }); 
}

function updateHeader(l){
  var matrix = matrix;
  	$( "#" + l.Title ).append( "<p> Year: "+ l.Year +"</p>" ).append( "<p> Plot: "+ l.Plot+"</p>" );
    $("button").remove();
    $(".page-header").append($("<button name="+ l.Title +" class='awards'>Awards</button>")).append($("<button name="+ l.Plot +" class='plot'>Plot</button>"));
    $(".page-header").find("h1").html(l.Title);
  
}

var showAwards = function(choosen){
//  var ul = $( "#" + choosen.Title).removeClass("col-md-4").addClass("col-md-6").prepend('<ul class="awards"></ul>').find('ul');
// var ul = $( "#" + choosen.Title).append('<ul class="awards"></ul>').find('ul');
// var img = $("#" + choosen.Title ).find('img');
// $('<ul class="awards"></ul>').insertAfter(img);
// var ul = $( "#" + choosen.Title).find('ul');
//  $.each(choosen.Oscars, function( i, l ){
//   ul.append("<li>"+ l +"</li>").slideDown("slow");
// })

console.log(this);
}





$('body').on('click', '.myClass', function() {
  //do something
  $(".movieAwards").remove();
  console.log(this.name);
  myMatrix(this.name);
});

// Awards
$('body').on('click', '.awards', function() {
  var matrix = getMatrix(this.name);
    
    $(".choosenMatrix").after($("<div class='col-md-3 movieAwards'><ul class='awardsList'></ul></div>"));
    $.each(matrix.Oscars, function( i, l ){
    $(".awardsList").append("<li>"+ l +"</li>").hide().animate({
    width: [ "toggle", "swing" ],
    height: [ "toggle", "swing" ],
    opacity: "toggle"
  }, 300, "linear")
  })
});

// Plot
$('body').on('click', '.plot', function() {
  var matrix = getMatrix(this.name);
    
    $(".choosenMatrix").after($("<div class='col-md-3 movieAwards'><ul class='awardsList'></ul></div>"));
    $.each(matrix.Oscars, function( i, l ){
    $(".awardsList").append("<li>"+ l +"</li>").hide().animate({
    width: [ "toggle", "swing" ],
    height: [ "toggle", "swing" ],
    opacity: "toggle"
  }, 300, "linear")
  })
});

var myMatrix = function(ev){	
$.each(matrixArr, function( i, l ){
  if(l.Title==ev){	  
	animateChoosenMatrix(l)
  }})
  }
  


function getMatrix(matrix)
{  
   var toReturn; 
   $.each(matrixArr, function(i) {
    
        if(matrixArr[i].Title == matrix) {
            toReturn = matrixArr[i]; 
            return false;
        }   
   }); 
   return toReturn; 
}


