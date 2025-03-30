import React from 'react';
import '../styles/About.css';
import FadeInSection from './FadeInSection';
import profilePic from '../assets/me.jpg';

const About = () => {
	const one = (
		<p>
			I am currently a <b>Frontend Engineer</b> at
			<a href='https://www.storeboost.com/'>
				{' '}
				<b>StoreBoost</b>
			</a>
			. I studied{' '}
			<a href='https://eng.ssu.ac.kr/'>Computer Science and Media</a> at{' '}
			<b>Soongsil University</b> in Seoul, South Korea. I was honored with{' '}
			<b style={{ color: '#64ffda' }}>the Best UX Award</b> at{' '}
			<b>Europe's largest women's hackathon</b>.
		</p>
	);

	const two = (
		<p>
			Outside of work, I enjoy traveling and discovering new artists and music
			(especially R&B & Jazz). I love trying out healthy recipes and taking care
			of my plants. I also cherish spending time with my family and swimming in
			lakes in the summer.
		</p>
	);

	const tech_stack = [
		'React',
		'TypeScript',
		'Javascript ES6+',
		'Node.js (Express.js)',
		'HTML5 & CSS3',
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
