import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import { useRecipient } from "../hooks/useRecipient";

const StyledAvatar = styled(Avatar)`
  margin: 5px 15px 5px 5px;
`
type Props = ReturnType<typeof useRecipient>;
const RecipientAvatar = ({ recipient, recipientEmail }: Props) => {
  return recipient?.photoUrl ? (
    <StyledAvatar src={recipient.photoUrl} />
  ) : (
    <StyledAvatar>{recipientEmail && recipientEmail[0].toUpperCase()}</StyledAvatar>
  );
};

export default RecipientAvatar;
