import React , {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import './navbar.css';



export default function UserNavbar({user}) {
  const [groups, setGroups] = useState([]);
  const [newGroupInput, setNewGroupInput] = useState('');

  const handleNewGroup = () => {
    if (newGroupInput.trim() === '') return;

    setGroups(prevGroups => [...prevGroups, newGroupInput]);
    setNewGroupInput('');
  };

  return (
    <div className="Sidebar">
      <h3>Welcome {user.name}</h3>
      <h2>Groups</h2>
      <ul>
        {groups.map((group, index) => (
          <li key={index}>{group}</li>
        ))}
      </ul>
      <div className="NewGroup">
        <input
          type="text"
          value={newGroupInput}
          onChange={e => setNewGroupInput(e.target.value)}
          placeholder="New group name"
        />
        <button onClick={handleNewGroup}>Create group</button>
      </div>
    </div>
    );
}
