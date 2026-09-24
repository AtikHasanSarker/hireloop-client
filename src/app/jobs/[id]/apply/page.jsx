import { getUserSession } from '@/lib/api/core/session';
import { getJobById } from '@/lib/api/jobs';
import { redirect } from 'next/navigation';
import React from 'react';
import ApplyForm from './ApplyForm';

const ApplyPage = async ({ params }) => {
    const { id } = await params;
    const user = await getUserSession();

    if (!user) {
        redirect(`/signin?redirect=/jobs/${id}/apply`);
    }

    if(user.role !== "seeker"){
        return <div className="w-full min-h-screen flex items-center justify-center">
            <p>Only Seekers can apply for jobs. Please sign in as a Seeker to apply for this job.</p>
        </div>
    }

    const job = await getJobById(id);

    return (
        <div className='mt-30 py-10'>
            <ApplyForm applicant={user} job={job} />
        </div>
    );
};

export default ApplyPage;