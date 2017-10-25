import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Avatar from '../Avatar'
import Action from '../Action'
import Button from '../Button'
import BackButton from '../Backbutton'
import Modal from '../Modal'

import Cog from '../../images/settings.svg'

const SplitWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Name = styled.h1`
	margin: 2rem 0;
	font-size: 24px;
`

const ProfileModal = ({
	isPrimary,
	backButtonLabel,
	rightSideAction,
	profileName,
	pictureUrl,
	buttonLabel,
}) =>
	<Modal isPrimary={isPrimary}>
		<SplitWrapper>
			<BackButton label={backButtonLabel}/>
			<Action src={rightSideAction} />
		</SplitWrapper>
		<Name>{profileName}</Name>
		<Avatar src={pictureUrl} />
		<Button isPrimary={isPrimary}>{buttonLabel}</Button>
	</Modal>

ProfileModal.defaultProps = {
	rightSideAction: Cog,
	pictureUrl: 'http://78.media.tumblr.com/ea64810e50585d7fa921c76f788edbd2/tumblr_mvdkeweHJC1sk96ylo1_500.jpg',
	name: 'Name goes here',
	buttonLabel: 'Label goes here',
}

export default ProfileModal
