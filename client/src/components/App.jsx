/* eslint-disable no-useless-constructor */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVenus } from '@fortawesome/free-solid-svg-icons';
import '../styles/styles.scss';

// import '../../../node_modules/font-awesome/';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faVenus} />
      </div>
    );
  }
}

export default App;
