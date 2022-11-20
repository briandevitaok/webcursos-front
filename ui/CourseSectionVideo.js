const CourseSectionVideo = ({
  setSelectVideo,
  video,
  isAuthenticated,
  hasBoughtTheCourse,
}) => {
  const couldWatch = (isAuthenticated && hasBoughtTheCourse) || video.free


  return (
    <div className="df aic cursorp" onClick={() => setSelectVideo(video)}>
      { couldWatch && <i className="fa-solid fa-circle-play  free mv5"/> }
      {!couldWatch && <i className="fa-solid fa-lock mv5 red "/> }
      
      <span className="p5" style={{ fontSize: '1.0rem' }} >
        {video.title}
      </span>
    </div>
  );
};

export default CourseSectionVideo;
