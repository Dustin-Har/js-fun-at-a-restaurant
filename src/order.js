function takeOrder(orderNumber, deliveryList){
  for (var i = 0; i <= deliveryList.length; i++){
    if (deliveryList.length <= 2){
      return deliveryList.push(orderNumber);
    }
  }
};

function refundOrder(index, deliveryList){
  if(index === 1){
   deliveryList.splice(0, 1);
  }else{
   deliveryList.splice(1, 1);
  }
};

function listItems(deliveryList){
return `${deliveryList[0].item}, ${deliveryList[1].item}, ${deliveryList[2].item}`;
};

// function searchOrder(deliveryList){
//   if (deliveryList[0].item === true && deliveryList[1].item === false){
//     return deliveryList[0].item;
//   }if else (deliveryList[0].item === false && deliveryList[1].item === true){
//     return deliveryList[1].item;
//   }else{
//     return "sushi";
//   }
// };


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  //searchOrder
}
