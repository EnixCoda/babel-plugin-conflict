import React from 'react'
import './App.css'
import { Button1 } from './Button-1'
import { Button2 } from './Button-2'
// import { Button3 } from './Button-3'

function App() {
  return (
    <div>
      <div>
        <h3>This button's file use babel-plugin-import without babel-plugin-styled-components.</h3>
        <code>
          {`import { Button } from 'antd'
            <Button>OK</Button>`}
        </code>
        <br />
        <Button1 />
      </div>
      <hr />
      <div>
        <h3>This button's file use babel-plugin-styled-components without babel-plugin-import.</h3>
        <code>{`<button css="width: 100px;">OK</button>`}</code>
        <br />
        <Button2 />
      </div>
      <hr />
      <div>
        <h3>This button's file use both.</h3>
        <p>
          This button's code is now commented out. Page will crash if un-comment this button's code
          as two plugins conflicts.
        </p>
        <code>
          {`import { Button } from 'antd'
            <Button css="width: 100px;">OK</Button>`}
        </code>
        <br />
        {/* <Button3 /> */}
      </div>
    </div>
  )
}

export default App
