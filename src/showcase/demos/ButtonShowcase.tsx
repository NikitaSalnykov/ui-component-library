import { Button, Card, VariantGrid } from "@/components";
import React from "react";


export const ButtonShowcase: React.FC = () => {
  return (
    <VariantGrid>
      <Card title="Basic">
        <div className="flex gap-3 flex-wrap items-center">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
        </div>
      </Card>
      <Card title="Sizes/States">
        <div className="flex gap-3 flex-wrap items-center">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
        <div className="flex gap-3 flex-wrap items-center">
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </Card>
    </VariantGrid>
  );
}