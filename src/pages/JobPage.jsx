import React from "react";
// import { useState, useEffect } from "react";
// import Spinner from "../components/Spinner";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const JobPage = ({ deleteJob }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const Job = useLoaderData();

  const onDeleteClick = (JobId) => {
    const confirm = window.confirm("Are You Sure You Want To Proceed");

    if (!confirm) return;

    deleteJob(JobId);
    toast.success("Job Deleted Successfully");

    navigate("/Jobs");
  };

  console.log(Job);

  return (
    <>
      <section>
        <div className="container px-6 py-6 m-auto">
          <Link
            to="/Jobs"
            className="flex items-center text-indigo-500 hover:text-indigo-600"
          >
            <FaArrowLeft className="mr-2" />
            Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50">
        <div className="container px-6 py-10 m-auto">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-70/30">
            <main>
              <div className="p-6 text-center bg-white rounded-lg shadow-md md:text-left">
                <div className="mb-4 text-gray-500">{Job.type}</div>
                <h1 className="mb-4 text-3xl font-bold">{Job.title}</h1>
                <div className="flex justify-center mb-4 text-gray-500 align-middle md:justify-start">
                  <FaMapMarker className="mr-1 text-orange-700"></FaMapMarker>
                  <p className="text-orange-700">{Job.location}</p>
                </div>
              </div>

              <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-6 text-lg font-bold text-indigo-800">
                  Job Description
                </h3>

                <p className="mb-4">{Job.description}</p>

                <h3 className="mb-2 text-lg font-bold text-indigo-800">
                  {Job.salary}
                </h3>

                <p className="mb-4">$70k - $80K / Year</p>
              </div>
            </main>

            <aside>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-6 text-xl font-bold">Company Info</h3>

                <h2 className="text-2xl">{Job.company.name}</h2>

                <p className="my-2">{Job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-xl">Contact Email:</h3>

                <p className="p-2 my-2 font-bold bg-indigo-100">
                  {Job.company.contactEmail}
                </p>

                <h3 className="text-xl">Contact Phone:</h3>

                <p className="p-2 my-2 font-bold bg-indigo-100">
                  {Job.company.contactPhone}
                </p>
              </div>

              <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
                <h3 className="mb-6 text-xl font-bold">Manage Job</h3>
                <Link
                  to={`/edit-Job/${Job.id}`}
                  className="block w-full px-4 py-2 mt-4 font-bold text-center text-white bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
                >
                  Edit Job
                </Link>
                <button
                  onClick={() => onDeleteClick(Job.id)}
                  className="block w-full px-4 py-2 mt-4 font-bold text-white bg-red-500 rounded-full hover:bg-red-600 focus:outline-none focus:shadow-outline"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const JobLoader = async ({ params }) => {
  const res = await fetch(`/api/Jobs/${params.id}`);
  const data = await res.json();

  console.log(data);
  return data;
};

export { JobPage as default, JobLoader };

// const [Job, setJob] = useState(null);
// const [Loading, setLoading] = useState(true);

// useEffect(() => {
//   const fetchJob = async () => {
//     try {
//       const res = await fetch(`/api/Jobs/${id}`);
//       const data = await res.json();
//       console.log(data);

//       setJob(data);
//     } catch (error) {
//       console.log("Error fetching data", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchJob();
// }, []);
