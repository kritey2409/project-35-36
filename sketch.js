//Create variables here
var dog,saddog,happydog,database,foods,foodstock,fedtime,lastfed,feed,addfood,foodobj
function preload()
{
saddog=loadImage("images/Dog.png")
happydog=loadImage("images/happy dog.png")
}

function setup() {
  createCanvas(1000, 400);
  database=firebase.database()
  foodobj=new Food()
  foodstock=database.ref('Food')
  foodstock.on("value",readstock)
  dog=createSprite(800,200,150,150)
  dog.addImage(saddog )
  dog.scale=0.1
  feed=createButton("feed")
  feed.position(700,95)
  feed.mousePressed(feeddog)
  addfood=createButton("addfood")
  addfood.position(800,95)
  addfood.mousePressed(feeddog)
}


function draw() {  
background("cyan")
foodobj.display()
fedtime=database.ref('FeedTime')
fedtime.on("value",function(data){
  lastfed=data.val()
})
fill("cyan")
if (lastfed>=12){
  text("last fed time is more than 12 hours ",350,30)
}
else if (lastfed===0){
  text("last fed time is more than 11 hours ",350,30)
}
else {
  text("last fed ",350,30)
}
  drawSprites();
  //add styles here

}
function readstock (data){
  foods=data.val()
foodobj.updatefoodstock(foods)


}
 function feeddog (){
   dog.addImage(happydog)
   foodobj.updatefoodstock(foodobj.getfoodstock()-1);
   database.ref('/').update({
     Food:foodobj.getfoodstock(),
     FeedTime:hour()
   })
 }

function addfood(){
  foods++;
  database.ref('/').update({
    Food:foods
  })
}
function update(state){
  database.ref('/').update({ 
    gameState:state
  })
}