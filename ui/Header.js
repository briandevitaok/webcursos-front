import { useRouter } from "next/router"
import { useContext } from "react"
import { AuthContext } from "../pages/_app"

const Header = () => {

  const {dispatch, state:{isAuthenticated}} = useContext(AuthContext)
  console.log({isAuthenticated})
    
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
        
       { !isAuthenticated && <button className=''onClick={handleLogin} >Iniciar Sesion</button> }
       { isAuthenticated && <button className=''onClick={handleLogout} >Cerrar Sesion</button> }
        
        
    </div>
    
    
    </>
  )
}

export default Header