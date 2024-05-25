// import "../index.css";
export default function Card(props) {
  const { clothes } = props;
  return (
    <>
      <div class="cards-view">
        <div class="cards col-3 mg-4">
          <div class="card">
            <h4>{clothes.name}</h4>
            <small>Information</small>
            <p>{clothes.price}</p>
            <img src={clothes.image.src} alt={clothes.image.alt} style={{width:"400px", height:"400px"}}/>
          </div>
        </div>
      </div>
    </>
  );
}
