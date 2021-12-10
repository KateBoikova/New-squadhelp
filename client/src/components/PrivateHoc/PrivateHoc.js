import React from 'react';
import { connect } from 'react-redux';
import { getUserAction } from '../../actions/actionCreator';
import Spinner from '../Spinner/Spinner';

const PrivateHoc = (Component, props) => {
  const mapStateToProps = state => state.userStore;

  const mapDispatchToProps = dispatch => ({
    getUser: data => dispatch(getUserAction(data)),
  });

  class Hoc extends React.Component {
    componentDidMount () {
      if (!this.props.data) {
        this.props.getUser(this.props.history.replace);
      }
    }

    render () {
      const { error, isFetching, history, match } = this.props;
      //Error 408 means authorization failed, therefore not to show child component
      if (error && error.status === 408) {
        return '';
      }
      return (
        <>
          {isFetching ? (
            <Spinner />
          ) : (
            <Component history={history} match={match} {...props} />
          )}
        </>
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Hoc);
};

export default PrivateHoc;
