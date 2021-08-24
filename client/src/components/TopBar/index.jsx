import './topbar.scss';
import { Chat, Notifications, Person, Search } from '@material-ui/icons';
import Avatar from '@material-ui/core/Avatar';

export default function TopBar() {
  return (
    <div className="topbarContainer">
      <div className="topbarleft">
        <div className="logo">CHAAT</div>
      </div>
      <div className="topbarcenter">
        <Search />
        <input placeholder="Поиск друзей и новостей" className="searchInput" />
      </div>
      <div className="topbarrigth">
        <div className="topbarlinks">
          <div className="topbarlink">Home page</div>
          <div className="topbarlink">Timeline</div>
        </div>
        <div className="topbaricons">
          <div className="iconitem">
            <Person />
            <div className="iconBadge">1</div>
          </div>
          <div className="iconitem">
            <Chat />
            <div className="iconBadge">4</div>
          </div>
          <div className="iconitem">
            <Notifications />
            <div className="iconBadge">3</div>
          </div>
        </div>
        <div className="avatar">
          <Avatar
            alt="Remy Sharp"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          />
        </div>
      </div>
    </div>
  );
}
