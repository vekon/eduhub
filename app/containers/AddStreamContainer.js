import { connect } from 'react-redux';
import AddStream from '../components/AddStream.js';
import { submitStream, updateStream, fetchStream, fetchStreamSuccess, deleteStream } from '../actions';
import { browserHistory, hashHistory } from 'react-router';

function mapDispatchToProps(dispatch) {
  return {
    submitStream: function(name, desc, id) {
      if (id) {
        let values = {id, name, desc};
        dispatch(updateStream(values)).then((response) => {
          if (!response.error) {
            browserHistory.push('/');
          }
        });
      } else {
        let values = {name, desc};
        dispatch(submitStream(values)).then((response) => {
          if (!response.error) {
            browserHistory.push('/');
          }
        });
      }
    },

    fetchStream: function(id) {
      dispatch(fetchStream(id)).then((response) => {
        if (!response.error) {
          dispatch(fetchStreamSuccess(response.payload.data))
        }
      });
    },

    deleteStream: function(id) {
      dispatch(deleteStream(id)).then((response) => {
        if (!response.error) {
          browserHistory.push('/');
        }
      })
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    activeStream: state.activeStream,
    id: ownProps.params.id
  }
}

const AddStreamContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddStream);

export default AddStreamContainer;