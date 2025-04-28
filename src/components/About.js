import React from 'react';
import '../styles/About.css';
import FadeInSection from './FadeInSection';
import profilePic from '../assets/me.jpg';

const About = () => {
	const one = (
		<p>
			I’m a <b style={{ color: '#7bfdb1' }}>Full-stack Developer</b> with 2+
			years of experience building scalable, user-centred platforms. With a
			background in{' '}
			<b style={{ color: '#7bfdb1' }}>
				Computer Science and Interaction Design
			</b>
			, I take a problem-solving approach to engineering challenges, with a
			strong focus on intuitive UI/UX. My passion for crafting impactful digital
			experiences was recognised with a{' '}
			<b style={{ color: '#7bfdb1' }}>Best UX Award</b> at Europe's largest
			women's hackathon, and I was endorsed for a{' '}
			<b style={{ color: '#7bfdb1' }}>Global Talent Visa</b> by the UK
			government.
		</p>
	);

	const two = (
		<p>
			Outside of work, I enjoy travelling, discovering new music (especially R&B
			and jazz), and exploring healthy recipes.
		</p>
	);

	const tech_stack = [
		'React',
		'TypeScript',
		'Javascript ES6+',
		'Next.js',
		'Node.js (Express.js)',
		'HTML5 & CSS3',
	];

	return (
		<div id='about'>
			<div className='section-header'>
				<span className='section-title'>/ about me</span>
			</div>
			<div className='about-content'>
				<div className='about-description'>
					{one}
					{'Tech I work with:'}
					<ul className='tech-stack'>
						{tech_stack.map((tech_item, i) => (
							<FadeInSection key={i} delay={`${i + 1}00ms`}>
								<li>{tech_item}</li>
							</FadeInSection>
						))}
					</ul>

					{/* {two} */}
				</div>
				<div className='about-image'>
					<img src={profilePic} alt='My profile' />
				</div>
			</div>
		</div>
	);
};

export default About;
