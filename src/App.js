import { useState } from 'react';
import './App.css';
import TabInfoOne from './Tabs/TabInfoOne';
import TabInfoTwo from './Tabs/TabInfoTwo';
import TabInfoThree from './Tabs/TabInfoThree';
import Tabs from './Tabs/Tabs';


function App() {
const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="App">
<Tabs setActiveTab={setActiveTab} />
{activeTab ===0 && <TabInfoOne/>}
{activeTab ===1 && <TabInfoTwo/>}
{activeTab ===2 && <TabInfoThree/>}
    </div>
  );
}

export default App;
