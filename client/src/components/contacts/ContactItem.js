import React, {useContext} from 'react'
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext'

 const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  }

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '} 
        <span style={{ float: 'right' }} className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
         
          {/* making only first letter to upper case then adding back the other letters in normal way */}
          {type.charAt(0).toUpperCase() + type.slice(1)}
          
        </span>
      </h3>
      <ul className="list">
        {email && (<li>
          <i className="fas fa-envelope-open"></i>{email}
        </li>)}
        {phone && (<li>
          <i className="fas fa-phone"></i>{phone}
        </li>)}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={() => setCurrent}>Edit</button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
      </p>
    </div>
  )
}

ContactItem.prototype = {
  contact: PropTypes.object.isRequired
}
export default ContactItem