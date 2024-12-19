import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [profileData, setprofileData] = useState({
    linkedIn: "",
    github: "",
    resume: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setprofileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const profileInfo = {
      job_id: id,
      applicant_email: user.email,
      linkedIn: profileData.linkedIn,
      github: profileData.github,
      resume: profileData.resume,
    };

    axios
      .post(`http://localhost:5000/job-applications`, profileInfo)
      .then((response) => {
        if (response.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Job Application Submitted Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/appliedJobs")
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Submission Failed",
            text: "Please try again later.",
            showConfirmButton: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error submitting job application:", error);
      });
  };
  return (
    <div className="card bg-base-100 w-full mt-5 shadow-2xl">
      <h1 className="text-3xl font-bold text-center py-4">
        Apply Job and Good Luck!
      </h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">LinkedIn</span>
          </label>
          <input
            type="url"
            name="linkedIn"
            onChange={handleChange}
            placeholder="Enter Your LinkedIn Profile"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Github</span>
          </label>
          <input
            type="url"
            name="github"
            onChange={handleChange}
            placeholder="Enter Your Github Profile"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Resume</span>
          </label>
          <input
            type="url"
            name="resume"
            onChange={handleChange}
            placeholder="Enter Your Resume Link"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Submit Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobApply;
