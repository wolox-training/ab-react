import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS: // TODO to implement the logic
      return { ...state, originalData: action.payload, books: action.payload };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return { ...state, bookSelected: [...state.bookSelected, action.payload] };
    case actions.ADD_ITEM: // TODO to implement the logic
      return {
        ...state,
        bookSelected: state.bookSelected.map(book => {
          book = Object.assign({}, book);
          if (book.id === action.payload) {
            book.quantity += 1;
          }
          return book;
        })
      };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return { ...state, bookSelected: state.bookSelected.filter(book => book.id !== action.payload) };
    case actions.SEARCH_ITEM: // TODO to implement the logic
      return {
        ...state,
        books: state.originalData.filter(book =>
          book.name.toLowerCase().includes(action.payload.toLowerCase())
        )
      };
    default:
      return state;
  }
}

export default reducer;
