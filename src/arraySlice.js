export const initialState = [];

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload]; // Add new item to array
    case "REMOVE_ITEM":
      return state.filter((_, index) => index !== action.payload); // Remove item by index
    case "CLEAR":
      return []; // Clear all items
    default:
      return state;
  }
}