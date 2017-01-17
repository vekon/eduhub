import { connect } from 'react-redux';
import AcademyLevels from '../components/AcademyLevels.js';
import { fetchAcademyLevels, fetchAcademyLevelsSuccess, fetchAcademyLevelsFailure } from '../actions/academy-level';

function mapStateToProps(state){
  return {
    academyLevels: state.academyLevels
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAcademyLevels: function() {
      dispatch(fetchAcademyLevels()).then((response) => {
        if (!response.error) {
          dispatch(fetchAcademyLevelsSuccess(response.payload.data));
        } else {
          dispatch(fetchAcademyLevelsFailure(response.payload.message));
        }
      })
    }
  }
}

const AcademyContainerLevel = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AcademyLevels);

export default AcademyContainerLevel;