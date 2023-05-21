import type { JSX } from "preact";
import { useState } from "preact/hooks";

export interface Props {
  title: string;
  description: string;
  buttonText: string;
}

function Newsletter({
  title = "",
  description = "",
  buttonText = "",
}: Props) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit: JSX.GenericEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1000);
    console.log("Newsletter submited.");
  };

  return (
    <div className="max-w-[90%] sm:max-w-[80%] mx-auto outline outline-base-500 flex flex-col items-center py-10 px-5 my-5 text-center">
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-sm">{description}</p>
      <form
        class="form-control justify-start gap-2 w-full sm:max-w-[70%] mt-4"
        onSubmit={handleSubmit}
      >
        <input
          placeholder="Nome"
          class="input input-bordered rounded-none"
          name="name"
        />
        <input
          placeholder="Email"
          class="input input-bordered rounded-none text-base-500"
          name="email"
        />

        <button
          class="btn btn-outline rounded-none disabled:loading"
          type="submit"
          disabled={loading}
        >
          {buttonText}
        </button>
      </form>
      {sent
        ? (
          <p className="text-md my-4 text-green-600">
            E-mail cadastrado com sucesso, obrigado!
          </p>
        )
        : null}

      <button></button>
    </div>
  );
}

export default Newsletter;
