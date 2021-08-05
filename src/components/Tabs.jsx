import { useState } from 'react';
import styles from "../css/index.module.css";

export const Tab = () => <></>;

export const Tabs = ({ children }) => {
	const [activePanelIndex, setActivePanelIndex] = useState(0);

	const handleTabClick = (index) => {
		setActivePanelIndex(index);
	}
	
	return (
		<div className="tabs">
			<div className="tab-list row">
				{children.map((child, index) => (
					<div
						key={`tab-${index}`}
						className={`tab ${index === activePanelIndex ? `col-4 ${styles.activeTab} ${styles.tab}` : `col-4 ${styles.tab}`}`}
						onClick ={() => handleTabClick(index)}>
							{child.props.title}
					</div>
				))}
			</div>
			<div className="tab-panel">
				<div className={styles.result}>
					<div className={`${styles.contentTab} ${styles.textTab}`}>
						{
							Array.isArray(children)
								? children[activePanelIndex].props.children
								: children.props.children
						}
					</div>
				</div>
			</div>
		</div>
	);
};

