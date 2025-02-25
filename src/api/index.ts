import axios from 'axios'

export class DocumentAPI {
    static async getMarkdownByUrl(url: string) {
        return await axios.get(url)
    }
}

export class CommentAPI {
    static GithubIssueUrl: string = "https://api.github.com/repos/sanyuankexie/hellokexie/issues/6/comments"
}