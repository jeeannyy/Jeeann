import React from 'react';
import '../styles/Projects.css';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import FadeInSection from './FadeInSection';
import ExternalLinks from './ExternalLinks';

const projects = {
	Feeling: {
		desc: 'An emotion-based music recommendation app.',
		techStack: 'React, TypeScript, Node.js, Express, and MongoDB',
		link: 'https://github.com/jeeannyy/feeling',
		open: 'https://tellmeyourvibe.vercel.app/',
	},
	'Kimchi shop': {
		desc: 'An e-commerce app for selling Korea’s korgeous kimchi.',
		techStack: 'Redux, React, React Router, Axios, Bootstrap',
		link: 'https://github.com/jeeannyy/kimchi-shop',
		open: 'https://kimchi-shop.netlify.app/kimchi-shop',
	},
	'Paint app': {
		desc: 'A paint app for all ages.',
		techStack: 'JavaScript, HTML, CSS',
		link: 'https://github.com/jeeannyy/Paint-app',
		open: 'https://painting-jeeann.netlify.app',
	},
	'Harry Potter House Test': {
		desc: 'A fun quiz app that sorts you into your Hogwarts house.',
		techStack: 'React, React Router, SCSS',
		link: 'https://github.com/chingu-voyages/v42-geckos-team-12',
		open: 'https://chingu-voyages.github.io/v42-geckos-team-12',
	},
	'Dice game': {
		desc: 'A dice game made with Vanilla JS.',
		techStack: 'JavaScript, HTML, CSS',
		link: 'https://github.com/jeeannyy/Dice-Game',
		open: 'https://dicegame-jeeann.netlify.app',
	},

	'Coin Tracker': {
		desc: 'A coin tracker showing real-time rankings, price charts, and history',
		techStack: 'React, TypeScript, Styled-components',
		link: 'https://github.com/jeeannyy/Coin-Tracker',
		open: 'https://jeeannyy.github.io/Coin-Tracker/',
	},
	'News app': {
		desc: 'A news app where users can view, discuss, and rate articles.',
		techStack: 'React, React Router, Axios, CSS',
		link: 'https://github.com/jeeannyy/News-app',
		open: 'https://jeeannyy.github.io/News-app',
	},

	'Drum Kit': {
		desc: 'A fun and interactive drum app anyone can play.',
		techStack: 'JavaScript, HTML, CSS',
		link: 'https://drumkit-jeeann.netlify.app',
		open: 'https://drumkit-jeeann.netlify.app',
	},

	'Todo Todo': {
		desc: 'A simple and clean to-do list app.',
		techStack: 'React, CSS',
		link: 'https://github.com/jeeannyy/TodoTodo',
		open: 'https://jeeannyy.github.io/TodoTodo/',
	},
	'Weather app': {
		desc: "A weather app that provides real-time forecasts based on the user's location",
		techStack: 'React Native',
		link: 'https://github.com/jeeannyy/Weather-app',
		open: '',
	},
	Kokoatalk: {
		desc: 'A clone of the Korean messaging app KakaoTalk.',
		techStack: 'HTML, CSS',
		link: 'https://github.com/jeeannyy/Kokoatalk',
		open: 'https://kokoatalk-jeeann.netlify.app/',
	},
	London: {
		desc: 'A poster for practicing CSS grid and flex.',
		techStack: 'HTML, CSS',
		link: 'https://github.com/jeeannyy/London',
		open: '',
	},
	'Bad Religion': {
		desc: 'A poster for practicing CSS grid and flex.',
		techStack: 'HTML, CSS',
		link: 'https://github.com/jeeannyy/Bad-Religion',
		open: '',
	},
};

const Projects = () => {
	return (
		<div id='projects'>
			<div className='section-header'>
				<span className='section-title'>/ software-creations</span>
			</div>
			<div className='project-container'>
				<ul className='projects-grid'>
					{Object.entries(projects).map(([key, project], i) => (
						<FadeInSection key={i} delay={`${i + 1}00ms`}>
							<li className='projects-card'>
								<div className='card-header'>
									<div className='folder-icon'>
										<FolderOpenRoundedIcon style={{ fontSize: 35 }} />
									</div>
									<ExternalLinks
										githubLink={project.link}
										openLink={project.open}
									/>
								</div>
								<div className='card-title'>{key}</div>
								<div className='card-desc'>{project.desc}</div>
								<div className='card-tech'>{project.techStack}</div>
							</li>
						</FadeInSection>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Projects;
