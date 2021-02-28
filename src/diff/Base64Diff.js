import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Diff from "./Diff";
import GitlabApi from "../api/GitlabApi";

const xml2js = require('xml2js');


// A custom hook that builds on useLocation to parse the query string for you.
function useQuery() {
    return new URLSearchParams(useLocation().search);
}


function decodeBase64(xmlString) {
    xml2js.parseString(xmlString, (err, result) => {
        //TODO path to var
        result['note']['body'] = atob(result['note']['body']);
        const builder = new xml2js.Builder();
        xmlString = builder.buildObject(result);
    });
    return xmlString
}

export default function Base64Diff() {
    let query = useQuery();
    const oldBranch = query.get('old');
    const newBranch = query.get('new');
    const projectId = query.get('projectId');
    const fileName = query.get('file')

    const [error, setError] = useState(null);
    const [oldFile, setOldFile] = useState(null);
    const [newFile, setNewFile] = useState(null);

    useEffect(() => {
        GitlabApi.getRawFile(projectId, oldBranch, fileName)
            .then(
                (result) => setOldFile(decodeBase64(result)),
                (error) => setError(error)
            );

        GitlabApi.getRawFile(projectId, newBranch, fileName)
            .then(
                (result) => setNewFile(decodeBase64(result)),
                (error) => setError(error)
            );
    }, [oldBranch, newBranch, projectId, fileName])


    if (oldBranch && newBranch) {
        return (
            <div>
                <Diff oldBranch={oldBranch}
                      newBranch={newBranch}
                      projectId={projectId}
                      fileName={fileName}
                      oldValue={oldFile}
                      newValue={newFile}/>
            </div>
        );
    } else if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else {
        return <div>Загрузка...</div>;
    }
};


