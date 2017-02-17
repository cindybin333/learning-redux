export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CHANGE_TITLE = 'CHANGE_TITLE'

export const increment = ({
   type: INCREMENT
})

export const decrement = ({
  type: DECREMENT
})

export const changeTitle = (title) => ({
  type: CHANGE_TITLE,
  title
})
