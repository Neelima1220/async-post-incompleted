import React from 'react';

export const User = ({ item, handleDeleteData }) => {
  return (
    <>
      <p>{item.userId}</p>
      <button
        onClick={() => {
          handleDeleteData(item.userId);
        }}
      >
        delete{' '}
      </button>
      <h1>{item?.title}</h1>
      <p>{item?.body}</p>
    </>
  );
};
