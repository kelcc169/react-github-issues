import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="description">
          <div id='dismiss'>Dismiss    ...</div>
          <h4>👋Want to contribute to facebook/react?</h4>
          <p>If you have a bug or an idea, read the contributing guidelines before opening an issue.</p>
          <p>If you're ready to tackle some open issues, we've collected some good first issues for you .</p>
        </div>
        <div>
          <Link to='/issues'>
            <button>Issues</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home;