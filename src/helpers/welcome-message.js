const welcome_message_container = document.querySelector('.welcome_message_container')

$('.close_welcome_message').click(CloseWelcomeMessageContainer)
$('.close_welcome_message_mobile').click(CloseWelcomeMessageContainer)

function OpenWelcomeMessageContainer()
{
  $(welcome_message_container).fadeIn();

  LoadPage('./pages/desktop_welcome_message_page_01.html', '.welcome_message_text')
  LoadPage('./pages/mobile_welcome_message_page_01.html', '.welcome_message_text_mobile')
}

function CloseWelcomeMessageContainer()
{
  $(welcome_message_container).fadeOut(); 
  ToggleAmbientSound();
}

function LoadWelcomeMessageFirstPage()
{
  LoadPage('./pages/desktop_welcome_message_page_01.html', '.welcome_message_text')
  LoadPage('./pages/mobile_welcome_message_page_01.html', '.welcome_message_text_mobile')
}

function LoadWelcomeMessageSecondPage()
{
  LoadPage('./pages/desktop_welcome_message_page_02.html', '.welcome_message_text')
  LoadPage('./pages/mobile_welcome_message_page_02.html', '.welcome_message_text_mobile')
}