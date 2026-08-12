import React from 'react';
import CompanyProfile from './companyProfile';
import { getUserSession } from '@/lib/api/core/session';

const CompanyPage = async () => {
  const user = await getUserSession();

  return (
    <div>
      <CompanyProfile user={user} />
    </div>
  );
};

export default CompanyPage;