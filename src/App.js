import logo from './logo.svg';
import './App.css';
import axios from 'axios';
function App() {
  // param 없는거 
  const testGETParamsNone =() =>{
    console.log('test','test');
    axios.get('some Url').then((res)=>{
     console.log('res',res);
    }).catch(function(err){
      console.log('err',err);
    })
  }
  // param 있는거 
  const testGETParamsExist =() =>{
    console.log('test','test');
    axios.get('some Url',{
      params:{
        id: 'id'
      }
    }).then((res)=>{
     console.log('res',res);
    }).catch(function(err){
      console.log('err',err);
    })
  }
    const testPOST =() =>{     
      axios.post('some Url',{
        id: 'id',
        pw: 'pw'
      }).then((res)=>{
       console.log('res',res);
      }).catch(function(err){
        console.log('err',err);
      })
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={testGETParamsExist}>testGETParamsExist</button>
        <button onClick={testGETParamsNone}>testGETParamsNone</button>
        <button onClick={testPOST}>testPOST</button>
      </header>
    </div>
  );
}

export default App;
