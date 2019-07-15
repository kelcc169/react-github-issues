import React, {Component} from 'react';
import Home from './Home';
import Issues from './Issues';
import IssueShow from './IssueShow';
import './App.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issuesList: []
    }
  }
  
  componentDidMount() {
    axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
      .then(results => {
        let issuesList = results.data;
        this.setState({
          issuesList
        });
      });
  }

  render() {
    let issues = this.state.issuesList ? this.state.issuesList : '';

    return (
      <Router>
        <header className="header">
            <Link to='/'><i class="fab fa-github"></i></Link>
          <div className="nav">
            <input type="text" placeholder="Search or Jump To..."></input>
            <a href=''>Pull Requests</a>
            <a href=''>Issues</a>
            <a href=''>Marketplace</a>
            <a href=''>Explore</a>
          </div>
        </header>
        <Route exact path='/' component={Home}></Route>
        <Route 
          exact path='/issues'
          render={() => <Issues issues={issues} />}
        />
        <Route path='/issues/:id'
          render={(props) => <IssueShow issues={issues} {...props} />}
        />
      </Router>
    )
  }
}

export default App;
