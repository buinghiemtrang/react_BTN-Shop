import * as React from "react";

import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
    1: "QUÁ XẤU",
    2: "XẤU",
    3: "TRUNG BÌNH",
    4: "TỐT",
    5: "XUẤT SẮC",
};

const RatingStar = () => {
    const [value, setValue] = React.useState(0);
    const [hover, setHover] = React.useState(-1);

    return (
        <Box
            sx={{
                width: 300,
                display: "flex",
                alignItems: "center",
            }}
        >
            <Rating
                name="hover-feedback size-large"
                size="large"
                value={value}
                precision={1}
                style={{fontSize: '2.5rem'}}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
            />
            {value !== null && (
                <Box sx={{ ml: 2 }} style={{fontSize: '17px', fontWeight: '600'}}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}

export default RatingStar
