import React from 'react';

const TagsList = ({ tags }) => (
  <ul>
    {tags.map((tag, index) => (
      <li key={index}>{tag}</li>
    ))}
  </ul>
);

export default TagsList;