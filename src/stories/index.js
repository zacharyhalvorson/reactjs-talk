import React from 'react';
import { storiesOf } from '@storybook/react';


import Avatar from '../components/Avatar'
import Action from '../components/Action'
import Button from '../components/Button'
import Modal from '../components/Modal'
import ProfileModal from '../components/ProfileModal';


import Details from '../images/details.svg';

storiesOf('Action', module)
	.add('default', () => <Action />)

storiesOf('Avatar', module)
	.add('default', () => <Avatar />)

storiesOf('Button', module)
	.add('default', () => <Button />)
	.add('primary', () => <Button isPrimary />)

storiesOf('Modal', module)
	.add('default', () => <Modal />)
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
			name="Rick Deckard"
			pictureUrl="https://i.kinja-img.com/gawker-media/image/upload/s--DgVKPS86--/c_fill,fl_progressive,g_center,h_200,q_80,w_200/uqawfpoaw8uijfz6xafy.jpg"
			buttonLabel="Retire"
		/>
	)
