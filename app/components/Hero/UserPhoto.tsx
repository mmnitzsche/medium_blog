import { UserPhotoImg } from '@/data/UserPhoto';
import React from 'react';


export default function UserPhoto() {
    return (
        <>
            <img
                src={UserPhotoImg}
                alt="Profile"
                className="rounded-full object-cover shadow-xl "
            />
        </>
    );
}
