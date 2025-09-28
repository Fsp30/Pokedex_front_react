
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface User {
  id: number
  firstName: string
  lastName: string
  age: number
  gender: string
  email: string

}

const fetchUser = async (userId: string = "2"): Promise<User> => {
  const { data } = await axios.get(`https://dummyjson.com/user/${userId}`);
  return data;
}

function UserInfo() {
  const { data, isLoading, isError, error } = useQuery<User, Error>({
    queryKey: ['user', '2'],
    queryFn: () => fetchUser("2"),
    retry: 2
  })

  if (isLoading) return <div>Loading user...</div>
  if (isError) return <div>Error: {error.message}</div>
  
  
  if (!data) return <div>No user data found</div>

  return (
    <div className="user-info">
      <div><strong>ID:</strong> {data.id}</div>
      <div><strong>Name:</strong> {data.firstName} {data.lastName}</div>
      <div><strong>Gender:</strong> {data.gender}</div>
      <div><strong>Email:</strong> {data.email}</div>
      <div><strong>Age:</strong> {data.age}</div>
    </div>     
  )
}

export default UserInfo;