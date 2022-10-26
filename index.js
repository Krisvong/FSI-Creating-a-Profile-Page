
let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')
header.setAttribute('class','dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('div')
dogContent.setAttribute ('class','dog-content')
content.append(dogContent)

let dogImage = document.createElement ('img')
dogImage.setAttribute ('class','dog-image')
dogImage.setAttribute ('src','./assets/rizzo.jpg')
dogContent.append(dogImage)

let dogDetails = document.createElement ('div')
dogDetails.setAttribute ('class','dog-details')
dogContent.append(dogDetails)

let dogDescriptionHeader = document.createElement ('h3')
dogDescriptionHeader.textContent = "Description:"
dogDetails.append(dogDescriptionHeader)

let dogDescriptionParagraph = document.createElement ('p')
dogDescriptionParagraph.textContent = "This gentle dog is aloof toward her owner, and never comes when called.She always acts as though any stranger she meets will harm her, and dislikes other animals."
dogDetails.append(dogDescriptionParagraph)

let dogFeedingTimes = document.createElement ('h3')
dogFeedingTimes.textContent = "Feeding Times:"
dogDetails.append(dogFeedingTimes)

let feedingTimesList = document.createElement ('ul')
dogDetails.append(feedingTimesList)

let timeOne = document.createElement("li")
timeOne.textContent = "9:00am"
dogDetails.append(timeOne)

let timeTwo = document.createElement ('li')
timeTwo.textContent = "12:00pm"
dogDetails.append(timeTwo)

let timeThree = document.createElement ('li')
timeThree.textContent = "5:00pm"
dogDetails.append(timeThree)

// How to loop to make it more efficient:

// let ul = document.createElement ('ul')

// let times = ['9:00am', '12:00pm', '5:00pm']

// for(let i = 0; i < times.length; i++){
    // let li = document.createElement('li');
    // li.textContent = times[i]
    // ul.append(li)
// 
// dogDetails.append(ul)