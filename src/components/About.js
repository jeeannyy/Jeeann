import React from 'react';
import '../styles/About.css';
import FadeInSection from './FadeInSection';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: '1',
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Frontend Developer</b> at{' '}
        <a href="https://www.storeboost.com/">
          <b>StoreBoost</b>
        </a>{' '}
        and <b>Course Instructor</b> at{' '}
        <a href="https://codefirstgirls.com/">
          <b>Code First Girls</b>
        </a>
        . I studied{' '}
        <a href="https://eng.ssu.ac.kr/">Media Arts and Computer Science</a> at{' '}
        <b>Soongsil University</b> in Seoul, South Korea.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in editing videos, painting, travelling,
        finding new artists and songs(especially R&B and jazz), vintage stuff,
        collecting funny memes, wandering random places in London, and trying
        new recipes.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{' '}
        <a href="jeeann.kim@gmail.com">jeeann.kim@gmail.com</a> and let's talk.
      </p>
    );
    const desc_items = [one, two, three];

    const tech_stack = [
      'Javascript ES6+',
      'React.js',
      'TypeScript',
      'Redux',
      'Node.js',
      'HTML & CSS',
    ];

    const tech_items = tech_stack.map((stack) => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {'Here are some technologies I have been working with:'}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={require('../assets/me.jpg')} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
