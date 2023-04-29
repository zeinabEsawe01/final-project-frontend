import React ,{useState} from 'react';


function GroupForm({user, setShowForm}) {
    const [groupName,setGroupName] = useState('')
    const [groupType,setGroupType] = useState('')

    const groupTypes = ['family','friends','Work']

    function handleCancelClick() {
        setGroupName('');
        setGroupType('');
        setShowForm(false);
      }

    let group = {
        "name" : groupName,
        "kind" : groupType,
        "members" : [],
        "places" : [],
        "voting" : []
    }

    

    function addNewGroup(){
        if (group.name != '' || group.kind != '') {
            fetch(`http://localhost:4800/group/${user.userName}`, {
                method: 'POST',
                body: JSON.stringify(group),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }
    }

    return (
        <div className='group-form-page'>
        <div className="GroupFormContainer">
      <h2>Add New Group</h2>
      <div className="group-form-inputs">
        <label htmlFor="group-name-input">Group Name</label>
        <input
          id="group-name-input"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          type="text"
          placeholder="New Group"
        />

        <label htmlFor="group-type-select">Group Type</label>
        <div className="group-type-select-container">
          <select id="group-type-select" onChange={(e) => setGroupType(e.target.value)}>
            {groupTypes.map((type) => (
              <option key={type} value={`${type}`}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="group-form-buttons">
        <button className="group-form-save-button" onClick={addNewGroup}>Save</button>
        <button className="group-form-cancel-button" onClick={handleCancelClick}>Cancel</button>
      </div>
    </div>
    </div>
    )
}

export default GroupForm