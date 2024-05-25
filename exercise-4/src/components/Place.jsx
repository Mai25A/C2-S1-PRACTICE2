export default function Place(props) {
  const {place} = props;
  console.log({place});
  return (
    <li key="the place id" className="place-item">
      <button>
        <img src={place.image.src} alt={place.image.alt} />
        <h3>{place.title}</h3>
      </button>
    </li>
  );
}
