import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import CourseVideo from '../../../components/CourseVideo';
import { config } from '../../../constants/config';
import CourseSectionVideo from '../../../ui/CourseSectionVideo';
import Header from '../../../ui/Header';
import { AuthContext } from '../../_app';

const StudyPage = () => {
  const {
    state: { isAuthenticated, user, olReadyCheck },
  } = useContext(AuthContext);
  const router = useRouter();
  const { courseId } = router.query;

  const [course, setCourse] = useState(null);
  const [selectVideo, setSelectVideo] = useState();


  useEffect(() => {
    if (!!courseId && olReadyCheck) {
      console.log("FECHING", olReadyCheck)
      console.log({user})
      const query_params = !!user ? `?user_id=${user._id}`: ''
      console.log({query_params})
      fetch(`${config.BASE_BACKEND_URL}/courses/${courseId}${query_params}`)
        .then((res) => res.json())
        .then(({ ok, data }) => {
          if (ok) {
            setCourse(data);
            setSelectVideo(data.sections[0].videos[0]);
          }
        })
        .catch((err) => {
          return console.log({ err });
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
          <div className="df fdc  ">
            {course?.sections?.map((section) => (
              <div className="df fdc" key={section.name} >
                <div
                  className="p10 mb5 br5 "
                  style={{ backgroundColor: 'var(--black)'}}
                  
                >
                  <h4>{section.name}</h4>
                </div>
                <div className="mb5">
                  {section.videos.map((video) => (
                    <CourseSectionVideo
                      key={video.title}
                      isAuthenticated={isAuthenticated}
                      hasBoughtTheCourse={course.hasBoughtTheCourse}
                      setSelectVideo={setSelectVideo}
                      video={video}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p10 fdc" style={{ height: '100vh', minWidth:'70%' }} >
          <h3 className="">{selectVideo?.title}</h3>

          <CourseVideo
            isFree={!!selectVideo?.free}
            videoUrl={selectVideo?.videoUrl}
            isAuthenticated={isAuthenticated}
            hasBoughtTheCourse={course?.hasBoughtTheCourse}
          />
        </div>
      </div>
    </>
  );
};

export default StudyPage;
