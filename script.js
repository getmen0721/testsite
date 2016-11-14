function draw(){
    var canvas = document.querySelector('#canvas');
    var context = canvas.getContext('2d');
    context.fillStyle = "rgba(255,0,0,0.5)";
    context.fillRect (100,100,100,100);
    context.strokeStyle = "rgba(0,0,0,1)";
    context.strokeRect (50,50,100,100);
}