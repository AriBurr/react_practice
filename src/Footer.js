import React from 'react';

const filterLink = (text, current, cb) => {
  if (text === current)
    return <span>{text}</span>
  return (
    <span onClick={() => cb(text)}
    style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}
    >
      {text}
      </span>
  )
}

const Footer = ({ activeFilter, setFilter }) => (
  <div>
    { filterLink('All', activeFilter, setFilter) }
    {' '}
    { filterLink('Active', activeFilter, setFilter) }
    {' '}
    { filterLink('Completed', activeFilter, setFilter) }
  </div>  

    // { ['All', 'Completed', 'Active'].map( text =>
    //    filterLink(text, activeFilter, setFilter)
    //   )
    // }

)

export default Footer;
