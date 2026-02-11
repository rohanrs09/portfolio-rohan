"use client";

import React, { useState, useMemo } from "react";
import CertificationList from "./certification-list";
import certifications from "./_certifications-data";
import { FaSearch } from "react-icons/fa";
import { cn } from "~/lib/utils";

const CertificationsPageClient = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) =>
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <>
      <div className="flex flex-col flex-wrap justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-left text-xl font-medium">All Certifications</h1>
          <div className="text-sm text-muted-foreground">
            {filteredCertifications.length} {filteredCertifications.length === 1 ? 'certification' : 'certifications'}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>
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

      <div className="mt-6">
        <CertificationList certifications={filteredCertifications} />
      </div>

      {filteredCertifications.length === 0 && (
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            No certifications found matching &quot;{searchTerm}&quot;
          </p>
        </div>
      )}
    </>
  );
};

export default CertificationsPageClient;
