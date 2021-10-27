import { ContainersForm } from "../components/containersForm/ContainersForm"
import * as React from "react";
import * as styles from "./PackingScreen.module.scss";
import {useEffect, useRef, useState} from "react";
import {ContainersFormRowKeys, ContainersFormState} from "../../model/containersForm/ContainersForm";
import {Button} from "../components/button/Button";
import {ItemsFormRowKeys, ItemsFormState} from "../../model/itemsForm/ItemsForm";
import {itemsFormDefaultRowState, itemsFormDefaultState} from "../../model/itemsForm/defaultState";
import {containersFormDefaultState} from "../../model/containersForm/defaultState";
import {ContainersView} from "../components/containersView/ContainersView";
import {fetchPackingApi} from "../../model/packingApi/fetch";
import {convertToApiContainer} from "../../model/containersForm/convertToApiContainer";
import {ContainersViewData} from "../../model/containersView/ContainersView";
import {convertItemsFormStateToApiItems} from "../../model/itemsForm/convertToApiItem";
import {ItemForm} from "../components/itemsForm/ItemsForm";
import {convertResponsePayloadToViewData} from "../../model/containersView/convertResponseToContainerView";

export const PackingScreen = () => {
    const [containersFormState, setContainersFormState] = useState<ContainersFormState>(containersFormDefaultState);
    const [itemsFormState, setItemsFormState] = useState<ItemsFormState>(itemsFormDefaultState);
    const [itemsFormLastRowNumber, setItemsFormLastRowNumber] = useState<number>(1);
    const [containersResult, setContainersResult] = useState<ContainersViewData[] | undefined>(undefined);
    const [successfullyPackedItemsCount, setSuccessfullyPackedItemsCount] = useState<number | undefined>(undefined);
    const [allItemsCount, setAllItemsCount] = useState<number | undefined>(undefined);

    const formRef = useRef<HTMLFormElement | null>(null);

    useEffect(
        () => {
            const itemsPackedCount = containersResult
                ? containersResult.reduce((sum, c) => {
                    return sum + c.stats.packagedItems;
                }, 0)
                : undefined;

            const itemsAllCount = itemsFormState
                ? itemsFormState.rows.reduce((sum, itemRow) => {
                    return sum + parseInt(itemRow.quantity);
                }, 0)
                : undefined;

            setSuccessfullyPackedItemsCount(itemsPackedCount);
            setAllItemsCount(itemsAllCount);
        },
        [containersResult]
    );

    const onChangeContainersForm = (rowIndex: number, fieldName: ContainersFormRowKeys, value: string | number) => {
        setContainersFormState({
            ...containersFormState,
            rows: [
                ...containersFormState.rows.map((row, index) => {
                    if (index !== rowIndex) {
                        return row;
                    }

                    return {
                        ...row,
                        [fieldName]: value,
                    }
                })
            ]
        })
    };

    const onChangeItemsForm = (rowIndex: number, fieldName: ItemsFormRowKeys, value: string | number) => {
        setItemsFormState({
            ...itemsFormState,
            rows: [
                ...itemsFormState.rows.map((row, index) => {
                    if (index !== rowIndex) {
                        return row;
                    }

                    return {
                        ...row,
                        [fieldName]: value,
                    }
                })
            ]
        })
    }

    const onAddItemsRow = () => {
        setItemsFormState({
            ...itemsFormState,
            rows: [
                ...itemsFormState.rows,
                {
                    ...itemsFormDefaultRowState,
                    id: "Item" + (itemsFormLastRowNumber + 1),
                },
            ]
        });

        setItemsFormLastRowNumber((prevNumber) => prevNumber + 1);
    }

    const onDeleteItemsRow = (rowIndex: number) => {
        setItemsFormState({
            ...itemsFormState,
            rows: itemsFormState.rows.filter((row, i) => i !== rowIndex)
        });
    }

    const onSubmit = async () => {
        if (!formRef.current?.checkValidity()) {
            formRef.current?.reportValidity();
            return;
        }

        const response = await fetchPackingApi(
            convertToApiContainer(containersFormState),
            convertItemsFormStateToApiItems(itemsFormState),
        )

        setContainersResult(convertResponsePayloadToViewData(response))
    }

    return <div className={styles.screen}>
        <form ref={formRef}>
            <div className={styles.panel}>
                <h2>Containers</h2>
                <ContainersForm
                    state={containersFormState}
                    onChange={onChangeContainersForm}
                />
            </div>

            <div className={styles.panel}>
                <h2>Items</h2>
                <ItemForm
                    state={itemsFormState}
                    onChange={onChangeItemsForm}
                    onDeleteRow={onDeleteItemsRow}
                />
                <Button onClick={onAddItemsRow}>Add Item</Button>
                <div className={styles.successButtonWrapper}>
                    <Button onClick={onSubmit}>Calculate</Button>
                </div>

            </div>
        </form>

        {containersResult !== undefined && (
            <div className={`${styles.panel} ${styles.packingResultPanel}`}>
                <h2>Packing Result</h2>
                {successfullyPackedItemsCount && allItemsCount && (
                    <div className={styles.packingResultMessage}>
                        Packaged: {successfullyPackedItemsCount} / {allItemsCount}
                    </div>
                )}

                <ContainersView
                    containers={containersResult}
                />
            </div>
        )}
    </div>
}
