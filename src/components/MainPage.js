import React from 'react';
import Header from './Header';
import Chart from './Chart';

export default function MainPage() {
    return (
        <div>
            <Header />
            <div className="container">
                <Chart />
            </div>
        </div>
    )
} 
