const initState = {
  items: []
};

const rootReducer = (state = initState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_ITEM": {
      let newItems = [
        ...state.items,
        { id: Math.random(), content: action.content, quantity: 1 }
      ];
      console.log(newItems);
      return {
        ...state,
        items: newItems
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
