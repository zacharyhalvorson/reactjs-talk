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
			pictureUrl="https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAKOAAAAJDY5MmZmNzM5LWIyMmItNDUxZC04ODJlLTRiYmY4ZGRhOTE2OQ.jpg"
			buttonLabel="Click me!"
		/>
	)

storiesOf('Button', module)
	.add('BackButton', () => <BackButton />)
