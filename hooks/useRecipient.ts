import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query, where } from 'firebase/firestore';
import { getRecipientEmail } from './../utils/getRecipientEmail';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../config/firebase';
import { Conversation, AppUser } from './../types/index';


export const useRecipient = (conversationUsers: Conversation['users']) => {
  const [loggedInUser,__loading,__error] = useAuthState(auth)
  
  // get recipient email
  const recipientEmail = getRecipientEmail(conversationUsers,loggedInUser)
  
  // get recipient avatar
  const queryGetRecipient = query(collection(db,'users'),where('email','==',recipientEmail))
  const [recipientsSnapshot,_loading,_error] = useCollection(queryGetRecipient);

  const recipient = recipientsSnapshot?.docs[0]?.data() as AppUser | undefined
  return {recipient,recipientEmail}
}  
