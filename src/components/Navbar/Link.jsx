import React from 'react';

const Link = ({ route }) => {
  return (
    <li className=" rounded-xl p-1 hover:bg-green-200 hover:text-black">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
