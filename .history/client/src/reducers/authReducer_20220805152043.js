export const authReducer = (state, action) => {
  
  const { type, payload: { isAuthenticated, user} } = action
  
  switch (type) {
    case 'SET_AUTH': 
    {
      return {
        ...state,
        authLoading: false,
        isAuthenticated: isAuthenticated,
        user: user
      }
    }
    case 'GET_ALL_USER_SUCCESS'
    default: 
    {
      return state
    }
  }
  
}

