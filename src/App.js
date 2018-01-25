import React, { Component } from 'react';


import Navbar from './components/navbar'
import ControlPanel from './components/controlPanel'
import Project from './components/project'
import ControlPanelTask from './components/controlPanelTask'
import Kanban from './components/kanban'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			pageContent : 1,
			project : 'Cao ốc Minh Long',
			stationId : 'VLG001',
			address : '58 Võ Văn Tần, Quận 3'
		};
	}
	changeContent = (value)=>{
		this.setState({
			pageContent : value
		})
	}

	render() {

		const {project} = this.state
		const pageContent = this.state.pageContent === 1 ?  <Project 
													project = {this.state.project}
													stationId = {this.state.stationId}
													address = {this.state.address}
													contentReceive = {this.changeContent} >
													</Project> 
													:  <Kanban></Kanban>
		const controlPanel = this.state.pageContent === 1 ? <ControlPanel></ControlPanel>
															: <ControlPanelTask project></ControlPanelTask>
		return (
			<div>
				<Navbar></Navbar>
				{controlPanel}
				<div className="o_content">
					<div className="o_view_manager_content">
						{pageContent}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
