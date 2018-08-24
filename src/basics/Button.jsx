import React, { Fragment } from 'react'
import cx from 'classnames'
import t from 'prop-types'

import styles from './Button.module.less'

export const Button = ({ children, kind }) => (
  <div
    className={cx(styles.alert, {
      [styles[kind]]: true,
    })}
  >
    {children}
  </div>
)

Button.propTypes = {
  kind: t.oneOf(['info', 'positive', 'negative', 'warning']),
}

Button.defaultProps = {
  kind: 'info',
}
