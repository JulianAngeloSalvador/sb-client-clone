export default function FormButton({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <button className="bg-secondary text-primary self-center py-3 px-8 text-center rounded-lg">
      {children}
    </button>
  );
}
