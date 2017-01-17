import { connect } from 'react-redux';
import AddAcademyLevel from '../components/AddAcademyLevel.js';
import { submitAcademyLevel, updateAcademyLevel, fetchAcademyLevel, fetchAcademyLevelSuccess, deleteAcademyLevel} from '../actions/academy-level';
import { browserHistory, hashHistory } from 'react-router';

function mapDispatchToProps(dispatch) {
  return {
    submitAcademyLevel: function(name, desc, id) {
      if (id) {
        let values = {id, name, desc};
        dispatch(updateAcademyLevel(values)).then((response) => {
          if (!response.error) {
            browserHistory.push('/academy-level');
          }
        });
      } else {
        let values = {name, desc};
        dispatch(submitAcademyLevel(values)).then((response) => {
          if (!response.error) {
            browserHistory.push('/academy-level');
          }
        });
      }
    },

    fetchAcademyLevel: function(id) {
      dispatch(fetchAcademyLevel(id)).then((response) => {
        if (!response.error) {
          dispatch(fetchAcademyLevelSuccess(response.payload.data))
        }
      });
    },

    deleteAcademyLevel: function(id) {
      dispatch(deleteAcademyLevel(id)).then((response) => {
        if (!response.error) {
          browserHistory.push('/academy-level');
        }
      })
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    activeAcademyLevel: state.activeAcademyLevel,
    id: ownProps.params.id
  }
}

const AddAcademyLevelContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddAcademyLevel);

export default AddAcademyLevelContainer;