import React from "react";
import VariantGrid from "../../components/VariantGrid/VariantGrid";
import { Badge } from "../../components/Badge";

const BadgeShowcase: React.FC = () => {
  return (
    <VariantGrid>
      <div>
        <p className="text-sm text-gray-600 mb-2">Variants (solid)</p>
        <div className="flex flex-wrap gap-2 items-center">
          <Badge variant="neutral">Neutral</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Soft / Sizes / Dot</p>
        <div className="flex flex-wrap gap-2 items-center">
          <Badge soft size="sm" variant="primary" dot>
            New (1)
          </Badge>
          <Badge soft size="md" variant="success" rounded="full" dot>
            Online
          </Badge>
          <Badge
            soft
            size="md"
            variant="neutral"
            rounded="full"
            dot
            className="opacity-60"
          >
            Offline
          </Badge>
          <Badge soft size="md" variant="warning" className=" animate-pulse">
            Pending
          </Badge>
          <Badge soft size="sm" variant="danger">
            Error
          </Badge>
        </div>
      </div>
    </VariantGrid>
  );
}

export default BadgeShowcase;
