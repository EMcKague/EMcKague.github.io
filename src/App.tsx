import * as React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
// styles
import { GlobalStyle } from './App.styles'

// type content = {state: string};
// const test = ({state}: content) => <div>{state}</div>

const App = () => {

  const [selectedMode, setSelectedMode] = React.useState('aboutMe')
  return (
  <>
    <GlobalStyle />
    <div className='App'>
      <Header setSelectedMode={setSelectedMode}/>
      <Body selectedMode={selectedMode}/>
      <Footer />
    </div>
  </>
  )

}

export default App;
