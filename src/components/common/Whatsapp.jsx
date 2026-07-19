'use client';
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { CONTACT } from '@/data/site';

function Whatsapp() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {isVisible && (
                <a
                    href={CONTACT.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat with us on WhatsApp"
                    style={{
                        backgroundColor: '#25D366',
                        color: '#ffffff',
                        fontSize: '16px',
                        padding: '10px 10px',
                        borderRadius: '100px',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        position: 'fixed',
                        bottom: '15px',
                        right: '15px',
                        zIndex: '1000'
                    }}
                >
                    <FaWhatsapp size={30} />
                    
                </a>
            )}
        </div>
    );
}

export default Whatsapp;
