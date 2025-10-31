import React from "react";
import VariantGrid from "../../components/VariantGrid/VariantGrid";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Input } from "../../components/Input";
import { Modal } from "../../components/Modal";
import { Radio, RadioGroup } from "../../components/Radio";
import { Tabs } from "../../components/Tabs";

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
          <button
            onClick={() => setOpenBase(true)}
            className="px-4 py-2 rounded-md bg-gray-100 hover:bg-gray-200"
          >
            Base
          </button>
          <button
            onClick={() => setOpenDark(true)}
            className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800"
          >
            Dark
          </button>
          <button
            onClick={() => setOpenGlass(true)}
            className="px-4 py-2 border-gray-500 bg-gray-100 rounded-md backdrop-blur-md border border-white/50"
          > 
            Glass
          </button>
          <button
            onClick={() => setOpenGray(true)}
            className="px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-gray-500"
          >
            Gray
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setOpenRed(true)}
            className="px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700"
          >
            Red
          </button>
          <button
            onClick={() => setOpenGreen(true)}
            className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
          >
            Green
          </button>
          <button
            onClick={() => setOpenBlue(true)}
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Blue
          </button>
          <button
            onClick={() => setOpenViolet(true)}
            className="px-4 py-2 rounded-md bg-violet-600 text-white hover:bg-violet-700"
          >
            Violet
          </button>
        </div>
      </VariantGrid>

      {/* Base */}
      <Modal
        open={openBase}
        onClose={() => setOpenBase(false)}
        title="Швидка дія"
        style="base"
      >
        <p className="text-sm text-gray-700">Підтвердити виконання дії?</p>
        <div className="mt-4 flex gap-2">
          <Button variant="outline" onClick={() => setOpenBase(false)}>
            Скасувати
          </Button>
          <Button variant="primary" onClick={() => setOpenBase(false)}>
            Підтвердити
          </Button>
        </div>
      </Modal>

      {/* Dark */}
      <Modal
        open={openDark}
        onClose={() => setOpenDark(false)}
        title="Вхід"
        style="dark"
      >
        <div className="space-y-3">
          <Input
            type="email"
            label="Email"
            placeholder="name@example.com"
            value={email}
            onChange={(v) => setEmail(v.toString())}
          />
          <Input
            type="password"
            label="Пароль"
            placeholder="••••••••"
            value={pwd}
            onChange={(v) => setPwd(v.toString())}
          />
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpenDark(false)}>
              Закрити
            </Button>
            <Button variant="primary" onClick={() => setOpenDark(false)}>
              Увійти
            </Button>
          </div>
        </div>
      </Modal>

      {/* Glass */}
      <Modal
        open={openGlass}
        onClose={() => setOpenGlass(false)}
        title="Опції"
        style="glass"
      >
        <div className="space-y-3">
          <div className="flex flex-col gap-2">
            <Checkbox label="Опція A" checked={optA} onChange={setOptA} />
            <Checkbox label="Опція B" checked={optB} onChange={setOptB} />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpenGlass(false)}>
              Скасувати
            </Button>
            <Button variant="primary" onClick={() => setOpenGlass(false)}>
              Застосувати
            </Button>
          </div>
        </div>
      </Modal>

      {/* Gray */}
      <Modal
        open={openGray}
        onClose={() => setOpenGray(false)}
        title="Вибір режиму"
        style="gray"
      >
        <div className="space-y-3">
          <RadioGroup
            label="Режим"
            name="mode"
            value={choice}
            onChange={setChoice}
          >
            <Radio value="a" label="Легкий" />
            <Radio value="b" label="Звичний" />
            <Radio value="c" label="Складний" />
          </RadioGroup>
          <div className="flex justify-end">
            <Button variant="primary" onClick={() => setOpenGray(false)}>
              OK
            </Button>
          </div>
        </div>
      </Modal>

      {/* Red */}
      <Modal
        open={openRed}
        onClose={() => setOpenRed(false)}
        title="Видалення"
        style="red"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="danger">Увага</Badge>
            <p className="text-sm">
              Ця дія незворотньо видалить профіль. Продовжити?
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setOpenRed(false)}>
              Скасувати
            </Button>
            <Button
              variant="ghost"
              className="bg-rose-700 text-white hover:bg-red-700"
              onClick={() => setOpenRed(false)}
            >
              Видалити
            </Button>
          </div>
        </div>
      </Modal>

      {/* Green */}
      <Modal
        open={openGreen}
        onClose={() => setOpenGreen(false)}
        title="Готово"
        style="green"
      >
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Badge variant="success">Успіх</Badge>
            <p className="text-sm">Налаштування збережено.</p>
          </div>
          <div className="flex justify-end">
            <Button variant="primary" onClick={() => setOpenGreen(false)}>
              OK
            </Button>
          </div>
        </div>
      </Modal>

      {/* Blue */}
      <Modal
        open={openBlue}
        onClose={() => setOpenBlue(false)}
        title="Інформація"
        style="blue"
      >
        <div className="space-y-3">
          <p className="text-sm">Доступне оновлення</p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpenBlue(false)}>
              Пізніше
            </Button>
            <Button variant="primary" onClick={() => setOpenBlue(false)}>
              Оновити
            </Button>
          </div>
        </div>
      </Modal>

      {/* Violet */}
      <Modal
        open={openViolet}
        onClose={() => setOpenViolet(false)}
        title="Деталі"
        style="violet"
      >
        <div className="space-y-3">
          <Tabs.Root defaultValue="about">
            <Tabs.List>
              <Tabs.Trigger value="about">Про</Tabs.Trigger>
              <Tabs.Trigger value="help">Допомога</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="about">
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
                quia ab reiciendis neque deleniti mollitia accusantium alias,
                dolore provident dignissimos.
              </p>
            </Tabs.Content>
            <Tabs.Content value="help">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, nobis omnis. Obcaecati, ipsum molestiae!
              </p>
            </Tabs.Content>
          </Tabs.Root>
          <div className="flex justify-end">
            <Button variant="primary" onClick={() => setOpenViolet(false)}>
              Зрозуміло
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ModalShowcase;
