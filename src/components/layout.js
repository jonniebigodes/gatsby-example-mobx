import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import Counter from './Counter'

const DefaultLayout = props => {
  const {children} = props
  return (
    <div
      style={{
        margin: '0 auto',
        width: 900,
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}>
      <Link to="/">
        <h3>MobX example</h3>
      </Link>
      <div>
        <Counter />
      </div>

      <ul>
        <li>
          <Link to="/a/">a</Link>
        </li>
        <li>
          <Link to="/b/">b</Link>
        </li>
        <li>
          <Link to="/c/">c</Link>
        </li>
      </ul>
      {children}
    </div>
  )
}
DefaultLayout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
}
export default DefaultLayout
