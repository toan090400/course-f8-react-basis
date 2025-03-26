const Index = ({ image, avata }) => {
  return (
    <div className="Index">
      <h1>useEffect</h1>

      <input type="file" onChange={image} />
      {avata && <img src={avata} alt="" style={{ width: 500 }} />}
    </div>
  );
};
export default Index;
