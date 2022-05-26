
let lastOperation = 'plus';
let lastNumber = 0;
let tempNumber = 0;
let showingOnScreen = 0;
let numToDivideBy = 10;
let theNumberIsDouble = false;
let NUM_TO_MULTIPLE_BY = 10;

function makeOperatorAction(lastOperation){
   return {
    'plus': (num1, num2) => num1 + num2,
    'sub': (num1, num2) => num1 - num2,
    'div': (num1, num2) => num1 / num2,
    'mul': (num1, num2) => num1 * num2
   }[lastOperation]
}

function makeNumberAction (currNum, clickedNum) {
  tempNumber = currNum * NUM_TO_MULTIPLE_BY + clickedNum; 
  if(theNumberIsDouble){
    showingOnScreen = tempNumber/ numToDivideBy;
    numToDivideBy *= NUM_TO_MULTIPLE_BY;
  }
  else{
    showingOnScreen = tempNumber;
  }
}

function makeCharAction (){
  if(theNumberIsDouble){
    alert('wrong operation')
  }
  else{
    theNumberIsDouble = true;
  }
}


function findByType(arr, type){
  return arr.actions.find(action => action.type == type);
}

function findByProperty(arr, prprty){
  return arr.properties.find(property => property.name == prprty)
}


function findId(buildingBlock, id){
    // generator
    let views = buildingBlock.views;
    if (views.length === 0) return null;
    for(let view of views){
      if (view.id === id) {
        return view;
      }
      let output = findId(view, id);
      if (output != null){
        return output;
      }
    }
    return null
}

function changeCalcScreen(calc_button_element) {
  let numberAction = findByType(calc_button_element,'number');
  let operatorAction = findByType(calc_button_element, 'action');
  let charAction = findByType(calc_button_element, 'char');
  if(numberAction){
    makeNumberAction(tempNumber, numberAction.value);
    return showingOnScreen;
  }
  else if(charAction){
    makeCharAction();
    return showingOnScreen;
  }
  else{
    if(operatorAction.value === 'del'){
      showingOnScreen = 0;
    }
    else if(operatorAction.value === 'reset'){
      lastOperation = 'plus';
      lastNumber = 0;
      showingOnScreen = 0;
    }
    else{
      showingOnScreen = makeOperatorAction(lastOperation)(lastNumber,showingOnScreen);
      lastOperation = operatorAction.value;
      lastNumber = showingOnScreen;
    }
    tempNumber = 0;
    theNumberIsDouble = false;
    numToDivideBy = 10;
    return showingOnScreen;
  }
}

export {findId, changeCalcScreen, findByProperty}