import React, { Component } from 'react';
import './footer.scss';

class Footer extends Component<any> {
  navbar: HTMLElement | null = null;
  initialTopOffset: number | null = null;

  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className='app-footer'>
        <div className='disclaimer'>
          <a href='#'>Disclaimer &amp; Policy</a>
        </div>
      </div>
    );
  }
}
export default Footer;
