export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: 3892987589
  },
  {
    item: "Volverte loco con reducer",
    completed: false,
    id: 3892987580
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    case "COMPLETED":
      return state.map(e =>
        e.id === action.id ? { ...e, completed: !e.completed } : e
      );
    case "REMOVE":
      return state.filter(e => !e.completed);
  }

  return state;
};
