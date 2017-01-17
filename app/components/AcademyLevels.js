import React from 'react';
import { Link } from 'react-router';

var AcademyLevels = React.createClass({
  componentWillMount : function() {
    this.props.fetchAcademyLevels();
  },

  render : function() {
    var academyLevelList = this.props.academyLevels.map(function(eachAcademyLevel, index){
      return <div className="stream" key={eachAcademyLevel.academy_level_id}>
        <Link to={"/academy-level/view/"+eachAcademyLevel.academy_level_id}>{eachAcademyLevel.name}</Link>
        {" "}
        <span>{eachAcademyLevel.description}</span>
      </div>
    });

    return (
      <div className="">
        <Link to="/academy-level/new"><input type="button" value="Add Academy Level"/></Link>
        <div className="stream-list">{academyLevelList}</div>
      </div>
    );
  }
});

export default AcademyLevels;