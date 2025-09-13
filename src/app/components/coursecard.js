import React from 'react';

const data = [
  {
    "courseCode": "CS 1200",
    "title": "Introduction to Computer Science and Software Engineering",
    "description": "Overview of computer science and software engineering concepts.",
    "creditHours": 2
  }
];

const CourseCard = (props) => {
  return (
    <div className="px-100 py-2">
      <div className=" bg-white border-gray-900" style={{ borderRadius: '10px', borderColor: 'black', borderWidth: '2px'}}>
        <h1 className="flex px-5 text-3xl font-bold text-gray-600 py-4">
          {props.courseCode}
        </h1>
        <h2 className="flex px-5 text-2xl font-semibold text-gray-800 py-2">
          {props.title}
        </h2>
        <div className="flex px-5 text-md text-gray-600 py-2">
          {props.description}
        </div>
        <div className="flex px-5 text-md text-gray-600 py-2 pb-4" >
          <span className="bg-green-300 text-green-700 " style={{ borderRadius: '15px', padding: 5}}> Credit Hours: {props.creditHours} </span>
        </div>
      </div>
      
    </div>
  );
};

export default CourseCard;