import React from 'react';
import PropTypes from "prop-types";

/**
 * Container for all/main pages.
 */
const ContainerMain =({ children }) => {
  
  return (
    <div className='cont-main'>{children}</div>
  )
}

ContainerMain.propTypes = {
  children: PropTypes.element
};

export default ContainerMain;