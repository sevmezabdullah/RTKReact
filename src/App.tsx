
import './App.css'
import UserList from './components/UserList'
import { useAddUserMutation, useGetUsersQuery } from './redux/user'
function App() {
 const [addUser,{data,isLoading,error}]= useAddUserMutation()

 
  return (
    <>
      <div>
        <input type="text" />
        <input type="text" />
        <input type="text" />


        <button onClick={()=>{
          addUser({email:'abdullah',name:'Abdullah',surname:'Abdullah'})
        }}>Kullanıcı Ekle</button>

    <UserList/>
      
      </div>
    </>
  )
}

export default App
