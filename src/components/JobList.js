import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FadeInSection from './FadeInSection';

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	if (isHorizontal) {
		return (
			<div
				role='tabpanel'
				hidden={value !== index}
				id={`full-width-tabpanel-${index}`}
				aria-labelledby={`full-width-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box p={3}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	} else {
		return (
			<div
				role='tabpanel'
				hidden={value !== index}
				id={`vertical-tabpanel`}
				{...other}
			>
				{value === index && (
					<Box p={3}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	if (isHorizontal) {
		return {
			id: `full-width-tab-${index}`,
			'aria-controls': `full-width-tabpanel-${index}`,
		};
	} else {
		return {
			id: `vertical-tab-${index}`,
		};
	}
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: 'theme.palette.background.paper',
		display: 'flex',
		height: 300,
	},
	tabs: {
		borderRight: `1px solid ${theme.palette.divider}`,
	},
}));

const JobList = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const experienceItems = {
		StoreBoost: {
			jobTitle: 'Software Engineer @',
			duration: 'FEB 2023 - FEB 2025',
			desc: [
				'Led front-end development of admin and client-facing platforms using React and TypeScript, building core features including the Campaign Dashboard, Footfall Analytics, Sensor Monitoring, and Creative Editor',
				'Built interactive data visualisations across key pages, increasing engagement among internal teams by 50% and enhancing campaign insights, budget tracking, and data-driven decision-making',
				'Achieved 90%+ test coverage with Playwright and implemented React Sentry, improving error diagnosis time and significantly reducing user-reported bugs',
			],
		},
		'Code First Girls': {
			jobTitle: 'Instructor @',
			duration: 'Nov 2022 - Present',
			desc: [
				'Taught web development courses to 60+ beginners through live coding, hands-on project guidance, real-time debugging support, and technical assistance during final group projects',
			],
		},

		'Athena Hackathon': {
			jobTitle: 'Frontend Developer @',
			duration: 'OCT 2022',
			desc: [
				'Received the Best UX Award at Europe’s largest hackathon for women',
				'Developed ‘Banktree’, an impact investment app funding green projects via round-ups',
				'Sketched an MVP and built a prototype using React, designed the user interface with Figma',
			],
		},

		freeCodeCamp: {
			jobTitle: 'Technical Translator @',
			duration: 'SEP 2022 - Present',
			desc: [
				'Translated technical articles from English to Korean, helping non-English-speaking developers access high-quality learning resources and averaging 10K views per article',
			],
		},

		TikTok: {
			jobTitle: 'AI Data Specialist @',
			duration: 'SEP 2020 - FEB 2022',
			desc: [
				'Collaborated with the AI-Lab NLP & Machine Learning team on a machine translation project and curated documentation on Korean trends',
				'Worked closely with internal and global teams to establish QA policies for comment sections and translation',
			],
		},
	};

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<Tabs
				orientation={!isHorizontal ? 'vertical' : null}
				variant={isHorizontal ? 'fullWidth' : 'scrollable'}
				value={value}
				onChange={handleChange}
				className={classes.tabs}
			>
				{Object.keys(experienceItems).map((key, i) => (
					<Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
				))}
			</Tabs>
			{Object.keys(experienceItems).map((key, i) => (
				<TabPanel value={value} index={i}>
					<span className='joblist-job-title'>
						{experienceItems[key]['jobTitle'] + ' '}
					</span>
					<span className='joblist-job-company'>{key}</span>
					<div className='joblist-duration'>
						{experienceItems[key]['duration']}
					</div>
					<ul className='job-description'>
						{experienceItems[key]['desc'].map(function (descItem, i) {
							return (
								<FadeInSection delay={`${i + 1}00ms`}>
									<li key={i}>{descItem}</li>
								</FadeInSection>
							);
						})}
					</ul>
				</TabPanel>
			))}
		</div>
	);
};

export default JobList;
