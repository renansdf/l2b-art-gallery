const audio_buttons = document.querySelectorAll('.sound_icon')
const ambient_sound = document.querySelector('#ambient_sound')
const header_room_name = document.querySelector('.header_room_name')

$(audio_buttons).click(ToggleAmbientSound)

function ToggleAmbientSound() {
  if (!ambient_sound.paused) {
    ambient_sound.pause()
    ambient_sound.currentTime = 0
    
    $(audio_buttons).attr('src', './assets/img/sound_off.svg')
  } else {
    ambient_sound.play()
    
    $(audio_buttons).attr('src', './assets/img/sound_on.svg')
  }
}

function setHeaderRoomName(roomName){
  $(header_room_name).text(roomName)
}