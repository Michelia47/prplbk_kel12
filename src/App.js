import React, {useState} from 'react';
import './App.css';
import ReactJSX, {ReactNoJSX} from './components/ReactJSX';
import CompAndProps from './components/CompAndProps';
import Button from './elements/Button';
import TextInput from './elements/TextInput';
function App() {

    const [inputValue, setInputValue] = useState('');
    const [hasil, setHasil] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const tampilkanHasil = (event) => {
        event.preventDefault();
        setHasil(inputValue);
    };
 return (
 <div className="App">
 <header className="App-header">
 <ReactJSX />
 <ReactNoJSX />
 <div className="Components">
 <CompAndProps bgColor="black"/>
 
 <form onSubmit = {tampilkanHasil}>
 <TextInput border="skyblue" placeholder="Nama" value={inputValue} onChange={handleInputChange}/>
 <Button background="black" type='submit'>Kirim</Button>
 <div>{hasil}</div>
 </form>
 
 </div>

 </header>
 </div>
 );
}
export default App;
