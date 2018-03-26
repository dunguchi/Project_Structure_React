/*
 *
 * ContentContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

export class ContentContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="ContentContainer"
          meta={[
            { name: 'description', content: 'Description of ContentContainer' },
          ]}
        />
        <h1>DungHT</h1>
      </div>
    );
  }
}

ContentContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ContentContainer);
