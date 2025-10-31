import React from "react";
import { Button } from "../../components/Button";
import { ToastProvider, useToast } from "../../components/Toast";
import { Form, useForm } from "../../components/Form/Form";
import { CheckboxField, InputField, RadioGroupField, SelectField } from "../../components/Form/FormFields";

type ProfileForm = {
  fullName: string;
  email: string;
  gender: string;
  agree: boolean;
  role: string;
};

const initial: ProfileForm = {
  fullName: "",
  email: "",
  gender: "male",
  agree: false,
  role: "student"
};

const rules = {
  fullName: { required: true, minLen: 2 },
  email: { required: true, email: true },
  agree: { required: "Підтвердіть згоду" },
};

const roleOptions = [
  { label: "Вчусь", value: "student" },
  { label: "Працюю", value: "worker" },
  { label: "Керівник компанії", value: "ceo" },
];

const FormShowcase: React.FC = () => {
  const form = useForm<ProfileForm>(initial, rules);
  const { success } = useToast();
  const submit = (vals: ProfileForm) => {
    console.log("submit:", vals);
    success(`${form.values.fullName}! Account create!`);
    form.reset(initial);
  };

  return (
    <div className="max-w-[350px]">
      <Form
        form={form}
        onSubmit={submit}
        className="space-y-4 p-4 bg-slate-100 border-slate-300 border rounded-xl"
      >
        <InputField
          form={form}
          name="fullName"
          label="Повне імʼя"
          placeholder="Іван Петренко"
        />
        <InputField
          form={form}
          name="email"
          label="Email"
          type="email"
          placeholder="name@example.codm"
        />

        <RadioGroupField
          form={form}
          name="gender"
          label="Стать"
          options={[
            { label: "Чоловік", value: "male" },
            { label: "Жінка", value: "woman" },
          ]}
        />

<SelectField
          form={form}
          name="role"
          label="Роль (Select)"
          options={roleOptions}
          placeholder="Оберіть роль"
        />

        <div className="flex gap-2 items-center">
          <CheckboxField form={form} name="agree" label="Погоджуюсь з умовами"/>
        </div>

        <div className="pt-2 flex gap-2 justify-center">
          <Button type="submit" variant="primary">
            Надіслати
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => form.reset(initial)}
          >
            Скинути
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default FormShowcase;
