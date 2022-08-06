export const authReducer = (state, action) => {

  const { type, payload: { isAuthenticated, user, allUser } } = action

  switch (type) {
    case 'SET_AUTH':
      {
        return {
          ...state,
          authLoading: false,
          isAuthenticated: isAuthenticated,
          user: user,
        }
      }
    case 'ALL_USERS_LOADED_SUCCESS':
      return {
        ...state,
        allPosts: allUser,
        postsLoading: false,
      }
    default:
      {
        return state
      }
  }

}

