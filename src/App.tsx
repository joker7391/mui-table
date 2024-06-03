import './index.css'
import SimpleTable from "./components/SimpleTable";
import DataTable from "./components/DataTable";

function App() {
  return (
    <div style={{ backgroundColor: "#1c1c1c" }}>
      <div>
        <SimpleTable />
        <br />
        <DataTable />
      </div>
    </div>
  );
}

export default App;
