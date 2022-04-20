// --- Légende ---\\
// VIDE     = 0   \\
// HERBE    = 1   \\
// BESTIOLE = 2   \\
// BESTIOLE,      \\
// MOURANTE = 3   \\
// -------------- \\


//----Variable-Setup----\\


var matrice = [];
var toile   = 800;
var taille  = 50;
var cote    = toile / taille;

var bestioles = [];
var Videe = [];

var couleurV = "white";
var couleurB = "black";

var tour = 0;

// ----------------------   SETUP   ---------------------- \\

function setup() 
{
  createCanvas(toile + 1, toile + 1);
  background("#E6E6FA");
  stroke("#a2a2e0");
  frameRate(10);

  
  //--Replissage-matrice--\\
  
  for (var y = 0; y < taille; y++)
  {
    matrice[y] = [];
    for (var x = 0; x < taille; x++)
    {
      matrice[y][x] = 0;
      NaissanceV(y,x);
    }
  }
/*
  for (var y = 0; y < matrice.length; y++)
  {
    for (var x = 0; x < matrice[y].length; x++)
    {
      NaissanceV(y + 1, x + 1);
    }
  }
  */

  NaissanceB(9,10);
  NaissanceB(10,10);
  NaissanceB(11,10);
}

/* ----------------------   DRAW   ---------------------- */

function draw() 
{

  tour ++;
  console.log("//Tour " + tour);

  //----Dessin-matrice----\\
  
  for (var y = 0; y < matrice.length; y++)
  {
    for (var x = 0; x < matrice[y].length; x++)
    {
      if (matrice[y][x] == 1)//bestiole
      {
        fill(couleurB);
        rect(x * cote, y * cote, cote, cote);
        //console.log("matrice = " + matrice[y],matrice[x])
      }
      else if (matrice[y][x] == 0)//vide
      {
        fill(couleurV);
        rect(x * cote, y * cote, cote, cote);
      }
      else if (matrice[y][x] == 2)//test
      {
        fill("red");
        rect(x * cote, y * cote, cote, cote);
      }
      
    }
  }
  
  for (var i in Videe)
  {
    Videe[i].triV();

    if(Videe[i].birth == true)
    {
      //matrice[Videe[i].y][Videe[i].x] = 1;
      NaissanceB(Videe[i].y, Videe[i].x);
      Videe.slice(i,1);
      console.log("Naisssanace " + i);
    }
  }
  for (var i in bestioles)
  {
    bestioles[i].triB();

    if(bestioles[i].vivant == false)
    {
      //matrice[bestioles[i].y][bestioles[i].x] = 0;
      NaissanceV(bestioles[i].y, bestioles[i].x);
      bestioles.splice(i,1);
      //console.log("B morte " + i);
    }
  }
  
}

//-----FONCTIONS-de-Spawn----\\ 

function NaissanceB(y,x)
{
  matrice[y][x] = 1;
  bestioles.push(new Bestiole(y,x));
}

function NaissanceV(y,x)
{
  matrice[y][x] = 0;
  Videe.push(new Sans(y,x));
}


/*_______________END_______________\\
\\---------------------------------*/