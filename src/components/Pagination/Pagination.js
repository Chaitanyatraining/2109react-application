import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        UserData:[],
        pageNumber:0
    }

    handleBtnClick = (num)=>{
        this.setState({pageNumber:num})
    }

    componentDidMount(){
        this.getDummyData();
    }

    componentDidUpdate(prevsProps,prevsState){
        if(prevsState.pageNumber !== this.state.pageNumber){
            this.getDummyData();
        }
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
                                    <div className='col-md-6 mt-3'>
                                        <div className='card p-2'>
                                            <div className='row'>
                                                <div className='col-md-4'>
                                                    <img src={user.picture} alt={user.firstname} />
                                                </div>
                                                <div className='col-md-8'>
                                                    <h4>{user.id}</h4>
                                                    <h5><span>{user.firstName} {user.lastName}</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                       <div>
                        {[1,2,3,4,5,6,7,8,9].map((num)=>(
                            <button className='btn btn-info me-2' onClick={()=>this.handleBtnClick(num)}>{num}</button>
                        ))}
                       </div>
                    </div>
                ):<p>loading</p>
            }
      </div>
    )
  }
}

export default Pagination