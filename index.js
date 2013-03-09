(function(){
  var PX, SPAWN_DELAY, FALL_DELAY, FADE_DELAY, FADE_ALPHA, width, height, resize, getChar, spawn, fall, fade, d, canvas, ctx, charset, charL;
  PX = 16;
  SPAWN_DELAY = 75;
  FALL_DELAY = 50;
  FADE_DELAY = 100;
  FADE_ALPHA = 0.05;
  resize = function(){
    var ref$, ref1$;
    ref1$ = (canvas.width = (ref$ = d.documentElement).clientWidth, canvas.height = ref$.clientHeight, canvas), width = ref1$.width, height = ref1$.height;
    return ctx.font = PX + "px monospace";
  };
  getChar = function(){
    return charset[Math.random() * charL | 0];
  };
  spawn = function(){
    var x;
    x = Math.random() * width / PX | 0;
    fall(x * PX, PX);
    return setTimeout(spawn, SPAWN_DELAY);
  };
  fall = function(x, y){
    var x0$;
    x0$ = ctx;
    x0$.fillStyle = 'lime';
    x0$.fillText(getChar(), x, y);
    if (y < height) {
      return setTimeout(fall, FALL_DELAY, x, y + PX);
    }
  };
  fade = function(){
    ctx.fillStyle = "rgba(0, 0, 0, " + FADE_ALPHA + ")";
    ctx.fillRect(0, 0, width, height);
    return setTimeout(fade, FADE_DELAY);
  };
  d = document;
  canvas = d.querySelector('canvas');
  ctx = canvas.getContext('2d');
  charset = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  charL = charset.length;
  window.addEventListener('resize', resize);
  resize();
  fade();
  spawn();
}).call(this);
