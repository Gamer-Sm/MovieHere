

const movies = [
  /*----------------------------------------------------------peliculas de Accion------------------------------------------------------------*/
    { name: "Rapidos y Furiosos 1" },
    { name: "Scarface" },
    { name: "Rapidos y Furiosos 2" },
    { name: "Rapidos y Furiosos 3" },
    { name: "Rapidos y Furiosos 4" },
    { name: "Rapidos y Furiosos 5" },
    { name: "Rapidos y Furiosos 6" },
    { name: "Rapidos y Furiosos 7" },
    { name: "Rapidos y Furiosos 8" },
    { name: "Rapidos y Furiosos 9" },
    { name: "Rapidos y Furiosos 10" },
    { name: "Caracortada" },
    { name: "R.I.P.D Policia del mas alla"},
    { name :"Kong la Isla calavera"},
    { name: "Oppenheimer" },
    { name: "RoboCop 1" },
    { name: "RoboCop 2" },
    { name: "RoboCop 3"},
    { name :"RoboCop 4"},
    { name: "Karate Kid" },
    { name: "RoboCop 1" },
    { name: "RoboCop 2" },
    { name: "RoboCop 3"},
    { name :"RoboCop 4"},
    { name: "Karate Kid" },
    { name: "El precio del mañana"},
    { name: "La sociedad de la nieve" },
    { name: "MadMax 1"},
    { name :"MadMax 2"},
    { name :"MadMax 3"},
    /*----------------------------------------------------------peliculas de Terror--------------------------------------------------------------*/
    { name: "Aracnofobia" },
    { name: "Hallowen" },
    { name: "Atrapada en el sotano" },
    { name: "Casper" },
    { name: "ScaryMovie" },
    { name: "five Nights at Freddy's" },
    { name: "Estacion Zombie" },
    { name: "Los CazaFantasmas" },
    { name: "CazaFantasmas" },
    { name: "Ghostbusters" },
    { name: "Terror Bajo la tierra" },
    { name: "Terror Bajo la tierra 2" },
    { name: "Terror Bajo la tierra 3" },
    { name: "Terror Bajo la tierra 4" },
    { name: "Terror Bajo la tierra 5" },
    { name: "Terror Bajo la tierra 6" },

     /*----------------------------------------------------------peliculas de Disney--------------------------------------------------------------*/
     { name: "Bernando y Bianca" },
     { name: "Los rescatadores" },
     { name: "Elemental" },
     { name: "El Rey Leon" },
     { name: "Bolt"},
     { name :"Encanto"},
     { name: "Monsters Inc"},
     { name: "Buscando a Dory" },
     { name: "La Familia Futuro" },
     { name: "Monsters University"},
     { name :"Buscando a Nemo"},
     { name :"Frozen"},
     { name: "Mulan"},
     { name: "Cars 1" },
     { name: "Frozen 2" },
     { name: "Peter Pan"},
     { name :"Cars 2"},
     { name :"Increibles 1"},
     { name :"Pinocho"},
     { name: "Cars 3"},
     { name: "Increibles 2" },
     { name: "La princesa y el sapo" },
     { name: "Cenicienta"},
     { name :"Juego de Gemelas"},
     { name :"Ralph el demoledor"},
     { name :"Chicken Little"},
     { name :"El libro de la selva"},
     { name: "Wifi Ralph"},
     { name: "Ralph Wifi"},
     { name: "Coco" },
     { name: "Las locuras del emperador" },
     { name: "locuras del emperador" },
     { name: "Ratatouille"},
     { name :"La Dama y el Vagabundo"},
     { name: "Luca" },
     { name: "Red" },
     { name: "Dumbo"},
     { name :"Moana"},
     { name :"La Sirenita"},
     { name :"Sirenita"},
     { name :"Alicia en el país de las maravillas"},
     { name: "Up"},
     { name: "Toy Story" },
     { name: "Alicia a través del espejo" },
     { name: "Vacas vaqueras"},
     { name :"Toy Story 2"},
     { name :"Zootopia"},
     { name :"Toy Story 4"},
     { name :"ToyStory 3"},
     { name: "Hocus Pocus 1"},
     { name: "Abracadabra 1"},
     { name: "Hocus Pocus 2" },
     { name: "Abracadabra 2" },
     { name: "El Extraño Mundo de Jack" },
  /*----------------------------------------------------------peliculas de MARVEL--------------------------------------------------------------*/
  { name: "Thor"},
  { name: "Thor Un mundo oscuro"},
  { name: "Capitan America 1"},
  { name: "Ant Man"},
  { name: "Black Widow" },
  { name :"Pantera Negra"},
  { name: "Thor Ragnarok"},
  { name: "Ant-Man y La Avispa" },
  { name: "Los vengadores"},
  { name :"los vengadores Infinity War"},
  { name: "los vengadores: EndGame"},
  { name: "Capitan America Civil War"},
  { name: "Los vengadores era de ultron"},
  { name: "Guardianes de la galaxia"},
  { name: "Guardianes de la galaxia 2"},
  { name: "Capitan America y el soldado del invierno"},
  { name: "Iron Man 1"},
  { name :"Iron Man 2"},
  { name: "Iron Man 3" },
  { name: "Capitana Marvel"},
  { name: "SpiderMan 1"},
  { name: "El hombre araña 1"},
  { name: "El hombre araña 2"},
  { name: "El hombre araña 3"},
  { name: "SpiderMan 2"},
  { name: "SpiderMan 3"},
  { name: "Spider-miles"},
  { name: "Spider-miles2" },
  { name :"Ghostrider1"},

  
  /*----------------------------------------------------------peliculas de Navidad--------------------------------------------------------------*/
  { name: "El grinch"},
  { name: "El grinch Animado" },
  { name :"El expreso polar"},
  { name: "El regalo prometido" },
  { name :"Klaus"},
  { name: "Los Fantasmas de Scrooge" },
  { name :"Mi pobre angelito"},
  /*----------------------------------------------------------peliculas de Comedia--------------------------------------------------------------*/
  { name: "Bad boys"},
  { name: "Dos policias Rebeldes"},
  { name: "SuperCool"},
  { name: "pequeño pero peligroso"},
  { name: "Cómo ser un Latin Lover"},
  { name: "La Mascara"},
  { name: "SuperCool"},
  { name: "Fiesta de salchichas"},
  { name: "Son como niños"},
  { name: "Son como niños 2"},
  { name: "La Boda de mi Mejor Amigo"},
  { name: "Proyecto X" },
  { name :"El Diablo Viste a la Moda"},
  { name: "No se Aceptan Devoluciones" },
  { name :"Y Donde Estan las Rubias?"},
  { name: "El Lobo de Wall Street" },
  { name :"The Truman Show"},
  { name :"Ted"},
  { name :"Ted 2"},


  /*----------------------------------------------------------peliculas de Fantasia/Aventura--------------------------------------------------------------*/
  { name: "Charlie y la fabrica de Chocolates"},
  { name: "Wonka" },
  { name :"Matilda"},
  { name: "Pinocchio Guillermo del toro" },
  { name :"SpaceJam"},
  { name: "SpaceJam2" },
  { name :"Las Cronicas de Narnia 1"},
  { name :"Las Cronicas de Narnia 2"},
  { name :"Las Cronicas de Narnia 3"},
  { name :"Harry Potter 1: y la piedra filosofal"},
  { name :"Harry Potter 2: y la camara secreta"},
  { name :"Harry Potter 3: y el prisionero de azkaban"},
  { name :"Harry Potter 4: y el caliz de fuego"},
  { name :"Harry Potter 5: y la orden del fenix"},
  { name :"Harry Potter 6: y el misterio del principe"},
  { name :"Harry Potter 7: y las reliquias de la muerte-parte 1"},
  { name :"Harry Potter 7: y las reliquias de la muerte-parte 2"},

  { name :"127 Horas"},
  { name :"La momia 1"},
  { name :"La momia 2"},
  { name :"La momia 3"},
  
  { name :"La leyenda del tesoro perdido 1"},
  { name :"La Busqueda 1"},
  { name :"La leyenda del tesoro perdido 2"},
  { name :"La Busqueda 2"},
  { name :"Jumanji"},
  { name :"Jumanji 2: Bienvenidos a la jungla"},
  { name :"Jumanji 3: Siguiente nivel"},
  { name :"El tesoro del amazonas"},
  { name :"El secreto de la calabaza magica"},
  { name :"Cj7: Juguete del espacio"},
  { name :"La Brujula Dorada"},
  { name :"El señor de los anillos 1: Comunidad del anillo"},
  { name :"El señor de los anillos 2: La dos torres"},
  { name :"El señor de los anillos 3: El retorno del rey"},
  { name :"El laberinto del fauno"},
  { name :"El hobbit 1: Un viaje inesperado"},
  { name :"El hobbit 2: La desolacion de Smaug"},
  { name :"El hobbit 3: La batalla de los cinco ejercitos"},

  { name: "Curvas de la vida" },
  { name: "Naufrago" },
  { name: "Pequeños guerreros" },
  { name: "Sonic la pelicula" },
  { name: "Sonic 2 la pelicula" },



  /*----------------------------------------------------------peliculas de Ciencia Ficcion--------------------------------------------------------------*/
  { name :"Ready Player One"},
  { name: "Como Perros y Gatos 1"},
  { name: "Como Perros y Gatos 2"},
  { name :"Como Perros y Gatos 3"},
  { name: "Regreso al Futuro"},
  { name: "Regreso al Futuro 2"},
  { name :"Regreso al Futuro 3"},
  { name: "Volver al Futuro"},
  { name: "Volver al Futuro 2"},
  { name :"Volver al Futuro 3"},
  { name: "Star Wars 1"},
  { name: "Star Wars 2"},
  { name :"Star Wars 3"},
  { name :"Star Wars 4"},
  { name: "Star Wars 5"},
  { name: "..."},
  { name :"Star Wars 7"},
  { name: "Star Wars 8"},
  { name: "Star Wars 9"},
  { name: "Han Solo una historia de Star Wars"},
  { name :"Rogue One"},
/*----------------------------------------------------------peliculas de Drama--------------------------------------------------------------*/
{ name: "Bohemian Rhasody"},
{ name: "El Niño con Pijama de Rayas"},
{ name :"Hambre de poder"},
{ name :"Historias Cruzadas"},
{ name: "Red Social"},
{ name: "La razón de estar contigo"},
{ name: "Mujer Bonita"},
{ name: "Siempre a tu Lado"},
{ name :"Elvis Presley"},
{ name :"Perfume de Mujer"},
{ name: "Votos de Amor"},
{ name: "Midway"},
/*----------------------------------------------------------peliculas de Musical--------------------------------------------------------------*/
{ name :"A Hard day's night"},
{ name: "Help!"},
{ name: "La La Land: Ciudad de las estrellas"},

/*----------------------------------------------------------peliculas de Animadas--------------------------------------------------------------*/
{ name: "Bee movie"},
{ name: "Trolls"},
{ name: "Trolls 2"},
{ name: "Trolls 3"},
{ name: "Como entrenar a tu Dragon"},
{ name: "Como entrenar a tu Dragon 2"},
{ name: "Como entrenar a tu Dragon 3"},
{ name: "Los Croods"},
{ name: "Los Croods 2"},
{ name: "El Origen de los Guardianes"},
{ name: "Un Jefe en Pañales"},
{ name: "Un Jefe en Pañales 2"},
{ name: "El Gato Con Botas"},
{ name: "Vecinos Invasores"},
{ name: "El Gato Con Botas: El ultimo deseo"},
{ name: "Monstruos vs aliens"},
{ name: "Spirit: El corcel indomable"},
{ name: "Chicken Run: Invacion en la granja"},
{ name: "La Granja"},
{ name: "Coraline"},
{ name: "ParaNorman"},
{ name: "Madagascar"},
{ name: "Madagascar 2"},
{ name: "Madagascar 3"},
{ name: "Los pingüinos de Madagascar"},
{ name: "Shrek"},
{ name: "Shrek 2"},
{ name: "Shrek Tercero"},
{ name: "Shrek Para siempre"},
{ name: "Amigos Salvajes"},
{ name: "Amigos Salvajes 2"},
{ name: "Amigos Salvajes 3"},
{ name: "Megamente"},
{ name: "El principito"},
{ name: "Los Mitchel Contra Las Maquias"},



  ]
  const searchInput = document.getElementById("searchInput")
  const resultList = document.getElementById("results-list")
  const noResults = document.getElementById("noResults")
  
  const handleSearch = () => {
    const searchIterm = searchInput.value.toLowerCase();
    const filteredmovies = movies.filter((movie)=> movie.name.toLowerCase().startsWith
    (searchIterm));


     resultList.innerHTML = "";
     if(filteredmovies.length === 0){
      noResults.style.display = "block";
     }else{
      filteredmovies.forEach((movie)=>{
        const li = document.createElement("li");
        li.textContent = movie.name;
        resultList.appendChild(li);

/*--------------------------------------------------------------------------peliculas de accion conexion------------------------------------*/
if (movie.name === "Rapidos y Furiosos 1") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Accion/RapidosFuriosos1.html";
  });  
}
if (movie.name === "Rapidos y Furiosos 2") {
li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Accion/RapidosFuriosos2.html";
});  
}
if (movie.name === "Rapidos y Furiosos 3") {
li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Accion/RapidosFuriosos3.html";
});  
}
if (movie.name === "Rapidos y Furiosos 4") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/RapidosFuriosos4.html";
});  
}   
if (movie.name === "Rapidos y Furiosos 5") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/RapidosFuriosos5.html";
});  
}
if (movie.name === "Rapidos y Furiosos 6") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/RapidosFuriosos6.html";
});  
}
if (movie.name === "Rapidos y Furiosos 7") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/RapidosFuriosos7.html";
});  
}
if (movie.name === "Rapidos y Furiosos 8") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/RapidosFuriosos8.html";
});  
}
if (movie.name === "Rapidos y Furiosos 9") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/RapidosFuriosos9.html";
});  
}
if (movie.name === "Rapidos y Furiosos 10") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/RapidosFuriosos10.html";
});  
}
if (movie.name === "Caracortada") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/Caracortada.html";
});  
}
if (movie.name === "Scarface") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/Caracortada.html";
});  
}

if (movie.name === "R.I.P.D Policia del mas alla") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/R.I.P.D.html";
});  
}
if (movie.name === "Kong la Isla calavera") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/Kong1.html";
});  
}
if (movie.name === "Oppenheimer") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/Oppenheimer.html";
});  
}
if (movie.name === "RoboCop 1") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/RoboCop1.html";
});  
}
if (movie.name === "RoboCop 2") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/RoboCop2.html";
});  
}
if (movie.name === "RoboCop 3") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/RoboCop3.html";
});  
}
if (movie.name === "RoboCop 4") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/RoboCop4.html";
});  
}
if (movie.name === "Karate Kid") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/KarateKid.html";
});  
}
if (movie.name === "El precio del mañana") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/preciodelmañana.html";
});  
}
if (movie.name === "La sociedad de la nieve") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/SociedadNieve.html";
});  
}
if (movie.name === "MadMax 1") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/MadMax1.html";
});  
}
if (movie.name === "MadMax 2") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/MadMax2.html";
});  
}
if (movie.name === "MadMax 3") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Accion/MadMax3.html";
});  
}
/*---------------------------------------------------------------------------peliculas de Terror conexion-------------------------------------------------------*/
if (movie.name === "Aracnofobia") {
  li.addEventListener("click",function() {
      window.location.href = "Asetts/Peliculas/Halloween/Aracnofobia.html";
  });  
}
if (movie.name === "Hallowen") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/hallowen1978.html";
  });  
}
if (movie.name === "Atrapada en el sotano") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/AtrapadaSotano.html";
  });  
}

if (movie.name === "ScaryMovie") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/scarymovie.html";
  });  
}
if (movie.name === "five Nights at Freddy's") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/Five Nights at Freddy's.html";
  });  
}
if (movie.name === "Estacion Zombie") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/Estacionzombie.html";
  });  
}
if (movie.name === "Los CazaFantasmas") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/Cazafantasmas1.html";
  });  
}
if (movie.name === "CazaFantasmas") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/Cazafantasmas1.html";
  });  
}
if (movie.name === "Ghostbusters") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/Cazafantasmas1.html";
  });  
}
if (movie.name === "Terror Bajo la tierra") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/TerrorBajoTierra.html";
  });  
}
if (movie.name === "Terror Bajo la tierra 2") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/TerrorBajoTierra2.html";
  });  
}
if (movie.name === "Terror Bajo la tierra 3") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/TerroBajoTierra3.html";
  });  
}
if (movie.name === "Terror Bajo la tierra 4") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/TerrorBajoTierra4.html";
  });  
}
if (movie.name === "Terror Bajo la tierra 5") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/TerrorBajoTierra5.html";
  });  
}
if (movie.name === "Terror Bajo la tierra 6") {
  li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Halloween/TerrorBajoTierra6.html";
  });  
}


/*----------------------------------------------------------peliculas de Disney Conexion--------------------------------------------------------------*/
if (movie.name === "Bernando y Bianca") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/BernandoBianca.html";
  });  
  }
  if (movie.name === "Los rescatadores") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/BernandoBianca.html";
  });  
  }
   if (movie.name === "Elemental") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Elemental.html";
  });  
  }
  if (movie.name === "El Rey Leon") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Elreyleon.html";
  });  
  }
  if (movie.name === "Bolt") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Bolt.html";
  });  
  }
  if (movie.name === "Encanto") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Encanto.html";
  });  
  }
  if (movie.name === "Monsters Inc") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/MonstersINC.html";
  });  
  }
  if (movie.name === "Buscando a Dory") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/BuscandoDory.html";
  });  
  }
  if (movie.name === "La Familia Futuro") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/FamiliaFuturo.html";
  });  
  }
  if (movie.name === "Monsters University") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/MosntersU.html";
  });  
  }
  if (movie.name === "Buscando a Nemo") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/BuscandoNemo.html";
  });  
  }
  if (movie.name === "Frozen") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Frozen.html";
  });  
  }
  if (movie.name === "Mulan") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Mulan.html";
  });  
  }
  if (movie.name === "Cars 1") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Cars1.html";
  });  
  }
  if (movie.name === "Frozen 2") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Frozen2.html";
  }); 
  }
  if (movie.name === "Peter Pan") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/PeterPan.html";
  });  
  }
  if (movie.name === "Cars 2") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Cars2.html";
  });  
  }
  if (movie.name === "Increibles 1") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/increibles1.html";
  });  
  }
  if (movie.name === "Pinocho") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/pinocho.html";
  });  
  }
  if (movie.name === "Cars 3") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Cars3.html";
  });  
  }
  if (movie.name === "La princesa y el sapo") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Frozen2.html";
  });  
  }
  if (movie.name === "La princesa y el sapo") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/PrincesaSapo.html";
  });  
  }
  if (movie.name === "Cenicienta") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Cenicienta.html";
  });  
  }
  if (movie.name === "Juego de Gemelas") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/juegoGemelas.html";
  });  
  }
  if (movie.name === "Ralph el demoledor") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Ralph.html";
  });  
  }
  if (movie.name === "Chicken Little") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Chicken.html";
  });  
  }
  if (movie.name === "El libro de la selva") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/LibroSelva.html";
  });  
  }
  if (movie.name === "Wifi Ralph") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/RalphWifi.html";
  });  
  }
  if (movie.name === "Ralph Wifi") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/RalphWifi.html";
  });  
  }
  if (movie.name === "Coco") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Coco.html";
  });  
  }
  if (movie.name === "Las locuras del emperador") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/LocurasEmperador.html";
  });  
  }
  if (movie.name === "locuras del emperador") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/LocurasEmperador.html";
  });  
  }
  if (movie.name === "Ratatouille") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Ratatuile.html";
  });  
  }
  if (movie.name === "La Dama y el Vagabundo") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/DamaVagundo.html";
  });  
  }
  if (movie.name === "Luca") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Luca.html";
  });  
  }
  if (movie.name === "Red") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Red.html";
  });  
  }
  if (movie.name === "Dumbo") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Dumbo.html";
  });  
  }
  if (movie.name === "Moana") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Moana.html";
  });  
  }
  if (movie.name === "La Sirenita") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Disney/Sirenita.html";
  });  
  }
  if (movie.name === "Sirenita") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/Sirenita.html";
  });  
  }
  if (movie.name === "Alicia en el país de las maravillas") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/Alicia1.html";
  });  
  }
  if (movie.name === "Up") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/Up.html";
  });  
  }
  if (movie.name === "Toy Story") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/ToyStory.html";
  });  
  }
  if (movie.name === "Alicia a través del espejo") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/Alicia2.html";
  });  
  }
  if (movie.name === "Vacas vaqueras") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/VacasVaqueras.html";
  });  
  }
  if (movie.name === "Toy Story 2") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/ToyStory2.html";
  });  
  }
  if (movie.name === "Toy Story 2") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/ToyStory2.html";
  });  
  }
  if (movie.name === "Zootopia") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/Zootopia.html";
  });  
  }
  if (movie.name === "Toy Story 4") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/ToyStory4.html";
  });  
  }
  if (movie.name === "Hocus Pocus 1") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/hocusPocus.html";
  });  
  }
  if (movie.name === "Hocus Pocus 2") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/hocuspocus2.html";
  });  
  }
  if (movie.name === "Abracadabra 1") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/hocusPocus.html";
  });  
  }
  if (movie.name === "Abracadabra 2") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/hocuspocus2.html";
  });  
  }
  if (movie.name === "El Extraño Mundo de Jack") {
  li.addEventListener("click",function() {
   window.location.href = "/Asetts/Peliculas/Disney/extranomundojack.html";
  });  
  }



  
  
  
 
  


  
  
  
  
    
  
   












/*----------------------------------------------------------peliculas de MARVEL Conexion--------------------------------------------------------------*/
if (movie.name === "Spider-miles") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/Spider-miles.html";
  });  
  }
  if (movie.name === "Spider-miles2") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/Spider-miles2.html";
  });  
  }
  if (movie.name === "Ghostrider1") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/Ghostrider1.html";
  });  
  }
  if (movie.name === "SpiderMan 1") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/SpiderMan1.html";
  });  
  }
  if (movie.name === "SpiderMan 2") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/SpiderMan2.html";
  });  
  }
  if (movie.name === "SpiderMan 3") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/SpiderMan3.html";
  });  
  }
  if (movie.name === "El hombre araña 1") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/SpiderMan1.html";
  });  
  }
  if (movie.name === "El hombre araña 2") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/SpiderMan2.html";
  });  
  }
  if (movie.name === "El hombre araña 3") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/SpiderMan3.html";
  });  
  }
  if (movie.name === "Thor") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/Thor1.html";
  });  
  }
  if (movie.name === "Thor Un mundo oscuro") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/Thor2P.html";
  });  
  }
 
  if (movie.name === "Thor Ragnarok") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/Thor3.html";
  });  
  }
  if (movie.name === "Black Widow") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/BlackWidow.html";
  });  
  }
  if (movie.name === "Pantera Negra") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/PanteraNegra.html";
  });  
  }
  if (movie.name === "Ant-Man y La Avispa") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/AntMan2.html";
  });  
  }
  if (movie.name === "los vengadores Infinity War") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/LosVengadoresInfinity.html";
  });  
  }
  if (movie.name === "los vengadores: EndGame") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/EndGame.html";
  });  
  }
  if (movie.name === "Capitan America Civil War") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/CivilWar.html";
  });  
  }
  if (movie.name === "Ant Man") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/AntMan.html";
  });  
  }
  if (movie.name === "Los vengadores era de ultron") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/VengadoresEraUltron.html";
  });  
  }
  if (movie.name === "Guardianes de la galaxia") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/Guardianesgalaxia1.html";
  });  
  }
  if (movie.name === "Guardianes de la galaxia 2") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/Guardianesgalaxia2.html";
  });  
  }
  if (movie.name === "Capitan America y el soldado del invierno") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/CapitanAmerica2.html";
  });  
  }
  if (movie.name === "Los vengadores") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/LosVengadores.html";
  });  
  }
  if (movie.name === "Los vengadores") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/LosVengadores.html";
  });  
  }
  if (movie.name === "Iron Man 1") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/ironMan1.html";
  });  
  }
  if (movie.name === "Iron Man 2") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/ironMan2.html";
  });  
  }
  if (movie.name === "Iron Man 3") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/ironMan3.html";
  });  
  }
  if (movie.name === "Capitan America 1") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/CapitanAmerica1.html";
  });  
  }
  if (movie.name === "Capitana Marvel") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Marvel/CapitanaMarvel.html";
  });  
  }
 



  

/*----------------------------------------------------------peliculas de Navidad Conexion--------------------------------------------------------------*/
if (movie.name === "El grinch") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Navidad/Grinch.html";
  });  
  }
  if (movie.name === "El grinch Animado") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Navidad/GrinchAnimado.html";
  });  
  }
  if (movie.name === "El expreso polar") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Navidad/PolarEspress.html";
  });  
  }
  if (movie.name === "El regalo prometido") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Navidad/RegaloPrometido.html";
  });  
  }
  if (movie.name === "Klaus") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Navidad/Klaus.html";
  });  
  }
  if (movie.name === "Los Fantasmas de Scrooge") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Navidad/FantasmasScrooge.html";
  });  
  }
  if (movie.name === "Mi pobre angelito") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Navidad/mipobreangelito1.html";
  });  
  }

/*----------------------------------------------------------peliculas de Comedia Conexion--------------------------------------------------------------*/
if (movie.name === "La Boda de mi Mejor Amigo") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Comedia/BodaMejorAmigo.html";
  });  
  }
  if (movie.name === "Proyecto X") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Comedia/ProyectoX.html";
  });  
  }
  if (movie.name === "El Diablo Viste a la Moda") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Comedia/DiabloModa.html";
  });  
  }
  if (movie.name === "No se Aceptan Devoluciones") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Comedia/noaceptanDevoluciones.html";
  });  
  }
if (movie.name === "Y Donde Estan las Rubias?") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Comedia/YDondeEstanRubias.html";
  });  
  }
  if (movie.name === "El Lobo de Wall Street") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Comedia/LoboWallStreet.html";
  });  
  }
if (movie.name === "The Truman Show") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Comedia/ElshowTruman.html";
  });  
  }
  if (movie.name === "Ted") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Comedia/Ted.html";
  });  
  }
  if (movie.name === "Ted 2") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Comedia/Ted2.html";
  });  
  }

/*----------------------------------------------------------peliculas de Fantasia Conexion--------------------------------------------------------------*/
if (movie.name === "Charie y afabrica de Chocolates") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/CharlieFabricaChocolates.html";
  });  
  }
  if (movie.name === "Wonka") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Wonka.html";
  });  
  }
  if (movie.name === "Matilda") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Matilda.html";
  });  
  }
if (movie.name === "Pinocchio Guillermo del toro") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/PinocchioGuillermo.html";
  });  
  }
  if (movie.name === "SpaceJam") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/SpaceJam.html";
  });  
  }
  if (movie.name === "SpaceJam2") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/SpaceJam2.html";
  });  
  }
  if (movie.name === "Las Cronicas de Narnia 1") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/CronicasNarnia1.html";
    });  
    }
    if (movie.name === "Las Cronicas de Narnia 2") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/CronicasNarnia2.html";
    });  
    }
    if (movie.name === "Las Cronicas de Narnia 3") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/CronicasNarnia3.html";
    });  
    }
if (movie.name === "Harry Potter 1: y la piedra filosofal") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/HarryPotter1.html";
    });  
    }
    if (movie.name === "Harry Potter 2: y la camara secreta") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/HarryPotter2.html";
    });  
    }
    if (movie.name === "Harry Potter 3: y el prisionero de azkaban") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/HarryPotter3.html";
    });  
    }
if (movie.name === "Harry Potter 4: y el caliz de fuego") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/HarryPotter4.html";
    });
  }
    if (movie.name === "Harry Potter 5: y la orden del fenix") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/HarryPotter5.html";
    });  
    }
    if (movie.name === "Harry Potter 6: y el misterio del principe") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/HarryPotter6.html";
    });  
    }
    if (movie.name === "Harry Potter 7: y las reliquias de la muerte-parte 1") {
      li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/HarryPotter7.html";
      });  
      }
      if (movie.name === "Harry Potter 7: y las reliquias de la muerte-parte 2") {
      li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/HarryPotter8.html";
      });  
      }

    if (movie.name === "Curvas de la vida") {
      li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/CurvasVida.html";
      });  
      }
      if (movie.name === "Naufrago") {
      li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Naufrago.html";
      });  
      }
      if (movie.name === "Pequeños guerreros") {
      li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/PequeñosGuerreros.html";
      });  
      }
      if (movie.name === "Sonic la pelicula") {
      li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Sonic1.html";
      });  
      }
      if (movie.name === "Sonic 2 la pelicula") {
      li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Sonic2.html";
      });  
      }


if (movie.name === "127 Horas") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Film127Horas.html";
  });  
  }
if (movie.name === "La momia 1") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/LaMomia1.html";
  });  
  }
if (movie.name === "La momia 2") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/LaMomia2.html";
  });  
  }
  if (movie.name === "La momia 3") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/LaMomia3.html";
    });  
    }
if (movie.name === "La leyenda del tesoro perdido 1") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/LeyendaTesoroPerdido1.html";
    });  
    }
if (movie.name === "La Busqueda 1") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/LeyendaTesoroPerdido1.html";
    });  
    }
if (movie.name === "La leyenda del tesoro perdido 2") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/LeyendaTesoroPerdido2.html";
    });  
    }
if (movie.name === "La Busqueda 2") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/LeyendaTesoroPerdido2.html";
    });  
    }
if (movie.name === "Jumanji") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Jumanji1.html";
    });  
    }
if (movie.name === "Jumanji 2: Bienvenidos a la jungla") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Jumanji2.html";
    });  
    }
if (movie.name === "Jumanji 3: Siguiente nivel") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Jumanji3.html";
    });  
    }
    if (movie.name === "El tesoro del amazonas") {
      li.addEventListener("click",function() {
      window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/TesoroAmazonas.html";
      });  
      }
if (movie.name === "El secreto de la calabaza magica") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/SecretoCalabazaMagica.html";
  });  
  }
if (movie.name === "Cj7: Juguete del espacio") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Cj7.html";
  });  
  }
if (movie.name === "La Brujula Dorada") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/BrujulaDorada.html";
  });  
  }
if (movie.name === "El señor de los anillos 1: Comunidad del anillo") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/SeñorAnillos1.html";
  });  
  }
  if (movie.name === "El señor de los anillos 2: La dos torres") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/SeñorAnillos2.html";
    });  
    }
if (movie.name === "El señor de los anillos 3: El retorno del rey") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/SeñorAnillos3.html";
    });  
    }
if (movie.name === "El laberinto del fauno") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/LaberintoFauno.html";
  });  
  }
if (movie.name === "El hobbit 1: Un viaje inesperado") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Hobbit1.html";
  });  
  }
  if (movie.name === "El hobbit 2: La desolacion de Smaug") {
    li.addEventListener("click",function() {
    window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Hobbit2.html";
    });  
    }
if (movie.name === "El hobbit 3: La batalla de los cinco ejercitos") {
  li.addEventListener("click",function() {
  window.location.href = "/Asetts/Peliculas/Adventure_Fantasy/Hobbit3.html";
  });  
  }





/*----------------------------------------------------------peliculas de Ciencia Ficcion--------------------------------------------------------------*/
if (movie.name === "Ready Player One") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/ReadyPlayerOne.html";
});  
}
if (movie.name === "Como Perros y Gatos 1") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/PerrosyGatos.html";
});  
}
if (movie.name === "Como Perros y Gatos 2") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/PerrosyGatos2.html";
});  
}
if (movie.name === "Como Perros y Gatos 3") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/PerrosyGatos3.html";
});  
}
if (movie.name === "Regreso al Futuro") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/RegresoFuturo1.html";
});  
}
if (movie.name === "Regreso al Futuro 2") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/RegresoFuturo2.html";
});  
}
if (movie.name === "Regreso al Futuro 3") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/RegresoFuturo3.html";
});  
}
if (movie.name === "Volver al Futuro") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/RegresoFuturo1.html";
});  
}
if (movie.name === "Volver al Futuro 2") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/RegresoFuturo2.html";
});  
}
if (movie.name === "Volver al Futuro 3") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/RegresoFuturo3.html";
});  
}  
if (movie.name === "Star Wars 1") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/StarWars1.html";
});  
}   
if (movie.name === "Star Wars 2") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/StarWars2.html";
});  
}   
if (movie.name === "Star Wars 3") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/StarWars3.html";
});  
}     
if (movie.name === "Star Wars 4") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/StarWars4.html";
});  
} 
if (movie.name === "Star Wars 5") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/StarWars5.html";
});  
} 
if (movie.name === "Star Wars 7") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/StarWars7.html";
});  
} 
if (movie.name === "Star Wars 8") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/StarWars8.html";
});  
} 
if (movie.name === "Star Wars 9") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/StarWars9.html";
});  
} 
if (movie.name === "Han Solo una historia de Star Wars") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/HanSolo.html";
});  
} 
if (movie.name === "Rogue One") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Ciencia ficcion/RogueOne.html";
});  
} 

/*----------------------------------------------------------peliculas de Drama--------------------------------------------------------------*/

if (movie.name === "Bohemian Rhasody") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Drama/Bohemian.html";
});  
} 
if (movie.name === "El Niño con Pijama de Rayas") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Drama/PijamaRayas.html";
});  
}
if (movie.name === "Hambre de poder") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Drama/HambrePoder.html";
});  
}
if (movie.name === "Historias Cruzadas") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Drama/HistoriasCruzadas.html";
});  
}
if (movie.name === "Red Social") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Drama/RedSocial.html";
});  
}
if (movie.name === "La razón de estar contigo") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Drama/LaRazonContigo.html";
});  
}
if (movie.name === "Mujer Bonita") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Drama/MujerBonita.html";
});  
}
if (movie.name === "Siempre a tu Lado") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Drama/Siempreatulado.html";
});  
}
if (movie.name === "Elvis Presley") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Drama/ElvisPresley.html";
});  
}
if (movie.name === "Perfume de Mujer") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Drama/PerfumeMujer.html";
});  
}
if (movie.name === "Votos de Amor") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Drama/VotosDeAmor.html";
});  
}
if (movie.name === "Midway") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Drama/Midway.html";
});  
}

/*----------------------------------------------------------peliculas de Musical Coanexion--------------------------------------------------------------*/
if (movie.name === "A Hard day's night") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Musical/Harddaysnight.html";
});  
}
if (movie.name === "Help!") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Musical/Help.html";
});  
}
if (movie.name === "La La Land: Ciudad de las estrellas") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Musical/LaLaLand.html";
});  
}

/*----------------------------------------------------------peliculas de Animacion  Conexion--------------------------------------------------------------*/
if (movie.name === "Madagascar") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Madagascar1.html";
});  
}
if (movie.name === "Madagascar 2") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Madagascar2.html";
});  
}
if (movie.name === "Madagascar 3") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Madagascar3.html";
});  
}
if (movie.name === "Los pingüinos de Madagascar") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Los-Pinguinos-de-Madagascar.html";
});  
}
if (movie.name === "Shrek") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Shrek.html";
});  
}
if (movie.name === "Shrek 2") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Shrek2.html";
});  
}
if (movie.name === "Shrek Tercero") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Shrek3.html";
});  
}
if (movie.name === "Shrek Para siempre") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Shrek4.html";
});  
}
if (movie.name === "Amigos Salvajes") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/AmigosSalvajes1.html";
});  
}
if (movie.name === "Amigos Salvajes 2") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/AmigosSalvajes2.html";
});  
}
if (movie.name === "Amigos Salvajes 3") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/AmigosSalvajes3.html";
});  
}
if (movie.name === "Megamente") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Megamente.html";
});  
}
if (movie.name === "El principito") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Elprincipito.html";
});  
}
if (movie.name === "Los Mitchel Contra Las Maquias") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/MitchelVsMaquinas.html";
});  
}
if (movie.name === "Bee movie") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/BeeMovie.html";
});  
}
if (movie.name === "Trolls") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Trolls.html";
});  
}
if (movie.name === "Trolls") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Trolls2.html";
});  
}
if (movie.name === "Trolls") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Trolls3.html";
});  
}
if (movie.name === "Como entrenar a tu Dragon") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/ComoDragon.html";
});  
}
if (movie.name === "Como entrenar a tu Dragon 2") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/ComoDragon2.html";
});  
}
if (movie.name === "Como entrenar a tu Dragon 3") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/ComoDragon3.html";
});  
}
if (movie.name === "Los Croods") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Loscroods.html";
});  
}
if (movie.name === "Los Croods 2") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Loscroods2.html";
});  
}
if (movie.name === "El Origen de los Guardianes") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/OrigenGuardianes.html";
});  
}
if (movie.name === "Un Jefe en Pañales") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/JefePañales.html";
});  
}
if (movie.name === "Un Jefe en Pañales 2") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/JefePañales2.html";
});  
}
if (movie.name === "El Gato Con Botas") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/GatoConBotas.html";
});  
}
if (movie.name === "El Gato Con Botas: El ultimo deseo") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/GatoConBotas2.html";
});  
}
if (movie.name === "Vecinos Invasores") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/VecinosInvasores.html";
});  
}
if (movie.name === "Monstruos vs aliens") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Monstruosaliens.html";
});  
}
if (movie.name === "Spirit: El corcel indomable") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Spirit.html";
});  
}
if (movie.name === "Chicken Run: Invacion en la granja") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/ChickenRun.html";
});  
}
if (movie.name === "La Granja") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/LaGranja.html";
});  
}
if (movie.name === "Coraline") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/Coraline.html";
});  
}
if (movie.name === "ParaNorman") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/ParaNorman.html";
});  
}
if (movie.name === "ParaNorman") {
li.addEventListener("click",function() {
window.location.href = "/Asetts/Peliculas/Animadas/ParaNorman.html";
});  
}







    });
      noResults.style.display = "none";
     }
    if(searchInput.value === ""){
     resultList.innerHTML = "";
    }
  };
  searchInput.addEventListener("input", handleSearch);
  li.addEventListener("click", function() {   
  });


  




 





