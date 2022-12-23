import React, { useEffect, useState } from 'react'

function UseEffectPagination() {
    const [UserData,setUserData] = useState([]);
    const [pageNumber,setPageNumber] = useState(0);

    useEffect(()=>{
        getDummyData();
        
    },[pageNumber])

  const getDummyData = async()=>{
        const response = await fetch(`https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
            {
                method:"GET",
                headers:{
                    "app-id":"633e33e98efd49504c9c7643",
                }
            }
        )
        const {data} = await response.json();
        setUserData(data);
    }
    
  return (
        <>
            <h2>UseEffectPagination</h2>
            {
                UserData.length ? (
                    <div className='container mt-5'>
                        <div className='row'>
                            {
                                UserData.map((user)=>(
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
                            <button className='btn btn-info me-2' onClick={()=>{setPageNumber(num)}}>{num}</button>
                        ))}
                       </div>
                    </div>
                ):<p>loading</p>
            }
        </>
    )
}

export default UseEffectPagination