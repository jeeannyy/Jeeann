import React from 'react';
import '../styles/About.css';
import FadeInSection from './FadeInSection';
import profilePic from '../assets/me.jpg';

const About = () => {
	const one = (
		<p>
			I am a <b style={{ color: '#64ffda' }}>Full-stack Developer</b> with{' '}
			<b>2+ years of experience</b>. With a background in{' '}
			<b>Computer Science and Interaction Design</b>, I bring a unique
			problem-solving perspective and a keen eye for UI/UX. My passion for HCI
			earned me <b style={{ color: '#64ffda' }}>the Best UX Award</b> at{' '}
			<b>Europe's largest women's hackathon</b>. I enjoy using technology to
			help others and sharing knowledge.
		</p>
	);

	const two = (
		<p>
			Outside of work, I love travelling and discovering new music and artists —
			especially R&B and jazz. I'm also into trying out healthy recipes, taking
			care of my little jungle of plants, and swimming in lakes.
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
