import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import CourseCard from "../../components/CourseCard"
import Header from "../../ui/Header"


const CoursesPage = () => {

    const [course, setCourse] = useState({})

    const router = useRouter()
    const {courseId} = router.query



    useEffect(() => {
    const courseFromLs = JSON.parse(localStorage.getItem(courseId))
    setCourse(courseFromLs)
    }, [])
    

  return (
    <>
    
    <Header/>
      <div className="mt20 aic jcc df ">

    <CourseCard cours={course}/>
      </div>


    </>
 
  )
}

export default CoursesPage