
c = document.getElementById("myCanvas");
y = 40;

draw = function() {
    c.background(151,244,247);
    var ctx = c.getContext("2d");
    ctx.fillStyle = "black";
    ctx.fillRect(0, 20, 300, 150);
    ctx.clearRect(20, y, 100, 50);

    y = y++;
};