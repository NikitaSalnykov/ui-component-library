import React from "react";
import Card from "../../components/Card/Card";
import VariantGrid from "../../components/VariantGrid/VariantGrid";
import { Radio, RadioGroup } from "../../components/Radio";

const RadioShowcase: React.FC = () => {
  const [val, setVal] = React.useState("b");
  return (
    <VariantGrid>
      <Card title="Basic group">
        <RadioGroup
          label="controlled"
          name="controlled"
          value={val}
          onChange={setVal}
        >
          <Radio value="a" label="Option A" />
          <Radio value="b" label="Option B" />
          <Radio value="c" label="Option C" disabled />
        </RadioGroup>
      </Card>
      <Card title="Uncontrolled">
        <RadioGroup label="uncontrolled" name="uncontrolled" defaultValue="x">
          <Radio value="x" label="Choice X" />
          <Radio value="y" label="Choice Y" />
          <Radio value="z" label="Choice Z" />
        </RadioGroup>
      </Card>
    </VariantGrid>
  );
}

export default RadioShowcase;
