
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 300;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  "preguntas": [
				    {
				      "pregunta": "¿Quién marcó el único gol de Chivas en el último Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Orbelín Pineda",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Carlos Peña",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Omar Bravo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Javier Eduardo López",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántos clásicos ha ganado Matías Almeyda al frente de Chivas?",
				      "respuestas": [
				        {
				          "respuesta": "0",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "1",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "2",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "3",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuándo fue la última vez que América y Chivas chocaron en Liguilla?",
				      "respuestas": [
				        {
				          "respuesta": "Clausura 2013",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Apertura 2015",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Clausura 2016",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Verano 2002",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién fue el portero titular del América en el último Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Hugo González",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Moisés Muñoz",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Adolfo Ríos",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis Pineda",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién es el máximo goleador del América en Clásicos?",
				      "respuestas": [
				        {
				          "respuesta": "Carlos Reinoso",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Cuauhtémoc Blanco",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Zague",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Omam-Biyik",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuándo se jugó el primer Clásico en el Estadio Chivas?",
				      "respuestas": [
				        {
				          "respuesta": "Apertura 2012",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Apertura 2010",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Clausura 2010",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Clausura 2011",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuántos triunfos en el torneo de Liga suma Guadalajara en el Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "53",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "58",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "60",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "81",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién es el máximo goleador de Chivas en Clásicos?",
				      "respuestas": [
				        {
				          "respuesta": "Salvador Reyes",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Omar Bravo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Guillermo Sepúlveda",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alberto Medina",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién marcó el segundo gol del América en el último Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Darío Benedetto",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Darwin Quintero",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Oribe Peralta",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Paolo Goltz",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿En dónde se jugó el último Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Soldier Field",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "John F. Kennedy Stadium",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Estadio Chivas",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Estadio Azteca",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué jugador falló un penalti decisivo en el Clásico de la última liguilla?",
				      "respuestas": [
				        {
				          "respuesta": "Carlos Peña",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Marco Fabián",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Omar Bravo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Javier Eduardo López",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Entrenador holandés que dirigió a Chivas y América",
				      "respuestas": [
				        {
				          "respuesta": "Hans Westerhoff",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Leo Beenhakker",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Louis van Gaal",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alexander van Halen",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Cuándo se dio la victoria más reciente de Guadalajara en el Clásico?",
				      "respuestas": [
				        {
				          "respuesta": "Clausura 2016",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Apertura 2015",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Liguilla Clausura 2016",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Apertura 2014",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Jugador en activo con más goles en el Clásico",
				      "respuestas": [
				        {
				          "respuesta": "Omar Bravo",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Raúl Jiménez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ángel Reyna",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Francisco Javier Rodríguez",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Portero titular del Guadalajara en el último Clásico",
				      "respuestas": [
				        {
				          "respuesta": "Antonio Rodríguez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Javier Ledesma",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Rodolfo Cota",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Miguel Jiménez Ponce",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién marcó un doblete en la goleada de América a Chivas por 4-0 en el Clausura 2014?",
				      "respuestas": [
				        {
				          "respuesta": "Luis Gabriel Rey",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Raúl Jiménez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis Ángel Mendoza",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Miguel Layún",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién era el entrenador del América en la goleada de 4-0 a Chivas en el Clausura 2014?",
				      "respuestas": [
				        {
				          "respuesta": "Miguel Herrera",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Antonio Mohamed",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Ignacio Ambriz",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Carlos Reinoso",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "Jugador emblemático de Chivas que pasó al América en 1999",
				      "respuestas": [
				        {
				          "respuesta": "Benjamín Galindo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Demetrio Madero",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Luis García",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ramón Ramírez",
				          "tipo": "true"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Quién protagonizó el último traspaso entre Chivas y América?",
				      "respuestas": [
				        {
				          "respuesta": "Alberto Jorge García",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Carlos Salcedo",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Manuel Pérez",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Jesús Mendoza",
				          "tipo": "false"
				        }
				      ]
				    },
				    {
				      "pregunta": "¿Qué directivo del futbol mexicano vistió las camisetas de Chivas y América como jugador?",
				      "respuestas": [
				        {
				          "respuesta": "Guillermo Cantú",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Ricardo Peláez",
				          "tipo": "true"
				        },
				        {
				          "respuesta": "Eduardo de la Torre",
				          "tipo": "false"
				        },
				        {
				          "respuesta": "Alejandro Irarragorri",
				          "tipo": "false"
				        }
				      ]
				    }
				  ]
				};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		});
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";

  	if(aciertos<=5){
	  	aficionado="";
	  	msg="¡Una vergüenza! Cuídate que Cuauhtémoc Blanco ya te anda buscando…";
  	}
  	
  	if(aciertos<=10 && aciertos >= 6){
	  	aficionado="";
	  	msg="ni Ángel Reyna dio tanta pena… ¿o sí?";
  	}

  	if(aciertos>=11 && aciertos<=15){
	  	aficionado="";
	  	msg="¡Para lo desesperado que está Ambríz, seguro te contrata!";
  	}

  	if(aciertos>=16 && aciertos<=20){
	  	aficionado="";
	  	msg="¡De aquí al Rebaño y luego Europa!";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
		var text = encodeURIComponent("Mi predicción es: América "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " Chivas primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/pizzafut-final-euro");
		window.open("https://twitter.com/share?text="+text+"&hashtags=pizzafut&url="+url,"","width=500, height=300");

	} else {
		
		
		
	}
	
	});
});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


