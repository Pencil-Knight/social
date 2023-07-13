let store ={
	_state : {
		profilePage:{
			posts: [
			{id: 1, message: "Hi, how are you?", likeCount: 12},
			{id: 2, message: "What are you doing today?", likeCount: 17},
			{id: 3, message: "Hahaha", likeCount: 17},
			{id: 4, message: "Blalalal", likeCount: 17},],
			newPostText: 'Kurva bobr',
	},
		dialogsPage: {
		dialogs: [
			{ id: 1, name: "Denis" },
			{ id: 2, name: "Mama" },
			{ id: 3, name: "Anton" },
			{ id: 4, name: "Nastya" },
			{ id: 5, name: "Maksouni" },],
		messages: [
			{ id: 1, message: "Hello" },
			{ id: 2, message: "How are you today?" },
			{ id: 3, message: "YYo" },
			{ id: 4, message: "Yoyoyo" },
			{ id: 5, message: "Alahu-akbar" },
			{ id: 6, message: "N.H.Y." },],
			newMessageText: 'Rabotay',},
	},

	getState(){
		return this._state
	},

	_callSubscriber () {
		console.log('State is changed')
	},
	addPost () {
		let newPost = {id: 5, 
			message: this._state.profilePage.newPostText, 
			likeCount:0};
			this._state.profilePage.posts.push(newPost)
			this._state.profilePage.newPostText = ''
	this._callSubscriber(this._state)
	},
	updateNewPostText (newText) {
		this._state.profilePage.newPostText = newText
		this._callSubscriber(this._state)
	},
	addMessage () {
		let newMessage = {id: 7, 
			message: this._state.dialogsPage.newMessageText };
			this._state.dialogsPage.messages.push(newMessage)
			this._state.dialogsPage.newMessageText = ''
	this._callSubscriber(this._state)
	},
	updateNewMessageText (newMessage) {
		this._state.dialogsPage.newMessageText = newMessage
		this._callSubscriber(this._state)
		},
		subscribe (observer) {
			this._callSubscriber = observer
		},

}

export default store