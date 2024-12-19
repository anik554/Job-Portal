import PropTypes from "prop-types";

const AppliedJobTable = ({ jobs }) => {
  console.log(jobs);
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
          {jobs.map((appliedJob, index) => (
            <tr key={appliedJob._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={appliedJob.company_logo}
                        alt={`${appliedJob.company} logo`}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{appliedJob.company}</div>
                    <div className="text-sm opacity-50">
                      {appliedJob.ocation}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>{appliedJob.title}</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  {appliedJob.requirements.map((requirement, idx) => (
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
                <div>{appliedJob.jobType}</div>
                <div className="text-sm opacity-70 mt-1">
                  Deadline: {appliedJob.applicationDeadline}
                </div>
              </td>
              <td>
                <button className="btn btn-error btn-xs">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
AppliedJobTable.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default AppliedJobTable;
