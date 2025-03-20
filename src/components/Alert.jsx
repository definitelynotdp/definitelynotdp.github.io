const Alert = ({ type, text }) => {
  return (
      <div className='absolute top-10 left-0 right-0 flex justify-center items-center'>
          <div
              className={`p-2 ${
                  type === "danger" ? "bg-amber-950" : "bg-emerald-900"
              } items-center text-amber-100 leading-none lg:rounded-lg flex lg:inline-flex border-2 ${
                  type === "danger" ? "border-red-700" : "border-emerald-700"
              } shadow-md`}
              role='alert'
          >
              <p
                  className={`flex rounded-lg ${
                      type === "danger" ? "bg-red-700" : "bg-emerald-700"
                  } uppercase px-3 py-1 text-xs font-semibold mr-3 border ${
                      type === "danger" ? "border-red-900" : "border-emerald-900"
                  } shadow-inner`}
              >
                  {type === "danger" ? "Curse" : "Blessing"}
              </p>
              <p className='mr-2 text-left font-cinzel italic'>{text}</p>
          </div>
      </div>
  );
};

export default Alert;
