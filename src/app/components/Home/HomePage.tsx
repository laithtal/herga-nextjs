
import './HomePage.css'

export const HomePage = ({ data }) => {

  return (
    <>
      {data &&
        <div className='container' >
          <div className='section-home'>
            <div className="content-l">
              <p>HOME</p>
              <div className='arrow'></div>
              <p>{data.NodeAlias}</p>
            </div>
            <div className='hegra'><p>{data.NodeAlias}</p></div>
          </div>
        </div>}
    </>
  );
};


