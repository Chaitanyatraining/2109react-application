import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        UserData:[],
        pageNumber:0
    }

    componentDidMount(){
        this.getDummyData();
    }

    getDummyData = async()=>{
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
            {
                method:"GET",
                headers:{
                    "app-id":"633e33e98efd49504c9c7643",
                }
            }
        )
        const {data} = await response.json();
        this.setState({UserData:data})
    }

  render() {
    return (
      <div>
        <h2>Pagination</h2>
            {
                this.state.UserData.length ? (
                    <div className='container mt-5'>
                        <div className='row'>
                            {
                                this.state.UserData.map((user)=>(
                                    <p>{user.firstName}</p>
                                ))
                            }
                        </div>
                    </div>
                ):<p>loading</p>
            }
      </div>
    )
  }
}

export default Pagination