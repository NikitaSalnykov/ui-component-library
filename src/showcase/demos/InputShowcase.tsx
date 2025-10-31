import React from "react";
import Card from "../../components/Card/Card";
import VariantGrid from "../../components/VariantGrid/VariantGrid";
import { Input } from "../../components/Input";

const InputShowcase: React.FC = () => {
  return (
    <VariantGrid>
      <Card title="Basic">
      <Card title="Basic">
  <div className="space-y-4 max-w-sm">
    <Input label="Your name" placeholder="Type your name" />
    <Input
      type="email"
      label="Email"
      placeholder="name@example.com"
      helperText="We'll never share your email."
    />
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        type="password"
        name="password"
        autoComplete="new-password"
        label="Password"
        placeholder="••••••••"
        required
      />
    </form>
  </div>
</Card>
      </Card>
      <Card title="Sizes/States">
        <div className="space-y-4 max-w-sm">
          <Input label="Small" inputSize="sm" placeholder="Small input" />
          <Input
            label="Medium (default)"
            inputSize="md"
            placeholder="Medium input"
          />
          <Input label="Large" inputSize="lg" placeholder="Large input" />
          <Input
            label="With error"
            placeholder="Invalid value"
            error="This value is not valid"
          />
          <Input
            label="Disabled"
            placeholder="Can't type here"
            disabled
            helperText="Field is disabled"
          />
        </div>
      </Card>
    </VariantGrid>
  );
}

export default InputShowcase;
