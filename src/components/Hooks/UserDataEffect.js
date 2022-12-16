import React, { useEffect, useState } from 'react'

function UserDataEffect() {
    const [userData,setUserData] = useState([]);

    const getUsersData = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
       setUserData(data);      
    }

    //useEffect Hook
    //componentdidmount 
    useEffect(()=>{
        getUsersData();
    },[])


  return (
    <div>
        <h2>UserData using UseEffect Hook</h2>
        <table class="table">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            </tr>
        </thead>
        <tbody>
            {
                userData.length ?
            (userData.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                ))):<p>loading...</p>
            }
        </tbody>
        </table>
    </div>
  )
}

export default UserDataEffect