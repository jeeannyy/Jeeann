import React from 'react';
import '../styles/Intro.css';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';

const Intro = () => {
	return (
		<div id='intro'>
			<Typist avgTypingDelay={120}>
				<span className='intro-title'>
					{'Hi, '}
					<span className='intro-name'>{'Jeeann'}</span>
					{' here!'}
				</span>
			</Typist>
			<div className='intro-subtitle'>I create stuff sometimes.</div>
			<div className='intro-desc'>
				I'm a Software Engineer based in London 🇬🇧, passionate about
				human-computer interactions, media arts, AI, and everything in between.
			</div>
			<a href='mailto:jeeann.dev@gmail.com' className='intro-contact'>
				<EmailRoundedIcon />
				{'  Say hi!'}
			</a>
		</div>
	);
};

export default Intro;
