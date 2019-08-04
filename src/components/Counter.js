import React from 'react'
import {observer, inject} from 'mobx-react'

const Counter = inject(`store`)(
  observer(({store}) => (
    <>
      <div>Counted to: {store.Count}</div>
      <div>
        {/* eslint-disable react/button-has-type */}
        <button onClick={() => store.Increment()}>Add</button>
        <button onClick={() => store.Decrement()}>Subtract</button>
        {/* eslint-enable react/button-has-type  */}
      </div>
    </>
  ))
)

export default Counter
