import React ,{ Component } from 'react'
import firebase from './firebase'
// import storage from './firebase';
export class App extends Component{
  constructor(props){
    super(props);
    this.state={
      files:null
    }
  }
  handleChange=(files)=>{
    this.setState(
      {
        files:files
      }
    )
  }
  handleSave=()=>{
    let bucketName='images/1234-123-123-1234'
    let file=this.state.files[0]
    let storageRef=firebase.storage().ref(`${bucketName}/${file.name}`)
    let uploadTask=storageRef.put(file)
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      ()=>{
        let downloadURL=uploadTask.snapshot.downloadURL;
        let temp=storageRef.getDownloadURL().then((url)=>{ console.log(url);});
        console.log("temp ");
        console.log(temp);
        // console.log(downloadURL);
      })
  }
  showImage=()=>{
    let storageRef=firebase.storage().ref()
    let spaceRef=storageRef.child('images/1234-123-123-1234/'+this.state.files[0].name)
    storageRef.child('images/1234-123-123-1234/'+this.state.files[0].name).getDownloadURL().then((url)=>{
      console.log(url)
      document.getElementById('new-img').src=url
    })
  }
  render()
  {
    return(
      <div>
        <input type="file" onChange={(e)=>{this.handleChange(e.target.files)}}></input>
        <button onClick={this.handleSave}>Save</button>
        <button onClick={this.showImage}>Show Image</button>
        <video id="new-img" width="320" height="240" controls autoplay muted>
        <source src={this.showImage} type="video/mp4"/>
        </video>
        {/* <img id="new-img"></img> */}
      </div>
    )
  }
}
export default App;
