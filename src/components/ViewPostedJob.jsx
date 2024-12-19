import { useLoaderData } from "react-router-dom";

const ViewPostedJob = () => {
  const postData = useLoaderData();
  console.log(postData);

  return (
    <div>
      <h2>ViewPostedJob {postData.length}</h2>
    </div>
  );
};

export default ViewPostedJob;
