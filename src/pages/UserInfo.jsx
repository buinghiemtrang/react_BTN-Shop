import React from "react";

import { ProfileImg, ProfileInfo } from '../components/User'
import Helmet from '../components/Helmet'


const UserInfo = () => {
    return (
        <div>
            <Helmet title="Thông tin người dùng">
                <ProfileImg/>
                <ProfileInfo/>
            </Helmet>
        </div>
    )
};

export default UserInfo