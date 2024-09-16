
import { useEffect } from "react";
import { Rutas } from "./application/Rutas.jsx";
import $ from 'jquery';


function App() {

  useEffect(() => {
    $(document).ready(function() {
      console.log('jQuery está funcionando');
    });
  }, []);

  return (
    <>
      <Rutas />
    </>
  );
}

export default App;
