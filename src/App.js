import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return { value: state.value + 1, even: !state.even }
    case 'RESET':
      return { value: 0, even: true }
    case 'DECREASE':
      return { value: state.value - 1, even: !state.even }
    default:
      return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0, even: true })
  return (
    <section className='section-center'>
      <h1>counter app</h1>
      <h3
        className={state.value ? (state.value < 0 ? 'danger' : 'success') : ''}>
        number is :{state.value}
      </h3>
      {state.even ? <h3>number is even</h3> : <h3>number is odd</h3>}
      <button
        className='btn'
        onClick={() => {
          dispatch({ type: 'INCREASE' })
        }}>
        increase
      </button>
      <button
        className='btn'
        onClick={() => {
          dispatch({ type: 'RESET' })
        }}>
        reset
      </button>
      <button
        className='btn'
        onClick={() => {
          dispatch({ type: 'DECREASE' })
        }}>
        decrease
      </button>
    </section>
  )
}

export default App
