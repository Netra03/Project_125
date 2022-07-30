difference = 0;
leftWristX = 0;
rigthWristX = 0;

function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 500);
    canvas.position(600, 175);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background("#79cfd4");
    fill("red");
    textSize(difference);
    text("Netra",50,200);
    document.getElementById("font_size").innerHTML = "Font size of the text will be: "+difference+ " px";
}

function modelLoaded() {
    console.log('PoseNet is loaded.');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftWristX = "+ leftWristX + ", rightWristX = " + rightWristX);
        difference = floor(leftWristX - rightWristX);
    }
}