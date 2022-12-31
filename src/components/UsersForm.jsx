import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

const UsersForm = ({createUser, editUser, updateUser, showForm, showModal, setEditUser}) => {

    const {register, handleSubmit, reset}= useForm()

    const defaultValues = {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        birthday: ""
    }

    
    const closeModal = () =>{
        showModal()
        reset(defaultValues)
        setEditUser()

    }

    useEffect(() => {
        if(editUser){
            reset(editUser)
        }
    }, [editUser])

    const submitForm = (data) => {
        if (editUser){
            updateUser(data, editUser.id)
        }else{
            createUser(data)
        }
        reset(defaultValues)
    }

  return (
    <section className={`form__container ${showForm && "form__container-disable"}`}>
        <form onSubmit={handleSubmit(submitForm)} className="form__users">
            <i onClick={closeModal} className='bx bx-x'></i>
            <h2>{editUser ? "Edit User" : "Add User"}</h2>
            <div className='form__input'>
                <label htmlFor="first_name">First Name</label>
                <input type="text" id="first_name" {...register("first_name")}/>
            </div>
            <div className='form__input'>
                <label htmlFor="last_name">Last Name</label>
                <input type="text" id="last_name" {...register("last_name")}/>
            </div>
            <div className='form__input'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register("email")}/>
            </div>
            <div className='form__input'>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" {...register("password")}/>
            </div>
            <div className='form__input bd__input'>
                <label htmlFor="birthday">Birthday</label>
                <input type="date" id="birthday" {...register("birthday")}/>
            </div>
            <button onClick={showModal} className='submit__btn'>{editUser ? "Edit user" : "Create new User"}</button>
        </form>
    </section>
  )
}

export default UsersForm