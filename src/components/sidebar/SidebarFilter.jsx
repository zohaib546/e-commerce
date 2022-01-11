import { useState } from "react";
const SidebarFilter = (props) => {
	const [radioValue, setRadioValue] = useState("all");

	const handleChange = (event) => {
		props.onChange(event.target.value);
		setRadioValue(event.target.value);
	};

	return (
		<div className={`sidebar-card ${props.className}`}>
			<div className="px-5 py-3 bg-black">
				<h2 className="text-base font-bold text-white">{props.title}</h2>
			</div>
			<div className="px-5 py-3 bg-gray-100 shadow">
				<ul className="space-y-3">
					{props.list.map((li, index) => (
						<li key={li} className="flex items-center">
							<input
								type="radio"
								id={li + index}
								name={props.name}
								value={li}
								onChange={(event) => handleChange(event)}
								checked={li === radioValue}
								className="mb-1 mr-3 text-primary focus:ring focus:ring-primary focus:ring-opacity-50"
							/>
							<label htmlFor={li + index} className="text-gray-500 capitalize cursor-pointer">
								{li}
							</label>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default SidebarFilter;
