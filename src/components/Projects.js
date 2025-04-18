import React from 'react';
import '../styles/Projects.css';
import FolderOpenRoundedIcon from '@material-ui/icons/FolderOpenRounded';
import FadeInSection from './FadeInSection';
import ExternalLinks from './ExternalLinks';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';

const projects = {
	PookieBooth: {
		desc: 'A vintage-style photobooth app for capturing and downloading a custom photo strip',
		techStack: 'React, TypeScript, HTML2Canvas',
		link: 'https://github.com/jeeannyy/PookieBooth',
		open: 'https://pookiebooth.vercel.app',
	},
	Feeling: {
		desc: 'An emotion-based music recommendation app',
		techStack: 'React, TypeScript, Node.js, Express, MongoDB',
		link: 'https://github.com/jeeannyy/feeling',
		open: 'https://tellmeyourvibe.vercel.app',
	},
	'Kimchi shop': {
		desc: 'An e-commerce app for selling Korea’s korgeous kimchi',
		techStack: 'Redux, React, Axios, Bootstrap',
		link: 'https://github.com/jeeannyy/kimchi-shop',
		open: 'https://kimchi-shop.netlify.app/kimchi-shop',
	},
	'Hogwarts House Sorting Quiz': {
		desc: 'A quiz app that sorts you into your Hogwarts house',
		techStack: 'Next.js, TypeScript, Tailwind CSS',
		link: 'https://github.com/jeeannyy/Hogwarts-House-Sorting-Quiz',
		open: 'https://hogwarts-house-sorting-quiz.vercel.app/',
	},

	'Yummy in my tummy': {
		desc: 'A recipe app to collect and manage your favorite dishes',
		techStack: 'TypeScript, React, React Router, Jest',
		link: 'https://github.com/jeeannyy/Yummy-in-my-tummy',
		open: 'https://recipe-jeeannyy.vercel.app/',
	},
	Scribbly: {
		desc: 'A drawing app that lets you sketch freely on a canvas',
		techStack: 'JavaScript, HTML, CSS',
		link: 'https://github.com/jeeannyy/Paint-app',
		open: 'https://painting-jeeann.netlify.app',
	},

	// 'Drum Kit': {
	// 	desc: 'A fun and interactive drum app anyone can play.',
	// 	techStack: 'JavaScript, HTML, CSS',
	// 	link: 'https://github.com/jeeannyy/Drum-Kit',
	// 	open: 'https://drumkit-jeeann.netlify.app',
	// },

	'Bad Religion': {
		desc: 'An experimental poster design built with Grid and Flexbox',
		techStack: 'HTML, CSS',
		link: 'https://github.com/jeeannyy/Bad-Religion',
		open: '',
	},
	// 'Coin Tracker': {
	// 	desc: 'A coin tracker showing real-time rankings, price charts, and history',
	// 	techStack: 'React, TypeScript, Styled-components',
	// 	link: 'https://github.com/jeeannyy/Coin-Tracker',
	// 	open: 'https://jeeannyy.github.io/Coin-Tracker/',
	// },
	// London: {
	// 	desc: 'An experimental poster design built with Grid and Flexbox',
	// 	techStack: 'HTML, CSS',
	// 	link: 'https://github.com/jeeannyy/London',
	// 	open: '',
	// },
};

const Projects = () => {
	return (
		<div id='projects'>
			<div className='section-header'>
				<span className='section-title'>/ creations</span>
			</div>
			<div className='project-container'>
				<ul className='projects-grid'>
					{Object.entries(projects).map(([key, project], i) => (
						<FadeInSection key={i} delay={`${i + 1}00ms`}>
							<li className='projects-card'>
								<div className='card-header'>
									<div className='folder-icon'>
										<AttachFileOutlinedIcon style={{ fontSize: 35 }} />
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
