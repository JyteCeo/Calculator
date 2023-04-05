import Calculation from '../calculation.components';
import './history.styles.css'


function History({ history }) {
  return (
    <div className="history">
      {history.map((calculation, index) => (
        <Calculation
          key={index}
          input={calculation.input}
          result={calculation.result}
        />
      ))}
    </div>
  );
}

export default History;
