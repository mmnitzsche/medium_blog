import { profession } from '@/data/blogData';
import React from 'react';



export default function UserRole() {
    return (
        <>
            <h2 className="text-2xl tracking-tight">
                {profession}
            </h2>
        </>
    );
}