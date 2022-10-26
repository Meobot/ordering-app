// TODO calculate price and display
// TODO discount for multiple items

import { shakeList } from './data.js'

const container = document.getElementById("container")
const addedItems = document.getElementById("added-items-container")
const summaryContainer = document.getElementById("summary-container")
const modalContainer = document.getElementById("modal-container")
const paymentModal = document.getElementById("payment-modal")
const ratingModal = document.getElementById("rating-modal")
let totalPrice = document.getElementById("total-price")
let itemTotal = 0

document.addEventListener("click", function(e) {
    if (e.target.dataset.add) {
        handleAddClick(e.target.dataset.add)
    }
    else if (e.target.classList.contains("remove-btn")) {
        handleRemoveClick(e.target)
    }
    else if (e.target.dataset.submit) {
        handleSubmitClick(e.target.dataset.submit)
    }
    else if (e.target.dataset.pay) {
        handlePayClick(e.target.dataset.pay)
    }
})

function handleAddClick(shakeId) {
    const targetShakeObj = shakeList.filter(function(shake) {
        return shake.uuid === shakeId
    })[0] 
    
    addedItems.innerHTML += `
        <div class="added-shake">
            <div class="added-shake-details">
                <span class="added-shake-name">${targetShakeObj.name}</span>
                <span class="added-shake-price">$${targetShakeObj.price}</span>
            </div>
            <span class="remove-btn">remove</span>
        </div>
    `
    summaryContainer.style.display = "block"
    itemTotal += 1
}

function handleRemoveClick(shake) {
    const shakeForRemoval = shake.parentElement
    shakeForRemoval.remove()

    itemTotal -= 1
    if (itemTotal === 0) {
        summaryContainer.style.display = "none"
    }
}

function handleSubmitClick() {
    // submit order logic 
    // needs to bring up payment modal
    // hide after payment and bring up rating
    modalContainer.style.display = "block"
    container.classList.add("bg-darken")
}

function handlePayClick() {
    // thank you for your order message, time out then
    // change modal into rating
    paymentModal.style.display = "none"
    ratingModal.style.display = "block"
}

function getShakesHtml() {
    let shakesHtml = ``

    shakeList.forEach(function(shake) {
        shakesHtml += `
        <div class="shake-container">
            <div class="shake-img-container">
            <img src="${shake.image}" alt="image of a shake" class="shake-img">
            </div>
            <div class="shake">
                <div class="shake-details">
                    <h2 class="shake-name">${shake.name}</h2>
                    <h4 class="price">$${shake.price}</h4>
                    <p class="shake-description">${shake.description}</p>
                </div>
                <div class="ingredient-container">
                    <p class="ingredient-tag">Ingredients</p>
                    <p class="ingredients">${shake.ingredients}</p>
                </div>
            </div>
            <span class="shake-span" data-add="${shake.uuid}"><i class="fa-solid fa-plus" data-add="${shake.uuid}"></i></span>
        </div>
        `
    })
    return shakesHtml
}

function render() {
    document.getElementById("items-container").innerHTML = getShakesHtml()
}

render()