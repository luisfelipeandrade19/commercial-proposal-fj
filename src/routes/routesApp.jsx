import { BrowserRouter, Routes, Route } from "react-router-dom";
import Template from "../screens/template";

function RoutesApp (){

    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/avulsos" replace />} />
            <Route path="/avulsos" element={<Template tipo='avulsos'/>} />
            <Route path="/pacotes" element={<Template tipo='pacotes'/>} />
          </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp