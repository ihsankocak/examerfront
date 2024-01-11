import React from 'react'
import { Message } from 'semantic-ui-react'
export interface Props{
    title:string,
    body:string,
    visible:boolean,
    level:string
}
const WarningMessage = ({visible,title,body,level}:Props) => (
  <Message warning visible={visible} >
    <Message.Header>{title}</Message.Header> 
    <p>{body}</p>
  </Message>
);

export default WarningMessage;