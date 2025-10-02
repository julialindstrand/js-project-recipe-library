// Pickups
const buttonsFilter = document.querySelectorAll(".btn-filter")
const buttonsSort = document.querySelectorAll(".btn-sort")
const resultFilter = document.getElementById("result-filter")
const resultSort = document.getElementById("result-sort")
const container = document.getElementById('container')
const button = document.getElementById('button')
const randomButtons = document.querySelector(".btn-random")

let currentFilter = []
let currentSort = ""
let buttonText = ""

// Recipes
const recipes = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
  },
  {
    id: 2,
    title: "Vegetarian Pesto Pasta",
    image: "./chicken.webp",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "https://example.com/vegetarian-pesto-pasta",
    diets: ["vegetarian"],
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper"
    ],
    pricePerServing: 3.0,
    popularity: 92
  },
  {
    id: 3,
    title: "Gluten-Free Chicken Stir-Fry",
    image: "./chicken.webp",
    readyInMinutes: 20,
    servings: 3,
    sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
    diets: ["gluten-free"],
    cuisine: "Asian",
    ingredients: [
      "chicken breast",
      "broccoli",
      "bell pepper",
      "carrot",
      "soy sauce (gluten-free)",
      "ginger",
      "garlic",
      "sesame oil",
      "cornstarch",
      "green onion",
      "sesame seeds",
      "rice"
    ],
    pricePerServing: 4.0,
    popularity: 78
  },
  {
    id: 4,
    title: "Dairy-Free Tacos",
    image: "./chicken.webp",
    readyInMinutes: 15,
    servings: 2,
    sourceUrl: "https://example.com/dairy-free-tacos",
    diets: ["dairy-free"],
    cuisine: "Mexican",
    ingredients: [
      "corn tortillas",
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomato",
      "avocado"
    ],
    pricePerServing: 2.8,
    popularity: 88
  },
  {
    id: 5,
    title: "Middle Eastern Hummus",
    image: "./chicken.webp",
    readyInMinutes: 10,
    servings: 4,
    sourceUrl: "https://example.com/middle-eastern-hummus",
    diets: ["vegan", "gluten-free"],
    cuisine: "Middle Eastern",
    ingredients: [
      "chickpeas",
      "tahini",
      "garlic",
      "lemon juice",
      "olive oil"
    ],
    pricePerServing: 1.5,
    popularity: 95
  },
  {
    id: 6,
    title: "Quick Avocado Toast",
    image: "./chicken.webp",
    readyInMinutes: 5,
    servings: 1,
    sourceUrl: "https://example.com/quick-avocado-toast",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "bread",
      "avocado",
      "lemon juice",
      "salt"
    ],
    pricePerServing: 2.0,
    popularity: 90
  },
  {
    id: 7,
    title: "Beef Stew",
    image: "./chicken.webp",
    readyInMinutes: 90,
    servings: 5,
    sourceUrl: "https://example.com/beef-stew",
    diets: [],
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms"
    ],
    pricePerServing: 5.5,
    popularity: 80
  }
]


// Recipe box
const showRecipes = (recipesArray) => {
  container.innerHTML = ''
  recipesArray.forEach(recipe => {
    container.innerHTML += `
    <div class="card">
    <img src="example.jpg"/>
    <h2>${recipe.title}</h2>
    <hr class="solid">
    <li><b>Cuisine: </b>${recipe.cuisine}</li>
    <li><b>Time: </b>${recipe.readyInMinutes}</li>
    <hr class="solid">
    <p><b>Ingredients</b></p>
    <li>${recipe.ingredients.join("<br>")}</li>
    </div> `
  })
}
showRecipes(recipes)


// Filter
const updateRecipes = () => {
  let filteredRecipes = recipes
  if (currentFilter.length > 0) {
    filteredRecipes = filteredRecipes.filter(recipe =>
      currentFilter.includes(recipe.cuisine.toLowerCase())
    )
    console.log("Filtered recipes:", filteredRecipes)
  }
  filteredRecipes = sortRecipes(filteredRecipes)
  showRecipes(filteredRecipes)
}


// Sort
const sortRecipes = (recipesArray) => {
  if (currentSort === "Ascending") {
    return recipesArray.sort((a, b) => a.readyInMinutes - b.readyInMinutes)
  }
  if (currentSort === "Descending") {
    return recipesArray.sort((a, b) => b.readyInMinutes - a.readyInMinutes)
  }
  return recipesArray
}


// Eventlistener Filter
buttonsFilter.forEach(button => {
  button.addEventListener("click", () => {
    const filterText = button.innerText.toLowerCase()
    if (filterText === "all") {
      currentFilter = [] // inga filter
    } else {
      currentFilter = [filterText]
    }
    buttonsFilter.forEach(btn => btn.classList.remove("active"))
    button.classList.add("active")
    updateRecipes()
  })
})


// Eventlistener Sort
buttonsSort.forEach(button => {
  button.addEventListener("click", () => {
    currentSort = button.innerText
    buttonsSort.forEach(btn => btn.classList.remove("active"))
    button.classList.add("active")
    updateRecipes()
  })
})


// Empty Message
const showEmptyMessage = () => {
  if (currentFilter === "Swedish")
    container.innerHTML = `
    <div class="empty-message">
      <p>No recipes match the selected filters.</p>
    </div>`
}

// Random Button
randomButtons.addEventListener("click", () => {
  randomButtons.classList.toggle("selected")
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)]
  showRecipes([randomRecipe])
})
showRecipes(recipes)