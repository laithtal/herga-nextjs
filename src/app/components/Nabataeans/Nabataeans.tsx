import React from 'react'
import './Nabataeans.css'

export const Nabataeans = ({ data }) => {
    const part1 = data && data[29];
    const part2 = data && data[30];

    const firstImg = data && part1?.MainImage?.replace('~', 'https://lmdev.wundeve.com/');
    const secondtImg = data && part2?.MainImage?.replace('~', 'https://lmdev.wundeve.com/');

    const firstStatements = data && part1?.Description.split('<br />\r\n').map(item => item.trim());
    const secondStatements = data && part2?.Description.split('<br />').map(item => item.trim());

    return (
        <div className='Nabataeans-container'>
            <div className='Nabataeans-arts'>
                <div className='Nabataeans-title'>{data && part1.DocumentName} </div>

                <div className='first-art' >
                    <div className='first-des'>
                        {
                            data && firstStatements.map((item)=>(
                                <p>{item} <br/></p> 
                            ))
                        }
                    </div>
                    <div className='first-img'>
                        <img src={firstImg} ></img>
                    </div>
                </div>
                <div className='second-art' >
                    <div className='second-img'>
                        <img src={secondtImg}></img>
                    </div>
                    <div className='second-des'>
                    {
                           data &&  secondStatements.map((item)=>(
                               <p>{item} <br/></p> 
                            ))
                        }
                    </div>

                </div>
            </div>


        </div>
    )
}
