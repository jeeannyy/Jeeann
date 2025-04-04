import React, { useRef, useState, useEffect } from 'react';
import '../styles/Intro.css';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Intro = () => {
	const buttonRef = useRef(null);
	const initialPosition = { top: 400, left: 100 };
	const [position, setPosition] = useState({ top: 400, left: 100 });
	const [isActive, setIsActive] = useState(false);
	const [buttonText, setButtonText] = useState('Jump on the call');

	const handleMouseMove = (e) => {
		if (!isActive) return;

		const button = buttonRef.current;
		if (!button) return;

		const rect = button.getBoundingClientRect();
		const distanceX = e.clientX - (rect.left + rect.width / 2);
		const distanceY = e.clientY - (rect.top + rect.height / 2);
		const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

		if (distance < 100) {
			const offsetX = (Math.random() - 0.5) * 300;
			const offsetY = (Math.random() - 0.5) * 300;

			const maxWidth = window.innerWidth * 0.6;
			const maxHeight = window.innerHeight * 0.6;

			const newLeft = Math.min(
				Math.max(position.left + offsetX, 0),
				maxWidth - rect.width,
			);
			const newTop = Math.min(
				Math.max(position.top + offsetY, 0),
				maxHeight - rect.height,
			);

			setPosition({ left: newLeft, top: newTop });
		}
	};

	const handleClick = (e) => {
		e.preventDefault();
		setButtonText("I'm shy 🦭");
	};

	useEffect(() => {
		const handleScroll = () => {
			setIsActive(false);
			setPosition(initialPosition);
			setButtonText('Jump on the call');
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div id='intro' onMouseMove={handleMouseMove} style={{ height: '100vh' }}>
			<Typist avgTypingDelay={120}>
				<span className='intro-title'>
					{'Hi, '}
					<span className='intro-name'>{'Jeeann'}</span>
					{' here!'}
				</span>
			</Typist>
			<div className='intro-subtitle'>I create stuff sometimes.</div>
			<div className='intro-desc'>
				I'm a Software Engineer based in London & Zürich{' '}
				<span role='img' aria-label='flag'>
					🇬🇧🇨🇭
				</span>
				, passionate about human-computer interactions, media arts, AI, and
				everything in between.
			</div>
			<div className='intro-contact-container'>
				<a
					onClick={handleClick}
					ref={buttonRef}
					className='intro-contact'
					onMouseEnter={() => setIsActive(true)}
					style={{
						position: isActive ? 'fixed' : 'static',
						top: isActive ? position.top : undefined,
						left: isActive ? position.left : undefined,
						transition: 'top 0.2s ease, left 0.2s ease',
					}}
				>
					<PhoneInTalkOutlinedIcon />
					{`  ${buttonText}`}
				</a>
				<a href='mailto:jeeann.dev@gmail.com' className='intro-contact'>
					<EmailOutlinedIcon />
					{` Send a message`}
				</a>
			</div>
		</div>
	);
};

export default Intro;
