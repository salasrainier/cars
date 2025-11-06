export default function PrimaryButton({ label, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={
        "px-6 py-3 rounded-lg text-white font-semibold bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-md transition-all duration-200 " +
        className
      }
    >
      {label}
    </button>
  );
}
