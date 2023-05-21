import Button from "$store/components/ui/Button.tsx";
import { effect } from "@preact/signals-core";
import Modal from "$store/components/ui/Modal.tsx";
import { useState } from "preact/hooks";
import { createAppState } from "$store/sdk/global.ts";
import Image from "deco-sites/std/components/Image.tsx";

export type Props = {
  logo?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  userNameInput: {
    label: string;
    placeholder: string;
  };
  passwordInput: {
    label: string;
    placeholder: string;
  };
  loginButton: {
    label: string;
  };
};

function LoginForm(
  { loginButton, passwordInput, userNameInput, logo }: Props,
) {
  const [submitting, setSubmitting] = useState(false);
  const state = createAppState();

  const close = () => {
    state.displayLoginForm.value = false;
  };

  function onSubmit(event: Event) {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      close();
    }, 2000);
  }

  return (
    <Modal
      title="Faça seu login"
      mode="center"
      loading="lazy"
      open={state.displayLoginForm.value}
      onClose={close}
    >
      <div className="flex justify-center mt-4">
        <Image
          src={logo?.src || ""}
          alt={logo?.alt}
          width={logo?.width || 200}
          height={logo?.height}
        />
      </div>
      <form
        className="flex flex-col gap-4 p-12"
        onSubmit={(event) => {}}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-base font-semibold">
            {userNameInput.label}
          </label>
          <input
            id="username"
            name="username"
            type="text"
            placeholder={userNameInput.placeholder}
            className="border border-base-300 p-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-base font-semibold">
            {passwordInput.label}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder={passwordInput.placeholder}
            className="border border-base-300 p-2"
          />
        </div>
        <Button
          loading={submitting}
          onClick={onSubmit}
          type="submit"
          className="bg-blue-500 text-white"
        >
          {loginButton.label}
        </Button>
      </form>
    </Modal>
  );
}

export default LoginForm;
