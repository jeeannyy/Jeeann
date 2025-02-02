import React from 'react';
import JobList from './JobList';
import '../styles/Experience.css';

const Experience = () => {
	return (
		<div id='experience'>
			<div className='section-header'>
				<span className='section-title'>/ experience</span>
			</div>
			<JobList />
		</div>
	);
};

export default Experience;
