import React from 'react';
import ResultTable from './admin-contents-components/ResultTable';
import { getUsers } from '../data/usersData';

const EditUsers = () => {
  return (
    <ResultTable 
      getItems={getUsers}
      head={["Name", "Email"]}
      type={"user"}
    />
  )
}

export default EditUsers;