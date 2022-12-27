import { useRouter } from "next/router";
import styled from "styled-components";
import { useRecipient } from "../hooks/useRecipient";
import { Conversation } from "../types";
import RecipientAvatar from "./RecipientAvatar";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;

  word-break: break-all;

  :hover {
    background-color: #e9eaeb;
  }
`;

const conversationSelect = ({
  id,
  conversationUsers,
}: {
  id: string;
  conversationUsers: Conversation["users"];
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {recipient, recipientEmail } = useRecipient(conversationUsers);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const onSelectConversation =() =>{
    router.push(`/conversations/${id}`)
  }
  return (
    <StyledContainer onClick={onSelectConversation}>
      <RecipientAvatar recipient={recipient} recipientEmail={recipientEmail} />
      <span>{recipientEmail}</span>
    </StyledContainer>
  );
};

export default conversationSelect;
