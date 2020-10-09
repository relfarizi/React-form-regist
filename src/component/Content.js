import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
            lastName : '',
            province : 'Banten',
            gender : 'Pria',
            firstNameCheck : false,
            lastNameCheck : false,
            emailCheck : false,
            emailValidation : false,
            passwordCheck : false,
            provinceCheck : false,
            genderCheck : false
        }
    }

    handleFirstName(event){
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';

        this.setState({
            firstName : inputValue,
            firstNameCheck : isEmpty
        })
    };

    handleLastName(event){
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
         
        this.setState({
            lastName : inputValue,
            lastNameCheck : isEmpty
        })
    }

    handleEmail(event){
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid= !re.test(String(inputValue).toLowerCase());
        this.setState({
            email : inputValue,
            emailCheck : isEmpty,
            emailValidation : isValid
        })
    }

    handlePassword(event){
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        
        this.setState({
            password : inputValue,
            passwordCheck : isEmpty
        })
    }

    handleGender(event){
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        
        this.setState({
            gender : inputValue,
            genderCheck : isEmpty
        })
    }

    handleProvince(event){
        const inputValue = event.target.value;
        const isEmpty = inputValue === '';
        this.setState({
            province : inputValue,
            provinceCheck : isEmpty
        })

    }

    render() {
        const Banten = [    
                {name : 'Serang'},
                {name : 'Tangerang'},
                {name : 'Merak'},
                {name : 'Pandeglang'},
                {name : 'Rangkas'},
        ]

        const Jabar = [    
            {name : 'Bandung'},
            {name : 'Sukabumi'},
            {name : 'Cianjur'},
            {name : 'Bogor'},
            {name : 'Depok'},
    ]

        const errText = (<i class='fas fa-exclamation-triangle'></i>)
        let firstNameErrText;
        let lastNameErrText;
        let emailErrText;
        let passwordErrText;
        let provinceErrText;
        let cityList;

        if(this.state.firstNameCheck){
            firstNameErrText = errText;
        }

        if(this.state.lastNameCheck){
            lastNameErrText = errText;
        } 

        if(this.state.emailCheck || this.state.emailValidation) {
            emailErrText = errText;
        }

        if(this.state.passwordCheck) {
            passwordErrText = errText;
        }

        if(this.state.provinceCheck){
            provinceErrText = errText;
        } else if(this.state.province == 'Banten') {
            cityList = (
                <div class="input-box">
                    <p>Kota</p>
                        <select id="city">
                            {Banten.map((city) =>{
                                return(
                                    <option value={city.name}>{city.name}</option>
                                )
                        })}
                        
                    </select>
                </div>
            )
        } else {
            cityList = (
                <div class="input-box">
                    <p>Kota</p>
                        <select id="city">
                            {Jabar.map((city) =>{
                                return(
                                    <option value={city.name}>{city.name}</option>
                                )
                        })}
                        
                    </select>
                </div>
            )
        }


        let formCard;
            formCard = (
            <div class="content">
                <h1 class="title">Ayo Registrasi !</h1>
                <div class="form-card">
                    <form>
                        <div class="input-box">
                            <p>First Name</p>
                                <input
                                    id="firstName"
                                    value = {this.state.firstName}
                                    onChange = {(event) => {this.handleFirstName(event)}}
                                />
                                {firstNameErrText}
                                
                        </div>
                        <div class="input-box">
                            <p>Last Name</p>
                                 <input 
                                    value = {this.state.lastName}
                                    onChange = {(event) => {this.handleLastName(event)}}
                                />
                                {lastNameErrText}
                                
                        </div>

                        <div class="input-box">
                            <p>Email</p>
                                 <input 
                                    value = {this.state.email}
                                    onChange = {(event) => {this.handleEmail(event)}}
                                />
                                {emailErrText}
                                
                        </div>

                        <div class="input-box">
                            <p>Password</p>
                                 <input
                                    type="password"
                                    value = {this.state.password}
                                    onChange = {(event) => {this.handlePassword(event)}}
                                />
                                {passwordErrText}
                                
                        </div>
                        
                        <div class="input-box">
                            <p>Jenis Kelamin</p>
                                
                                <select id="gender" onChange={(event) => {this.handleGender(event)}}>
                                    <option value='Pria'>Pria</option>
                                    <option value='Wanita'>Wanita</option>
                                </select>
                        </div>

                        <div class="input-box">
                            <p>Provinsi</p>
                                
                                <select id="provinsi" onChange={(event) => {this.handleProvince(event)}}>
                                    <option value='Banten'>Banten</option>
                                    <option value='Jawa Barat'>Jawa Barat</option>
                                </select>
                        </div>

                        {cityList}

                        
                    </form>
                </div>
                
                
                
                
            </div>);
        return (
            <div>
                {formCard}
            </div>
        )
    }
}

export default Content;