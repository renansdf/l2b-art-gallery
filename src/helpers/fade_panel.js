const fade_panel = document.querySelector('.fade_panel')
let isFading = false

function IsFading () { return isFading }

function Fade(fade_duration = 3)
{
	if(isFading){
		console.warn('Fading Panel is alerady fading !')
		return
	}

	isFading = true
	fade_panel.style.webkitAnimation = ''
	setTimeout(() => { 
    SetFadeAnimation(fade_duration) 
  }, 0);
}

function SetFadeAnimation(fade_duration)
{
  fade_panel.style.webkitAnimation = 'fadeInOut '+ fade_duration.toString()+'s';
  fade_panel.addEventListener('webkitAnimationEnd', () => { isFading = false });
}