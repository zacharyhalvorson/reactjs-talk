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
			backButtonLabel="Home"
			rightSideAction={Details}
			name="Zachary"
			pictureUrl="https://avatars0.githubusercontent.com/u/3810721?s=460&v=4"
			buttonLabel="Click me!"
		/>
	)

storiesOf('Button', module)
	.add('BackButton', () => <BackButton />)
