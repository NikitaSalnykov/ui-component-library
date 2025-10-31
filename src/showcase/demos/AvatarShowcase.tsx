import React from "react";
import Card from "../../components/Card/Card";
import VariantGrid from "../../components/VariantGrid/VariantGrid";
import { Avatar } from "../../components/Avatart";

const AvatarShowcase: React.FC = () => {
  return (
    <VariantGrid>
      <Card title="Basic / Sizes">
        <div className="flex flex-wrap items-center gap-4">
          <Avatar name="Nikita Salnykov" size="sm" />
          <Avatar name="Nikita Salnykov" size="md" />
          <Avatar name="Nikita Salnykov" size="lg" />
          <Avatar name="Nikita Salnykov" size="xl" />
        </div>
      </Card>

      <Card title="Image / Fallback / Shadow">
        <div className="flex flex-wrap items-center gap-4">
          <Avatar
            src="https://avatars.githubusercontent.com/u/121830017?v=4"
            size="xl"
            alt="User A"
          />
          <Avatar
            src="https://avatars.githubusercontent.com/u/121830017?v=4"
            name="Fallback"
            showFallback
          />
          <Avatar
            src="https://avatars.githubusercontent.com/u/121830017?v=4"
            showFallback
            withShadow
            size="sm"
          />
        </div>
      </Card>

      <Card title="Rounded / Status">
        <div className="flex flex-wrap items-center gap-6">
          <Avatar name="Square" rounded="none" status="online" />
          <Avatar name="Rounded" rounded="md" status="busy" />
          <Avatar
            name="Circle 1"
            rounded="full"
            status="away"
            className="bg-red-500 text-white"
          />
          <Avatar
            name="Circle 2"
            rounded="full"
            status="offline"
            className="bg-green-700 text-white"
          />
          <Avatar
            name="Circle 3"
            rounded="full"
            status="none"
            className="bg-yellow-500 text-white"
          />
        </div>
      </Card>
    </VariantGrid>
  );
}

export default AvatarShowcase;
