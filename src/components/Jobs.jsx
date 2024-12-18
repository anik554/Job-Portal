import axios from "axios";
import { useEffect, useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiCategoryAlt } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  useEffect(() => {
    axios.get("./jobs.json").then((data) => {
      setAllJobs(data.data);
    });
  }, []);
  return (
    <div>
      <h2>All Jobs {allJobs.length}</h2>

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
                <div className="flex items-center flex-wrap ">
                  {job.requirements.map((req, index) => (
                    <>
                      <div key={index}>
                        <p className="shadow-lg p-3 text-xs">{req}</p>
                      </div>
                    </>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm">{job.salaryRange.min} to {job.salaryRange.max}/{job.salaryRange.currency}</p>
                  <button className="btn btn-primary btn-sm">Apply</button>
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
