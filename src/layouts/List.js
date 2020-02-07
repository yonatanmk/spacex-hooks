import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { LaunchContext } from '../App.js'

const List = () => {
  const launches = useContext(LaunchContext);

  return (
    <div className="List">
      <h1>SpaceX Index</h1>
      <ul>
        {launches.map(launch => (
          <li><Link to={`/launches/${launch.flight_number}`} >{launch.mission_name}</Link></li>
        ))}
      </ul>
    </div>
  );
}

export default List;
