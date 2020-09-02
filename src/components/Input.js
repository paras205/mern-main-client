import React from 'react';

const Input = ({ label }) => {
	return (
		<div className="form-group">
			{label && <label>{label}</label>}
			<input type="text" className="form-control" placeholder={label} />
		</div>
	);
};

export default Input;
