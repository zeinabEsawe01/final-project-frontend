import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating'
import Typography from '@mui/material/Typography';


function CustomRating() {
    const [ratingValue, setRatingValue] = React.useState(0);

    return (
        <Box sx={{ '& > legend': { mt: 2 },}} >
            <div>
                <Typography component="legend">Controlled</Typography>
                <Rating  value={ratingValue} onChange={(event, newValue) => { setRatingValue(newValue) }} />
            </div>

            <div>
                <Typography component="legend">Controlled</Typography>
                <Rating  value={ratingValue} onChange={(event, newValue) => { setRatingValue(newValue) }} />
            </div>

            <div>
                <Typography component="legend">Controlled</Typography>
                <Rating  value={ratingValue} onChange={(event, newValue) => { setRatingValue(newValue) }} />
            </div>
        </Box>
    )
}


export default CustomRating