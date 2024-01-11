import React from 'react';

const ConductivityResult = ({ result, path }) => {
    return (
        <div>
            <div>Result: {result}</div>
            <div>Path: {JSON.stringify(path)}</div>
        </div>
    );
};

export default ConductivityResult;
