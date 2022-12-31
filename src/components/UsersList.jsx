import React from 'react'

const UsersList = ({user, deleteUser, setEditUser, showModal}) => {

  const editUser = (user) =>{
    setEditUser(user)
    showModal()
  }

  return (
    <article className="user_card">
        <h2>{user.first_name} {user.last_name}</h2>
        <h3>{user.email}</h3>
        <p>{user.birthday}</p>
        <div className='user__card-btns'>
          <button onClick={() => deleteUser(user.id)} className="user__btn">
            <i className='bx bx-trash'></i>
          </button>
          <button onClick={() => editUser(user)} className="user__btn">
            <i  className='bx bxs-edit'></i>
          </button>
        </div>
    </article> 
  )
}

export default UsersList