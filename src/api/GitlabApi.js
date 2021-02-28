

class GitlabApi {
    api = 'https://gitlab.com/api/v4/'

/*
    async loadFiles(projectId, oldBranchName, newBranchName, fileName) {

        const oldFile = await this.getRawFile(projectId, oldBranchName, fileName)

        const newFile = await this.getRawFile(projectId, newBranchName, fileName)
    }
*/

    async getRawFile(projectId, branchName, fileName) {
        const url = this.api + 'projects/' + projectId + '/repository/files/' + fileName + '/raw'
            + '?ref=' + branchName

        return await fetch(url).then(res => res.text())
    }
}

export default new GitlabApi()
