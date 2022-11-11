import { useRouter } from "next/router"

const Header = () => {
    
  const router = useRouter()

  const handleLogin = () => {
    window.location = 'http://localhost:4000/auth/google'
  }

  return (
    <>
  <div className='df aic jcsb w100p p5' 
    style={{
      backgroundColor: 'var(--blackDark)',
      boxShadow:'0 2px 5px rgba(0, 0, 0, 0.5)'
  
  }}>
        <h1 className="cursorp" onClick={()=> router.back()}>🚀 Forza Cursos</h1>
        <button
        className=''
        onClick={handleLogin}
        >
          Iniciar Session
        </button>
    </div>
    
    
    </>
  )
}

export default Header