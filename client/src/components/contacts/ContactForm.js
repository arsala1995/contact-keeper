import React, { useState } from 'react'

export const ContactForm = () => {
  const [contact, setContact] = useState({
    name:'',
    email: '',
    phone: '',
    type: 'personal'
  });
  
  return (
    <form>
      <h2 className="text-primary">Add Contact</h2>
      <input 
      type="text" 
      placeholder="name" 
      name="name" value={name} 
      onChange={onChange} 
      />
      <input 
      type="email" 
      placeholder="Email" 
      name="email"
       value={email} 
      onChange={onChange} 
      />
    </form>
  )
}
export default ContactForm