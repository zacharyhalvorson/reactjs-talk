import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { PurpleGradient, GreenGradient } from '../../constants/gradients'
import { PopoverShadow } from '../../constants/shadows'

import SettingsModal from './SettingsModal'

const Modal = styled.div`
	font-family: -apple-system;
	text-align: center;
	font-size: 3rem;
	color: white;

	border-radius: 16px;
	width: 90%;
	max-width: 260px;
	padding: 1rem;

	box-shadow: ${PopoverShadow};
	background-image:  ${props => props.isPrimary ? PurpleGradient : GreenGradient};
`

export {
	Modal,
	SettingsModal,
}
