const buttonsFilter = document.querySelectorAll(".btn-filter")
const buttonsSort = document.querySelectorAll(".btn-sort")
const resultFilter = document.getElementById("result-filter")
const resultSort = document.getElementById("result-sort")

let buttonText = ""

function writeFilterText(buttonText) {
  if (buttonText === "All") {
    resultFilter.innerHTML = "You chose all"
  }
  else if (buttonText === "Italy") {
    resultFilter.innerHTML = "You chose Italian"
  }
  else if (buttonText === "USA") {
    resultFilter.innerHTML = "You chose USA"
  }
  else if (buttonText === "China") {
    resultFilter.innerHTML = "You chose China"
  }
}

buttonsFilter.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active")
    buttonsFilter.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const buttonText = button.innerText
    writeFilterText(buttonText)
  })
})

function writeSortText(buttonText) {
  if (buttonText === "Descending") {
    resultSort.innerHTML = "You sort by descending"
  }
  else if (buttonText === "Ascending") {
    resultSort.innerHTML = "You sort by ascending"
  }
}

buttonsSort.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active")
    buttonsSort.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const buttonText = button.innerText
    writeSortText(buttonText)
  })
})

