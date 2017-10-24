import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Share from '../../images/share.svg'

const Action = styled.img`
	height: 36px;
	width: 36px;
`

Action.defaultProps = {
	src: Share
}

export default Action;
