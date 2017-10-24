import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Caret from '../../images/back.svg';

const Label = styled.span`
	color: white;
	font-family: -apple-system;
	font-weight: bold;
	font-size: 18px;
	position: relative;
	left: -10px;
`

const AlignmentWrapper = styled.div`
	display: inline-flex;
	align-items: center;
`

const BackButton = ({ label }) =>
	<AlignmentWrapper>
		<img style={{ height: 40, width: 40 }} src={Caret} />
		<Label>{ label }</Label>
	</AlignmentWrapper>

BackButton.defaultProps = {
	label: 'label goes here'
}

export default BackButton
