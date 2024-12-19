import axios from "axios";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { Link } from "react-router-dom";
const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then((data) => {
      setAllJobs(data.data);
    });
  }, []);
  return (
    <div>
      <div className="text-center py-4">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Jobs of the day</h2>
        <p className="text-center text-gray-500 mb-8">Search and connect with the right candidates faster.</p>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {allJobs.map((job) => (
          <>
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <div className="flex justify-start items-center gap-2">
                  <div className="max-w-10">
                    <img src={job.company_logo} alt={job.company} />
                  </div>
                  <div>
                    <h2 className="text-md font-bold">{job.company}</h2>
                    <p className="text-xs flex items-center gap-1"><CiLocationOn />{job.location}</p>
                  </div>
                </div>
                <div>
                  <h2 className="card-title">{job.title}</h2>
                  <div className="flex justify-between">
                    <p className="text-xs flex items-center gap-1"><BiCategoryAlt />{job.jobType}</p>
                    <p className="text-xs flex items-center gap-1"><CiTimer />{job.jobType}</p>
                  </div>
                </div>

                <p className="text-sm"> {job.description}</p>
                <div className="flex items-center flex-wrap gap-1 ">
                  {job.requirements.map((req) => (
                    <>
                      <div key={req._id}>
                        <p className="border rounded-md text-center px-2 text-xs hover:text-purple-600">{req}</p>
                      </div>
                    </>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm">{job.salaryRange.min} to {job.salaryRange.max}/{job.salaryRange.currency}</p>

                    <Link to={`/jobs/${job._id}`}>
                      <button className="btn btn-primary btn-sm">Apply</button>
                    </Link>
                  
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
