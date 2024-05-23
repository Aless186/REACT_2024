import StiliziranaKartica from "./StiliziranaKartica";

const ListaKartica = ({ kartica }) => {
  if (!kartica || kartica.length === 0) {
    return <p>Nema sadržaja</p>;
  }
  return (
    <div className="lista-kartica">
      {kartica.map((item) => (
        <StiliziranaKartica
          item={item}
          key={item.id}
          handleDelete={(id) => console.log(id)}
        />
      ))}
    </div>
  );
};

export default ListaKartica;
