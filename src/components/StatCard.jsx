

const StatCard = ({ recruiterStats }) => {
  return (
    <div>
      <div className="relative grid gap-6 md:grid-cols-4">
        {recruiterStats.map((item) => (
          <div
            key={item.label}
            className="
                w-full
                rounded-2xl
                border
                border-mauve-500
                bg-[#151516]
                p-7
                backdrop-blur-xl
                
              "
          >
            {" "}
            <p className="text-xl p-3 border rounded-lg bg-gray-800 w-fit">
              {item.icon}
            </p>
            <p className="mt-6 text-xs">{item.label}</p>
            <h3 className="mt-3 text-3xl font-semibold">{item.value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCard;
