import React from 'react';

const Component = ({collection}) => (
  <div>
    <ul>
      {collection.map(record => (
        <li key={record._id}>
          <a href={`/colors/${record._id}`}>{record.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Component;
