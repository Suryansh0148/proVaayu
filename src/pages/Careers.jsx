import React from 'react'
import Jobcard from '../components/Jobcard'
import { useNavigate} from 'react-router-dom';


function Careers() {
  const navigate=useNavigate()

  const jobs = [
 {
    title: "Frontend Developer",
    location: "Remote", 
    description: "Looking for someone skilled in React & Tailwind."
  },
  {
    title: "Backend Developer",
    location: "Bangalore",
    description: "Node.js + Express developer needed for API work."
  },
  {
    title: "IT Support Engineer",
    location: "Hyderabad",
    description: "Help clients with hardware, software, and network issues."
  }
 
];

  return (
  <div className="relative min-h-screen">
    <div
    className="absolute inset-0 h-full w-full -z-10 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/18.jpg')" }}
  ></div>
  
      <div className='flex justify-center'>
      <h1 className='text-3xl sm:text-4xl font-bold text-amber-200 mb-4 '>Careers</h1>
      </div>
      {jobs.length ===0 && (
      <p className='text-white text-2xl font-semibold text-center mt-4 drop-shadow-lg'>No job openings avaiable right now.</p>)}
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6'>
        {
          jobs.map((job,index) =>(
          
            <Jobcard
            key={index}
            title={job.title}
            location={job.location}
            description={job.description}
            onApply={()=> navigate(`/job/${job.id}`)}
            />
          ))
        }

      </div></div>
    
      
      
    
  )
}

export default Careers