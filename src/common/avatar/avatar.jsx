import { Avatar, avatarClasses } from '@mui/material';
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import './avatar.style.scss';

const AvatarItem = ({ size, src, variant = 'circular' }) => {
  return (
    <div>
      <Avatar
        variant={variant}
        alt='avatar'
        src={src}
        className={classnames('avatar', {
          [`avatar--${size}`]: size,
        })}
      />
    </div>
  );
};

avatarClasses.propTypes = {
  variant: PropTypes.oneOf(['circular', 'rounded', 'square']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  src: PropTypes.string,
};

export default AvatarItem;
