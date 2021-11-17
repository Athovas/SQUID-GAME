var boneca, bonecatras, bonecafrente, round7, jeff, jeffimg, jeffmorto
var jeffdeath
var batata, tiro
var estadodejogo = "tras"

function preload() {
  bonecatras=loadAnimation("boneca1.png")
  bonecafrente=loadAnimation("boneca2.png")
  round7=loadImage("round7.png")
  jeffimg=loadAnimation("JeffRound6.png")
  jeffmorto=loadAnimation("JeffRound6Morto.png")
  batata=loadSound("MUSICA.mp3")
  tiro=loadSound("tiro.mp3")
  vivo=loadAnimation("JeffRound6Frente.png")
}

function setup() {
  createCanvas(350,500)
  
  jeffdeath=createSprite(0,0,0,0)
  jeffdeath.visible=false
  
  boneca=createSprite(180,90, 39,39)
  boneca.addAnimation("atras", bonecatras)
  boneca.addAnimation("frente", bonecafrente)
  boneca.scale=0.3
  
  jeff=createSprite(180,460, 40,40)
  jeff.addAnimation("vivo", jeffimg)
  jeff.addAnimation("morto", jeffmorto)
  jeff.addAnimation("vivu", vivo)
  jeff.scale=0.25
  
}

function draw() {
  background(round7)
  
  estadodejogo = "tras"
  
  if(jeff.y<140) {
    jeff.changeAnimation("vivu", vivo)
    jeff.x=40
    jeff.y=90
  }
  
  if(frameCount%200===0) {
    boneca.changeAnimation("atras",bonecatras)
    
    batata.play()
    
    if(keyDown("space")){
      jeff.y=jeff.y-1;
    
    }
  }
  
  if(frameCount > 1 && frameCount < 199 ||
     frameCount > 322 && frameCount < 398 ||
     frameCount > 512 && frameCount < 599 ||
     frameCount > 705 && frameCount < 799  ||
     frameCount > 903 && frameCount < 999 ||
     frameCount > 1095 && frameCount < 1199)
  {
    estadodejogo="frente"
    boneca.changeAnimation("frente",bonecafrente);
  }
  
  if(keyDown("space") && estadodejogo==="frente") {
    
    jeffdeath.visible=true
    jeffdeath.addAnimation("morto", jeffmorto)
    jeffdeath.scale=0.25
    jeffdeath.y=jeff.y
    jeffdeath.x=jeff.x
    jeff.destroy()
    jeffdeath.y=jeffdeath.y+1
    jeff.x=jeffdeath.x
    jeff.y=jeffdeath.y
    tiro.play()
  }
  
 
 
  
    
  if(keyDown("space")) {
   jeff.y=jeff.y-1
  }
   
  
  drawSprites()
}