import { createStore } from "redux";

//action: has a type and payload
//type: string literal, also called action type
//payload: can be anything, string or object
//executing an action = dispatching. can be triggered in view
//eg. clicking HTML button
//once an action is dispatched, it goes through all reducers

const increment = () => {
  return {
    type: "INCREMENT"
  };
};

const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

//reducers: once view dispatches action with type and optional payload
// it passes through all reducers
// reducer is a pure function, produces same output, has no side effects
// has two inputs: state and action
// state is always global state object from the store
// action is dispatched action with type and optionl payload
// reducer reduces the previous state and incoming action to new state
// always returns new state without mutating incoming object

function counter(state = 0, action) {
  console.log("counter", action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

//store: glues actions and reducers.
//where do I trigger actions? who delegates the actions to reducer?
//where do i get the updated state to glue it to the view?
//holds one global state object
// no multiple stores/states. store is only one instance

const store = createStore(counter);
