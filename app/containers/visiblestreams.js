import { connect } from 'react-redux';
import Streams from '../components/streams.js';
import { fetchStreams, fetchStreamsSuccess, fetchStreamsFailure } from '../actions';

function mapStateToProps(state){
  return {
    streams: state.streams
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchStreams: function() {
      dispatch(fetchStreams()).then((response) => {
        if (!response.error) {
          dispatch(fetchStreamsSuccess(response.payload.data));
        } else {
          dispatch(fetchStreamsFailure(response.payload.message));
        }
      })
    }
  }
}

const VisibleStreams = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Streams);

export default VisibleStreams;