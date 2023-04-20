import React, { useState, useEffect } from 'react';

interface Element {
    id: number;
    name: string;
}

function ElementList() {
    const [elements, setElements] = useState<Element[]>([]);

    useEffect(() => {
        const storedElements = localStorage.getItem('elements');
        if (storedElements) {
            setElements(JSON.parse(storedElements));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('elements', JSON.stringify(elements));
    }, [elements]);

    function handleAddElement() {
        const newElement: Element = {
            id: elements.length + 1,
            name: `Element ${elements.length + 1}`,
        };
        setElements([...elements, newElement]);
    }

    return (
        <div>
            <button onClick={handleAddElement}>Add Element</button>
            {elements.map((element) => (
                <div key={element.id}>{element.name}</div>
            ))}
        </div>
    );
}
export default ElementList