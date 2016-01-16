import React from 'react';

const Component = ({record}) => (
  <div>
    {record.saving ? <p>Saving...</p> : null}
    <h2>{record.title}</h2>
    <p>
      {record.content}
    </p>
  </div>
);

export default Component;
