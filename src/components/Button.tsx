type Props = {
  onClick: () => void;
  children: React.ReactNode;
  classNames?: string;
  loading?: boolean;
};

export default function Button({
  onClick,
  children,
  classNames,
  loading,
}: Props) {
  return (
    <button
      disabled={!!loading}
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${classNames}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
