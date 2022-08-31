import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

let Addcontact = () => {
    const url = "https://react-crud-json-server-heroku.herokuapp.com/empData/"
    let navigate = useNavigate();
    const [info, setInfo] = useState(
        
           {
              
                "First Name": "",
                "Last Name": "",
                "Gender": "",
                "Date of Birth": "",
                "Email": "",
                "Mobile Number": "",
                "Address": "",
                "City": "",
                "State": "",
                "Country": "",
                "Zip Code": ""
            }
        


    );

    let updateInput = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        })
    }


    const formSubmit=async(e)=>{
        e.preventDefault();
        console.log(info);
        try {
                    let response = await axios.post(url,info);
                    console.log(response)
                    if(response.status===201){
                        navigate("/",{replace:true})
                    }
        
                }
                catch (error) {
                  console.log(error)
                }
        
    }

  

    return <React.Fragment>
        <section className="add-contact">
            <div className="container">
                <div className="row ">
                    <div className="col">
                        <p className="h3 fw-bold text-dark">Create Contact</p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4">
                        <form onSubmit={formSubmit}>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="FirstName" name="First Name" onChange={updateInput} value={info["First Name"]} />
                            </div>

                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="last name" name="Last Name" onChange={updateInput} value={info["Last Name"]} />
                            </div>

                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Gender" name="Gender" onChange={updateInput} value={info["Gender"]} required={true} />
                            </div>
                            <div className="mb-2">
                                <input type="number" className="form-control" placeholder="mobile" name="Date of Birth" onChange={updateInput} value={info["Date of Birth"]} required={true} />
                            </div>
                            <div className="mb-2">
                                <input type="email" className="form-control" placeholder="email" name="Email" onChange={updateInput} value={info["Email"]} required={true} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Mobile Number" name="Mobile Number" onChange={updateInput} value={info["Mobile Number"]} required={true} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Address" name="Address" onChange={updateInput} value={info["Address"]} required={true} />
                            </div>

                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="City" name="City" onChange={updateInput} value={info["City"]} required={true} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="State" name="State" onChange={updateInput} value={info["State"]} required={true} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Country" name="Country" onChange={updateInput} value={info["Country"]} required={true} />
                            </div>

                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Zip Code" name="Zip Code" onChange={updateInput} value={info["Zip Code"]} required={true} />
                            </div>
                            
                            <button onClick={formSubmit} className="btn-success rounded " type="submit">Add Contact</button>
                            <Link to={"/"} className="btn-danger mx-3 p-1  rounded px-4" style={{textDecoration:"none"}} type="submit">Cancel</Link>

                           

                        </form>
                    </div>

                </div>
            </div>

        </section>

    </React.Fragment>
}

export default Addcontact;