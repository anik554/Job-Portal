import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title } = useLoaderData();
  return (
    <div>
      <h3>job Title {title}</h3>
      <Link to={`/jobApply/${_id}`}>
        <button className="btn btn-primary">Apply Now</button>
      </Link>
    </div>
  );
};

export default JobDetails;
