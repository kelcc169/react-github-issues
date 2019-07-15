import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const Issues = props => (
  <div class="container">
    <div className="description">
      <div id='dismiss'>Dismiss    ...</div>
      <h4>👋Want to contribute to facebook/react?</h4>
      <p>If you have a bug or an idea, read the contributing guidelines before opening an issue.</p>
      <p>If you're ready to tackle some open issues, we've collected some good first issues for you .</p>
    </div>
    <div className="buffer"><i class="fas fa-exclamation-circle buffer-icon"></i> 100 Open Issues</div>
    
    {props.issues.map((issue, i) =>
      <div 
        className="issue"
        key={issue.number}>
        
        <Link to={`/issues/${issue.number}`} className="title link">
          <h4><i class="fas fa-exclamation-circle open"></i>{issue.title}<div className="comment-icon"><i class="far fa-comment-alt"></i> {issue.comments}</div></h4>
        </Link>
        <span className="info">#{issue.number} created at {moment(issue.created_at).startOf().fromNow()} by <span className="link">{issue.user.login}</span></span>
      </div>
    )}
  </div>
)

export default Issues;