const initState = {
  items: []
};

const rootReducer = (state = initState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_ITEM": {
      let newItems = [
        ...state.items,
        { id: Math.random(), content: action.content }
      ];
      console.log(newItems);
      return {
        ...state,
        items: newItems
      };
    }
  }

  return state;
};

export default rootReducer;
