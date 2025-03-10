'use client';
import React, { useEffect } from 'react';

export default function CalendarContainer() {
    useEffect(() => {
        // Carrega o script do Calendly dinamicamente
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        // Remove o script quando o componente é desmontado
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/mmnitzsche/30min"
                style={{ minWidth: '320px', height: '900px' }}
            />
        </div>
    );
}