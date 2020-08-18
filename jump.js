let myGamePiece;
let enemyOne;

// 게임 시작
function startGame() {
    myGameArea.start();
    myGamePiece = new MainPlayer(30, 30, "red", 0, 0);
    enemyOne = new Enemies(100, 150, 50, 0, 2 * Math.PI, "blue");
}

// 게임 화면
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}


// 플레이어 그리기
function MainPlayer(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = myGameArea.context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

function Enemies(x, y, radius, angleS, angleE, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.angleS = angleS;
    this.angleE = angleE;
    this.color = color;

    ctx = myGameArea.context;
    
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, this.radius, this.angleS, this.angleE);
    ctx.closePath();
    ctx.fill();
}