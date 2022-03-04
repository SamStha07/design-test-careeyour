import PropTypes from 'prop-types';
import React from 'react';
import { Divider } from '@mui/material';

const DividerItem = ({ orientation = 'horizontal' }) => {
  return <Divider orientation={orientation} flexItem></Divider>;
};

Divider.propTypes = {
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
};

export default DividerItem;
