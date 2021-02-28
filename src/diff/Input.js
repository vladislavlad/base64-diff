import {Button, Grid, makeStyles, TextField} from "@material-ui/core";
import React, {useState} from "react";
import {useHistory} from "react-router";


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),

        },
    },
}));


export default function Input({oldBranch, newBranch, projectId, fileName}) {
    const classes = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push('/?old=' + old_branch + '&new=' + new_branch
            + '&projectId=' + project_id + '&file=' + file_name);
    };

    const [old_branch, setOld] = useState(oldBranch);
    const [new_branch, setNew] = useState(newBranch);
    const [project_id, setProjectId] = useState(projectId);
    const [file_name, setFileName] = useState(fileName);

    return (
        <div className={classes.root}>

            <Grid container alignItems="center" spacing={2}>

                <Grid item xs={6} sm={1}>
                    <TextField id="old-branch" label="Old Branch" variant="standard"
                               value={old_branch} onChange={e => setOld(e.target.value)}/>
                </Grid>

                <Grid item xs={6} sm={1}>
                    <TextField id="new-branch" label="New Branch" variant="standard"
                               value={new_branch} onChange={e => setNew(e.target.value)}/>
                </Grid>

                <Grid item xs={6} sm={1}>
                    <TextField required id="project-id" label="ProjectId" variant="standard"
                               value={project_id} onChange={e => setProjectId(e.target.value)}/>
                </Grid>

                <Grid item xs={6} sm={1}>
                    <TextField required id="file-name" label="File Name" variant="standard"
                               value={file_name} onChange={e => setFileName(e.target.value)}/>
                </Grid>


                <Grid item xs={6} sm={1}>
                    <Button variant="contained" color="primary" onClick={handleClick}>
                        Diff
                    </Button>
                </Grid>

            </Grid>

        </div>
    )
}