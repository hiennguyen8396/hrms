import React, { Component } from 'react';
import '../App.css';

import Task from './task'
class Kanban extends Component {
	render() {
		return (
			<div className="o_kanban_view o_kanban_small_column o_kanban_project_tasks o_kanban_grouped ui-sortable">
				<div className="o_kanban_group ui-sortable o_kanban_has_progressbar">
					<div className="o_kanban_header">
					    <div className="o_kanban_header_title" data-delay={500}>
					        <span className="o_column_title">To Do</span>
					        <span className="o_column_unfold"><i className="fa fa-arrows-h" /></span>
					        <span className="o_kanban_quick_add"><i className="fa fa-plus" /></span>
					    </div>
					    <div className="o_kanban_counter">
					        <div className="o_kanban_counter_progress progress">
					            <div data-filter="done" className="progress-bar bg-success-full" data-original-title="0 done" style={{}} />
					            <div data-filter="blocked" className="progress-bar bg-danger-full" data-original-title="0 blocked" style={{}} />
					        </div>
					        <div className="o_kanban_counter_side"><b>2</b></div>
					    </div>
					</div>
					<Task></Task>
					<Task></Task>
				</div>
			</div>
		);
	}
}

export default Kanban;
