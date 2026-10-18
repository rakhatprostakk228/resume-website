import React from 'react';
import { AppProvider } from './context';
import Background from './components/Background';
import Sidebar from './components/Sidebar';
import Stats from './components/Stats';
import Experience from './components/Experience';
import Education from './components/Education';
import Faq from './components/Faq';
import Footer from './components/Footer';

export default function App() {
    return (
        <AppProvider>
            <Background />
            <div className="layout">
                <Sidebar />
                <main>
                    <Stats />
                    <Experience />
                    <Education />
                    <Faq />
                </main>
            </div>
            <Footer />
        </AppProvider>
    );
}
