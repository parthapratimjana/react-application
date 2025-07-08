import axios from "axios";
import { useState } from "react";

export default function Login() {
    const [formData, setFormData] = useState(
        {
            "email": "admin@mail.com",
            "password": "admin123"
          }
    )
    const loginProcess = (e)=>{
        e.preventDefault();
        console.log("Form Submit", formData)
        axios.post('https://api.escuelajs.co/api/v1/auth/login', formData)
        .then(res =>{
            console.log("Response", res)
            localStorage.setItem('token', res.data.access_token);
            return window.location.href = '/recepies'
        })
        .catch(err=>{
            console.log("Error")
        })
    }
    return (
        <div className="container-sm">
        <div className="card">
            <div className="card-body">
                <form onSubmit={loginProcess}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" id="" name="email" placeholder="Email" />
                       
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="" name="password" placeholder="Password" />
                       
                    </div>
                    
                    <div className="mb-3">
                        <button className="btn btn-info" type="submit">Submit Form</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}