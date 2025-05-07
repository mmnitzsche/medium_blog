import React from 'react';
import { Columns3 } from 'lucide-react';
import { Columns2 } from 'lucide-react';
import { Rows2 } from 'lucide-react';
import ViewButton from './ViewButton';

export default function ViewContainer() {
    return (
        <>

            <div 
            className="flex"
            >
                <ViewButton hiddenTrigger={"sm"} colSize={1} icon={<Rows2 />} />
                <ViewButton hiddenTrigger={"md"} colSize={2} icon={<Columns2 />} />
                <ViewButton hiddenTrigger={"xl"} colSize={3} icon={<Columns3 />} />

            </div>


        </>
    );
}


