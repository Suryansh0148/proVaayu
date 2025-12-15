import React from 'react'
import Servicecard from '../components/Servicecard'
import Jobcard from '../components/Jobcard'
import Jobdetails from './Jobdetails'

const serviceData = [
  {
    title:"Avaloq Infrastructure Excellence Factory",
    description: "Specialized in designing, deploying, and maintaining Avaloq infrastructure.",
    iconName:"aaa"
  },
  {
    title:"Infrastructure Managed Services",
    description: "Ensuring optimal performance and adherence to SLAs with ITIL-based service delivery.",
    iconName:"infra"
  },
  {
    title:"Cloud Migration & Advisory",
    description: "Expertise in lifting and shifting workloads to public, private, or hybrid cloud environments.",
    iconName:"cloud"
  },
  {
    title:"Avaloq Upgrades Excellence Factory",
    description: "Full lifecycle support from requirement analysis to implementation and go-live.",
    iconName:"life"
  },
  {
    title:"Tailored Service And Support",
    description:"Customized service offerings to meet specific business needs and operational challenges.",
    iconName:"tail"
  },
  {
    title:"Product Factory for Custom Needs",
    description:"Tailored software solutions to address unique business challenges and streamline operations.",
    iconName:"pro"
  }
]

export default function Services() {
  return (
    <div className='min-h-screen relative'>
        <div
    className="absolute inset-0 h-full w-full -z-10 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/33.jpg')" }}
  ></div>

      <h2 className='text-sky-400 text-5xl font-extrabold text-center drop-shadow-lg mb-10'>
    Services
  </h2>

      
  <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
    {serviceData.map((service, index) => (
      <Servicecard
        key={index}
        title={service.title}
        description={service.description}
        iconName={service.iconName}
      />
    ))}
  </div>
  
  
</div>

  )
}
