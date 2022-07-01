const Answer = (props) => {

    return (
        <li className="answer list-item">
            <div className="answer-text">
                <div className="ugc-components ugc-line-clamp">
                    <div>
                        <span aria-hidden="true" className="v-fw-medium">A:</span>
                        <span className="sr-only"></span>
                        <span>{props.answers[0].answer}</span>
                    </div>
                </div>
            </div>
            <p className="author">
                Answered
                <time className="submission-date" title="Jan 19, 2021 9:14 AM"> 1 year ago </time>
                {props.users[2].username}
            </p>
            <img className="brand-logo" src="https://bestbuy.ugc.bazaarvoice.com/answers/3545w/8256/badge.jpg" alt="LEGO Customer Service response" />
        </li>
    );
}

export default Answer;