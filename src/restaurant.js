
function createRestaurant(name){
  pizzaRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return pizzaRestaurant;
};

function addMenuItem(name, item){
  //.includes is a Conditionaland wont push into object.
  if(item.type === "lunch" && !pizzaRestaurant.menus.lunch.includes(item)){
    pizzaRestaurant.menus.lunch.push(item);
  }else if(item.type === "breakfast" && !pizzaRestaurant.menus.breakfast.includes(item)){
    pizzaRestaurant.menus.breakfast.push(item);
  }else if(item.type === "dinner" && !pizzaRestaurant.menus.dinner.includes(item)){
    pizzaRestaurant.menus.dinner.push(item);
  }
// console.log("menus object ---->>> ", name.menus);
  return pizzaRestaurant;
}

function removeMenuItem(name, item, type){
  // .shift to remove first element of an array
  // pizzaRestaurant.menus.breakfast.shift(item); remvoves an item
    pizzaRestaurant.menus.breakfast.shift(item);

    return `No one is eating our ${item} - it has been removed from the ${type} menu!`;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
