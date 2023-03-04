import { React, useState, useEffect } from 'react';
import { getRecord } from '../util/noteUtil';
import { Grid } from '@mui/material';
import Dialog from '../component/Dialog';
import Graph from '../component/Graph';
import { useLocation } from 'react-router-dom';
import responses from "../mockResponses.json"
import Header from '../component/header';

export default function NotePage() {
    const location = useLocation();
    const [data, setData] = useState(responses);


    // useEffect(() => {
    //     getData(location.state.id);
    // }, []);

    // const getData = async () => {
    //     const result = await getRecord();
    //     setData(result);
    // };

    return (
        <div>
            <Header />
            {data ?
                 <Grid container spacing={2}>
                 <Dialog responses={data} />
                 <Graph responses={data} />
             </Grid> :
                <div />}
        </div>
    );

}