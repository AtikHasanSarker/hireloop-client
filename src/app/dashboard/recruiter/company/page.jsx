import React from 'react';
import CompanyProfile from './companyProfile';
import { getUserSession } from '@/lib/api/core/session';
import { getRecruiterCompany } from '@/lib/ations/companies';

const CompanyPage = async () => {
  const user = await getUserSession();
  let company = await getRecruiterCompany(user?.id);
  console.log(company);
  if (!company){
    company = null;
  }

  return (
    <div>
      <CompanyProfile recruiter={user} recruiterCompany={company} />
    </div>
  );
};

export default CompanyPage;