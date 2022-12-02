import { IItem } from './index';
import { useState } from 'react';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    const [name, setName] = useState('');
    const [id, setId] = useState(-1);

    if (props.sorting == 'ASC') {
        props.initialData.sort((a1, a2) => a1.id - a2.id);
    } else {
        props.initialData.sort((b1, b2) => b2.id - b1.id);
    }

    return (
        <div>
            {props.initialData.map((init) => {
                if (init.id != id) {
                    return (
                        <div
                            onClick={() => {
                                setId(init.id);
                            }}
                            key={init.id}
                        >
                            {init.name}
                        </div>
                    );
                } else {
                    return (
                        <input
                            defaultValue={init.name}
                            key={init.id}
                            onKeyDown={(e) => {
                                if (e.key == 'Enter') {
                                    init.name = name;
                                    setId(-1);
                                }
                                if (e.key == 'Escape') {
                                    setId(-1);
                                }
                            }}
                            onChange={(e) => {
                                setName(e.currentTarget.value);
                            }}
                        ></input>
                    );
                }
            })}
        </div>
    );
}
