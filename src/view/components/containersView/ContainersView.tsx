import * as React from "react";
import * as styles from "./ContainersView.module.scss";
import {ContainersViewData} from "../../../model/containersView/ContainersView";

interface Props {
    containers: ContainersViewData[];
}

export const ContainersView: React.FunctionComponent<Props> = (props) => {
    const renderRow = (label: string, value: string) => {
        return <div className={styles.lineRow}>
            <div className={styles.lineLabel}>{label}:</div>
            <div>{value}</div>
        </div>
    }

    return <div>
        {props.containers.map((singleContainer, i) => {
            return <div>
                <h3>Container #{i} (id: {singleContainer.container.id})</h3>
                <div className={styles.wrapper}>
                    <div className={styles.imageSection}>
                        <h4>Image</h4>
                        <img
                            alt={"Preview of filled container"}
                            src={singleContainer.container.filledImageUrl}
                        />
                    </div>
                    <div className={styles.dimensionsSection}>
                        <h4>Dimensions</h4>
                        {renderRow("Width", singleContainer.container.width.toString())}
                        {renderRow("Height", singleContainer.container.height.toString())}
                        {renderRow("Depth", singleContainer.container.depth.toString())}
                    </div>
                    <div className={styles.statsSection}>
                        <h4>Stats</h4>

                        {renderRow("Packaged Items", singleContainer.stats.packagedItems.toString())}
                        {renderRow("Space taken", Math.round(singleContainer.stats.spaceTakenPercentage).toString() + " %")}
                        {renderRow("Weight taken", Math.round(singleContainer.stats.weightTakenPercentage).toString() + " %")}
                    </div>
                </div>
            </div>
        })}
    </div>
}
