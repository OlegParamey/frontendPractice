const myObj = {
  nameis : 'Oleg',
  commentsQty : 21,
  hasSignedAgreement : false
}

const UserInfo = ({nameis, commentsQty, hasSignedAgreement}) =>{
  if (!hasSignedAgreement){
    return `User ${nameis} has no comments.`;
  }
  return `User ${nameis} has ${commentsQty} comments.`
};
console.log(UserInfo(myObj));