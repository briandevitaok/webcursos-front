
const CourseVideo = ({videoUrl}) => {
  return (
    <>
      <div className='mt20'>
          <video  src={videoUrl} style={{width:'100%'}}  controls></video>
     </div>
    
    
    </>
  )
}

export default CourseVideo