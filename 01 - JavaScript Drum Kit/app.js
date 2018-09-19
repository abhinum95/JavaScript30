window.addEventListener('keydown', action);

function action(event){
  //Get the code for the key pressed
  const keyPressed = event.which;
  //Select the relevant div from html
  const key = document.querySelector(`div[data-key="${keyPressed}"]`);
  //Select the relevant audio
  const audio = document.querySelector(`audio[data-key="${keyPressed}"]`);
  //Exit the function if the wrong key pressed
  if(!audio) return;
  //Reset the audio for multiple presses of a key
  audio.currentTime = 0;
  //Play the audio
  audio.play();
  //Add the class playing to classlist for css transition
  key.classList.add('playing');
  //When the transition ends remove the playing class from the class list
  key.addEventListener('transitionend', removePlaying);
  function removePlaying(e){
    e.target.classList.remove('playing');
  }

}