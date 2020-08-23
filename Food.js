class Food {
    constructor() {
        this.image = loadImage("Milk.png");
        var foodStock, lastFed;
    }

    getFoodStock(){
    
    }

    updateFoodStock(){

    }
     
    deductFood(){

    }
    
    display() {
        
        feed = createButton("Feed the Dog");
        feed.position(700,95);
        feed.mousePressed(feedDog);

        addFood = createButton("Add Food");
        addFood.position(800,95);
        addFood.mousePressed(addFoods);

        fill(255, 255, 254);
        textSize(15);

        if(lastFed>=12){
            text("Last Fed : "+lastFed%12 + "PM", 350,30);
        }else if(lastFed==0){
            text("Last Fed : 12 AM", 350,30);
        }else{
            text("Last Fed : "+lastFed + "AM", 350,30);
        }
    }
}