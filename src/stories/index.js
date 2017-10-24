import React from 'react';

import { storiesOf } from '@storybook/react';

import { Modal, SettingsModal } from '../components/Modal';
import { BackButton } from '../components/Button';

import Details from '../images/details.svg';

storiesOf('Modal', module)
	.add('default', () => <Modal />)
	.add('primary', () => <Modal isPrimary />)

storiesOf('Settings Modal', module)
	.add('default', () =>
		<SettingsModal />
	)
	.add('settings', () =>
		<SettingsModal
			isPrimary
			backButtonLabel="Replicants"
			rightSideAction={Details}
			name="Rick Deckard"
			pictureUrl="https://i.kinja-img.com/gawker-media/image/upload/s--DgVKPS86--/c_fill,fl_progressive,g_center,h_200,q_80,w_200/uqawfpoaw8uijfz6xafy.jpg"
			buttonLabel="Retire"
		/>
	)

storiesOf('Button', module)
	.add('BackButton', () => <BackButton />)
