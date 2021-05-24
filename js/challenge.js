let submitButton = document.querySelector('#submit')
// Select the element from index.html that reads "0"
let second = document.querySelector('#counter')

// As a user, I should see the timer increment every second once the page has loaded.
//printCounter function will increment "second" variable text by 1
function incrementCounter() {
    return second.textContent++;
}

function decrementCounter() {
    return second.textContent--;
}
//setInterval function = execute printCounter (increment 1) function every 1000 milliseconds (or 1 second)
var intervalCounter = setInterval(incrementCounter, 1000);

// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
let incrementButton = document.querySelector('#plus')
let decrementButton = document.querySelector('#minus')
incrementButton.addEventListener('click', incrementAction)

function incrementAction() {
    clearInterval(intervalCounter)
    incrementCounter()
}

decrementButton.addEventListener('click', decrementAction)

function decrementAction() {
    clearInterval(intervalCounter)
    decrementCounter()
}

// As a user, I can 'like' an individual number of the counter. I should see the count of the number of 'likes' associated with that number displayed.
let likeButton = document.querySelector('#heart')
let likeCounts = document.querySelector('.likes')
let likes = 0;

likeButton.addEventListener('click', likeAction)

function likeAction() {
    likes += 1
    return likeCounts.textContent = `${likes} likes`
 }

/* As a user, I can pause the counter, which should:
- pause the counter
- disable all buttons except the pause button
- switch the label on the button from "pause" to "resume"*/

let pauseButton = document.querySelector('#pause')
pauseButton.addEventListener('click', pauseAction)

function pauseAction() {
    //scope.clearInterval(intervalCounter) = scope is the click from event listener
    clearInterval(intervalCounter)
    incrementButton.disabled = true
    decrementButton.disabled = true
    likeButton.disabled = true
    submitButton.disabled = true
    pauseButton.textContent = "resume"
    pauseButton.id = "resume"
}

// resumeButton = button id = 
// let  = document.querySelector('#resume')
// if (resumeButton = true) {
//     pauseButton.removeEventListener('click', pauseAction)
// //     resumeButton.addEventListener('click', resumeAction)
// } else {
//     console.log("resume button is broken :(")
// }

// function resumeAction() {
//     setInterval(incrementCounter, 1000)
//     resumeButton.textContent = "pause"
//     incrementButton.disabled = false
//     decrementButton.disabled = false
//     likeButton.disabled = false
//     submitButton.disabled = false
// }


// As a user, I should be able to click the "resume" button to restart the counter and re-enable the buttons.
// let resumeButton = pauseButton.textContent = "resume"
// resumeButton.addEventListener('click', restartInterval)

// function restartInterval() {
//     setInterval(incrementCounter, 1000)
//     pauseButton.removeEventListener('click', pauseAction)
// }


//counterDiv.append(likeButton, decrementButton, incrementButton, pauseButton, restartButton, h1)

// likesUl.insertBefore(buttonDiv, likesUl);

// As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

submitButton.addEventListener('submit', commentSubmit)

function commentSubmit() {
    preventDefault()
}

