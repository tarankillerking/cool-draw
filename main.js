array_1=["pen","paper","book","bottle"]
random_no = Math.floor((Math.random()*array_1.length)+1)
sketch=array_1[random_no]
document.getElementById("sketchname").innerHTML="sketch to be drawn "+sketch
score=0
drawnsketch=""
function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  background("white");
  canvas.mouseReleased(drawing)
  synth=window.speechSynthesis
}
function drawing(){
  doodlenet.classify(canvas,gotresult)
}  
function preload(){
  doodlenet=ml5.imageClassifier('DoodleNet')
}
function draw(){
strokeWeight(13)
stroke("blue")
if (mouseIsPressed) {
  line(pmouseX,pmouseY,mouseX,mouseY)
}
timer=0
timer++
document.getElementById("timer").innerHTML="timer;"+timer
if (timer>200) {
  
}
if (drawnsketch==sketch) {
  score=score+10
  document.getElementById("score").innerHTML="score;"+score
}
}
function gotresult(error,results){
if(error) {
console.log(error)
} else {
console.log(results)
drawnsketch=results[0].label
document.getElementById("labelresult").innerHTML=results[0].label
document.getElementById("labelconfidence").innerHTML=results[0].confidence
utterthis=new SpeechSynthesisUtterance(results[0].label)
synth.speak(utterthis)
}
}
function clearcanvas(){
background("white");
}
