
import './Legacy.css'
export const Legacy = ({ data }) => {

    const paragraph1 = data && data[11]?.Description.split('&rsquo;.&nbsp;<br />\r\n<br />\r\n');
    const paragraph2 = data && paragraph1[1]?.split('.')
    const cleanDescription = data && data[25].Description.replace(/<\/?ul>/g, '');
    const statements = data && cleanDescription.split('</li>\r\n\t<li>').map(item => item.trim());

    return (
        <div className='container-legacy'>
            {data &&
                <div className='section'>
                    <div className='document-legacy-name'> {data && data[11]?.DocumentName}</div>
                    <div className='paragraphs'>
                        <div className='pragraph'>{paragraph1[0]}</div>
                        <div className='pragraph'>{paragraph2[1]}</div>
                        <div className='pragraph'>{paragraph2[0]}</div>
                        <div className='pragraph'>{paragraph2[2]}</div>
                    </div>
                    <div className='achievements'>
                        <div className='achievements-title'>
                            {data && data[25]?.DocumentName}
                        </div>
                        <div className='achievements-ul'>
                            {
                                statements.map((statement, index) => (
                                <li>{`${statement}`}</li>
                                ))
                            }

                        </div>

                    </div>
                </div>



            }



        </div>
    );
};


