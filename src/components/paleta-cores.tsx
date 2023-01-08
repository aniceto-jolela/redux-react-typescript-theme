import { useState } from "react";
import { useDispatch } from "react-redux";
import { codeCores } from "../store/actions/code-cores.action";
import { theme } from "../store/actions/theme.action";


const PaletaCores = () => {
  const [checked, setChecked] = useState();
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Paleta de cores</h2>
      <div>
        <input
          type="color"
          name="rgb"
          id=""
          disabled={checked ? false : true}
          onChange={(e: any) => {
            console.log(e.target.value);
            dispatch(codeCores(e.target.value))
            dispatch(theme(e.target.value+'42',e.target.value,'#fff' || '#000'))
          }}
        />
      </div>
      <h6>
        Theme
        <input
          type="checkbox"
          name="theme"
          onClick={(e: any) => {
            setChecked(e.target.checked);
          }}
        />
      </h6>
    </div>
  );
};

export default PaletaCores;
