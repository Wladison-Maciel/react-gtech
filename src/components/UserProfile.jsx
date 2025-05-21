import UserStatus from "./UserStatus";
import UserName from './UserName';

export default function UserProfile({ profile }) {
    return (
        <>
            <UserName name={profile.name}></UserName>
            <UserStatus status={profile.status}></UserStatus>
        </>
    );
}