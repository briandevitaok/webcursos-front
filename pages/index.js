
import {useEffect, useState} from 'react'
import Image from 'next/image'


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
    <div className='df fdc aic jcc mt20 c'>
    <h1>🚀 Forza Cursos </h1>
    {
      cours.map( cours => (
        <div className='df fdc' key={cours._id} style={{width:'50rem'}}>
        <div className='df jcsb'  style={{width:'50rem',background:'white',padding:'0.75rem', borderRadius:'0.5rem'}}>
          <div style={{boxShadow:'0 2px 5px rgba(0,0,0,0.2)', marginRight:'1rem'}}>
        <Image
         src={cours.thumbnail}
         alt={cours.name}
         width={150 * 1.77}
         height={150}
        />
          </div>

          <div className='jc fcd' style={{width:'60%'}}>
        <h3 className='cblack mv5' style={{color:'#222'}}>{cours.name}</h3>
        <p className='cblack m0'>Este curso esta dictado para aquellas personas que quieran empezar a programar en el lenguaje
          mas demandado y uno de los consideras mas simples para aprender.
        </p>

          </div>
      </div>
        <div className='mt20'>
          <video  src={cours.videos[0].videoUrl} style={{width:'100%'}} autoPlay controls></video>
        </div>
        </div>

      
      ))
    }
 </div>
    </>
    
  )
}
