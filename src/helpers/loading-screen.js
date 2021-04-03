const loadingScreenContainer = document.querySelector('.loading_screen_container')
const loadingPercentageText = document.querySelector('.loading_percentage_text')

let startLoading = false
let percentageValue = 0

function incrementLoading(loaded){
  if(!startLoading) return

  const total = 60 //Magic number
  const percentageValue = (loaded / total) * 100
  loadingPercentageText.text = Math.round(percentageValue) + '%'

}

function finishLoading(onFinishLoading) {
  loadingPercentageText.text = '100%'
  
  setTimeout(() => { if(onFinishLoading) onFinishLoading() }, 2000)
  setTimeout(() => { $(loadingScreenContainer).fadeOut(1000) }, 5000)
}

const manager = document.querySelector('a-assets').fileLoader.manager
manager.onStart = ( url, itemsLoaded, itemsTotal ) => {
  startLoading = true
};
manager.onProgress = ( url, itemsLoaded, itemsTotal ) => {
  incrementLoading(itemsLoaded)
};
manager.onLoad = () => {
  if(startLoading){
    finishLoading(OpenWelcomeMessageContainer)
  }
};


