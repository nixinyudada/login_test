var music = new Audio('../audios/badapple.mp3');
var timer = null;
var frame = 0;

var loading = document.getElementById('loading');
var play = document.getElementById('play');
var pause = document.getElementById('pause');

play.onclick = function(){
  music.play();
  play.setAttribute('disabled', true);
  pause.removeAttribute('disabled');
  timer = setInterval(function(){
    document.getElementById('ani').innerHTML = data[frame];
    frame ++;
    document.body.style.color = '#' + (~~(Math.random() * (1 << 24))).toString(16);
  }, 33.3333333333);
}

pause.onclick = function(){
  play.removeAttribute('disabled');
  pause.setAttribute('disabled', true);
  clearInterval(timer);
  music.pause();
}

/*document.onreadystatechange = function(){
  if(document.readyState === 'complete'){
    document.getElementById('loading').className = 'fadeOut';
    setTimeout(function(){loading.style.display = 'none';}, 300);
  }
}*/
