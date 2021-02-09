const searchMenus = () => {
  const searchText = document.getElementById('search-field').value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
    .then(res => res.json())
    .then(data => displayMenus(data.meals))
}
const displayMenus = meals => {
  const menuContainer = document.getElementById('meal-container');
  menuContainer.innerHTML = '';

  meals.forEach(meal => {
    const menuDiv = document.createElement('div');
    menuDiv.className = 'single-result';
    menuDiv.innerHTML = `
       <div class="meal-item">
          
            <img src="${meal.strMealThumb}" alt="food">
            <h3 class="meal-text">${meal.strMeal}</h3>
          </div>


      
       `;
       menuContainer.appendChild(menuDiv);
       


  });
}
const mealIngredient = 