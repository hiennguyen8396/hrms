import React, { Component } from 'react';
import '../App.css';


class ControlPanel extends Component {
	render() {
		return (
			<div className="o_control_panel">
				<ol className="breadcrumb">
					<li className="active">Dự án</li>
				</ol>
				<div className="o_cp_searchview" style={{display: 'flex'}}>
					<div className="o_searchview">
						<span className="o_searchview_more fa fa-search-plus" title="Advanced Search..." />
						<input className="o_searchview_input" placeholder="Search..." type="text" />
					</div>
				</div>
				<div className="o_cp_left">
					<div className="o_cp_buttons">
						<div>
							<button className="btn btn-primary btn-sm o-kanban-button-new" type="button">
								Create
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ControlPanel;
