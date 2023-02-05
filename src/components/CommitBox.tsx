import formatDate from "../services/formatDate";
import { CommitBoxStyles, CommitListStyles, CommitStyles, DateStyles, MessageStyles, TitleStyles } from "../styles/CommitBox";

const CommitBox = ({ commits }: { commits: Array<any> }) => (
  <CommitBoxStyles>
    <TitleStyles>Últimos Commits</TitleStyles>
    <CommitListStyles>
      { commits.map(({commit, date}, index) => index < 5 && (
        <CommitStyles>
          <MessageStyles>{commit.message}</MessageStyles>
          <DateStyles>{formatDate(commit.author.date)}</DateStyles>
        </CommitStyles>
      ))}
    </CommitListStyles>
  </CommitBoxStyles>
);

export default CommitBox;
