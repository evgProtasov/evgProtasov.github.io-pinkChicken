const textarea = document.querySelector('.chat-textarea textarea')
const chatField = document.querySelector('.chat-field')
const titleHelp = document.querySelector('.title-help')
const settings = document.querySelector('.title-settings')
const buttonMediaPlan = document.querySelector('.button-mediaplan')
const buttonReport = document.querySelector('.button-report ')
const filesPlan = document.querySelector('.files-plans')
const filesReport = document.querySelector('.files-reports')
const itemsPrepare = document.querySelector('.items-prepare')
const filesStub = document.querySelector('.files-stub')

// Chat variables

const chatOpen = document.querySelector('.chat-open')
const chatDialog = document.querySelector('.chat-dialog')
const dialogTime = document.querySelector('.dialog-time')
const infoTime = document.querySelector('.content-info--time')
const dialogLetters = document.querySelector('.dialog-letters')
// Enter

const enter = document.querySelector('.icon-enter')



// Arrows
const plansArrow = document.querySelector('.plans-arrow')
const reportsArrow = document.querySelector('.reports-arrow')

// Plans and reports containers

const plansContainer = document.querySelector('.plans-container')
const reportsContainer = document.querySelector('.reports-container')



// Аrray variables for mediaplan and reports

const mediaPlan = []
const reports = []

// Show and hide plans and reports

plansArrow.addEventListener('click', ()=> {
    plansContainer.classList.toggle('none')
    plansArrow.classList.toggle('arrow--rotate')
})

reportsArrow.addEventListener('click', ()=> {
    reportsContainer.classList.toggle('none')
    reportsArrow.classList.toggle('arrow--rotate')
})


// Date

let date = new Date()
let dateDay = date.getDate() 
let dateYear = date.getFullYear()
let dateHours = date.getHours()
let dateMinutes = date.getMinutes()

function getShortYear(date) {
    return date % 100
}


// Add color border textarea

textarea.addEventListener('focus', ()=> {
    chatField.classList.add('chat-field--border')
})
textarea.addEventListener('blur', ()=> {
    chatField.classList.remove('chat-field--border')
})

// Textarea value

function addMessage() {
    let value = textarea.value
    

    dialogTime.innerHTML = `Сегодня, ${dateHours < 9 ? '0'+dateHours : dateHours}:${dateMinutes < 9 ? '0'+dateMinutes : dateMinutes}`
    infoTime.innerHTML = `${dateHours < 9 ? '0'+dateHours : dateHours}:${dateMinutes < 9 ? '0'+dateMinutes : dateMinutes}`

    let letterItem = document.createElement('div')
    let letterContent = document.createElement('div')
    let contentText = document.createElement('div')
    let contentInfo = document.createElement('div')
    let contentInfoTime = document.createElement('div')


    letterItem.classList.add('letter-item', 'right')
    letterContent.classList.add('letter-content')
    contentText.classList.add('content-text', 'content')
    contentInfo.classList.add('content-info', 'right')
    contentInfoTime.classList.add('content-info--time')


    contentText.innerHTML = `${value}`
    contentInfoTime.innerHTML = `${dateHours < 9 ? '0'+dateHours : dateHours}:${dateMinutes < 9 ? '0'+dateMinutes : dateMinutes}`

    letterItem.append(letterContent)
    letterContent.append(contentText)
    letterContent.append(contentInfo)
    contentInfo.append(contentInfoTime)

    if (value != '') {
        chatOpen.classList.add('none')
        chatDialog.classList.remove('none')
        dialogLetters.append(letterItem)
    }
    

    textarea.value = ''
    
}

enter.addEventListener('click', addMessage)
textarea.addEventListener( 'keyup', event => {
    event.preventDefault()
    if( event.code === 'Enter' ) {
        addMessage()
    }
  });


// Open window personal assistant

settings.addEventListener('click', () => {
    titleHelp.classList.toggle('none')
})

// Add mediaplan

buttonMediaPlan.addEventListener('click', () => {
    let div = document.createElement('div')
    const itemsPrepareList = document.querySelector('.files-items .items-prepare')
    filesPlan.classList.remove('none')
    filesStub.classList.add('none')
    
    
    div.classList.add('item')
    div.innerHTML = `<p>Companyname ${dateDay}/${getShortYear(dateYear)}</p>`
    itemsPrepareList.prepend(div)

    //Refresh icon
    
    
})

// Add report

buttonReport.addEventListener('click', () => {
    let div = document.createElement('div')
    const itemsReportList = document.querySelector('.reports-items .items-prepare')
    filesReport.classList.remove('none')
    filesStub.classList.add('none')
    
    
    div.classList.add('item')
    div.innerHTML = `<p>Companyname ${dateDay}/${getShortYear(dateYear)}</p>`
    itemsReportList.prepend(div)
    
})
