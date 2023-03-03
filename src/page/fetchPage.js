import { React, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FetchPage() {
    const [id, setID] = useState(null);
    return (
        <div style={{ width: '100%', height: '100%' }}>
            <div style={{ align: 'center', justifyContent: 'center', marginTop: "20%",  }}>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                    style= {{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}
                >
                    <h1> Enter meeting ID </h1>
                    <TextField id="outlined-basic" label="ID" variant="outlined" />
                    <Button variant="contained" component="label"> 
                    Search 
                    </Button>
                </Box>
            </div>
        </div>
    );

}
