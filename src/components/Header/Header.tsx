import React, { Component } from 'react';
import headerCoverImage from '../../assets/images/header.jpg';
import './header.scss';

class Header extends Component<any> {
  navbar: HTMLElement | null = null;
  initialTopOffset: number | null = null;

  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div
        className='header'
        style={{ backgroundImage: `url(${headerCoverImage})` }}
      >
        <div className='header-right'>
          <a className='active' href='#home'>
            Home
          </a>
        </div>
      </div>
    );
  }
}
export default Header;
