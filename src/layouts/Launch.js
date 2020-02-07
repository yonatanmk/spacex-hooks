import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LaunchContext } from '../App.js'

const Launch = ({ match }) => {
  const launches = useContext(LaunchContext);
  const launch = launches.find(launch => launch.flight_number.toString() === match.params.id)

  if (!launch) return null;

  return (
    <div className="Launch">
      <h1>{launch.mission_name}</h1>
      <p>Rocket: {launch.rocket.rocket_name}</p>
      <p>Details {launch.details}</p>
      <p>{launch.launch_success ? 'Success' : 'Failure'}</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default Launch;
