import express from 'express';

const app = express();

app.get('/', (req, res) => {
	res.send(200, edwin.friendsList());
})

class Person {
	constructor(name, friends) {
		this.name = name;
		this.friends = friends;
	}

	friendsList() {
		var str = `Mis amigos son: ${ this.friends.join(', ') }`;
		console.log(str);
		return str;
	}
}

var edwin = new Person('Edwin', ['Alan', 'Dario', 'Martin']);

app.listen(3000);