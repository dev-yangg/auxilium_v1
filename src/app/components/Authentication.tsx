import AppLogo from "./AppLogo";
import InputField from "./InputField";

export default function Authentication() {
  return (
    <section className="w-[min(350px,100%-2em)] flex flex-col gap-4 outline rounded-lg">
      <header className="h-[var(--text-title)] relative">
        <h4 className="bg-primary px-4 text-center font-megrim font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-[calc(50%+(var(--text-title)/2))]">
          <span className="inline">Auxilium</span>
        </h4>
      </header>
      <form action="" className="flex flex-col px-8 pb-9 pt-2 gap-y-4">
        <InputField
          inputName="username"
          id="username"
          label="Username or Email"
        />
        <InputField
          type="password"
          inputName="password"
          id="password"
          label="Password"
        />
        <button
          type="submit"
          className="bg-secondary text-primary translate-y-2 hover:-translate-y-0 transition-all duration-300 ease-in-out font-semibold py-2 rounded-md mt-1 outline outline-primary -outline-offset-3">
          Log in
        </button>
      </form>
    </section>
  );
}
