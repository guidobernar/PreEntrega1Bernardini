
import PropTypes from 'prop-types';

function ItemListContainer({ greeting }) {
  return (
    <div className="container">
      <h2>{greeting}</h2>
      <p>Quedate atento a las novedades.</p>
      <p>En breves nuestra web estara disponible para que podamos ayudarte a crecer en el ambiente profesional.</p>
      <div className="container">
        <h2>{greeting}</h2>
        <p>Suscribite a las novedades.</p>
        <p>Por favor, ingresa tu correo electrónico:</p>
        <input type="email" placeholder="example@example.com" />
        <button type="submit">Enviar</button>
      </div>
    </div>
  );
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;


