document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function () {
    if (this.innerText === "Объявления") {
    }
  })
})

function toggleFavorite(btn) {
  btn.classList.toggle("active")
  if (btn.classList.contains("active")) {
    btn.innerHTML = "❤" 
    showToast("Добавлено в избранное")
  } else {
    btn.innerHTML = "♡" 
    showToast("Удалено из избранного")
  }
}

function showToast(message) {
  const toast = document.getElementById("toast")
  toast.innerText = message
  toast.style.visibility = "visible"
  setTimeout(() => {
    toast.style.visibility = "hidden"
  }, 5000)
}

function filterAds() {
  const search = document.getElementById("searchInput").value.toLowerCase()
  const minPrice = Number.parseInt(document.getElementById("minPrice").value)
  const maxPrice = Number.parseInt(document.getElementById("maxPrice").value)
  const listings = document.querySelectorAll(".listing")

  listings.forEach((listing) => {
    const title = listing.querySelector("h3").innerText.toLowerCase()
    const priceText = listing.querySelector("p").innerText.replace(/[^\d]/g, "")
    const price = Number.parseInt(priceText) || 0
    let visible = true

    if (search && !title.includes(search)) visible = false
    if (!isNaN(minPrice) && price < minPrice) visible = false
    if (!isNaN(maxPrice) && price > maxPrice) visible = false

    listing.style.display = visible ? "block" : "none"
  })
}

document.addEventListener("DOMContentLoaded", () => {
  const heartButtons = document.querySelectorAll(".heart-btn")
  heartButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
    })
  })
})
function toggleFavorite(button) {
  button.classList.toggle("active")

  const toast = document.getElementById("toast")

  if (button.classList.contains("active")) {
    toast.textContent = "Successfully added to favorites"
    showToast()
  } else {
    toast.textContent = "Removed from favorites"
    showToast()
  }
}

function showToast() {
  const toast = document.getElementById("toast")
  toast.className = "show"

  setTimeout(() => {
    toast.className = toast.className.replace("show", "")
  }, 5000)
}

function filterAds() {
  console.log("Filtering ads...")
}
