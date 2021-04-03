const DESKTOP_TEXT_RECEIVER_DIV = '.bottom_content_receiver'
const MOBILE_TEXT_RECEIVER_DIV = '.right_content_receiver'
const IMAGE_CAROUSEL_RECEIVER_DIV = '.image_carousel_container'

const PAGES_URL_PREFIX = './pages/content_pages/'

function LoadPage(url, div, onSuccess) {
  $(div).html('<center><img src="./assets/img/loading_content.gif"></center>');

  $.ajax({
    url: url,
    success: function (data) {
      $(div).hide();
      $(div).fadeOut();
      $(div).html(data);
      $(div).fadeIn();

      if(onSuccess)
        onSuccess()
    },
    error: function () {
      console.log('erro loading');
    }
  });
}

function LoadContent(url, contentType)
{
  /*CONTENT TYPES
    0 - Single Page Content
    1 - Multiple Page Content
    2 - Single Image
    3 - Multiple Image
  */
  let content_receiver_div
  let isMobile = isMobileDevice()
  
  if(contentType === '0' || contentType === '1')
    content_receiver_div = (isMobile) ? DESKTOP_TEXT_RECEIVER_DIV : MOBILE_TEXT_RECEIVER_DIV 
  else
    content_receiver_div = IMAGE_CAROUSEL_RECEIVER_DIV

  LoadPage(url, content_receiver_div, () => {
    if(contentType === '0' || contentType === '1')
    {
      if(isMobile)
        ShowReadPreviewMobile()  
      else  
        ShowRightContentContainer()

      if(contentType === '1')
        SetupPagination()
    }
    else
    {
      OpenImageCarouselContainer();
    }
  })
}

function LoadContentFromHotspot(hotspot)
{
  const _id = hotspot.el.getAttribute('id')
  const content_type = hotspot.el.getAttribute('contentType')
  
  const url = PAGES_URL_PREFIX + _id + '.html'
  
  LoadContent(url, content_type)
}




