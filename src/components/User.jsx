import React from "react";

import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

// import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";

import { useAuth0 } from "@auth0/auth0-react";

import JSONPretty from "react-json-pretty";

export const UserLogin = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            // <button className="btn-user" onClick={() => loginWithRedirect()}>
            //     <span data-attr="Buy">Buy</span>
            //     <span data-attr="Now">Now</span>
            // </button>
            <Button
                // className="btn-user"
                variant="contained"
                size="medium"
                onClick={() => loginWithRedirect()}
            >
                Đăng nhập
                {/* <i><AiOutlineUserAdd/></i> */}
            </Button>
        )
    );
};

export const UserLogout = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            // <Button className="btn-user" onClick={() => logout()}>
            //     <span data-attr="Buy">NAU</span>
            //     <span data-attr="Now">NAU</span>
            // </Button>
            <Button
                // className="btn-user"
                variant="outlined"
                onClick={() => logout()}
            >
                Đăng xuất
                {/* <i><AiOutlineUserDelete/></i> */}
            </Button>
        )
    );
};

export const ProfileAvatar = () => {
    const { user, isAuthenticated } = useAuth0();

    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
            backgroundColor: "#44b700",
            color: "#44b700",
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "1px solid currentColor",
                content: '""',
            },
        },
        "@keyframes ripple": {
            "0%": {
                transform: "scale(.8)",
                opacity: 1,
            },
            "100%": {
                transform: "scale(2.4)",
                opacity: 0,
            },
        },
    }));

    return (
        isAuthenticated && (
            <div style={{ cursor: "pointer" }}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                >
                    <Avatar alt={user.name} src={user.picture} />
                </StyledBadge>
            </div>
        )
    );
};

export const ProfileImg = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
            </div>
        )
    );
};

export const ProfileInfo = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <JSONPretty data={user} />
                {/* {JSON.stringify(user, null, 2)} */}
            </div>
        )
    );
};
