import React from 'react'

class ContactUs extends React.Component {
    state = {
        firstName : "",
        lastName :"",
        email:"",
        phone:"",
        firstNameErr:"",
        lastNameErr:"",
        emailErr:"",
        phoneErr:""
    }
    
     handleChange = (e) =>{
        const {name,value} = e.target;
        this.setState({[name]:value})
    }

    validateForm = ()=>{
        let firstNameErr = "";
        let lastNameErr = "";
        let emailErr = "";
        let phoneErr = "";

        if(this.state.firstName.length < 4){
            firstNameErr = "First Name should have atleast 4 char"
        }

        if(this.state.lastName.length < 2){
            lastNameErr = "last Name should have atleast 2 char"
        }

        if(!this.state.email.includes('@')){
            emailErr = "enter valid email"
        }

        if(this.state.phone.length != 10){
            phoneErr = "Enter a valid number"
        }

        // falsyvalues 0,null,undefined,"",nan

        if(firstNameErr || lastNameErr || emailErr || phoneErr){
            this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
            return false;
        }else{
            this.setState({firstNameErr,lastNameErr,emailErr,phoneErr})
            return true;
        }
    }

     handleSubmit = (e)=>{
        e.preventDefault();
        this.validateForm();        
    }

    // validation
    // firstName > 4
    // lastName > 2
    // email '@' includes
    // phone 10

    render(){
        
  return (
    <div>
        <h2>ContactUs</h2>
        <div className='container'>
            <div className='row'>  
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                <form onSubmit={this.handleSubmit}>
                          <div class="mb-3">
                              <input type="text" class="form-control" 
                              name="firstName"
                              placeholder='Enter your Name'
                              onChange={this.handleChange}
                              value={this.state.firstName}
                              />
                              <p className='text-danger'>{this.state.firstNameErr}</p>
                          </div>
                          <div class="mb-3">
                              <input type="text" class="form-control" 
                              name="lastName"
                            placeholder='Enter your last name'
                            onChange={this.handleChange}
                            value={this.state.lastName}
                              />
                            <p className='text-danger'>{this.state.lastNameErr}</p>
                          </div>
                          <div class="mb-3">
                              <input type="text" class="form-control" 
                              name="email"
                            placeholder='Enter your email'
                            onChange={this.handleChange}
                            value={this.state.email}
                              />
                             <p className='text-danger'>{this.state.emailErr}</p>
                          </div>
                          <div class="mb-3">
                              <input type="text" class="form-control" 
                              name="phone"
                            placeholder='Enter your phone Number'
                            onChange={this.handleChange}
                            value={this.state.phone}
                              />
                            <p className='text-danger'>{this.state.phoneErr}</p>
                          </div>
                          
                          <button type="submit" class="btn btn-primary">Submit</button>
                      </form>
                </div>
                <div className='col-md-3'></div>
            </div>
        </div>
    </div>
  )
    }
}

export default ContactUs