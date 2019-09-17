import React, { Component } from 'react';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.png';

export default class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };

  render() {
    return (
      <div>
        <img src={profile} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>My name is Valentino.</p>
        <Title />
        <p>Software Craftsman | Continuous Learner</p>
        {
          this.state.displayBio ? (
              <div>
                  <p>I really believe in artistic side of clean code.</p>
                  <p>I am passionate about everything concerns
                      designing system architectures.</p>
                  <p>I am a Full Stack Software Engineer, fast learner, and enthusiastic about new
                      technologies/programming languages/frameworks/methodologies.</p>
                  <button onClick={this.toggleDisplayBio}>Show less</button>
              </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}
