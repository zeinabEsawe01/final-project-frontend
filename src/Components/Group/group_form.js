import React ,{useState} from 'react';


function GroupForm() {
    const [groupName,setGroupName] = useState('')
    const [groupType,setGroupType] = useState('')
    const groupTypes = ['family','friends','Work']

    let group = {
        "name" : groupName,
        "kind" : groupType,
        "members" : [],
        "places" : []
    }

    

    function addNewGroup(){
        if (group.name != '' || group.kind != '') {
            fetch('/group', {
                method: 'POST',
                body: JSON.stringify(group),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
        }
    }

    return (
        <div className='GroupFormContainer'>
            <h2>Add New Group</h2>
            <input value={groupName}
            onChange={(e) => 
            setGroupName(e.target.value)} 
            type='text' 
            placeholder='New Group'/>

            <h2>Group Type</h2>
            <div>
                <select onChange={(e) => setGroupType(e.target.value)}>
                    {groupTypes.map(type => <option value={`${type}`}>{type}</option>)}
                </select>
            </div>
            <button onClick={addNewGroup}>save</button>
        </div>
    )
}

export default GroupForm