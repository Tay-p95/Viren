import { React, useState, useEffect } from 'react';
import { getRecord } from '../util/noteUtil';
import { useLocation } from 'react-router-dom';
import Header from '../component/header';
import CustomMindMap from '../component/mindMap';

export default function NotePage() {
    const location = useLocation();
    const [data, setData] = useState(null);


    useEffect(() => {
        getData(location.state.id);
    }, []);

    const getData = async () => {
        const result = await getRecord();
        setData(result);
    };

    return (
        <div>
            <Header />
            {data ?
                <div>
                    <h1>{data.title}</h1>
                    <div style ={{ display: 'flex', flexDirection:" column", justifyContent: 'space-between'}}>
                        <div> </div>
                        <CustomMindMap/>
                    </div>
                </div> :
                <div />}
        </div>
    );

}