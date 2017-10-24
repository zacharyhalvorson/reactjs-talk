import React from 'react';
import styled from 'styled-components';

import BackButton from './BackButton';

import { OrangeGradient } from '../../constants/gradients';

const Button = styled.button`
	color: white;
	font-size: 16px;
	font-weight: 700;
	padding: .75rem 1.5rem;
	border-radius: 4px;
	background: ${props => props.secondary ? `transparent` : OrangeGradient};
	border: none;
	cursor: pointer;
`;

export {
	Button,
	BackButton,
};
