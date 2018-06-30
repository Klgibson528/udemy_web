const initialState = {
  count: 0
};

function rootReducer(state = initialState, action) {
  // let newState = Object.assign({}, state);
  let newState = { ...state };
  switch (action.type) {
    case "INCREMENT":
      newState.count++;
      return newState;

    case "DECREMENT":
      newState.count--;
      return newState;
    default:
      return state;
  }
}
const store = Redux.createStore(rootReducer);

$(document).ready(function() {
  let currentState = store.getState();
  $("#counter").text(currentState.count);
  $("#increment").on("click", function() {
    store.dispatch(increment());
    let currentState = store.getState();
    $("#counter").text(currentState.count);
  });
  $("#decrement").on("click", function() {
    store.dispatch(decrement());
    let currentState = store.getState();
    $("#counter").text(currentState.count);
  });
});

function increment() {
  return {
    type: "INCREMENT"
  };
}

function decrement() {
  return {
    type: "DECREMENT"
  };
}
