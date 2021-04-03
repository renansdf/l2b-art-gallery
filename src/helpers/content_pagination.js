const CONTENT_PAGE_CLASS = '.content_page'
const HIDDEN_PAGE_CLASS = 'content_page_hidden'

const PAGINATION_COUNTER_TEXT_CLASS = '.pagination_counter_text'
const NEXT_PAGE_BUTTON = '.pagination_next_page'
const PREVIOUS_PAGE_BUTTON = '.pagination_previous_page'
const DISABLED_PAGINATION_BUTTON_CLASS = 'pagination_disabled_button'

let contentPages = []
let currentPagesIndex = 0

let paginationPreviousButton
let paginationNextButton
let paginationPagesCounter

function SetupPagination()
{
	contentPages = document.querySelectorAll(CONTENT_PAGE_CLASS)
  paginationPagesCounter = document.querySelector(PAGINATION_COUNTER_TEXT_CLASS)
  
  paginationNextButton = document.querySelector(NEXT_PAGE_BUTTON)
  paginationPreviousButton = document.querySelector(PREVIOUS_PAGE_BUTTON)
	
	
	paginationPreviousButton.addEventListener('click', PreviousPage)
	paginationNextButton.addEventListener('click', NextPage)

	currentPagesIndex = 0
	setPage(currentPagesIndex)
	SetPagesCounterText()
}

function NextPage()
{
	if(currentPagesIndex < contentPages.length - 1)
		currentPagesIndex++
	
	setPage(currentPagesIndex)
}

function PreviousPage()
{
	if(currentPagesIndex > 0)
		currentPagesIndex--
	
	setPage(currentPagesIndex)
}

function setPage(index)
{
  contentPages.forEach(p => { $(p).addClass(HIDDEN_PAGE_CLASS) })
  $(contentPages[index]).removeClass(HIDDEN_PAGE_CLASS)
  
	CheckPaginationButtons()
	SetPagesCounterText()
	ScrollToTop()
}

function CheckPaginationButtons()
{
	if(currentPagesIndex <= 0)
		$(paginationPreviousButton).addClass(DISABLED_PAGINATION_BUTTON_CLASS, true)
	else
		$(paginationPreviousButton).removeClass(DISABLED_PAGINATION_BUTTON_CLASS)

	if(currentPagesIndex >= contentPages.length - 1)
		$(paginationNextButton).addClass(DISABLED_PAGINATION_BUTTON_CLASS, true)
	else
		$(paginationNextButton).removeClass(DISABLED_PAGINATION_BUTTON_CLASS)
}

function SetPagesCounterText()
{
	let paginationString = (currentPagesIndex + 1) + ' / ' + contentPages.length
	$(paginationPagesCounter).text(paginationString)
}

function ScrollToTop()
{
	if(isMobileDevice())
    ScrollBottomContentToTop()
	else
    ScrollRightContentToTop()
}
