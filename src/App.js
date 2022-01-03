import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';

const cateInitialList = ['Home', 'Home 11', 'About', 'About 11', 'About 11', 'About 21', 'About 31', 'About 13', 'Mission', 'Mission 11', 'Mission 11', 'Mission 21', 'Mission 31', 'Mission 13']

function App() {
  const [navList, setNavList] = useState([
    {
      label: 'Home', submenu: [
        {
          label: 'Home 11', submenu: []
        },
      ]
    },
    {
      label: 'About', submenu: [
        {
          label: 'About 11', submenu: []
        },
        {
          label: 'About 12', submenu: [
            {
              label: "About 21", submenu: [
                {
                  label: 'About 31', submenu: []
                },
              ]
            }
          ]
        },
        {
          label: 'About 13', submenu: []
        },
      ]
    },
    {
      label: 'Mission', submenu: [
        {
          label: 'Mission 11', submenu: []
        },
        {
          label: 'Mission 12', submenu: [
            {
              label: "Mission 21", submenu: [
                {
                  label: 'Mission 31', submenu: []
                },
              ]
            }
          ]
        },
        {
          label: 'Mission 13', submenu: []
        },
      ]
    }
  ])
  const [cateList, setCateList] = useState(cateInitialList)

  const findData = (list, depth, locDepth, name, parentName) => {
    list.map(item => {
      if (depth === locDepth) {
        if (parentName === item.label) {
          item.submenu.push({
            label: name,
            submenu: []
          })
        }
      } else {
        if (item.submenu.length > 0) {
          locDepth++;
          findData(item.submenu, depth, locDepth, name, parentName)
        }
      }
    })
  }

  const addData = (name, parentName, indexDepth) => {
    let locDepth = 1;
    let copyNav = [...navList];
    copyNav.map((item, index) => {
      if (index === indexDepth.index) {
        if (indexDepth.depth === 0) {
          item.submenu.push({
            label: name,
            submenu: []
          })
        } else {
          findData(item.submenu, indexDepth.depth, locDepth, name, parentName)
        }
      }
    })
    setNavList(copyNav)
    setCateList(prev => [...prev, name])
    alert('Menu added successfully')
  }

  return (
    <div className="App">
      <Navbar list={navList} />
      <Form list={navList} addData={addData} cateList={cateList} />
    </div>
  );
}

export default App;
