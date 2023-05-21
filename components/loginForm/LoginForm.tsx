import QuickViewButton from "$store/components/quickView/QuickViewButton.tsx";
import Modal from "$store/components/ui/Modal.tsx";
import { useState } from "preact/hooks";
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
  open: boolean;
  close: () => void;
};

function LoginForm(
  { loginButton, passwordInput, userNameInput, logo, close, open }: Props,
) {
  const [submitting, setSubmitting] = useState(false);

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
      open={open}
      onClose={close}
    >
      <div className="flex justify-center mt-4 max-w-[220px] mx-auto">
        <Image
          src={logo?.src || ""}
          alt={logo?.alt}
          width={logo?.width || 200}
          height={logo?.height}
        />
      </div>
      <form
        className="flex flex-col gap-4 p-12 min-w-[300px] sm:min-w-[500px]"
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
        <QuickViewButton
          square
          loading={submitting}
          onClick={onSubmit}
          type="submit"
          className="bg-blue-500 text-white"
        >
          {loginButton.label}
        </QuickViewButton>
      </form>
    </Modal>
  );
}

export default LoginForm;
