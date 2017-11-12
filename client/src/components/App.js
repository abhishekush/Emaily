import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <h1>Header</h1>;
const Landing = () => <h1>Landing</h1>;
const Survey = () => <h1>Survey</h1>;

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Landing} />
					<Route path="/survey" component={Survey} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
