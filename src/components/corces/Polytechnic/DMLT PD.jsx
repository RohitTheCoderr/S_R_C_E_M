import React from "react";

const Dmlt = () => {
    return (
        <div>
            <div className="relative w-full h-96 bg-cover bg-center " style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/luxurious-new-building-with-curb-appeal_1127-4448.jpg?semt=ais_hybrid)' }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white py-22 sm:py-32">
                    <h1 className="text-3xl sm:text-5xl font-bold text-[#ebf4f6] font-mono">Master of Computer Applications (MCA)</h1>
                    <p className="text-lg sm:text-xl mt-4">Welcome to the Master of Computer Applications (MCA) program at Shri Ram College of Engineering and Management</p>
                </div>
            </div>
            <div className="px-4 py-2 md:py-4 md:px-8 lg:py-8 lg:px-16">
            <div className="flex flex-wrap gap-2 my-2">
                    <h1 className="text-[#088395] text-xl md:text-2xl font-medium font-mono">Approved University : J.C. Bose University of Science and Technology</h1>
                    <img src="cources/JC bose icon.png" alt="JC bose icon" className="h-24 md:h-32 lg:h-10" />
                </div>
            </div>
        </div>
    );
}
export default Dmlt;