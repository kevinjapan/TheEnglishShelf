import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { LESSON_TYPES } from './components/LessonTypes/LessonTypes'
import AppStatus from './components/AppStatus/AppStatus'
import NotFound from './components/NotFound/NotFound'
import Home from './components/Home/Home'
import StaticLessons from './components/StaticLessons/StaticLessons'
import Terms from './components/Terms/terms'
import StaticAbout from './components/About/StaticAbout'
import Privacy from './components/Privacy/privacy'
import PrimaryHeader from './primaryHeader'
import PrimaryFooter from './primaryFooter'
import StaticLessonContainer from './components/StaticLessonContainer/StaticLessonContainer'



const StaticPrimaryLayout = props => {

    return (
        <div className="container col-12" id="top">

            <header className="row">
                <PrimaryHeader />
            </header>

            <div className="row">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/lessons" element={<StaticLessons service="lessons" filter="type" filter_value={LESSON_TYPES.LESSONS}/>} />
                    <Route path="/lessons/:url" element={<StaticLessonContainer />} />

                    <Route path="/letstalk" element={<StaticLessons service="letstalk" filter="type" filter_value={LESSON_TYPES.LETSTALKS}/>} />
                    <Route path="/letstalk/:url" element={<StaticLessonContainer />} />

                    <Route path="/protips" element={<StaticLessons service="protips" filter="type" filter_value={LESSON_TYPES.PROTIPS} card_width="col-12 col-lg-6" />} />
                    <Route path="/protips/:url" element={<StaticLessonContainer />} />

                    <Route path="/terms" element={<Terms />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/about" element={<StaticAbout />} />

                    <Route path="/notfound" element={<NotFound resource_type="lesson"/>} />
                    <Route path="/*" element={<NotFound resource_type="page"/>} />
                </Routes>
            </div>

            <AppStatus />
    
            <div className="row">
                <PrimaryFooter />
            </div>
        </div>
    )
}


export default StaticPrimaryLayout