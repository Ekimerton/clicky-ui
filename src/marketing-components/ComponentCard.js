const ComponentCard = ({ title, number, description, children, standout }) => (
  <div
    className={`p-4 ${
      standout
        ? "bg-transparent border border-dashed border-neutral-300"
        : "bg-white border border-neutral-200"
    } rounded-none flex flex-col justify-between h-[320px] max-lg:h-[240px]`}
  >
    <div>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-normal text-neutral-900">{title}</h3>
        <span className="text-orange-500 font-mono text-sm">
          {number.padStart(2, "0")}
        </span>
      </div>
      {typeof description === "string" ? (
        <p className="text-sm text-neutral-600 font-light">{description}</p>
      ) : (
        description
      )}
    </div>
    <div className="pt-4 flex justify-center items-center h-[80px]">
      {children}
    </div>
  </div>
);

export default ComponentCard;
