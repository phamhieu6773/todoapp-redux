const initState = {
  search: "",
  status: "All",
  priority: [],
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_FILTERS":
      return {
          ...state,
          search: action.payload,
      };
    case "STATUS_FILTERS":
        return {
            ...state,
            status: action.payload
        }
    case "PRIORITY_FILTERS":
        return {
            ...state,
            priority: action.payload
        }
    default:
      return state;
  }
};

export default filtersReducer;
