import React from 'react';
import { Button } from '@/components/ui/button';

const JobCard = ({
  title,
  department,
  location,
  type = 'Full-time', // 'Full-time', 'Part-time', 'Contract'
  experience,
  salary,
  description,
  requirements = /** @type {string[]} */ ([]),
  benefits = /** @type {string[]} */ ([]),
  className = ""
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden ${className}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-600">{department}</span>
              <span className="text-gray-300">•</span>
              <span className="text-sm text-gray-600">{location}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full">
              {type}
            </span>
          </div>
        </div>

        <div className="flex gap-6 mb-4">
          {experience && (
            <div>
              <p className="text-sm text-gray-500">Experience</p>
              <p className="font-medium">{experience}</p>
            </div>
          )}
          {salary && (
            <div>
              <p className="text-sm text-gray-500">Salary Range</p>
              <p className="font-medium">{salary}</p>
            </div>
          )}
        </div>

        <p className="text-gray-600 mb-6">{description}</p>

        {requirements.length > 0 && (
          <div className="mb-6">
            <h4 className="font-medium text-gray-800 mb-2">Requirements</h4>
            <ul className="space-y-2">
              {requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {benefits.length > 0 && (
          <div className="mb-6">
            <h4 className="font-medium text-gray-800 mb-2">Benefits</h4>
            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-end">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
