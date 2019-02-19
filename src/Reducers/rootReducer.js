const initState = {
  items: []
};

const rootReducer = (state = initState, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_ITEM": {
      console.log(action.name);
      let newItems = [
        ...state.items,
        {
          name: action.name,
          quantity: action.qty.toString()
        }
      ];
      console.log(newItems);
      return {
        ...state,
        items: newItems
      };
    }

    case "ADD_QTY": {
      return null;
    }

    case "STATE_INIT": {
      return { ...state, items: action.itemList };
    }

    default:
      return state;
  }
};

export default rootReducer;
