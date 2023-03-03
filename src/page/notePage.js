import { React, useState, useEffect } from 'react';
import { getRecord } from '../util/noteUtil';
import { useLocation } from 'react-router-dom';

export default function NotePage() {
    const location = useLocation();
    const [data, setData] = useState(null);


    useEffect(() => {
        getData(location.state.id);
     }, []);

    const getData = async () =>{
        const result = await getRecord();
        setData(result);
    };

    return (
        <div>
            <div>
                <h1>{data.title}</h1>
            </div>
        </div>
    );

}