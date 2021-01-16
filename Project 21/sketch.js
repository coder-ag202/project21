var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    box1 = createSprite(0, 580, 350, 30);
    box1.shapeColor = "blue";
    box2 = createSprite(290, 580, 350, 30);
    box2.shapeColor = "yellow";
    box3 = createSprite(510, 580, 350, 30);
    box3.shapeColor = "green";
    box4 = createSprite(740, 580, 350, 30);
    box4.shapeColor = "red";
    ball = createSprite(random(20, 750), 100, 40, 40);
    ball.shapeColor = "white";
    ball.velocityX = 3;
    ball.velocityY = 7;


}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(box2.isTouching(ball)){
        ball.shapeColor = "yellow";
        music.stop();
        ball.setVelocity (0,0);
    }

    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = "green";
    }

    if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = "red";
    }

    drawSprites();
}
