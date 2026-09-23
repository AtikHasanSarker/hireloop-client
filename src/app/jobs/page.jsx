
import JobCard from "@/components/jobs/JobCard";
import { getJobs } from "@/lib/api/jobs";

const JobsPage = async () => {
  const jobs = await getJobs();

  return (
    <section className="mx-auto container px-6 pt-50 py-10">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">Latest Job Opportunities</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Find your next opportunity from top companies.
        </p>
      </div>

      {/* Job Cards */}
      {jobs.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-default p-10 text-center">
          <p className="text-muted-foreground">
            No jobs available at the moment.
          </p>
        </div>
      )}
    </section>
  );
}

export default JobsPage;
