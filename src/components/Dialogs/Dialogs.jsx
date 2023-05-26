import React from "react";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = 
  props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messageElements = 
  props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id} />);
  
  let newMessageElement= React.createRef()

	let addMessage = () => {
		props.addMessage()
	}

  let onMessageChange =()=>{
		let texts = newMessageElement.current.value
		props.updateNewMessageText(texts)
  }

  return (
    <div className={s.dialogs}>
      <div>{dialogElements}</div>
      <div className={s.messages}>
				<div>{messageElements}</div>
			<textarea onChange={onMessageChange}
                ref={newMessageElement} 
                value={props.newMessageText}/>
			<div><button onClick={addMessage}>Send</button></div>
			</div>
    </div>
  );
};

export default Dialogs;
