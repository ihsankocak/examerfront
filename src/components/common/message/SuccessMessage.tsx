import React from 'react'
import { Message } from 'semantic-ui-react'
export interface Props{
    title:string,
    body:string,
    visible:boolean
}
const SuccessMessage = ({visible,title,body}:Props) => (
  <Message success visible={visible} >
    <Message.Header>{title}</Message.Header> 
    <p>{body}</p>
  </Message>
);

export default SuccessMessage;