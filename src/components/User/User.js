import css from './User.module.css';

function User ({avatarUrl, avatarName, tweets, followers}) {
    return (
        <div className={css.User__Box}>
            <img src={avatarUrl} alt={avatarName} width="62" />
            <p className={css.User__Tweets}>{tweets} TWEETS</p>
            <p className={css.User__Followers}>{followers} FOLLOWERS</p>
            <button className={css.User__Button}>FOLLOW</button>
        </div>
    )
}

export default User;