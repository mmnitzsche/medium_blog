import React from 'react';

export default function UserPhoto() {
    return (
        <>
            <img
                src="/me.jpg"
                alt="Profile"
                className="rounded-full object-cover shadow-xl "
            />
        </>
    );
}
