import { createSelector } from 'reselect';

/**
 * Direct selector to the testContainer state domain
 */
const selectTestContainerDomain = () => (state) => state.get('testContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TestContainer
 */

const makeSelectTestContainer = () => createSelector(
  selectTestContainerDomain(),
  (substate) => substate.toJS()
);

export default makeSelectTestContainer;
export {
  selectTestContainerDomain,
};
