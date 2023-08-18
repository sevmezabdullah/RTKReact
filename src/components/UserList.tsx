
import { useGetUsersQuery } from '../redux/user'

const UserList = () => {

    const {data,error,isLoading} = useGetUsersQuery("",{
        pollingInterval:1000
    })
    
    if(isLoading){
        return <div>Yükleniyor</div>
    }
  return (
    <div>
        <ul>
            {data?.map((item,index)=>{
                return <li key={index}>{item.name}</li>
            })}
        </ul>
    </div>
  )
}

export default UserList