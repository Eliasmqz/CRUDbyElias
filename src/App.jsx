import axios from "axios"
import { useEffect, useState } from "react"
import UsersForm from "./components/UsersForm";
import UsersList from "./components/UsersList";



function App() {

  const BASE_URL = "http://users-crud.academlo.tech/";



  const [users, setUsers] = useState()
  const [editUser, setEditUser] = useState()
  const [showForm, setShowForm] = useState(false)

  const showModal = () => {
    setShowForm(!showForm)
  }

  const getAllUsers = () => {
    axios.get(`${BASE_URL}users/`)
    .then(res =>{
      setUsers(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  const createUser = (data) => {
    axios.post(`${BASE_URL}users/`, data)
    .then(res => {
      console.log(res.data)
    })
      
    .catch(err => console.log(err))
    
  }

  const deleteUser = (id) => {
    axios.delete(`${BASE_URL}users/${id}/`)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

  const updateUser = (data, id) => {
    axios.patch(`${BASE_URL}users/${id}/`, data)
    .then(res => {
      console.log(res.data)
      setEditUser()
      getAllUsers()
    })
    .catch(err => console.log(err))
  }


  useEffect(() => {
    getAllUsers()
  }, [])
  

  return (
    <div className="App">

      <header className="header__container">
        <h1>CRUD Users by Elias</h1>
        <button onClick={() => setShowForm(!showForm)} className="new__user-btn">+ Create User</button>
      </header>

      <UsersForm
      createUser={createUser} 
      editUser={editUser}
      updateUser={updateUser}
      showForm={showForm}
      showModal={showModal}
      setEditUser={setEditUser}/>
      <section className="user__cards-container">
      {
        users?.map(user => ( <UsersList 
          user={user} 
          key={user.id} 
          deleteUser={deleteUser}
          setEditUser={setEditUser}
          showModal={showModal}/>))
      }
      </section>
        
    </div>
  )
}

export default App
