import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Instructors from '../Instructors/Instructors';
import StudentTestimonial from './StudentTestimonial/StudentTestimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Courses/>
            <Instructors/>
            <StudentTestimonial/>
        </div>
    );
};

export default Home;