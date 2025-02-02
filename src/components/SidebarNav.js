import React from 'react';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/SidebarNav.css';

const isMobile = window.innerWidth < 600;

const SidebarNav = () => {
	const links = [
		{ label: '/home', href: '#intro' },
		{ label: '/about', href: '#about' },
		{ label: '/experience', href: '#experience' },
		{ label: '/software-creations', href: '#projects' },
	];

	return (
		<div className='sidebar-nav'>
			{!isMobile && (
				<nav className='sidebar-links'>
					{links.map((link, i) => (
						<a key={i} href={link.href}>
							{link.label}
						</a>
					))}
				</nav>
			)}
			<div className='sidebar-logos'>
				<a href='mailto:jeeann.dev@gmail.com'>
					<EmailRoundedIcon style={{ fontSize: 25 }} />
				</a>
				<a href='https://github.com/jeeannyy'>
					<GitHubIcon style={{ fontSize: 24 }} />
				</a>
				<a href='https://www.linkedin.com/in/jeeanny/'>
					<LinkedInIcon style={{ fontSize: 26 }} />
				</a>
			</div>
		</div>
	);
};

export default SidebarNav;
