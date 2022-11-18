import { useRouter } from "next/router"
import { useContext } from "react"
import { AuthContext } from "../pages/_app"
import Button from '@mui/material/Button';

const Header = () => {

  const {dispatch, state:{isAuthenticated}} = useContext(AuthContext)

    
  const router = useRouter()

  const handleLogin = () => {
    window.location = 'http://localhost:4000/auth/google'
  }

  const handleLogout = () => {
    dispatch({type:'LOGOUT'})
  }

  return (
    <>
  <div className='df aic jcsb w100p p5' 
    style={{
      backgroundColor: 'var(--blackDark)',
      boxShadow:'0 2px 5px rgba(0, 0, 0, 0.5)'
  
  }}>
        <h1 className="cursorp" onClick={()=> router.push('/')} >🚀 Forza Cursos</h1>
        
       { !isAuthenticated && <Button variant="contained" onClick={handleLogin} >Iniciar Sesion</Button> }
       { isAuthenticated && <Button variant="contained"  onClick={handleLogout} >Cerrar Sesion</Button> }
        
    </div>
    
    
    </>
  )
}

export default Header