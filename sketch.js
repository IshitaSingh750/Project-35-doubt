var dog, dogSprite, happyDog, foodS, foodStock;
var database;
var score = 0;

var feedDog, addFood;
var fedTime, lastFed;
var foodObj;

function preload()
{
  dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  
    dogSprite = createSprite(250, 300, 30, 30);
    dogSprite.addImage(dog);
    dogSprite.scale = 0.2;
  
    database=firebase.database();
    foodStock=database.ref('Food');
    foodStock.on("value", readStock);
}

function feedDog(){

  //dogSprite.addImage(happyDog);
  
  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

function addFood(){

  foodS++;
  
  database.ref('/').update({
    Food:foodS
  })
}

function readStock(data)
{
  foodS=data.val();
}

function writeStock(x)
{
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  } 
  
  database.ref('/').update({
    Food : x
  })
}



function draw() {  

  background(46, 139, 87);

  //console.log(foodS);

  
  
textSize(17);
fill("black");
text("Food Remaining : "+foodS, 100, 150);

  drawSprites();

  textSize(17);
  fill("black");
  text("Note : Press UP_ARROW Key To Feed Drago Milk!", 52,70);

}
