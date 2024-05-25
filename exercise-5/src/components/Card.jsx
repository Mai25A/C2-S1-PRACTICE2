import "../index.css";
export default function Card(props) {
  const { clothes } = props;
  return (
    <>
      <div class="cards-view">
        <div class="cards-grid">
          <div class="card">
            <h4>{clothes.name}</h4>
            <small>Information</small>
            <p>{clothes.price}</p>
            <img src={clothes.image.src} alt={clothes.image.alt} />
          </div>
        </div>
      </div>
    </>
  );
}
