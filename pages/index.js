
import {useEffect, useState} from 'react'
import CourseCard from '../components/CourseCard'
import Header from '../ui/Header'


export default function Home() {

  const [cours, setCours] = useState([])
  
  useEffect(() => {
      fetch('http://localhost:4000/courses')
      .then((res) => res.json())
      .then(({ok, data}) => {
        if(ok){
          setCours(data)
        }
      })
      .catch((err) => {
        console.log({err})
      })
  }, [])
  
console.log({cours})

  return (
    <>
    <div className='df fdc aic jcc'>

    <Header/>    

     <div className='df fdc p5 tac mb5'>
      <h1 style={{lineHeight:'2rem'}}>"Codifica siempre como si la persona que finalmente mantendrá tu código fuera un psicópata violento que sabe dónde vives"</h1>
      <quote className="">--Martin Golding</quote>
     </div>
     <h2 className='mt20'>CURSOS DISPONIBLES</h2>

    <div className='mt20'>
    {
      cours.map( cours => <CourseCard cours={cours} key={cours._id}/>)
    }
 </div>
    </div>



    </>
    
  )
}
