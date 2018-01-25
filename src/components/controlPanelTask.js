import React, { Component } from 'react';
import '../App.css';


class ControlPanelTask extends Component {
	render() {
		return (
			<div className="o_control_panel">
			    <ol className="breadcrumb">
			        <li className="hidden-xs"><a>Projects</a></li>
			        <li className="o_back_button"><a>Tasks</a></li>
			        <li className="active">Tasks</li>
			    </ol>
			    <div className="o_cp_searchview" >
			        <div className="o_searchview">
			            <div className="o_searchview_facet" >
			                <span className="o_searchview_facet_label">
			                Project
			              </span>
			                <div className="o_facet_values">
			                    <span>
			                  Data Import/Export Plugin
			                </span>
			                </div>
			                <div className="fa fa-sm fa-remove o_facet_remove" />
			            </div>
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
			        <div className="o_cp_sidebar" />
			    </div>
			</div>
		);
	}
}

export default ControlPanelTask;
