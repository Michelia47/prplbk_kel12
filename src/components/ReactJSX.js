import React from 'react';
const praktikan = {
    kelompok : 'Kelompok 12',
};
function greetings(praktikan){
    return praktikan.kelompok;
}
//menggunakan JSX
const ReactJSX = () => {
    return (
    <div>
        <h1>Praktikum RPLBK</h1>
        <h2>{greetings(praktikan)}</h2>
        </div>
        );
    }
    //tidak menggunakan JSX
    const ReactNoJSX = () => {
    }
export default ReactJSX;
export {ReactNoJSX};