import { createContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({children}) {

  const [user, setUser] = useState({
        Name: '',
        Username: '',
        Password: '',
        ConfirmPassword:'',
        authenticated: false
  })

  const updateUser = (name, value) => {
    setUser({...user, [name]: value})
  }
  
  return(
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;