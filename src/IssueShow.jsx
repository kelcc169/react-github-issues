import React from 'react';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';

const IssueShow = (props) => {   
  let issue = props.issues.find((issue) => {
    return issue.number === parseInt(props.match.params.id);
  });

  return (
    <div className="container">
      <div className="show-header">
        <p className="header-title">{issue.title}</p>
        <p className="id">#{issue.number}</p>
        <div className="open-item"><span className="open-sign"><i class="fas fa-exclamation-circle open-sign" />OPEN</span>{issue.user.login} opened this issue on {moment(issue.created_at).format('ll')}</div>
      </div>
      <hr />
      <div className="comment">
        <img src={issue.user.avatar_url} />
        <p className="comment-header">{issue.user.login} commented {moment(issue.created_at).startOf().fromNow()} </p>
        <ReactMarkdown source={issue.body} className="comment-body"/>
      </div>
    </div>
  )
}

export default IssueShow;