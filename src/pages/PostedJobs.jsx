import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

const PostedJobs = () => {
  const { user } = useAuth();
  const [postedJob, setPostedJob] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => setPostedJob(res.data));
  }, [user?.email]);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th>#</th>
            <th>Company Name</th>
            <th>Job Title & Requirements</th>
            <th>Job Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {postedJob.map((post, index) => (
            <tr key={post._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={post.company_logo}
                        alt={`${post.company} logo`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{post.company}</div>
                    <div className="text-sm opacity-50">{post.location}</div>
                  </div>
                </div>
              </td>
              <td>
                <div>{post.title}</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {post.requirements.map((requirement, idx) => (
                    <p
                      key={idx}
                      className="border rounded-md shadow-sm p-1 bg-gray-100"
                    >
                      {requirement}
                    </p>
                  ))}
                </div>
              </td>
              <td>
                <div>{post.jobType}</div>
                <div className="text-sm opacity-70 mt-1">
                  Deadline: {post.applicationDeadline}
                </div>
              </td>
              <td>
                <Link to={`/viewApplication/${post._id}`}>
                  <button className="btn btn-error btn-xs">Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostedJobs;
