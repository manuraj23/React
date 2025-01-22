import './app.css'
import Products from './componets/product';

function App(){
    // const p=document.createElement('p');
    // p.textContent='This is demo Paragraph';
    // // return <h2>This is app component</h2>
    let msg='awesome';
    // return <div>
    //     <h1 className="myHeader">Hello</h1>
    //     <p className="myParagraph">This is my first component {10 + 5} {msg}</p>
    //     </div>;
    return <Products></Products>
}

export default App;