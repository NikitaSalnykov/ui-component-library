import React from "react";
import Card from "../../components/Card/Card";
import VariantGrid from "../../components/VariantGrid/VariantGrid";
import { Checkbox } from "../../components/Checkbox";

const CheckboxShowcase: React.FC = () => {
  const [a, setA] = React.useState(true);
  const [b, setB] = React.useState(false);
  const [c, setC] = React.useState(true);
  const [d, setD] = React.useState(false);

  const childrenCheckedCount = (c ? 1 : 0) + (d ? 1 : 0);
  const parentChecked = childrenCheckedCount === 2;
  const parentIndeterminate =
    childrenCheckedCount > 0 && childrenCheckedCount < 2;

  const handleParentChange = (next: boolean) => {
    setC(next);
    setD(next);
  };
  return (
    <VariantGrid>
      <Card title="Basic">
        <div className="flex flex-col gap-3">
          <Checkbox label="Checked" checked={a} onChange={setA} />
          <Checkbox label="Unchecked" checked={b} onChange={setB} />
          <Checkbox label="Disabled" disabled checked />
        </div>
      </Card>

      <Card title="Indeterminate">
        <div className="flex flex-col gap-3">
          <Checkbox
            label="Select all"
            checked={parentChecked}
            indeterminate={parentIndeterminate}
            onChange={handleParentChange}
          />
          <div className="pl-6 flex flex-col gap-2">
            <Checkbox label="Child C" checked={c} onChange={setC} />
            <Checkbox label="Child D" checked={d} onChange={setD} />
          </div>
        </div>
      </Card>
    </VariantGrid>
  );
}

export default CheckboxShowcase;
