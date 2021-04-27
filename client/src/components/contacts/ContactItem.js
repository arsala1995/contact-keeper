import React from 'react'

 const ContactItem = ({ contact }) => {
  
  const { id, name, email, phone, type } = contact;

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '} <span className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')}>
         
          {/* making only first letter to upper case then adding back the other letters in normal way */}
          {type.charAt(0).toUpperCase() + type.slice(1)}
          
        </span>
      </h3>
    </div>
  )
}

export default ContactItem