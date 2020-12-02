class Food {
    constructor(){
        this.foodstock=0
        this.lastfed;
        this.image=loadImage("images/milk.png") 
    }
    updatefoodstock(foodstock){
this.foodstock=foodstock
    }
    getfedtime(lastfed){
        this.lastfed=lastfed
    }
    deductfood(){
        if (this.foodstock>0){
            this.foodstock-=1
        }
    }
    getfoodstock(){
        return this.foodstock
}
display(){
    if (lastfed>=12){
        text("last fed time is >12 hours ",50,30)
    }
    else if(lastfed===0){
        text("last fed time is 12 am ",50,30)

    }
    else{
        text("last fed time is <12 hours ",50,30)

    }
    var x=70,y=100
    imageMode(CENTER)
    if (this.foodstock!=0){
        for (var i=0;i<this.foodstock;i++){
            if (i %10 ==0){
                x=70
                y=y+50
            }
           image(this.image,x,y,50,50)
           x=x+30
        }
    }
}
bedroom(){
    background(bedroom,550,500)
}
garden(){
    background(garden,550,500)
}
washroom(){
    background(washroom,550,500)
}
    }