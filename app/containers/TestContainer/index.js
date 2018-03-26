/*
 *
 * TestContainer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectTestContainer from './selectors';

export class TestContainer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="TestContainer"
          meta={[
            { name: 'description', content: 'Description of TestContainer' },
          ]}
        />
        <h1>Aloha</h1>
        <div>{React.Children.toArray(this.props.children)}</div>
      </div>
    );
  }
}

TestContainer.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = createStructuredSelector({
  TestContainer: makeSelectTestContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
