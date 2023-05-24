import React from "react";
import DialogItem from "./DialogItem/DialogsItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messageElemrnts = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

	let addMessage = (props) => {
		let text = newMessageElement.current.value
		alert(text)
	}

	let newMessageElement= React.createRef()

  return (
    <div className={s.dialogs}>
      <div>{dialogElements}</div>
      <div className={s.messages}>
				<div>{messageElemrnts}</div>
			<textarea ref={newMessageElement}></textarea>
			<div><button onClick={addMessage}>Send</button></div>
			</div>
    </div>
  );
};

export default Dialogs;
