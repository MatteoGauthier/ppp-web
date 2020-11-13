export default function Title({ children, as, color }) {
  const textColor = color == "white" ? "text-white" :  "text-black-side"
  return (
    <>
      {as == "h1" ? (
        <h1 className={`text-6xl font-bold leading-tight font-display ${textColor}`}>{children}</h1>
      ) : (
        <h2 className={`text-6xl font-bold leading-tight font-display ${textColor}`}>{children}</h2>
      )}
    </>
  );
}
