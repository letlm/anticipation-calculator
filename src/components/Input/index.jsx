import { Container, Context } from "./styles";

function Input({ label, register, name, error, span, ...rest }) {
  return (
    <Container>
      <section>
        {label} {!!error && <span className="error">{error}</span>}
      </section>
      <Context isError={!!error}>
        <input {...register(name)} {...rest} />
      </Context>
      <span className="max">{span}</span>
    </Container>
  );
}

export default Input;
