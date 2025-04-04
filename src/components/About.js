import React from 'react';
import '../styles/About.css';
import FadeInSection from './FadeInSection';
import profilePic from '../assets/me.jpg';

const About = () => {
	const one = (
		<p>
			I am a <b style={{ color: '#64ffda' }}>Full-stack Developer</b> with{' '}
			<b>2+ years of experience</b>. Before starting this journey, I studied{' '}
			<b b style={{ color: '#64ffda' }}>
				Computer Science, Interaction Design and Media
			</b>
			, and worked as a{' '}
			<b b style={{ color: '#64ffda' }}>
				marketing specialist
			</b>
			. With this background, I bring a unique problem-solving perspective and a
			keen eye for UI/UX. My passion for HCI earned me{' '}
			<b style={{ color: '#64ffda' }}>the Best UX Award</b> at{' '}
			<b>Europe's largest women's hackathon</b>.
		</p>
	);

	const two = (
		<p>
			Outside of work, I love travelling and discovering new music and artists —
			especially R&B and jazz. I'm also into taking care of my plants, and
			swimming in lakes.
		</p>
	);

	const tech_stack = [
		'React',
		'TypeScript',
		'Javascript ES6+',
		'Next.js',
		'Node.js (Express.js)',
		'Git',
	];

	return (
		<div id='about'>
			<div className='section-header'>
				<span className='section-title'>/ about me</span>
			</div>
			<div className='about-content'>
				<div className='about-description'>
					{one}
					{'Technologies I Work With:'}
					<ul className='tech-stack'>
						{tech_stack.map((tech_item, i) => (
							<FadeInSection key={i} delay={`${i + 1}00ms`}>
								<li>{tech_item}</li>
							</FadeInSection>
						))}
					</ul>
					{two}
				</div>
				<div className='about-image'>
					<img src={profilePic} alt='My profile' />
				</div>
			</div>
		</div>
	);
};

export default About;
