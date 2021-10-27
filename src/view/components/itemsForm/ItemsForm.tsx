import * as React from "react";
import {Input} from "../Input";
import {ItemsFormRowKeys, ItemsFormState} from "../../../model/itemsForm/ItemsForm";
import {Button} from "../button/Button";

interface Props {
    state: ItemsFormState;
    onChange: (rowIndex: number, fieldName: ItemsFormRowKeys, value: string) => void;
    onDeleteRow: (rowIndex: number) => void;
}

export const ItemForm: React.FunctionComponent<Props> = (props) => {
    const canDeleteRows = props.state.rows.length > 1;

    return <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Width</th>
                    <th>Height</th>
                    <th>Depth</th>
                    <th>Weight</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {props.state.rows.map((row, index) => {
                    const onChangeForRow = (fieldName: ItemsFormRowKeys, value: string) => props.onChange(
                        index,
                        fieldName,
                        value
                    );

                    return (
                        <tr key={index}>
                            <td>
                                <Input
                                    type={"text"}
                                    value={row.id}
                                    required
                                    onChange={
                                        (e: React.ChangeEvent<HTMLInputElement>) =>
                                            onChangeForRow("id", e.target.value)
                                    }
                                />
                            </td>
                            <td>
                                <Input
                                    type={"number"}
                                    value={row.width}
                                    required
                                    onChange={
                                        (e: React.ChangeEvent<HTMLInputElement>) =>
                                            onChangeForRow("width", e.target.value)
                                    }
                                />
                            </td>
                            <td>
                                <Input
                                    type={"number"}
                                    value={row.height}
                                    required
                                    onChange={
                                        (e: React.ChangeEvent<HTMLInputElement>) =>
                                            onChangeForRow("height", e.target.value)
                                    }
                                />
                            </td>
                            <td>
                                <Input
                                    type={"number"}
                                    value={row.depth}
                                    required
                                    onChange={
                                        (e: React.ChangeEvent<HTMLInputElement>) =>
                                            onChangeForRow("depth", e.target.value)
                                    }
                                />
                            </td>
                            <td>
                                <Input
                                    type={"number"}
                                    value={row.weight}
                                    required
                                    onChange={
                                        (e: React.ChangeEvent<HTMLInputElement>) =>
                                            onChangeForRow("weight", e.target.value)
                                    }
                                />
                            </td>
                            <td>
                                <Input
                                    type={"number"}
                                    value={row.quantity}
                                    required
                                    onChange={
                                        (e: React.ChangeEvent<HTMLInputElement>) =>
                                            onChangeForRow("quantity", e.target.value)
                                    }
                                />
                            </td>

                            {canDeleteRows && (
                                <td>
                                    <Button onClick={() => props.onDeleteRow(index)}>
                                        DELETE
                                    </Button>
                                </td>
                            )}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>;
}
