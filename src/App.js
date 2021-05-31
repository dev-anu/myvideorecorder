import './App.css';
import useScreenRecording from "use-screen-recording";
import { saveAs } from 'file-saver';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const { isRecording, recording, toggleRecording,stopRecording } = useScreenRecording();
  const randomNum = uuidv4();
  const saveFile=()=>{
    stopRecording();
    saveAs(recording, `${randomNum}.mp4`);
  }

  return (
     <div>
      <button onClick={toggleRecording}>
        {isRecording ? "Stop" : "Start Recording"}
      </button>
      <button onClick={saveFile}>Save File</button>
 
      {!!recording && (
        <video autoPlay src={recording && URL.createObjectURL(recording)} />
      )}
    </div>
  );
}

export default App;
