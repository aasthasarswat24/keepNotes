import { useState } from 'react';
import CreateNote from './components/CreateNote';
import Footer from './components/Footer';
import Header from './components/Header';
import Note from './components/Note';

const App = () => {
	const [addItem, setAddItem] = useState<any>([]);
	const addNote = (note: any) => {
		//alert("i am clicked");
		setAddItem((prevData: any) => {
			return [...prevData, note];
		});
		console.log(note);
	};
	const onDelete = (id: any) => {
		setAddItem((prevData: any) =>
			prevData.filter((currdata: any, index: number) => {
				return index !== id;
			})
		);
	};
	return (
		<>
			<Header />
			<CreateNote passNote={addNote} />
			{addItem.map((val: any, index: number) => {
				return (
					<Note
						key={index}
						id={index}
						title={val.title}
						content={val.content}
						deleteItem={onDelete}
					/>
				);
			})}
			<Footer />
		</>
	);
};

export default App;
