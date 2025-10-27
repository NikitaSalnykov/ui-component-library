import React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Checkbox } from "../components/Checkbox";
import { Radio, RadioGroup } from "../components/Radio";
import "../index.css";

import ShowcaseLayout from "../components/ShowcaseLayout/ShowcaseLayout";
import Section from "../components/Section/Section";
import VariantGrid from "../components/VariantGrid/VariantGrid";
import Card from "../components/Card/Card";
import { Badge } from "../components/Badge";
import { Avatar } from "../components/Avatart";
import { Tabs } from "../components/Tabs";


const TabsShowcase: React.FC = () => {
  return (
<VariantGrid>
<Tabs.Root defaultValue="profile">
        <Tabs.List>
          <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          <Tabs.Trigger value="security" disabled>Security</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="profile">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nihil, ipsa, similique suscipit voluptatum reiciendis mollitia nobis quidem modi beatae ratione iste, perspiciatis delectus quisquam.</Tabs.Content>
        <Tabs.Content value="settings">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore distinctio optio consequatur iste reprehenderit?</Tabs.Content>
        <Tabs.Content value="security">Lorem ipsum dolor sit amet.</Tabs.Content>
      </Tabs.Root>
</VariantGrid>
  )
}

const ButtonShowcase: React.FC = () => {
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
};

const InputShowcase: React.FC = () => {
  return (
    <VariantGrid>
      <Card title="Basic">
        <div className="space-y-4 max-w-sm">
          <Input label="Your name" placeholder="Type your name" />
          <Input
            type="email"
            label="Email"
            placeholder="name@example.com"
            helperText="We'll never share your email."
          />
          <Input
            type="password"
            label="Password"
            placeholder="••••••••"
            required
          />
        </div>
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
};

const RadioShowcase: React.FC = () => {
  const [val, setVal] = React.useState("b");
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <p className="text-sm text-gray-600 mb-2">Basic group</p>
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
      </div>
      <div>
        <p className="text-sm text-gray-600 mb-2">Uncontrolled</p>
        <RadioGroup label="uncontrolled" name="uncontrolled" defaultValue="x">
          <Radio value="x" label="Choice X" />
          <Radio value="y" label="Choice Y" />
          <Radio value="z" label="Choice Z" />
        </RadioGroup>
      </div>
    </div>
  );
};

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
  console.log({ c, d, parentChecked, parentIndeterminate });
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <p className="text-sm text-gray-600 mb-2">Basic</p>
        <div className="flex flex-col gap-3">
          <Checkbox label="Checked" checked={a} onChange={setA} />
          <Checkbox label="Unchecked" checked={b} onChange={setB} />
          <Checkbox label="Disabled" disabled checked />
        </div>
      </div>

      <div>
        <p className="text-sm text-gray-600 mb-2">Indeterminate</p>
        <div className="flex flex-col gap-3">
          <Checkbox
            label="Select all"
            checked={parentChecked || (c && d)}
            indeterminate={parentIndeterminate}
            onChange={handleParentChange}
          />
          <div className="pl-6 flex flex-col gap-2">
            <Checkbox label="Child C" checked={c} onChange={setC} />
            <Checkbox label="Child D" checked={d} onChange={setD} />
          </div>
        </div>
      </div>
    </div>
  );
};

const BadgeShowcase: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
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
    </div>
  );
};

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
          <Avatar  src="https://avatars.githubusercontent.com/u/121830017?v=4" size="xl" alt="User A" withShadow />
          <Avatar src="https://img.freepik.com/premium-vector/broken-image-icon_268104-8936.jpg" name="Broken Image" withShadow />
          <Avatar  src="https://avatars.githubusercontent.com/u/121830017?v=4" showFallback size="sm" />
        </div>
      </Card>

      <Card title="Rounded / Status">
        <div className="flex flex-wrap items-center gap-6">
          <Avatar name="Square" rounded="none" status="online" />
          <Avatar name="Rounded" rounded="md" status="busy" />
          <Avatar name="Circle 1" rounded="full" status="away" className="bg-red-500 text-white"/>
          <Avatar name="Circle 2" rounded="full" status="offline" className="bg-green-700 text-white"/>
          <Avatar name="Circle 3" rounded="full" status="none" className="bg-yellow-500 text-white"/>
        </div>
      </Card>
    </VariantGrid>
  );
};

const App: React.FC = () => {
  const nav = [
    { id: "buttons", label: "Button" },
    { id: "inputs", label: "Input" },
    { id: "checkboxes", label: "Checkbox" },
    { id: "radios", label: "Radio" },
    { id: "badges", label: "Badge" },
    { id: "avatars", label: "Avatar" },

  ];

  return (
    <ShowcaseLayout
      title="UI Library — Showcase"
      subtitle="Бібліотека компонентів v1.0 Salnykov Nikita"
      nav={nav}
    >
      <Section
        id="buttons"
        title="Button"
        description="Кнопки з варіантами, розмірами та станами."
      >
        <ButtonShowcase />
      </Section>

      <Section
        id="inputs"
        title="Input"
        description="Текстові поля з label, helper, error, розмірами та адорнментами."
      >
        <InputShowcase />
      </Section>

      <Section
        id="checkboxes"
        title="Checkbox"
        description="Текстові поля з label, helper, error, розмірами та адорнментами."
      >
        <CheckboxShowcase />
      </Section>

      <Section
        id="radios"
        title="Radio"
        description="Текстові поля з label, helper, error, розмірами та адорнментами."
      >
        <RadioShowcase />
      </Section>

      <Section
        id="badges"
        title="Badge"
        description="Простий бейдж з рінзними варівнтами розмірів та кольорів"
      >
        <BadgeShowcase />
      </Section>

      <Section id="avatars" title="Avatar" description="Аватар з підтримкою зображення, ініціалів та fallback.">
  <AvatarShowcase />
</Section> 
 
 <Section id="tabs"
        title="Tabs">
  <TabsShowcase/>
 </Section>

    </ShowcaseLayout>
  );
};

export default App;
