import React, { Component } from 'react';
import '../App.css';


class Project extends Component {
	changeContent(value){
		this.props.contentReceive(value);
	}
	render() {
		return (
			<div className="o_kanban_view oe_background_grey o_kanban_dashboard o_project_kanban o_emphasize_colors o_kanban_ungrouped"
				onClick = {()=>this.changeContent(2)}
			>
				<div className="oe_kanban_color_0 oe_kanban_global_click o_has_icon o_kanban_record">
					<div className="o_project_kanban_main">
						<div className="o_kanban_card_content">
							<div className="o_kanban_primary_left">
								<div className="o_primary">
									<span>{this.props.project}</span>
									<span>
										Mã Trạm:
										<b><strong>{this.props.stationId}</strong></b>
									</span>
									<span>
										Địa chỉ: {this.props.address}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="o_project_kanban_boxes">
						<a className="o_project_kanban_box oe_kanban_action oe_kanban_action_a">
							<div>
								<span className="o_value">4</span>
								<span className="o_label"> Task</span>
							</div>
						</a>
						<a className="o_project_kanban_box oe_kanban_action oe_kanban_action_a">
							<div>
								<span className="o_label">Overview</span>
							</div>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;
