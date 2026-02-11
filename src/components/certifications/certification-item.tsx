import React from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { cn } from "~/lib/utils";
import { typo } from "../ui/typograpghy";
import { TCertification } from "./_certifications-data";

type CertificationItemProps = {} & TCertification;

const CertificationItem: React.FC<CertificationItemProps> = ({
  title,
  issuer,
  issueDate,
  credentialId,
  credentialUrl,
  image,
}) => {
  return (
    <li role="listitem">
      <div className="grid gap-4 rounded-md border border-input bg-background p-4 transition-colors hover:border-ring">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <h3 className={cn(typo({ variant: "h2" }), "text-base sm:text-lg")}>
              {title}
            </h3>
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{issuer}</span>
              </p>
              <p className="text-sm text-muted-foreground">
                Issued {issueDate}
              </p>
              {credentialId && (
                <p className="text-xs text-muted-foreground">
                  Credential ID: {credentialId}
                </p>
              )}
            </div>
          </div>

          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md bg-muted px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-ring hover:text-background"
              aria-label={`View ${title} credential`}
            >
              <span className="hidden sm:inline">Show credential</span>
              <FaExternalLinkAlt className="size-3" />
            </a>
          )}
        </div>

        {image && (
          <div className="mt-3">
            <Image
              src={image}
              alt={`${title} certificate`}
              className="rounded-md border border-input object-cover shadow-sm"
              style={{ maxHeight: "200px", width: "auto" }}
              priority
            />
          </div>
        )}
      </div>
    </li>
  );
};

export default CertificationItem;
