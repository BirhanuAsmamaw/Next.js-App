import Link from 'next/link';
import React from 'react'
interface User{
    id:number;
    name:string;
    email:string;
}
const UserTable = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  return (
    <table className='table table-bordered' >  {/* daisy ui */}
    
      <thead>
        <tr>
          <th >
            <Link href= "/users?sortOrder=name">Name</Link>
          </th>
          <th>
          <Link href= "/users?sortOrder=email">Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td></tr> )}
      </tbody>
      
    </table>
  )
}

export default UserTable