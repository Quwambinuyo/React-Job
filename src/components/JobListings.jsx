import React, { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const JobListings = ({ isHome = false }) => {
  const [Jobs, setJobs] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome
        ? "http://localhost:5000/Jobs?_limit=3"
        : "http://localhost:5000/Jobs";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  console.log(Jobs);

  return (
    <section className="px-4 py-10 bg-blue-50">
      <div className="m-auto container-xl lg:container">
        <h2 className="mb-6 text-3xl font-bold text-center text-indigo-500">
          {isHome ? "Featured Jobs" : "All Jobs"}
        </h2>
        {Loading ? (
          <Spinner loading={Loading} />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {Jobs.map((Job) => (
              <JobListing key={Job.id} Job={Job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
