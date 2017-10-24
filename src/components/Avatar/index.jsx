import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Avatar = styled.img`
	display: block;
	margin: 1rem auto 3rem auto;
	border-radius: 100%;
	height: 72px;
	width: 72px;
	text-align: center;
`

Avatar.defaultProps = {
	src: 'http://78.media.tumblr.com/avatar_8d7cb9525438_128.png'
}

export default Avatar;
