import React from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Checkbox } from '../components/Checkbox';
import { Radio, RadioGroup } from '../components/Radio';
import '../index.css';

import ShowcaseLayout from '../components/ShowcaseLayout/ShowcaseLayout';
import Section from '../components/Section/Section';
import VariantGrid from '../components/VariantGrid/VariantGrid';
import Card from '../components/Card/Card';
import { Badge } from '../components/Badge';
import { Avatar } from '../components/Avatart';
import { Tabs } from '../components/Tabs';
import { ToastProvider, useToast } from '../components/Toast';
import { Modal } from '../components/Modal';

interface ShowCaseContainerProps {
  preview: React.ReactNode;
  code: string;
  initial: 'code' | 'preview';
}

interface CodeBlockProps {
  code: string;
}


const codes: Record<string, string> = {
  button: `<VariantGrid>
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
</VariantGrid>`,
  inputs: `    <VariantGrid>
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
</VariantGrid>`,
  checkboxes: `<VariantGrid>
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
      checked={parentChecked || (c && d)}
      indeterminate={parentIndeterminate}
      onChange={handleParentChange}
    />
    <div className="pl-6 flex flex-col gap-2">
      <Checkbox label="Child C" checked={c} onChange={setC} />
      <Checkbox label="Child D" checked={d} onChange={setD} />
    </div>
  </div>
</Card>
</VariantGrid>`,
  radios: `    <VariantGrid>
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
</VariantGrid>`,
  badges: `    <VariantGrid>
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
</VariantGrid>`,
  avatars: `<VariantGrid>
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
</VariantGrid>`,
  tabs: `<Tabs.Root defaultValue="profile">
        <Tabs.List>
          <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
          <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
          <Tabs.Trigger value="security" disabled>Security</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="profile">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nihil, ipsa, similique suscipit voluptatum reiciendis mollitia nobis quidem modi beatae ratione iste, perspiciatis delectus quisquam.</Tabs.Content>
        <Tabs.Content value="settings">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore distinctio optio consequatur iste reprehenderit?</Tabs.Content>
        <Tabs.Content value="security">Lorem ipsum dolor sit amet.</Tabs.Content>
      </Tabs.Root>`,
  toast: `<div className="flex flex-wrap gap-2">

  <Button className="bg-green-800 hover:bg-green-600 active:bg-green-300" onClick={() => success("Saved!")}>
      Success
  </Button>

  <Button className="bg-red-700 hover:bg-red-600 active:bg-red-300" onClick={() => error("Oops…")}>
     Error
  </Button>

  <Button className="bg-blue-600 hover:bg-blue-400 active:bg-blue-300" onClick={() => info("Bla-bla-bla")}>
    Info
  </Button>

  <Button className="bg-yellow-600 hover:bg-yellow-400 active:bg-yellow-200" onClick={() => warning("Be careful")}>
      Warning
  </Button>

  <Button className="bg-purple-600 hover:bg-purple-400 active:bg-purple-300" onClick={() => show({ message: <p>Custome massege 🫠</p>, duration: 5000, type: "info" , className:"text-white bg-purple-400"})}>
     Custom
  </Button>

</div>`,
modal: `....
{/* Base */}
<button onClick={() => setOpenBase(true)} className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200">Base</button>

{/* Dark */}
<button onClick={() => setOpenDark(true)} className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">Dark</button>

{/* Glass */}
<button onClick={() => setOpenGlass(true)} className="px-4 py-2 rounded-md bg-white/40 backdrop-blur-md border border-white/50">Glass</button>
....
{/* Base */}
<Modal open={openBase} onClose={() => setOpenBase(false)} title="Швидка дія" style="base">
  <p className="text-sm text-gray-700">Підтвердити виконання дії?</p>
  <div className="mt-4 flex gap-2">
    <Button variant="outline" onClick={() => setOpenBase(false)}>Скасувати</Button>
    <Button variant="primary" onClick={() => setOpenBase(false)}>Підтвердити</Button>
  </div>
</Modal>

{/* Dark */}
<Modal open={openDark} onClose={() => setOpenDark(false)} title="Вхід" style="dark">
  <div className="space-y-3">
    <Input
      type="email"
      label="Email"
      placeholder="name@example.com"
      value={email}
      onChange={(v) => setEmail(v)}
    />
    <Input
      type="password"
      label="Пароль"
      placeholder="••••••••"
      value={pwd}
      onChange={(v) => setPwd(v)}
    />
    <div className="flex justify-end gap-2">
      <Button variant="ghost" onClick={() => setOpenDark(false)}>Закрити</Button>
      <Button variant="primary" onClick={() => setOpenDark(false)}>Увійти</Button>
    </div>
  </div>
</Modal>

{/* Glass */}
<Modal open={openGlass} onClose={() => setOpenGlass(false)} title="Опції" style="glass">
  <div className="space-y-3">
    <div className="flex flex-col gap-2">
      <Checkbox label="Опція A" checked={optA} onChange={setOptA} />
      <Checkbox label="Опція B" checked={optB} onChange={setOptB} />
    </div>
    <div className="flex justify-end gap-2">
      <Button variant="outline" onClick={() => setOpenGlass(false)}>Скасувати</Button>
      <Button variant="primary" onClick={() => setOpenGlass(false)}>Застосувати</Button>
    </div>
  </div>
</Modal>
....`
};

const TabsShowcase: React.FC = () => {
  return (
    <Tabs.Root defaultValue="profile">
      <Tabs.List>
        <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
        <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
        <Tabs.Trigger value="security" disabled>
          Security
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="profile">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nihil,
        ipsa, similique suscipit voluptatum reiciendis mollitia nobis quidem
        modi beatae ratione iste, perspiciatis delectus quisquam.
      </Tabs.Content>
      <Tabs.Content value="settings">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore
        distinctio optio consequatur iste reprehenderit?
      </Tabs.Content>
      <Tabs.Content value="security">Lorem ipsum dolor sit amet.</Tabs.Content>
    </Tabs.Root>
  );
};

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const { success, error, info, warning, show } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      success(<div className='flex gap-2'><Badge variant="success">Success</Badge><p>Code copied!
</p></div>);
    } catch (err) {
      
      error('Error');
    }
  };

  return (
    <div className="relative mt-2">
      <Button
        variant="outline"
        onClick={handleCopy}
        className="absolute right-3 top-3"
        size="sm"
      >
        Copy
      </Button>

      <pre className="overflow-x-auto whitespace-pre-wrap rounded-lg border border-gray-200 bg-slate-100 p-4 text-sm font-mono leading-relaxed text-gray-800">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const ShowcaseContainer: React.FC<ShowCaseContainerProps> = ({
  preview,
  code,
}) => {
  return (
    <Tabs.Root defaultValue="preview">
      <Tabs.List>
        <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
        <Tabs.Trigger value="code">Code</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="preview">{preview}</Tabs.Content>
      <Tabs.Content value="code">
        <CodeBlock code={code} />
      </Tabs.Content>
    </Tabs.Root>
  );
};

const ButtonPreview: React.FC = () => {
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
  const [val, setVal] = React.useState('b');
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
};

const ToastShowcase: React.FC = () => {
  const { success, error, info, warning, show } = useToast();
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        className="bg-green-800 hover:bg-green-600 active:bg-green-300"
        onClick={() => success('Saved!')}
      >
        Success
      </Button>
      <Button
        className="bg-red-700 hover:bg-red-600 active:bg-red-300"
        onClick={() => error('Oops…')}
      >
        Error
      </Button>
      <Button
        className="bg-blue-600 hover:bg-blue-400 active:bg-blue-300"
        onClick={() => info('Bla-bla-bla')}
      >
        Info
      </Button>
      <Button
        className="bg-yellow-600 hover:bg-yellow-400 active:bg-yellow-200"
        onClick={() => warning('Be careful')}
      >
        Warning
      </Button>
      <Button
        className="bg-purple-600 hover:bg-purple-400 active:bg-purple-300"
        onClick={() =>
          show({
            message: <p>Custome massege 🫠</p>,
            duration: 5000,
            type: 'info',
            className: 'text-white bg-purple-400',
          })
        }
      >
        Custom
      </Button>
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
};

const ModalShowcase: React.FC = () => {
  const [openBase, setOpenBase] = React.useState(false);
  const [openDark, setOpenDark] = React.useState(false);
  const [openGlass, setOpenGlass] = React.useState(false);
  const [openRed, setOpenRed] = React.useState(false);
  const [openGreen, setOpenGreen] = React.useState(false);
  const [openBlue, setOpenBlue] = React.useState(false);
  const [openViolet, setOpenViolet] = React.useState(false);
  const [openGray, setOpenGray] = React.useState(false);
//в модалке 
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [optA, setOptA] = React.useState(true);
  const [optB, setOptB] = React.useState(false);
  const [choice, setChoice] = React.useState("b");

  return (
    <>
      <VariantGrid className="flex flex-wrap gap-2">
        <div className="flex gap-2">
        <button onClick={() => setOpenBase(true)} className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200">Base</button>
        <button onClick={() => setOpenDark(true)} className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800">Dark</button>
        <button onClick={() => setOpenGlass(true)} className="px-4 py-2 rounded-md bg-white/40 backdrop-blur-md border border-white/50">Glass</button>
        <button onClick={() => setOpenGray(true)} className="px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500">Gray</button>
        </div>
        <div className="flex gap-2">
        <button onClick={() => setOpenRed(true)} className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700">Red</button>
        <button onClick={() => setOpenGreen(true)} className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700">Green</button>
        <button onClick={() => setOpenBlue(true)} className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Blue</button>
        <button onClick={() => setOpenViolet(true)} className="px-4 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-700">Violet</button>
        </div>
       
      </VariantGrid>

      {/* Base */}
      <Modal open={openBase} onClose={() => setOpenBase(false)} title="Швидка дія" style="base">
        <p className="text-sm text-gray-700">Підтвердити виконання дії?</p>
        <div className="mt-4 flex gap-2">
          <Button variant="outline" onClick={() => setOpenBase(false)}>Скасувати</Button>
          <Button variant="primary" onClick={() => setOpenBase(false)}>Підтвердити</Button>
        </div>
      </Modal>

      {/* Dark */}
      <Modal open={openDark} onClose={() => setOpenDark(false)} title="Вхід" style="dark">
        <div className="space-y-3">
          <Input
            type="email"
            label="Email"
            placeholder="name@example.com"
            value={email}
            onChange={(v) => setEmail(v)}
          />
          <Input
            type="password"
            label="Пароль"
            placeholder="••••••••"
            value={pwd}
            onChange={(v) => setPwd(v)}
          />
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpenDark(false)}>Закрити</Button>
            <Button variant="primary" onClick={() => setOpenDark(false)}>Увійти</Button>
          </div>
        </div>
      </Modal>

      {/* Glass */}
      <Modal open={openGlass} onClose={() => setOpenGlass(false)} title="Опції" style="glass">
        <div className="space-y-3">
          <div className="flex flex-col gap-2">
            <Checkbox label="Опція A" checked={optA} onChange={setOptA} />
            <Checkbox label="Опція B" checked={optB} onChange={setOptB} />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpenGlass(false)}>Скасувати</Button>
            <Button variant="primary" onClick={() => setOpenGlass(false)}>Застосувати</Button>
          </div>
        </div>
      </Modal>

      {/* Gray */}
      <Modal open={openGray} onClose={() => setOpenGray(false)} title="Вибір режиму" style="gray">
        <div className="space-y-3">
          <RadioGroup label="Режим" name="mode" value={choice} onChange={setChoice}>
            <Radio value="a" label="Легкий" />
            <Radio value="b" label="Звичний" />
            <Radio value="c" label="Складний" />
          </RadioGroup>
          <div className="flex justify-end">
            <Button variant="primary" onClick={() => setOpenGray(false)}>OK</Button>
          </div>
        </div>
      </Modal>

      {/* Red */}
      <Modal open={openRed} onClose={() => setOpenRed(false)} title="Видалення" style="red">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="danger">Увага</Badge>
            <p className="text-sm">Ця дія незворотньо видалить профіль. Продовжити?</p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpenRed(false)}>Скасувати</Button>
            <Button variant="ghost" className="bg-rose-700 text-white hover:bg-red-700" onClick={() => setOpenRed(false)}>Видалити</Button>
          </div>
        </div>
      </Modal>

      {/* Green */}
      <Modal open={openGreen} onClose={() => setOpenGreen(false)} title="Готово" style="green">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="success">Успіх</Badge>
            <p className="text-sm">Налаштування збережено.</p>
          </div>
          <div className="flex justify-end">
            <Button variant="primary" onClick={() => setOpenGreen(false)}>OK</Button>
          </div>
        </div>
      </Modal>

      {/* Blue */}
      <Modal open={openBlue} onClose={() => setOpenBlue(false)} title="Інформація" style="blue">
        <div className="space-y-3">
          <p className="text-sm">Доступне оновлення</p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpenBlue(false)}>Пізніше</Button>
            <Button variant="primary" onClick={() => setOpenBlue(false)}>Оновити</Button>
          </div>
        </div>
      </Modal>

      {/* Violet */}
      <Modal open={openViolet} onClose={() => setOpenViolet(false)} title="Деталі" style="violet">
        <div className="space-y-3">
          <Tabs.Root defaultValue="about">
            <Tabs.List>
              <Tabs.Trigger value="about">Про</Tabs.Trigger>
              <Tabs.Trigger value="help">Допомога</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="about">
              <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quia ab reiciendis neque deleniti mollitia accusantium alias, dolore provident dignissimos.</p>
            </Tabs.Content>
            <Tabs.Content value="help">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nobis omnis. Obcaecati, ipsum molestiae!</p>
            </Tabs.Content>
          </Tabs.Root>
          <div className="flex justify-end">
            <Button variant="primary" onClick={() => setOpenViolet(false)}>Зрозуміло</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};


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
};

const App: React.FC = () => {
  const nav = [
    { id: 'init', label: 'Встановлення' },
    { id: 'buttons', label: 'Button' },
    { id: 'inputs', label: 'Input' },
    { id: 'checkboxes', label: 'Checkbox' },
    { id: 'radios', label: 'Radio' },
    { id: 'badges', label: 'Badge' },
    { id: 'avatars', label: 'Avatar' },
    { id: 'tabs', label: 'Tabs' },
    { id: 'toast', label: 'Toast' },
    { id: 'modal', label: 'Modal' },
  ];

  return (
    <ToastProvider position="top-right" max={3} duration={3000}>
      <ShowcaseLayout nav={nav}>
        <Section
          id="init"
          title="Встановлення"
          description="Як встановити та застосувати бібліотеку"
          className="flex flex-col gap-2"
        >
          <strong>1. Встанови бібліотеку</strong>
          <p>npm:</p>
          <CodeBlock code="npm install github:NikitaSalnykov/ui-component-library" />
          <p>yarn:</p>
          <CodeBlock code="yarn install github:NikitaSalnykov/ui-component-library" />
          <div className="flex flex-col gap-1">
            <strong>2. Імпортуй стилі у проєкт</strong>
            <i className="text-xs">
              Для стилізації використовується виключно Tailwind
            </i>
          </div>
          <CodeBlock code={`import "ui-component-library/dist/style.css"`} />
          <strong>3. Імпортуй компоненти бібліотеки (приклад):</strong>
          <CodeBlock
            code={`import {
  Button,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
} from "ui-component-library";`}
          />
        </Section>

        <Section
          id="buttons"
          title="Button"
          description="Кнопки з варіантами, розмірами та станами."
        >
          <ShowcaseContainer
            preview={<ButtonPreview />}
            code={codes.button}
            initial="preview"
          />
        </Section>

        <Section
          id="inputs"
          title="Input"
          description="Текстові поля з label, helper, error, розмірами та адорнментами."
        >
          <ShowcaseContainer
            preview={<InputShowcase />}
            code={codes.inputs}
            initial="preview"
          />
        </Section>

        <Section
          id="checkboxes"
          title="Checkbox"
          description="Текстові поля з label, helper, error, розмірами та адорнментами."
        >
          <ShowcaseContainer
            preview={<CheckboxShowcase />}
            code={codes.checkboxes}
            initial="preview"
          />
        </Section>

        <Section
          id="radios"
          title="Radio"
          description="Текстові поля з label, helper, error, розмірами та адорнментами."
        >
          <ShowcaseContainer
            preview={<RadioShowcase />}
            code={codes.radios}
            initial="preview"
          />
        </Section>

        <Section
          id="badges"
          title="Badge"
          description="Простий бейдж з рінзними варівнтами розмірів та кольорів"
        >
          <ShowcaseContainer
            preview={<BadgeShowcase />}
            code={codes.badges}
            initial="preview"
          />
        </Section>

        <Section
          id="avatars"
          title="Avatar"
          description="Аватар з підтримкою зображення, ініціалів та fallback."
        >
          <ShowcaseContainer
            preview={<AvatarShowcase />}
            code={codes.avatars}
            initial="preview"
          />
        </Section>

        <Section id="tabs" title="Tabs">
          <ShowcaseContainer
            preview={<TabsShowcase />}
            code={codes.tabs}
            initial="preview"
          />
        </Section>

        <Section id="toast" title="Toast">
          <ShowcaseContainer
            preview={<ToastShowcase />}
            code={codes.toast}
            initial="preview"
          />
        </Section>

        <Section id="modal" title="Modal">
          <ShowcaseContainer
            preview={<ModalShowcase />}
            code={codes.modal}
            initial="preview"
          />
        </Section>



      </ShowcaseLayout>
    </ToastProvider>
  );
};

export default App;
