import ChangeScenary from "../../components/ChangeScenery";
import FormCalculator from "../../components/Form";
import Infos from "../../components/Infos";
import { Container } from "./styles";

function Dashboard() {
  return (
    <Container>
      <ChangeScenary />
      <div className="container-center">
        <FormCalculator />
        <Infos />
      </div>
    </Container>
  );
}

export default Dashboard;
