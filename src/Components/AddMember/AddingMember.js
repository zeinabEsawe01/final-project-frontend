import React, { useState , useEffect } from "react";
import axios from "axios";
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MyAlert from "./MyAlert";

export default function AddingMember({group}) {
    const [member, setMember] = useState({ name: ""});
    const [members , setMembers] = useState()
    const [Existmember , setExistmember] = useState(false)
    const [showAlert, setShowAlert] = useState(false);

    let newMember = {
      groupId : group._id,
      username : member.name
    }
console.log(newMember);
    const handleShowAlertClick = () => {
      setShowAlert(true);
    };
  
    const handleCloseAlertClick = () => {
      setShowAlert(false);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      setMember({ name: "" });
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setMember((prevMember) => ({ ...prevMember, [name]: value }));
    };

    useEffect(() => {
      const fetchUsers = async () => {
        let response = await axios.get(
          `http://localhost:4800/user/returnUsers`
        );
        setMembers(response.data)
      };
      fetchUsers()
    }, []);

    function handleSearch(){
      console.log(members);
       members.map(m =>  m.userName === member.name ? 
        setExistmember(true) && setMember({name : m.userName}) 
        : null
       )
       console.log(member);
       console.log(Existmember);

      }
    console.log(newMember);
      function addMember(){
        if(Existmember){
          fetch(`http://localhost:4800/group/groups/addMember`, {
                method: 'PUT',
                body: JSON.stringify(newMember),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then(response => {
              if(response) {
                console.log('Success')
              }else{
                console.log("not successful");
              }
            }
              )
        }
        else{
          setShowAlert(true);
        }
      }
    

    return (
    <form onSubmit={handleSubmit} className="row g-3">
    <div className="col-md-6">
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
        type="text"
        name="name"
        value={member.name}
        onChange={handleChange}
        className="form-control"
        id="name"
        required
      />
      <Form onSubmit={e => { e.preventDefault();}}>
          <Button variant="outline-secondary" onClick={handleSearch}>
          <FaSearch /> Search
          </Button>
      </Form>
    </div>
    <span>
      {Existmember ? <div>user exist</div> : <div>user not exist</div>}
    {/* {members.map(m => <div>{m.email}</div>)} */}
    </span>
      
    <div className="col-12">
    <Button variant="outline-secondary" onClick={addMember}>
      <FontAwesomeIcon icon={faUserPlus} /> Add Member
    </Button>
    </div>
    {showAlert && (
        <MyAlert
          variant="danger"
          message="Failed to add member!"
          onClose={handleCloseAlertClick}
        />
      )}
  </form>
    )
}


