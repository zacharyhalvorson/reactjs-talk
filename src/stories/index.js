import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Avatar from '../components/Avatar'
import Action from '../components/Action'
import Button from '../components/Button'
import Modal from '../components/Modal'
import ProfileModal from '../components/ProfileModal'

import Details from '../images/details.svg'
import Cog from '../images/settings.svg'

const BgColor = styled.div`
	background-color: gray;
`

storiesOf('Action', module)
	.add('default', () =>
		<BgColor>
			<Action />
		</BgColor>
	)
	.add('details', () =>
		<BgColor>
			<Action src={Details}/>
		</BgColor>
	)
	.add('settings', () =>
		<BgColor>
			<Action src={Cog}/>
		</BgColor>
	)

storiesOf('Avatar', module)
	.add('default', () =>
		<Avatar />
	)

storiesOf('Button', module)
	.add('default', () =>
		<BgColor>
			<Button />
		</BgColor>
	)
	.add('primary', () =>
		<Button isPrimary />
	)

storiesOf('Modal', module)
	.add('default', () =>
		<Modal />
	)
	.add('primary', () => <Modal isPrimary />)

storiesOf('Profile Modal', module)
	.add('default', () =>
		<ProfileModal />
	)
	.add('replicants', () =>
		<ProfileModal
			isPrimary
			backButtonLabel="Replicants"
			rightSideAction={Details}
			profileName="Rick Deckard"
			pictureUrl="https://i.kinja-img.com/gawker-media/image/upload/s--DgVKPS86--/c_fill,fl_progressive,g_center,h_200,q_80,w_200/uqawfpoaw8uijfz6xafy.jpg"
			buttonLabel="Retire"
		/>
	)
