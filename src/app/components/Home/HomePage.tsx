
import './HomePage.css'

export const HomePage = ({ data }) => {



  const styles = {
    paperContainer: {
      backgroundImage: `url('https://lmdev.wundeve.com/getmedia/11689c62-33d2-47e2-aa2e-c1cd8f7cc4a0/AlUla-(28).png?width=1920&height=945&ext=.png')`
    }
  };

  return (
    <div className='container' style={styles.paperContainer}>
      {data &&

        <div className='section-home'>

          <div className="content-l">
            <p>HOME</p>
            <div className='arrow'></div>
            <p>{data.NodeAlias}</p>
          </div>
          <p className='hegra'>{data.NodeAlias}</p>

        </div>

      }



    </div>
  );
};


