
import { Menubar } from 'primereact/menubar';
import React from 'react';

export default function Header() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/home'
        },
        {
            label: 'Create certificate',
            icon: 'pi pi-search',
            url: '/create-certificate'
        },
        {
            label: 'Library',
            icon: 'pi pi-search',
            url: '/library'
        },
        {
            label: 'Contact Us',
            icon: 'pi pi-envelope'
        }
    ];
    
    return (
        <div className="card">
            <Menubar model={items} />
        </div>
    )
}
        