/*
 *
 * SomeContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

export class SomeContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="SomeContainer"
          meta={[
            { name: 'description', content: 'Description of SomeContainer' },
          ]}
        />
        <h2>HoaVQ</h2>
      </div>
    );
  }
}

SomeContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(SomeContainer);
