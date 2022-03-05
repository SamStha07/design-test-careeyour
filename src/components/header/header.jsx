import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Sidebar } from '..';
import { Container } from '../../common';
import { useToggle } from '../../hooks';
import Navbar from '../navbar';
import './header.style.scss';

const Header = () => {
  const { show, handleToggle } = useToggle(false);

  const isTablet = useMediaQuery({
    query: '(max-width: 768px)',
  });

  return (
    <>
      <div className='header'>
        <Container>
          <Navbar isTablet={isTablet} show={show} handleToggle={handleToggle} />
        </Container>
        {show && <Sidebar show={show} handleToggle={handleToggle} />}
      </div>
    </>
  );
};

export default Header;
