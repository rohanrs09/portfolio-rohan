"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { typo } from "../ui/typograpghy";
import CertificationList from "./certification-list";
import certifications from "./_certifications-data";
import { TCertification } from "./_certifications-data";
import { cn } from "~/lib/utils";

type CertificationsProps = {
  items?: TCertification[];
  showViewAll?: boolean;
  showSearch?: boolean;
};

const Certifications: React.FC<CertificationsProps> = ({
  items,
  showViewAll = false,
  showSearch = false,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const allCerts = items || certifications;
  const filteredCertifications = useMemo(() => {
    if (!showSearch || !searchTerm) return allCerts;
    
    return allCerts.filter((cert) =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allCerts, searchTerm, showSearch]);

  return (
    <section aria-label="certifications" className="space-y-6">
      {showViewAll && (
        <div className="flex items-center justify-between">
          <h2 className={typo({ variant: "h2" })}>Certifications</h2>
          <Link
            href="/certifications"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View all &rarr;
          </Link>
        </div>
      )}
      
      {showSearch && (
        <div className="flex flex-col flex-wrap justify-between gap-4 sm:flex-row sm:items-center">
          <div className="text-sm text-muted-foreground">
            {filteredCertifications.length} {filteredCertifications.length === 1 ? 'certification' : 'certifications'}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search certifications..."
              className={cn(
                "w-full rounded-md border border-input bg-background pl-10 pr-4 py-2 text-sm ring-offset-background",
                "placeholder:text-muted-foreground",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "transition-colors"
              )}
            />
          </div>
        </div>
      )}
      
      <CertificationList certifications={filteredCertifications} />
      
      {showSearch && filteredCertifications.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            No certifications found matching &quot;{searchTerm}&quot;
          </p>
        </div>
      )}
    </section>
  );
};

export { certifications };
export default Certifications;
