import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from '../../common/container';
import { useToggle } from '../../hooks';
import Navbar from '../navbar';
import Sidebar from '../Sidebar';
import './Header.style.scss';

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
