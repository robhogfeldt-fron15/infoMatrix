var matrix1 = {"Title":"matrix1","Year":"1999","Rated":"R","Released":"31 Mar 1999","Runtime":"136 min","Genre":"Action, Sci-Fi","Director":"Andy Wachowski, Lana Wachowski","Writer":"Andy Wachowski, Lana Wachowski","Actors":"Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving","Plot":"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.","Language":"English","Country":"USA, Australia","Awards":"Won 4 Oscars. Another 33 wins & 40 nominations.","Poster":"https://image.tmdb.org/t/p/w185/lZpWprJqbIFpEV5uoHfoK0KCnTW.jpg","Metascore":"73","imdbRating":"8.7","imdbVotes":"1,119,993","imdbID":"tt0133093","Type":"movie","Response":"True", "Oscars": ["Best Film Editing","Best Sound","Best Effects, Sound Effects Editing","Best Effects, Visual Effects"], "Trailer":"https://www.youtube.com/embed/_Ls19O-9p3s"}


var matrix2 = {"Title":"matrix2","Year":"2003","Rated":"R","Released":"15 May 2003","Runtime":"138 min","Genre":"Action, Sci-Fi","Director":"Andy Wachowski, Lana Wachowski","Writer":"Andy Wachowski, Lana Wachowski, Andy Wachowski (characters), Lana Wachowski (characters)","Actors":"Ray Anthony, Christine Anu, Andy Arness, Alima Ashton-Sheibu","Plot":"Neo and the rebel leaders estimate that they have 72 hours until 250,000 probes discover Zion and destroy it and its inhabitants. During this, Neo must decide how he can save Trinity from a dark fate in his dreams.","Language":"English, French","Country":"USA, Australia","Awards":"5 wins & 21 nominations.","Poster":"https://image.tmdb.org/t/p/w185/ezIurBz2fdUc68d98Fp9dRf5ihv.jpg","Metascore":"62","imdbRating":"7.2","imdbVotes":"400,966","imdbID":"tt0234215","Type":"movie","Response":"True","Oscars": ["Best Science Fiction Film(Nominated)","Best Costumes(Nominated)"],"Trailer":"https://www.youtube.com/embed/kYzz0FSgpSU"}
	
var matrix3 = {"Title":"matrix3","Year":"2003","Rated":"R","Released":"05 Nov 2003","Runtime":"129 min","Genre":"Action, Sci-Fi","Director":"Andy Wachowski, Lana Wachowski","Writer":"Andy Wachowski, Lana Wachowski, Andy Wachowski (characters), Lana Wachowski (characters)","Actors":"Mary Alice, Tanveer K. Atwal, Helmut Bakaitis, Kate Beahan","Plot":"The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.","Language":"English, French","Country":"Australia, USA","Awards":"1 win & 19 nominations.","Poster":"https://image.tmdb.org/t/p/w185/2aJvwc4zXqtVUDbEu62e14J0mhe.jpg","Metascore":"47","imdbRating":"6.7","imdbVotes":"346,296","imdbID":"tt0242653","Type":"movie","Response":"True","Oscars": ["NO AWARDS(piece of crap)"],"Trailer":"https://www.youtube.com/embed/hMbexEPAOQI"}	


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


function animateChoosenMatrix(choosenOne){

 
 if ($(".stashed")[0]){
    $( ".stashed" ).empty();
 //Körs bara första gången   
} else {
    
    $(".row").append("<div class='col-md-3 choosenMatrix'><img/></div>");
    $(".row").append("<div class='col-md-6 middle'></div>");
    $(".row").append("<div class='col-md-2 col-md-offset-1 stashed'></div>");
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
  
  	$( "#" + l.Title ).append( "<p> Year: "+ l.Year +"</p>" ).append( "<p> Plot: "+ l.Plot+"</p>" );
    $("button").remove();
    $(".page-header").append($("<button name="+ l.Title +" class='awards btn-success'>Awards</button>"))
                     .append($("<button name="+ l.Title +" class='plot btn-success'>Plot</button>"))
                     .append($("<button name="+ l.Title +" class='trailer btn-success''>Trailer</button>"));
    $(".page-header").find("h1").html(l.Title);
}

//Choose from stashed
$('body').on('click', '.myClass', function() {
  $(".movieAwards").remove();
  $(".movietrailer").remove();
  console.log(this.name);
  var matrix = getMatrix(this.name)
  animateChoosenMatrix(matrix)
});

// Awards
$('body').on('click', '.awards', function() {
  var matrix = getMatrix(this.name);
    $(".movietrailer").remove();
    $(".movieplot").remove();
    $(".awardsList").remove();
    $(".middle").append($("<div class='movieAwards'><ul class='awardsList'></ul></div>"));
    
    $.each(matrix.Oscars, function( i, l ){
    $(".awardsList").append("<li>"+ l +"</li>");
  })
});

// Plot
$('body').on('click', '.plot', function() {
   $(".movietrailer").remove();
    $(".movieplot").remove();
    $(".awardsList").remove();
    var matrix = getMatrix(this.name);  
    $(".middle").append($("<div class='movieplot'>"+ matrix.Plot +"</div>"));
});

// Trailer
$('body').on('click', '.trailer', function() {
  
    $(".movieplot").remove();
    $(".awardsList").remove();
    $(".movietrailer").remove();
    var matrix = getMatrix(this.name);  
    $(".middle").append($("<iframe width='420' height='315' src="+matrix.Trailer+" class='movietrailer'></iframe>"));
});

// Get Matrix by Title
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