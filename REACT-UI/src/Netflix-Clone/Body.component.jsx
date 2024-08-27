import React from "react";
import './Netflix.component.css';
import { HeaderComponent } from './Header.component.jsx';
import { MainSectionComponent } from './section1.component.jsx';
import { EntertainmentComponent } from './section2.component.jsx';
import { DownloadComponent } from './section3.component.jsx';
import { Watch } from './section4.component.jsx';
import { Kids } from './section5.component.jsx';
import { Faq } from './section6.component.jsx';
// import { HeaderComponent } from "./Header.component";
export function Body() {
    return (
        <div className="shade">
            <HeaderComponent />
            <MainSectionComponent />
            <EntertainmentComponent />
            <DownloadComponent />
            <Watch />
            <Kids />
            <Faq />
        </div>
    )
}