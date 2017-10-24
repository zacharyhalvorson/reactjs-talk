import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Caret from '../../images/back.svg';

const Label = styled.span`
	color: white;
	font-family: -apple-system;
	font-size: 18px;
	position: relative;
	left: -8px;
`

const AlignmentWrapper = styled.div`
	display: inline-flex;
	align-items: center;
`

const BackButton = ({ label }) =>
	<AlignmentWrapper>
		<img style={{ height: 36, width: 36 }} src={Caret} />
		<Label>{ label }</Label>
	</AlignmentWrapper>

BackButton.defaultProps = {
	label: 'label goes here'
}

export default BackButton
