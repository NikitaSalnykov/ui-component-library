import React, { useState } from 'react';
import { Button } from '../components/Button';
import '../index.css';
import AvatarShowcase from './demos/AvatarShowcase';
import BadgeShowcase from './demos/BadgeShowcase';
import ModalShowcase from './demos/ModalShowcase';
import CheckboxShowcase from './demos/CheckboxShowcase';
import ToastShowcase from './demos/ToastShowcase';
import RadioShowcase from './demos/RadioShowcase';
import InputShowcase from './demos/InputShowcase';
import TabsShowcase from './demos/TabsShowcase';
import FormShowcase from './demos/FormShowcase';
import ShowcaseLayout, {
  NavItem,
} from '../components/ShowcaseLayout/ShowcaseLayout';
import { Badge } from '../components/Badge';
import { Tabs } from '../components/Tabs';
import { useToast } from '../components/Toast';
import { SectionContainer, Section } from '../components/Section/Section';
import Usage from '../components/Section/Usage';
import { ButtonShowcase } from './demos/ButtonShowcase';
import { SelectShowcase } from './demos/SelectShowcase';

interface ShowCaseContainerProps {
  preview: React.ReactNode;
  code: string;
  initial: 'code' | 'preview';
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
  select: `<VariantGrid>
<Card title={'Вибір одного варіанту'}>
  <Select
    options={options}
    value={role}
    onChange={setRole}
    placeholder="Choose role"
  />
</Card>
<Card title="Мульті вибір">
  <Select
    options={options}
    value={tags}
    onChange={setTags}
    multiple
    placeholder="Choose many"
  />
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
      label="Medium (По-замочуванню)"
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
  <RadioGroup label="uncontrolled" name="uncontrolled" По-замочуваннюValue="x">
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
  tabs: `<Tabs.Root По-замочуваннюValue="profile">
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
....`,
  form: `const form = useForm<ProfileForm>(initial, rules);
...
retun(
  ....
<Form form={form} onSubmit={submit}  className="space-y-4 p-4 bg-slate-100 border-slate-300 border rounded-xl">
<InputField form={form} name="fullName" label="Повне імʼя" placeholder="Іван Петренко" />
<InputField form={form} name="email" label="Email" type="email" placeholder="name@example.codm" />

<RadioGroupField
  form={form}
  name="role"
  label="Роль"
  options={[
    { label: "Користувач", value: "user" },
    { label: "Модератор", value: "moderator" },
    { label: "Адмін", value: "admin" },
  ]}
/>

<div className="flex gap-2 items-center">
<CheckboxField form={form} name="agree"/>
Погоджуюсь з умовами
</div>

<div className="pt-2 flex gap-2 justify-center">
  <Button type="submit" variant="primary">Надіслати</Button>
  <Button type="button" variant="outline" onClick={() => form.reset(initial)}>Скинути</Button>
</div>
</Form>
)`,
};

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
  const { success, error, info, warning, show } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      success(
        <div className="flex gap-2">
          <Badge variant="success">Success</Badge>
          <p>Code copied!</p>
        </div>
      );
    } catch (err) {
      error('Error');
    }
  };

  return (
    <div className="relative mt-2">
      <Button
        variant="outline"
        onClick={handleCopy}
        className="absolute right-3 top-3 bg-stone-100"
        size="sm"
      >
        Copy
      </Button>

      <pre className=" overflow-x-auto whitespace-pre-wrap rounded-lg border border-gray-200 bg-slate-100 p-4 text-sm font-mono leading-relaxed text-gray-800">
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

const App: React.FC = () => {
  const nav: NavItem[] = [
    { id: 'init', label: 'Встановлення', type: 'init' },

    { id: 'buttons', label: 'Button', type: 'base' },
    { id: 'inputs', label: 'Input', type: 'base' },
    { id: 'checkboxes', label: 'Checkbox', type: 'base' },
    { id: 'radios', label: 'Radio', type: 'base' },
    { id: 'select', label: 'Select', type: 'base' },

    { id: 'badges', label: 'Badge', type: 'display' },
    { id: 'avatars', label: 'Avatar', type: 'display' },


    { id: 'tabs', label: 'Tabs', type: 'feedback' },
    { id: 'toast', label: 'Toast', type: 'feedback' },
    { id: 'modal', label: 'Modal', type: 'feedback' },

    { id: 'form', label: 'Form', type: 'complex' },
  ];

  return (
    <ShowcaseLayout nav={nav}>
      {/* init */}
      <Section id="init">
        <SectionContainer
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
            <strong>2. Встанови необхідні залежності</strong>
            <CodeBlock code="npm install react react-dom clsx tailwindcss" />
            <i className="text-xs">
              Для стилізації використовується виключно Tailwind CSS - він має
              бути налаштований у вашому проєкті.
            </i>
          </div>

          <div className="flex flex-col gap-1">
            <strong>3. Додай бібліотеку у Tailwind config</strong>
            <CodeBlock
              code={`content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/ui-component-library/dist/**/*.{js,mjs}"
],`}
            />
          </div>

          <div className="flex flex-col gap-1">
            <strong>4. Імпортуй стилі у проєкт</strong>
            <CodeBlock code={`import "ui-component-library/dist/style.css"`} />
          </div>

          <strong>5. Імпортуй компоненти бібліотеки (приклад):</strong>
          <CodeBlock
            code={`import {
  Button,
  Input,
  Checkbox,
  Radio,
  RadioGroup,
} from "ui-component-library";`}
          />
        </SectionContainer>
      </Section>

      {/* buttons */}
      <Section id="buttons">
        <SectionContainer
          title="Button"
          description="Кнопки з варіантами, розмірами та станами."
        >
          <ShowcaseContainer
            preview={<ButtonShowcase />}
            code={codes.button}
            initial="preview"
          />
        </SectionContainer>

        <Usage>
          <div className="space-y-3 text-sm">
            <div>
              <p>Кнопка для дій у формах та діалогах.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Quick start</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`<Button>Save</Button>`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Основні пропси</h3>
              <ul className="list-disc pl-5">
                <li>
                  <code>variant</code> - <code>primary</code> |{' '}
                  <code>secondary</code> | <code>outline</code> |{' '}
                  <code>ghost</code>.{' '}
                  <em>
                    По-замочуванню: <code>primary</code>
                  </em>
                </li>
                <li>
                  <code>size</code> - <code>sm</code> | <code>md</code> |{' '}
                  <code>lg</code>.{' '}
                  <em>
                    По-замочуванню: <code>md</code>
                  </em>
                </li>
                <li>
                  <code>loading</code> - показує стан завантаження (блокує
                  клік).{' '}
                  <em>
                    По-замочуванню: <code>false</code>
                  </em>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Варіації</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`<Button variant="secondary">Secondary</Button>
<Button size="lg">Large</Button>
<Button loading>Saving…</Button>`}</code>
              </pre>
            </div>
          </div>
        </Usage>
      </Section>

      {/* inputs */}
      <Section id="inputs">
        <SectionContainer
          title="Input"
          description="Текстові поля з label, helper, error, розмірами та адорнментами."
        >
          <ShowcaseContainer
            preview={<InputShowcase />}
            code={codes.inputs}
            initial="preview"
          />
        </SectionContainer>
        <Usage>
          <div className="space-y-3 text-sm">
            <div>
              <p>Текстове поле з лейблом та підказкою.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Quick start</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`<Input label="Email" placeholder="you@example.com" />`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Основні пропси</h3>
              <ul className="list-disc pl-5">
                <li>
                  <code>label</code> - текст мітки.
                </li>
                <li>
                  <code>helperText</code> - підказка під полем.
                </li>
                <li>
                  <code>error</code> - рядок помилки або <code>true</code> для
                  стилю помилки.{' '}
                  <em>
                    По-замочуванню: <code>false</code>
                  </em>
                </li>
                <li>
                  <code>inputSize</code> - <code>sm</code> | <code>md</code> |{' '}
                  <code>lg</code>.{' '}
                  <em>
                    По-замочуванню: <code>md</code>
                  </em>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Варіації</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`<Input label="Password" type="password" placeholder="••••••••" />
<Input label="With error" error="Invalid value" />
<Input label="Disabled" disabled />`}</code>
              </pre>
            </div>
          </div>
        </Usage>
      </Section>

      
      {/* selec */}

      <Section id="select">
        <SectionContainer
          title="Select"
          description="Приклад форми з валідацією та керованими елементами."
        >
          <ShowcaseContainer
            preview={<SelectShowcase />}
            code={codes.select}
            initial="preview"
          />
        </SectionContainer>
        <Usage>
          <div className="space-y-3 text-sm">
            <div>
              <p>
                Компонент для вибору одного або декількох значень із випадаючого
                списку. Підтримує пошук, multi-select і кастомний плейсхолдер.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Quick start</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`const options = [
  { label: "User", value: "user" },
  { label: "Moderator", value: "moderator" },
  { label: "Admin", value: "admin" },
];

// Single select
const [role, setRole] = useState<string | null>(null);

<Select
  options={options}
  value={role}
  onChange={setRole}
  placeholder="Choose role"
/>

// Multi select
const [tags, setTags] = useState<string[]>([]);

<Select
  options={options}
  value={tags}
  onChange={setTags}
  multiple
  placeholder="Choose many"
/>`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Основні пропси</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <code>options</code> - масив варіантів{' '}
                  <code>{`{label, value}`}</code>. <em>Required</em>
                </li>
                <li>
                  <code>value</code> - вибране значення рядок або масив рядків.{' '}
                  <em>Required</em>
                </li>
                <li>
                  <code>onChange(value)</code> - вибір значення.{' '}
                  <em>Required</em>
                </li>
                <li>
                  <code>multiple</code> - дозволяє вибір кількох елементів.
                </li>
                <li>
                  <code>searchable</code> - вмикає пошук у списку
                  (По-замочуванню: <code>true</code>).
                </li>
                <li>
                  <code>placeholder</code> - текст для порожнього стану
                  (підказка).
                </li>
                <li>
                  <code>disabled</code> - блокує select.
                </li>
                <li>
                  <code>className</code> - додаткові стилі.
                </li>
              </ul>
            </div>
          </div>
        </Usage>
      </Section>

      {/* checkboxes */}
      <Section id="checkboxes">
        <SectionContainer
          title="Checkbox"
          description="Чекбокси з підтримкою indeterminate та кастомізації."
        >
          <ShowcaseContainer
            preview={<CheckboxShowcase />}
            code={codes.checkboxes}
            initial="preview"
          />
        </SectionContainer>
        <Usage>
          <div className="space-y-3 text-sm">
            <div>
              <p>Перемикач так/ні, підтримує «змішаний» стан.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Quick start</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`<Checkbox label="I agree" />`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Основні пропси</h3>
              <ul className="list-disc pl-5">
                <li>
                  <code>label</code> - підпис поруч із чекбоксом.
                </li>
                <li>
                  <code>checked</code> - контрольований стан (використовуйте з{' '}
                  <code>onChange</code>). <em>Required при контрольованому</em>
                </li>
                <li>
                  <code>indeterminate</code> - «змішаний» стан.
                </li>
                <li>
                  <code>onChange(next)</code> - викликається при зміні.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Варіації</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`<Checkbox По-замочуваннюChecked label="Subscribe" />
<Checkbox checked={ok} onChange={setOk} label="Accept terms" />
<Checkbox indeterminate label="Select all" />`}</code>
              </pre>
            </div>
          </div>
        </Usage>
      </Section>

      {/* radios */}
      <Section id="radios">
        <SectionContainer
          title="Radio"
          description="Радіо-кнопки із групуванням та керуванням станом."
        >
          <ShowcaseContainer
            preview={<RadioShowcase />}
            code={codes.radios}
            initial="preview"
          />
        </SectionContainer>
        <Usage>
          <div className="space-y-3 text-sm">
            <div>
              <p>Вибір одного значення з кількох.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Quick start</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`<RadioGroup name="plan" По-замочуваннюValue="basic">
  <Radio value="basic" label="Basic" />
  <Radio value="pro" label="Pro" />
</RadioGroup>`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Основні пропси</h3>
              <ul className="list-disc pl-5">
                <li>
                  <code>Radio.value</code> - значення опції. <em>Required</em>
                </li>
                <li>
                  <code>Radio.label</code> - підпис опції.
                </li>
                <li>
                  <code>RadioGroup.name</code> - ім’я групи (для форм).
                </li>
                <li>
                  <code>value</code> / <code>По-замочуваннюValue</code> -
                  контрольований/неконтрольований режим.
                </li>
                <li>
                  <code>onChange(value)</code> - зміна значення.
                </li>
              </ul>
            </div>
          </div>
        </Usage>
      </Section>

      {/* badges */}
      <Section id="badges">
        <SectionContainer
          title="Badge"
          description="Простий бейдж з різними розмірами та кольорами."
        >
          <ShowcaseContainer
            preview={<BadgeShowcase />}
            code={codes.badges}
            initial="preview"
          />
        </SectionContainer>
        <Usage>
          <div className="space-y-3 text-sm">
            <div>
              <p>Маркер статусу або категорії.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Quick start</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`<Badge variant="primary">New</Badge>`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Основні пропси</h3>
              <ul className="list-disc pl-5">
                <li>
                  <code>variant</code> -{' '}
                  <code>neutral|primary|success|warning|danger</code>.
                </li>
                <li>
                  <code>soft</code> - «м’який» стиль.
                </li>
                <li>
                  <code>size</code> - <code>sm|md</code>.{' '}
                  <em>
                    По-замочуванню: <code>md</code>
                  </em>
                </li>
                <li>
                  <code>rounded</code> - <code>full</code> для круглих бейджів.
                </li>
                <li>
                  <code>dot</code> - крапка-індикатор.
                </li>
              </ul>
            </div>
          </div>
        </Usage>
      </Section>

      {/* avatars */}
      <Section id="avatars">
        <SectionContainer
          title="Avatar"
          description="Аватар з підтримкою зображення, ініціалів та fallback."
        >
          <ShowcaseContainer
            preview={<AvatarShowcase />}
            code={codes.avatars}
            initial="preview"
          />
        </SectionContainer>
        <Usage>
          <div className="space-y-3 text-sm">
            <div>
              <p>Аватар користувача з ініціалами або зображенням.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Quick start</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`<Avatar name="Nikita Salnykov" />`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Основні пропси</h3>
              <ul className="list-disc pl-5">
                <li>
                  <code>src</code>/<code>alt</code> - зображення та
                  альтернативний текст.
                </li>
                <li>
                  <code>name</code> - для ініціалів (fallback).
                </li>
                <li>
                  <code>size</code> - <code>sm|md|lg|xl</code>.{' '}
                  <em>
                    По-замочуванню: <code>md</code>
                  </em>
                </li>
                <li>
                  <code>rounded</code> - <code>none|md|full</code>.{' '}
                  <em>
                    По-замочуванню: <code>full</code>
                  </em>
                </li>
                <li>
                  <code>status</code> -{' '}
                  <code>none|online|offline|busy|away</code>.{' '}
                  <em>
                    По-замочуванню: <code>none</code>
                  </em>
                </li>
              </ul>
            </div>
          </div>
        </Usage>
      </Section>

      {/* tabs */}
      <Section id="tabs">
        <SectionContainer
          title="Tabs"
          description="Вкладки з керуванням активним станом та відключенням опцій."
        >
          <ShowcaseContainer
            preview={<TabsShowcase />}
            code={codes.tabs}
            initial="preview"
          />
        </SectionContainer>
        <Usage>
          <div className="space-y-3 text-sm">
            <div>
              <p>Перемикання секцій контенту.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Quick start</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`<Tabs.Root По-замочуваннюValue="profile">
  <Tabs.List>
    <Tabs.Trigger value="profile">Profile</Tabs.Trigger>
    <Tabs.Trigger value="settings">Settings</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="profile">...</Tabs.Content>
  <Tabs.Content value="settings">...</Tabs.Content>
</Tabs.Root>`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Основні пропси</h3>
              <ul className="list-disc pl-5">
                <li>
                  <code>Tabs.Trigger.value</code> - ідентифікатор вкладки.{' '}
                  <em>Required</em>
                </li>
                <li>
                  <code>Tabs.Content.value</code> - має збігатися з{' '}
                  <code>Trigger.value</code>. <em>Required</em>
                </li>
                <li>
                  <code>По-замочуваннюValue</code> - активна вкладка за
                  замовчуванням.
                </li>
              </ul>
            </div>
          </div>
        </Usage>
      </Section>

      {/* toast */}
      <Section id="toast">
        <SectionContainer
          title="Toast"
          description="Нотифікації з провайдером та хукамі."
        >
          <ShowcaseContainer
            preview={<ToastShowcase />}
            code={codes.toast}
            initial="preview"
          />
        </SectionContainer>
        <Usage>
          <div className="space-y-3 text-sm">
            <div>
              <p>Тимчасові повідомлення</p>
            </div>
            <h3 className="font-semibold mb-1">Quick start</h3>
            <div className="">
              <p className="font-semibold mb-1">
                Обгорніть додаток у {`<ToastProvider>`}
              </p>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`const { success, error, info, warning, show } = useToast();

<ToastProvider>
  <App/>
</ToastProvider>`}</code>
              </pre>
            </div>
            <div className="">
              <p className="font-semibold mb-1">
                Використання хука {`useToast()`}
              </p>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`const { success, error, info, warning, show } = useToast();
 
 <Button onClick={() => success("Saved!")}>Notify</Button>
`}</code>
              </pre>
            </div>
            <div>
              <p className="font-semibold mb-1">Для кастомних тостів</p>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`const { success, error, info, warning, show } = useToast();

<ToastProvider>
  <Button onClick={() =>
    show({
      message: <p>Custome massege 🫠</p>,
      duration: 5000,
      type: "info",
      className: "text-white bg-purple-400",
    })
  }>Notify</Button>
</ToastProvider>`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Патерн</h3>
              <ul className="list-disc pl-5">
                <li>
                  Обгорніть додаток у <code>ToastProvider</code>.
                </li>
                <li>
                  Викликайте <code>success</code>/<code>error</code>/
                  <code>info</code>/<code>warning</code> або <code>show</code> у
                  діях.
                </li>
              </ul>
            </div>
          </div>
        </Usage>
      </Section>

      {/* modal */}
      <Section id="modal">
        <SectionContainer
          title="Modal"
          description="Базова модалка з backdrop та закриттям по Esc."
        >
          <ShowcaseContainer
            preview={<ModalShowcase />}
            code={codes.modal}
            initial="preview"
          />
        </SectionContainer>
        <Usage>
          <div className="space-y-3 text-sm">
            <div>
              <p>Вікно поверх контенту.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Quick start</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`const [open, setOpen] = React.useState(false);
<>
  <Button onClick={() => setOpen(true)}>Open</Button>
  <Modal open={open} onClose={() => setOpen(false)} title="Base">
    <p>Content</p>
  </Modal>
</>`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Основні пропси</h3>
              <ul className="list-disc pl-5">
                <li>
                  <code>open</code> - стан відкриття. <em>Required</em>
                </li>
                <li>
                  <code>onClose</code> - колбек закриття. <em>Required</em>
                </li>
                <li>
                  <code>title</code> - заголовок діалогу.
                </li>
                <li>
                  <code>closeOnBackdrop</code> - закриття кліком по фону.{' '}
                  <em>
                    По-замочуванню: <code>true</code>
                  </em>
                </li>
                <li>
                  <code>style</code> - тема:{' '}
                  <code>
                    base | glass | dark | gray | red | orange | amber| yellow |
                    green | blue | violet
                  </code>
                </li>
              </ul>
            </div>
          </div>
        </Usage>
      </Section>

      {/* form */}
      <Section id="form">
        <SectionContainer
          title="Form"
          description="Приклад форми з валідацією та керованими елементами."
        >
          <ShowcaseContainer
            preview={<FormShowcase />}
            code={codes.form}
            initial="preview"
          />
        </SectionContainer>
        <Usage>
          <div className="space-y-3 text-sm">
            <div>
              <p>Легка обгортка для керування станом і валідацією форм.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Quick start</h3>
              <pre className="bg-gray-100 p-3 rounded-md overflow-auto">
                <code>{`const form = useForm(initial, rules);

<Form form={form} onSubmit={(result) => console.log(result)}>
  <InputField form={form} name="fullName" label="Ім'я" />
  <Button type="submit">Надіслати</Button>
</Form>`}</code>
              </pre>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Основні пропси</h3>
              <ul className="list-disc pl-5">
                <li>
                  <code>Form.form</code> - інстанс форми. <em>Required</em>
                </li>
                <li>
                  <code>Form.onSubmit(values)</code> - обробник відправки.{' '}
                  <em>Required</em>
                </li>
                <li>
                  <code>InputField/CheckboxField/RadioGroupField</code> -
                  зв’язок з полями за <code>name</code>.
                </li>
              </ul>
            </div>
          </div>
        </Usage>
      </Section>

    </ShowcaseLayout>
  );
};

export default App;
