const CourseVideo = ({
  videoUrl,
  isFree,
  isAuthenticated,
  hasBoughtTheCourse,
}) => {
  const couldWatch = (isAuthenticated && hasBoughtTheCourse) || isFree;

  return (
    <>
      <div
        className="df aic jcc mt20 br5 "
        style={{
          overflow: 'hidden',
          height: '28rem',
          boxShadow: '0 2px 10px rgb(255, 255,255,0.2)',
        }}
      >
        {couldWatch && (
          <video
            src={videoUrl}
            style={{ width: '100%', height: '100%' }}
            controls
          ></video>
        )}
        {!couldWatch && !isAuthenticated && (
          <p>
            <u
              onClick={() =>
                (window.location = 'http://localhost:4000/auth/google')
              }
              className="cursorp"
            >
              Inicia Sesion
            </u>{' '}
            para visualizar el curso
          </p>
        )}


      {!couldWatch && isAuthenticated && (
          <p>
            <u
              onClick={() =>
                (window.location = 'http://localhost:4000/auth/google')
              }
              className="cursorp"
            >
             Para acceder a este video
            </u>{' '}
            primero debes adquerir el curso
          </p>
        )}
      </div>
    </>
  );
};

export default CourseVideo;
