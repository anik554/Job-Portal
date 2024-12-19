import { useState } from 'react';

const AddJob = () => {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    jobType: 'Hybrid',
    category: 'Engineering',
    applicationDeadline: '',
    salaryRange: { min: '', max: '', currency: 'bdt' },
    description: '',
    company: '',
    requirements: '',
    responsibilities: '',
    status: 'active',
    hr_email: '',
    hr_name: '',
    company_logo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job Post Data:', formData);
    // Submit form data to the server or handle it as needed
  };

  return (
    <div className=" mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Add New Job Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Job Type</label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Application Deadline</label>
          <input
            type="date"
            name="applicationDeadline"
            value={formData.applicationDeadline}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Salary Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="salaryRange.min"
              value={formData.salaryRange.min}
              onChange={handleChange}
              placeholder="Min"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              name="salaryRange.max"
              value={formData.salaryRange.max}
              onChange={handleChange}
              placeholder="Max"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Requirements (comma separated)</label>
          <input
            type="text"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Responsibilities</label>
          <textarea
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">HR Email</label>
          <input
            type="email"
            name="hr_email"
            value={formData.hr_email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">HR Name</label>
          <input
            type="text"
            name="hr_name"
            value={formData.hr_name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Company Logo URL</label>
          <input
            type="text"
            name="company_logo"
            value={formData.company_logo}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Job Post
        </button>
      </form>
    </div>
  );
};

export default AddJob;