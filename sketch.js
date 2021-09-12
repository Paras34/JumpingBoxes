var canvas;
var music;
var green,red,blue,yellow,ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    blue = createSprite(100,585,200,30);
    blue.shapeColor = rgb(0, 0, 255);

    yellow = createSprite(310,585,200,30);
    yellow.shapeColor = rgb(255, 255, 0);

    red = createSprite(520,585,200,30);
    red.shapeColor = rgb(255, 0, 0);

    green = createSprite(730,585,200,30);
    green.shapeColor = rgb(0, 255, 0);

    //create box sprite and give velocity
    ball = createSprite(random(20,750),random(50,150),40,40);
    ball.shapeColor = rgb(1000, 1000, 1000);
    ball.velocityX = random(-5,5);
    ball.velocityY = 5;

}

function draw() {
    background(rgb(0,0,0));
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(ball.isTouching(blue)){
        ball.bounceOff(blue);
        music.stop();
        music.play();
        ball.shapeColor = rgb(0, 0, 255);
    }

    if(ball.isTouching(yellow)){
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
        ball.shapeColor = rgb(255, 255, 0);
    }

    if(ball.isTouching(green)){
        ball.bounceOff(green);
        ball.shapeColor = rgb(0, 255, 0);
    }

    if(ball.isTouching(red)){
        ball.bounceOff(red);
        ball.shapeColor = rgb(255, 0, 0);
    }


    //add condition to check if box touching surface and make it box
    drawSprites();
}

