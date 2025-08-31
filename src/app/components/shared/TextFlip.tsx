export default function TextFlip({ text }: { text: string }) {
  return (
    <p className="inline-flex items-center justify-center">
      {text.split("").map((char, i) => (
        <span
          key={char + i}
          className="relative group transition-all overflow-hidden">
          <span className="group-hover:opacity-0 duration-175 ease-in-out">
            {char}
          </span>
          <span className="absolute top-full left-1/2 -translate-x-1/2  group-hover:-translate-y-full z-10 duration-175 ease-in-out opacity-0 group-hover:opacity-100">
            {char}
          </span>
        </span>
      ))}
    </p>
  );
}
