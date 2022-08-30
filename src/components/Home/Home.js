import { useEffect, useState } from "react";    
import axios from "axios";

const Home = () => {
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
    
      useEffect(() => {
        (async function () {
          try {
            const { data } = await axios.get(`http://localhost:9000/empData`);
            console.log(data);
            data.map((item, i) => setInfo(data));
          } catch (e) {
            console.error(e);
          }
        })();
      }, []);
    
      return (
        <>
          <nav>
            <a className="navbar navbar-light bg-light" href="/">
              <h1 className="navbar-brand m-auto">CRUD Operation</h1>
            </a>
          </nav>
    
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
                  // console.log(item."i")
                    <tr key={index}>
    
                      <th scope="row">{item.id}</th>
                      <td>{item["First Name"]}  {item["Last Name"]}</td>
                      <td>{item["Gender"]}</td>
                      <td>{item["Date of Birth"]}</td>
                      <td>{item["Email"]}</td>
                      <td>
                      <i class="fas fa-edit"></i> &nbsp;  &nbsp;
                      <i class="fas fa-trash"></i>
                      </td>
                    </tr>
                  );
                })}
               
                
              </tbody>
            </table>
          </div>
        </>
      );
}

export default Home