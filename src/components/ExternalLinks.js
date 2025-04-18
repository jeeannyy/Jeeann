import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewOutlined from '@material-ui/icons/OpenInNewOutlined';

const ExternalLinks = ({ githubLink, openLink }) => {
	return (
		<span className='external-links'>
			<a className='github-icon' href={githubLink}>
				<GitHubIcon style={{ fontSize: 20, color: 'var(--lightest-slate)' }} />
			</a>
			{openLink && (
				<a className='open-icon' href={openLink}>
					<OpenInNewOutlined
						style={{ fontSize: 25, color: 'var(--lightest-slate)' }}
					/>
				</a>
			)}
		</span>
	);
};

export default ExternalLinks;
