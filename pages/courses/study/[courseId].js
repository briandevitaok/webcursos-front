import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CourseVideo from '../../../components/CourseVideo';
import { config } from '../../../constants/config';
import Header from '../../../ui/Header';

const StudyPage = () => {
  const router = useRouter();

  const { courseId } = router.query;

  const [course, setCourse] = useState(null);
  const [selectVideo, setSelectVideo] = useState()

  useEffect(() => {
    if (!!courseId) {
      fetch(`${config.BASE_BACKEND_URL}/courses/${courseId}`)
        .then((res) => res.json())
        .then(({ ok, data }) => {
          if (ok) {
            setCourse(data);
            setSelectVideo(data.sections[0].videos[0]);
          }
        })
        .catch((err) => {
          console.log({ err });
        });
    }
  }, [courseId]);

  return (
    <>
      <Header />

      <div className="df aic">
        <div
          className="df fdc p10"
          style={{ height: '100vh', backgroundColor: 'var(--blackDark)' }}
        >
          <h3 className="p10"> SECCIONES DEL CURSO </h3>
          <div className="df fdc ">
            {course?.sections?.map((section) => (
              <div className="df fdc">
                <div
                  className="p10 mb5 br5"
                  style={{ backgroundColor: 'var(--black)' }}
                >
                  <h4>{section.name}</h4>
                </div>
                <div className='mb5'>
                  {section.videos.map((video) => (
                    <div className='df aic cursorp' onClick={() => setSelectVideo(video)}>
                      <span className='p5' style={{ fontSize: '1.0rem' }}>{video.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p10 fdc" style={{ height: '100vh' }}>
         <h3 className=''>{selectVideo?.title}</h3> 
         <CourseVideo videoUrl={selectVideo?.videoUrl}/>
        </div>
      </div>
    </>
  );
};

export default StudyPage;
