import React from "react";
import CourseCard from "../../components/cards/course_card";
const Courses = () => {
    const courses = [
        { image: "images/Homepage/btech.webp", title: "B.Tech Programme", duration: "3 Years", path: "/Comp" },
        { image: "images/Homepage/bba.webp", title: "BBA", duration: "3 Years", path: "/BBA" },
        { image: "images/Homepage/bca.webp", title: "BCA", duration: "3 Years", path: "/BCA" },
        { image: "images/Homepage/mtech.webp", title: "M.Tech Programme", duration: "2 Years", path: "/Mcomp" },
        { image: "images/Homepage/mba.webp", title: "MBA", duration: "2 Years", path: "/MBA" },
        { image: "images/Homepage/mca.webp", title: "MCA", duration: "2 Years", path: "/MCA" },
        { image: "images/Homepage/polytechnic.webp", title: "Polytechnic Diploma", duration: "2 Years", path: "/PCivil" },
        { image: "images/Homepage/bbadigital.webp", title: "BBA Digital Marketing", duration: "3 Years", path: "/BBAdm" },
        { image: "images/Homepage/bvoc.jpg", title: "BVoc", duration: "3 Years", path: "/BVOC" },
        { image: "images/Homepage/polytechnic.webp", title: "CSE polytechnic Diploma", duration: "2 Years", path: "/PCse" },
        { image: "images/Homepage/bbadigital.webp", title: "Civil Engineering", duration: "3 Years", path: "/CivilEngg" },
        { image: "images/Homepage/bvoc.jpg", title: "Computer Science & Engineering", duration: "3 Years", path: "/comp" },
    ];

    return (
        <div className=" w-[90%] m-auto flex flex-wrap items-center justify-center my-[2rem]">
            <div className="flex gap-5 items-center">
                <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#071952] font-sans font-semibold uppercase">COURSES</h1>
                <div className="h-[3px] w-[4rem] bg-[#088395] "></div>
            </div>
            <div className="flex flex-wrap gap-8 justify-center xl:mt-12 lg:mt-6 md:mt-4 mt-4">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        image={course.image}
                        title={course.title}
                        duration={course.duration}
                        path={course.path}
                    />
                ))}
            </div>
        </div>
    );
}

export default Courses;
