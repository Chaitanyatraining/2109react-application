import React, { Component } from 'react'

class Users extends Component {
    // constructor(props){
    //     super(props)
    //     console.log("constructor executed");
    // }

    // static getDerivedStateFromProps(){
    //     console.log("static get derieved state form props");
    //     return null;
    // }

    state = {
        UsersData :[],
    }

    componentDidMount(){
        // console.log("componentdidmount")
        this.getUsersData();
    }

    getUsersData = async ()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        this.setState({UsersData:data});        
    }


  render() {
    console.log("render executed")
    return (
      <>
                <h2>Users</h2>
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
                this.state.UsersData.length ?
            (this.state.UsersData.map((user)=>(
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
      </>
    )
  }
}

export default Users