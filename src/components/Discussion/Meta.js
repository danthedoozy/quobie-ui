import React from 'react';
import Clap from '../mechanics/Clap';
import Report from '../mechanics/Report';

const Meta = ({
  quote: {
    content,
    title,
    author,
    page,
    line,
    genre,
    type,
    claps,
    id,
    user,
  },
}) => (
  <div className="discussion-meta card mb2">
    <h1>&ldquo;{content}&rdquo;</h1>
    <hr />
    <div className="columns is-spaced-around pb3 text-align-left">
      <div className="column">
        <h3>{title}</h3>
        <p>
          <small>by {author}</small>
        </p>
        {page ?
          <p>
            <small>page {page}{line ? `, line ${line}` : ''}</small>
          </p>
          : null
        }
      </div>
      <div className="column text-align-right">
        <p>
          <span className="tag-purple small">{genre}</span>
        </p>
        <p>
          <span className="tag-green small">{type}</span>
        </p>
      </div>
    </div>
    <div className="columns">
      <div className="column">
        {user ?
          <p className="small">
            {`Submitted by ${user.username}`}
          </p>
          : null
        }
      </div>
    </div>
    <div className="columns">
      <div className="column">
        <Clap claps={claps} />
      </div>
      <div className="column">
        <Report id={id} />
      </div>
    </div>
  </div>
);

export default Meta;
