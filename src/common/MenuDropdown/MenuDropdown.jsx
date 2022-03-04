import {
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import classNames from 'classnames';
import React from 'react';
import './menu-dropdown.style.scss';

const MenuDropdown = ({ children, open, handleToggle, anchorRef, ...rest }) => {
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    handleToggle(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      handleToggle(false);
    }
  }
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open, anchorRef]);

  return (
    <>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        placement='bottom-end'
        className={classNames('popper-menu', {
          notification: rest.profile,
        })}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
              padding: 0,
            }}
          >
            <Paper className='paper'>
              <ClickAwayListener
                // mouseEvent={['onClick' | 'onMouseDown' | 'onMouseUp']}
                onClickAway={handleClose}
              >
                <MenuList
                  autoFocusItem={open}
                  id='menu-list-grow'
                  onKeyDown={handleListKeyDown}
                  style={{ padding: 0 }}
                >
                  {children}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default MenuDropdown;
