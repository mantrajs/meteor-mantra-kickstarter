import React from 'react';
// import DataComposer from '../composers/ColorsCollection.jsx';

export default ({collection}) => (
  <div>
    <h3>Colors collection</h3>
    <ul>
      {collection.map(record => (
        <li key={record._id}>
          <a href={`/colors/${record._id}`}>{record.title}</a>
        </li>
      ))}
    </ul>
  </div>
);
