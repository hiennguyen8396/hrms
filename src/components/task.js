import React, { Component } from 'react';
import '../App.css';


class Task extends Component {
	render() {
		return (
			<div className="oe_kanban_color_0 oe_kanban_card oe_kanban_global_click o_kanban_record ui-sortable-handle">
			    <div className="oe_kanban_content">
			        <div className="o_kanban_record_top">
			            <div className="o_kanban_record_headings">
			                <strong className="o_kanban_record_title"><span>Data import + Doc</span></strong>
			                <br />
			                <small className="o_kanban_record_subtitle text-muted">
			                <span><i><span /></i></span>
			              </small>
			            </div>
			            <div className="o_dropdown_kanban dropdown">
			                <a className="dropdown-toggle btn" data-toggle="dropdown" href="#">
			                <span className="fa fa-ellipsis-v" />
			              </a>
			                <ul className="dropdown-menu" role="menu" aria-labelledby="dLabel">
			                    <li><a data-type="edit" href="#" className=" oe_kanban_action oe_kanban_action_a">Edit Task</a></li>
			                    <li><a data-type="delete" href="#" className=" oe_kanban_action oe_kanban_action_a">Delete</a></li>
			                </ul>
			            </div>
			        </div>
			        <div className="o_kanban_record_body">
			            <div className="o_field_many2manytags o_field_widget o_kanban_tags" name="tag_ids" />
			        </div>
			        <div className="o_kanban_record_bottom">
			            <div className="oe_kanban_bottom_left">
			            </div>
			            <div className="oe_kanban_bottom_right">
			                <img width={24} height={24} className="oe_kanban_avatar" src="./images/image(1)" />
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

export default Task;
