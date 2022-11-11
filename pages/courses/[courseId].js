import { useRouter } from "next/router"
import CourseCard from "../../components/CourseCard"
import Header from "../../ui/Header"


const CoursesPage = () => {

    const router = useRouter()
    const {courseId} = router.query

    const course = JSON.parse(localStorage.getItem(courseId))
    console.log({course})

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