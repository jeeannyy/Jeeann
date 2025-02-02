import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children, delay }) => {
	const [isVisible, setVisible] = useState(false);
	const domRef = useRef(null);

	useEffect(() => {
		const targetNode = domRef.current;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
			}
		});

		if (targetNode) {
			observer.observe(targetNode);
		}

		return () => {
			if (targetNode) {
				observer.unobserve(targetNode);
			}
		};
	}, []);

	return (
		<div
			className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
			style={{ transitionDelay: delay }}
			ref={domRef}
		>
			{children}
		</div>
	);
};

export default FadeInSection;
