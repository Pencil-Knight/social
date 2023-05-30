let renderEntireTree = ()=>{
	console.log('State is changed')
}

let state = {
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
		newMessageText: 'Rabotay',
},
};

export const addPost = () => {
	let newPost = {id: 5, 
		message: state.profilePage.newPostText, 
		likeCount:0};
state.profilePage.posts.push(newPost)
state.profilePage.newPostText = ''
renderEntireTree(state)
}

export const updateNewPostText = (newText) => {
	state.profilePage.newPostText = newText
	renderEntireTree(state)
}

export const addMessage = () => {
	let newMessage = {id: 7, 
		message: state.dialogsPage.newMessageText };
state.dialogsPage.messages.push(newMessage)
state.dialogsPage.newMessageText = ''
renderEntireTree(state)
}

export const updateNewMessageText = (newMessage) => {
	state.dialogsPage.newMessageText = newMessage
	renderEntireTree(state)
	}

export const subscribe =(observer)=>{
	renderEntireTree = observer
}


export default state