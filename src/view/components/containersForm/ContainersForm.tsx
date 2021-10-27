import * as React from "react";
import {Input} from "../Input";
import {ContainersFormRowKeys, ContainersFormState} from "../../../model/containersForm/ContainersForm";

interface Props {
    state: ContainersFormState;
    onChange: (rowIndex: number, fieldName: ContainersFormRowKeys, value: string | number) => void;
}

export const ContainersForm: React.FunctionComponent<Props> = (props) => {
    return <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Width</th>
                    <th>Height</th>
                    <th>Depth</th>
                    <th>Max weight</th>
                </tr>
            </thead>
            <tbody>
                {props.state.rows.map((row, index) => {
                    const onChangeForRow = (fieldName: ContainersFormRowKeys, value: string | number) => props.onChange(
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
                                    value={row.maxWeight}
                                    required
                                    onChange={
                                        (e: React.ChangeEvent<HTMLInputElement>) =>
                                            onChangeForRow("maxWeight", e.target.value)
                                    }
                                />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>;
}
