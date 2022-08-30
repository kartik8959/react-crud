import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

let Addcontact = () => {

    let navigate = useNavigate();
    const [info, setInfo] = useState(
        {
            "data": {
                "id": "",
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
        }


    );

    let updateInput = (e) => {
        setInfo({
            ...info.data,
            [e.target.name]: e.target.value
        })
    }

    // useEffect(() => {
    //     (async function () {
    //         try {
    //             const { data } = await axios.get(`http://localhost:9000/empData`);
    //             console.log(data);
    //             data.map((item, i) => setInfo(data));
    //           } catch (e) {
    //             console.error(e);
    //           }
    //     })()
    // }, []);

    let formSubmit = async (event) => {
        event.preventDefault();


        try {
            let response = await axios.post(`http://localhost:9000/empData`);
            setInfo({ ...info, data: response.data })

        }
        catch (error) {
            setInfo({ ...info, errorMessage: error.message })
        }


    }

    let { data } = info;
    return <React.Fragment>
        <section className="add-contact">
            <div className="container">
                <div className="row ">
                    <div className="col">
                        <p className="h3 fw-bold">Create Contact</p>
                        <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, a? Ipsam tempora libero, provident debitis eaque temporibus ab veniam, ducimus vitae magnam ea eius architecto ratione eligendi, itaque nulla. Ad?</p>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4">
                        <form onSubmit={formSubmit}>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="FirstName" name="First Name" onChange={updateInput} value={data["First Name"]} />
                            </div>

                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="last name" name="LastName" onChange={updateInput} value={data["Last Name"]} />
                            </div>

                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Gender" name="photo" onChange={updateInput} value={data["Gender"]} required={true} />
                            </div>
                            <div className="mb-2">
                                <input type="number" className="form-control" placeholder="mobile" name="Date of Birth" onChange={updateInput} value={data["Date of Birth"]} required={true} />
                            </div>
                            <div className="mb-2">
                                <input type="email" className="form-control" placeholder="email" name="Email" onChange={updateInput} value={data["Email"]} required={true} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Mobile Number" name="company" onChange={updateInput} value={data["Mobile Number"]} required={true} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Address" name="title" onChange={updateInput} value={data["Address"]} required={true} />
                            </div>

                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="City" name="title" onChange={updateInput} value={data["City"]} required={true} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="State" name="title" onChange={updateInput} value={data["State"]} required={true} />
                            </div>
                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Country" name="title" onChange={updateInput} value={data["Country"]} required={true} />
                            </div>

                            <div className="mb-2">
                                <input type="text" className="form-control" placeholder="Zip Code" name="title" onChange={updateInput} value={data["Zip Code"]} required={true} />
                            </div>
                            
                            <button onClick={formSubmit} className="btn-success" type="submit">Submit</button>

                           

                        </form>
                    </div>

                </div>
            </div>

        </section>

    </React.Fragment>
}

export default Addcontact;