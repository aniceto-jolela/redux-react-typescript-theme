import { useSelector } from "react-redux";
import PaletaCores from "./paleta-cores";

const Home = () => {
  const codig = useSelector((state:any)=>state.codigo)
  const theme = useSelector((state:any)=>state.theme)

  return (
    <div style={{ backgroundColor: theme[0]==='#'?theme:theme[0], padding: 10 }}>
      <PaletaCores />
      <div
        style={{ backgroundColor: theme[1], minHeight: 400, borderRadius: 80 }}
      >
        <div style={{ textAlign: "center", fontSize: 25, paddingTop: 180 }}>
          <span style={{color:theme[2]}}>Código da cor</span> <br />
          <span style={{fontSize:12}}>{codig}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
