import axios from "axios";
import { useEffect, useState } from "react";
import AppliedJobTable from "../components/AppliedJobTable";

const MyApplication = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/job-applies?email=anik@gmail.com`)
      .then((res) => setJobs(res.data));
  }, []);
  return (
    <div className="py-5">
      <h2 className="text-xl font-bold mb-2">Applied Jobs</h2>
      <AppliedJobTable jobs={jobs} />
    </div>
  );
};

export default MyApplication;
