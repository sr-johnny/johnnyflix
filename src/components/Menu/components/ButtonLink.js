import React from 'react';
import PropTypes from 'prop-types';

function ButtonLink({ children, href, className }) {
    return (
      <button href={href} className={className}>
        {children}
      </button>
    );
  }

export default ButtonLink;