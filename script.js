 let formBtn=document.querySelector('#login-btn');
  let loginform=document.querySelector('.login-form-container');
  let formClose=document.querySelector('#form-close');

  document.onscroll = () => {
      if(window.scrollY > 0){
          document.querySelector('.header') .classList.add('active');
      } else{
          document.querySelector('.header') .classList.remove('active');
      }
  };

  document.onload = () => {
      if(window.scrollY > 0){
          document.querySelector('.header') .classList.add('active');
      } else{
          document.querySelector('.header') .classList.remove('active');
      }
  };
  
  const navbar = document.querySelector('.header .navbar');
  const menuButton = document.querySelector('.header .menu');
  

  document.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
    } else {
      document.querySelector('.header').classList.remove('active');
    }
  };
  
 
  
  function getMealRecipe(e){
    e.preventDefault();
    if(e.target.classList.contains('recipe-btn')){
        let mealItem = e.target.parentElement.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => mealRecipeModal(data.meals));
    }
}

// create a modal
function mealRecipeModal(meal){
  console.log(meal);
  meal = meal[0];
  let html = `
      <h2 class = "recipe-title">${meal.strMeal}</h2>
      <p class = "recipe-category">${meal.strCategory}</p>
      <div class = "recipe-instruct">
          <h3>Instructions:</h3>
          <p>${meal.strInstructions}</p>
      </div>
      <div class = "recipe-meal-img">
          <img src = "${meal.strMealThumb}" alt = "">
      </div>
      <div class = "recipe-link">
          <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
      </div>
  `;
  mealDetailsContent.innerHTML = html;
  mealDetailsContent.parentElement.classList.add('showRecipe');
}

  
  