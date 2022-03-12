const getValueInput = () =>{
    let inputValue = document.getElementById("domTextElement").value; 
    document.getElementById("valueInput").innerHTML =  Math.floor(Math.random() * inputValue) + 1  ; 
  }



  var snd = new Audio("muzic.mp3");
        snd.loop = true;
        snd.autoplay = false;

        document.getElementById("bstop").onclick = function () { snd.pause(); };

        document.getElementById("bplay").onclick = function () { snd.play(); };