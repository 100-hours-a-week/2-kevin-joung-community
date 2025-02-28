import Component from "../../../../core/component.js";

const loadCSS = () => {
    if (!document.querySelector("#comment-list-style")) {
        const link = document.createElement("link");
        link.id = "comment-list-style";
        link.rel = "stylesheet";
        link.href = "/pages/post/components/comment-list/comment-list.css";
        document.head.appendChild(link);
    }
};

export default class CommentList extends Component {
    setup() {
        this.state = {comments: this.props.comments};
        loadCSS()
    }

    template() {
        return `
           ${this.state.comments
            .map(comment => (`
                <div id="comment-item">
                    <div id="comment-top-section">
                        <div id="comment-user-date">   
                            <img id="comment-user-image" src="${comment.author.profileImageUrl}" alt="">
                            <p id="comment-user-name">${comment.author.name}</p>
                            <p id="comment-date">${comment.createdAt}</p>
                        </div>
                        ${comment.isMine ? `
                        <div id="comment-edit-delete-button">
                            <button class="comment-edit-button">수정</button>
                            <button class="comment-delete-button">삭제</button>
                        </div>
                        `: ""}
                    </div>
                    <p id="comment-comment">${comment.content}</p>
                </div>
            `))
            .join("")
        }
        `
    }
}
