const App = () => {
  const generate = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = form[0].value;
    alert(data);
    // console.log(form.data.value);
    form[0].value = "";
  };
  return (
    <>
      <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
        <div className="bg-white p-8 w-[450px] shadow-xl rounded-lg space-y-8">
          <h1 className="text-2xl font-bold">Bcrypt Generator</h1>
          <form className="flex flex-col  gap-5" onSubmit={generate}>
            <input
              name="data"
              required
              placeholder="Enter string here"
              className="border border-gray-300 rounded p-3"
            />
            <button className="bg-indigo-600 py-3 px-7 cursor-pointer text-white w-fit rounded">
              Generate
            </button>
          </form>
          <div className="bg-green-700 p-3 rounded text-white ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            amet voluptas accusamus quas dignissimos eum nemo asperiores
            quisquam ducimus repellendus. Quasi amet minus iste nesciunt, dolor
            illo ducimus dicta nihil?
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
