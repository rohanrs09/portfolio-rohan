import React from "react";
import CertificationItem from "./certification-item";
import { TCertification } from "./_certifications-data";

type CertificationListProps = {
  certifications: TCertification[];
};

const CertificationList: React.FC<CertificationListProps> = ({ certifications }) => {
  return (
    <ul role="list" className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
      {certifications.map((certification) => (
        <CertificationItem key={certification.id} {...certification} />
      ))}
    </ul>
  );
};

export default CertificationList;
