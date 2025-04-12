
const recipesUrl = 'https://dummyjson.com/recipes'
const  getRicepes = async (recipesUrl) =>{
     const data = await fetch(recipesUrl);
     const json = await data.json();
     const recipesList = json.recipes;
     console.log(recipesList)
     

     recipesList.forEach(element => {
        const  recipelist = document.getElementById('recipe-list');
        const recipeItem = document.createElement('li');
        const recipeImage = document.createElement('img');
        recipeImage.src=`${element.image}`
        const recipeIngredents = document.createElement('p');
        recipeIngredents.innerHTML = `<strong>Ingredents</strong> ${
            element.ingredients.map(ingredient => ingredient)
        }`
        const ingredentStrong = document.createElement('strong');
        ingredentStrong.textContent = 'ingredients'
        const viewRecipe = document.createElement('a');
          recipeItem.classList.add('recipe-item');
          recipelist.appendChild(recipeItem)
          recipeItem.appendChild(recipeImage);
          recipeItem.appendChild(recipeIngredents);
          recipeIngredents.appendChild(ingredentStrong);
          recipeItem.appendChild(viewRecipe);



     });
    return recipesList;
}

getRicepes(recipesUrl);
