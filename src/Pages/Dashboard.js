import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import ExperimentCard from "../Components/ExperimentCard";

function Dashboard(props) {
	let navigate = useNavigate();

	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		if (showAlert) {
			setTimeout(() => {
				setShowAlert(false)
			}, 2000);
		}
	}, [showAlert])

	let userExperiments = [
		{title: "My Experiment 1", type: "Stimuli to Multiple Choice"},
		{title: "My Experiment 2", type: "Stimuli to Numerical"},
		{title: "My Experiment 3", type: "Stimuli to Alphabet"},
		{title: "My Experiment 4", type: "Stimuli to Alphabet"}
	]

	return (
		<div className="container">
			{/*Header*/}
			<div className="row justify-content-between mt-4">
				<div className="col-auto">
					<div className="dropdown dropend">
						<h1 className="page-title fw-bold fs-3 text-dark dropdown-toggle" data-bs-toggle="dropdown"
						    role="button">
							My Experiments
						</h1>
						<ul className="dropdown-menu dropdown-menu-dark">
							<li>
								<Link className="dropdown-item" to="/featured">Featured Experiments</Link>
							</li>
						</ul>
					</div>
					<p className="text-muted">View, modify and run all your experiments</p>
				</div>
				<div className="col-auto">
					<i className="bi bi-person-circle text-muted opacity-75 fs-3 btn btn-sm btn-link" role="button"
					   data-bs-toggle="dropdown"/>
					<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
						<li>
							<Link className="dropdown-item" to="/settings">Settings</Link>
							<Link className="dropdown-item" to="/auth">Sign Out</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* Filters */}
			<div className="row g-2">
				<div className="input-group mb-3 col">
						<span className="input-group-text bg-transparent border-end-0"><i
							className="bi bi-search opacity-75"/></span>
					<input type="text" className="form-control fs-6 bg-transparent border-start-0"
					       placeholder="Search"/>
				</div>
				<div className="dropdown col-auto">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
						<i className="bi bi-funnel-fill"></i> Sort
					</button>
					<div className="dropdown-menu dropdown-menu-dark dropdown-menu-end px-2">
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="s2MC" id="s2MC"/>
							<label className="form-check-label" htmlFor="s2MC">
								Stimuli to Multiple Choice
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="s2MC" id="s2N" checked/>
							<label className="form-check-label" htmlFor="s2N">
								Stimuli to Numerical
							</label>
						</div>
						<div className="form-check">
							<input className="form-check-input" type="checkbox" value="s2A" id="s2A" checked/>
							<label className="form-check-label" htmlFor="s2MC">
								Stimuli to Alphabet
							</label>
						</div>
					</div>
				</div>
			</div>


			{/* Cards */}
			<div className="experiment-cards">
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
					{
						userExperiments.map(experiment => (
							<ExperimentCard experiment={experiment} edit={true} alert={setShowAlert}/>
						))
					}
				</div>
			</div>
			<button className="btn btn-primary position-absolute bottom-0 end-0 mb-5 me-5 rounded-pill"
			        onClick={() => navigate('/experiment/new')}>
				<i className="bi bi-plus-circle"></i> Create Experiment
			</button>

			{
				showAlert &&
				<div className="alert alert-success position-absolute bottom-0 start-50 translate-middle" role="alert">
					Successfully copied experiment link!
				</div>
			}
		</div>
	);
}

export default Dashboard;
