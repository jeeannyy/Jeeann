import React, { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children, delay }) => {
	const [isVisible, setVisible] = useState(false);
	const domRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setVisible(true);
			}
		});
		if (domRef.current) {
			observer.observe(domRef.current);
		}
		return () => {
			if (domRef.current) {
				observer.unobserve(domRef.current);
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
