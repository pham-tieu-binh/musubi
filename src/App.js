import './App.css';
import Menu from './Menu.js';
//import Staff from './Staff';
import Adminmenu from './Adminmenu.js';



function App() {
  return (
    <div id='Appcontainer'>
      <div className='Appcontainer-one'>
        <div className='img'>
          <div className='page-title'>
            <h1>かいごのひとみ</h1>
            <h2>株式会社　Musubi</h2>
          </div>
        </div>
        <div className='pagecontainer'>
          <div className='Staff'>
          </div>
          <div className='Menu1'>
            <Menu />
            <Adminmenu />
          </div>

        </div>
      </div>

    </div >

  );
}

export default App;
