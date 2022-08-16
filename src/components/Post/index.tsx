import './style.css';

// interface PostInfo {
//     text: string;
// }

type PostInfo = {
    text: string;
}

export function Post(props : PostInfo) {
    return (
        <div className='post'>
            <h2>Post</h2>
            <p>{props.text}</p>
        </div>
    )
}