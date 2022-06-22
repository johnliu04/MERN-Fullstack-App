import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'John Liu',
            places: 14,
            image: 'https://raw.githubusercontent.com/reactjs/reactjs.org/main/src/icons/logo.svg',
        }
    ]; //dummy user data

    return <UsersList items={USERS} />;
};

export default Users;