import React from 'react';
import PostJobForm from './PostJobForm';
import { getLoggedRecruiterCompany } from '@/lib/actions/companies';

const PostJobPage = async () => {
    const company = await getLoggedRecruiterCompany();
    console.log(company);
    return (
      <div>
        <PostJobForm company={company} />
      </div>
    );
};

export default PostJobPage;