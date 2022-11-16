import Image from 'next/image';
import { useRouter } from 'next/router';

const CourseCard = ({ cours }) => {
  const { thumbnail, name, _id, description } = cours;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/courses/study/${_id}`);
    localStorage.setItem(_id, JSON.stringify(cours));
  };

  return (
    <>
      <div className="df jcsb card-cointainer cursorp" onClick={handleClick}>
        <div
          style={{
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            marginRight: '1rem',
            width: `${150 * 1.77}px`,
          }}
        >
          <Image src={thumbnail} alt={name} width={150 * 1.77} height={150} />
        </div>

        <div className="jc fcd card-body">
          <h3 className="cblack mv5" style={{ color: '#222' }}>
            {name}
          </h3>
          <p className="cblack m0">{description}</p>
        </div>
      </div>

      <style jsx>{`

            .card-cointainer{
             
                width: 40rem;
                background-color: white;
                padding: 0.75rem;
                border-radius: 0.5rem;
                transition: transform 0.2s ease

            }

            .card-cointainer:hover {
              transform: scale(1.03);
              box-shadow: 0 0 19px rgba(255, 255,255, 0.2);
            }

            .card-body{
              width: 60%;
            }

            @media (max-width: 800px) {
              .card-cointainer {
              flex-direction: column;
              width: ${150 * 2 + 'px'};
              margin: 0auto;
              }

              

              .card-body{
                width: 100%;
              }
        `}</style>
    </>
  );
};

export default CourseCard;
