import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Link from 'next/link';

const Users = () => {
   const appCtx = useContext(AppContext);
   const handleAddUser = () => {
      appCtx.addUser({ name: 'Lisa' });
   };
   return (
      <>
         <h1>Users</h1>
         <ul>
            {appCtx.users.map((user) => (
               <li key={user.name}>{user.name}</li>
            ))}
         </ul>
         <div>
            <button onClick={handleAddUser}>Add User</button>
         </div>
         <Link href="/">Go Home</Link>
      </>
   );
};

export default Users;
