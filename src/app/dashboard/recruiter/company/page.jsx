import React from 'react';
import CompanyProfile from './companyProfile';
import { getUserSession } from '@/lib/api/core/session';
import { getRecruiterCompany } from '@/lib/actions/companies';

const CompanyPage = async () => {
  const user = await getUserSession();
  console.log("CompanyPage");
  const company = await getRecruiterCompany(user?.id);
  console.log(company);
  return (
    <div>
      <CompanyProfile recruiter={user} recruiterCompany={company} />
    </div>
  );
};

export default CompanyPage;