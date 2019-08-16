import React, { Component } from 'react';

import MatchesService from '../services/MatchesService';

import Game from './screens/Game';
import Matches from './screens/Matches';
import '../scss/application.scss';
import styles from './styles.module.scss';

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    MatchesService.getMatches().then(({ data }) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className={styles.container}>
        <Game />
        <Matches data={data} />
      </div>
    );
  }
}

export default App;
