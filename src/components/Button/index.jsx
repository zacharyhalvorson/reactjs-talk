import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { OrangeGradient } from '../../constants/gradients'

const Button = styled.button`
	color: white;
	font-size: 16px;
	font-weight: 700;
	padding: .75rem 2.5rem;
	border-radius: 4px;
	background: ${props => props.isPrimary ? OrangeGradient : `transparent`};
	border: none;
	cursor: pointer;
`

Button.defaultProps = {
	children: 'Label goes here'
}

export default Button
