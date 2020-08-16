let myGamePiece;
let enemyOne;

// 게임 시작
function startGame() {
    myGameArea.start();
    myGamePiece = new MainPlayer(30, 30, "red", 0, 0);
    enemyOne = new Enemies(10, 15, 50, 0, 2 * Math.PI)
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

function Enemies(radius, color, angleS, angleE, x, y) {
    this.radius = radius;
    this.color = color;
    this.angleS = angleS;
    this.angleE = angleE;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.angleS, this.angleE, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
}