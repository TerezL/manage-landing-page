export function EmailInput({ value, onChange, error, placeholder }) {
  return (
    <div className="w-full">
      <input
        className={`p-2 w-full rounded-full bg-white text-black border transition ${
          error ? "border-2 border-red-500" : "border-neutral-300"
        }`}
        type="email"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {/* FIX: rezervovaný prostor = žádné skákání layoutu */}
      <div className="min-h-[20px] mt-1">
        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    </div>
  );
}