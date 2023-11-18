import React from 'react';
import './ListShow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const ListShow = ({ title, items, headers, onEdit, onDelete }) => {
  return (
    <>
    <a href='#' className='btn-TopLeft-corner'>Home</a>
    <div className='heading-div'>
    <h1 className='heading-Customer-table'>{title}</h1>
    </div>
    <table className="customer-table">
      <thead>
        <tr>
          {headers.map(header => (
            <th key={header}>{header}</th>
          ))}
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.email}>
            {headers.map(header => (
              <td key={`${item.email}-${header}`}>{item[header.toLowerCase()]}</td>
            ))}
            <td><FontAwesomeIcon className='fapentosquare' icon={faPenToSquare} style={{color: "#005eff", cursor: "pointer"}} onClick={() => onEdit(item)} /></td>
            <td><FontAwesomeIcon className='fapentosquare' icon={faTrash} style={{color: "#ff0000", cursor: "pointer"}} onClick={() => onDelete(item)} /></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

ListShow.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object),
  headers: PropTypes.arrayOf(PropTypes.string),
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default ListShow;
