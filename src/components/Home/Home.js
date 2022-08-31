import { useEffect, useState } from "react";    
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const url = "https://react-crud-json-server-heroku.herokuapp.com/empData"
    const [info, setInfo] = useState([{
        id: "",
        "FirstName": "",
        "LastName": "",
        Gender: "",
        "DateOfBirth": "",
        Email: "",
        "MobileNumber": "",
        Address: "",
        City: "",
        State: "",
        Country: "",
        "ZipCode": "",
      }]);
    
      
  let handleDelete = async(id)=>{

    try {
      let response = await axios.delete(`${url}/${id}`);
      const { data } = await axios.get(url);
      setInfo(data)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  

      useEffect(() => {
        getData();
      }, []);


      let getData=async function () {
        try {
          const { data } = await axios.get(url);
          console.log(data);
          data.map((item, i) => setInfo(data));
        } catch (e) {
          console.error(e);
        }
      }

    

    
      return (
        <>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Full Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Date Of Birth</th>
                  <th scope="col">Email</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {info.map((item, index) => {
                  return (
                    <tr key={index}>
    
                      <th scope="row">{item.id}</th>
                      <td>{item["First Name"]}  {item["Last Name"]}</td>
                      <td>{item["Gender"]}</td>
                      <td>{item["Date of Birth"]}</td>
                      <td>{item["Email"]}</td>
                      <td>
                      <Link to={`/edit/${item.id}`}><i class="fas fa-edit"></i></Link>
                      <button onClick={()=>{handleDelete(item.id)}} className="border-0 ml-4 delt-btn" style={{marginLeft:"10px"}}><i class="fa fa-trash" aria-hidden="true"></i></button>
                      
                      </td>
                    </tr>
                  );
                })}
               
                
              </tbody>
            </table>
            <Link to={"/create"} className="btn-dark p-2 " style={{textDecoration:"none"}}>Create Contact</Link>

          </div>
        </>
      );
}

export default Home