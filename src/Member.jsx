import React from 'react';
import PropTypes from 'prop-types';
import { contextTypes, CONTEXT_KEY } from './Conductor';

class Member extends React.Component {
  constructor(props, context) {
    super(props);

    const { id } = props;
    // eslint-disable-next-line react/destructuring-assignment
    this.config = context[CONTEXT_KEY].register(id);
  }

  render() {
    const { children } = this.props;
    const { Wrapper, options } = this.config;
    return (
      <Wrapper {...options}>
        {children}
      </Wrapper>
    );
  }
}

Member.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
Member.contextTypes = contextTypes;

export default Member;
