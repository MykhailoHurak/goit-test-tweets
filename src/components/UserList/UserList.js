import css from './UserList.module.css';
import User from "../User/User";

function UserList({ items }) {
    return (
        <ul className={css.UserList__Box}>
            {items.map(item => (
                <li className={css.UserList__Item} key={item.id}>
                    <User
                        avatarUrl={item.avatar}
                        avatarName={item.user}
                        tweets={item.tweets}
                        followers={item.followers}
                    />
                </li>
            ))}
        </ul>
    );
}

export default UserList;