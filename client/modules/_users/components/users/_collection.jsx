import React from 'react';

export default ({collection}) => (
  <div>
    <h3>Collection</h3>
    <ul>
      {collection.map(record => (
        <li key={record._id}>
          <a href={`/users/${record._id}`}>{record.firstEmail()}</a>
        </li>
      ))}
    </ul>
  </div>
);
