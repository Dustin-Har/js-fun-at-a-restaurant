function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
}

function addIngredients(ingredient, ingredients){
  if(ingredients.includes(ingredient)){
    return ingredients;
  }else{
    return ingredients.push(ingredient);
  }
}

function formatPrice(price){
  return `$${price}`;
}

function decreasePrice(initialPrice){
  return initialPrice * .9;
}

function createRecipe(title, ingredients, type){
  return {
    title: title,
    ingredients: ingredients,
    type: type,
  };
}





module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
