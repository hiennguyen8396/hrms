import React, { Component } from 'react';


import Navbar from './components/navbar'
import ControlPanel from './components/controlPanel'
import Project from './components/project'
import ControlPanelTask from './components/controlPanelTask'
import Kanban from './components/kanban'

class App extends Component {
	render() {
		return (
			<div>
				<Navbar></Navbar>
				<ControlPanel></ControlPanel>
				<div className="o_content">
					<div className="o_view_manager_content">
						<Kanban></Kanban>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
