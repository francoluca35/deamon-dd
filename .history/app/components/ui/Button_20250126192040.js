export const Button = ({ children, className, ...props }) => (
    <button
      className={`px-4 py-2 rounded-lg transition focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
  