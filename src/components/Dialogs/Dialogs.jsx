import React from "react";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />
  );
  let messageElements = props.dialogsPage.messages.map(m => <Message messages={m.messages} id={m.id} />
  );
  
  let newMessageElement= React.createRef()

	let addMessage = () => {
		props.addMessage()
    alert(addMessage)
	}

  let onMessageChange =()=>{
		let text = newMessageElement.current.value
		props.updateNewMessageText(text)
  }

  return (
    <div className={s.dialogs}>
      <div>{dialogElements}</div>
      <div className={s.messages}>
				<div>{messageElements}</div>
			<textarea ref={newMessageElement}></textarea>
			<div><button onClick={addMessage}>Send</button></div>
			</div>
    </div>
  );
};

export default Dialogs;
