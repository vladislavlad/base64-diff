import React from 'react';
import ReactDiffViewer from 'react-diff-viewer';
import {Box, FormControlLabel, FormGroup, Switch} from "@material-ui/core";
import Input from "./Input";


export default function Diff({oldBranch, newBranch, projectId, oldValue, newValue, fileName}) {
    const [splitViewToggle, setSplitView] = React.useState(true);


    const handleChange = (event) => {
        setSplitView(event.target.checked);
    };

    return (
        <div>
            <Box>

                <Input {...{oldBranch, newBranch, projectId, fileName}} />

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch checked={splitViewToggle} onChange={handleChange} aria-label="split view switch"/>
                        }
                        label={splitViewToggle ? 'Split View' : 'Line View'}
                    />
                </FormGroup>

                {oldValue && newValue ?
                    <ReactDiffViewer
                        oldValue={oldValue}
                        newValue={newValue}
                        splitView={splitViewToggle}
                    />
                    : "Загрузка..."
                }
            </Box>
        </div>
    )
}
