const Contact = () => {
  return (
    <div>
      <h1 className="p-4 m-4 font-bold text-3xl">Contact Us Page</h1>
      <form>
        <input placeholder="name" className="p-3 m-3 border border-black rounded-md " />
        <input placeholder="message" className="p-3 m-3 border border-black" />
        <button className="p-3 m-3 bg-gray-300 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
